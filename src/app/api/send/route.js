import { EmailTemplate } from "@/components/emailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

export async function POST(req) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    return NextResponse.json(
      { error: "RESEND_API_KEY não configurada." },
      { status: 500 }
    );
  }

  const resend = new Resend(resendKey);

  try {
    const data = await req.formData();

    const email = data.get("email")?.toString() || "";
    const name = data.get("name")?.toString() || "";
    const phone = data.get("phone")?.toString() || "";
    const message = data.get("message")?.toString() || "";
    const agree = data.get("agree")?.toString() === "true";
    const city = data.get("city")?.toString() || "";
    const maritalStatus = data.get("maritalStatus")?.toString() || "";
    const age = data.get("age")?.toString() || "";
    const numberChildren = data.get("numberChildren")?.toString() || "";
    const technicalFormation = data.get("technicalFormation")?.toString() || "";
    const higherEducation = data.get("higherEducation")?.toString() || "";
    const practicesComment = data.get("practicesComment")?.toString() || "";
    const role = data.get("role")?.toString() || "";
    const about = data.get("about")?.toString() || "";
    const emailType = data.get("emailType")?.toString() || "Contact";
    const file = data.get("file");

    if (!email || !name || !phone) {
      return NextResponse.json(
        { error: "Campos obrigatórios ausentes." },
        { status: 400 }
      );
    }

    if (emailType === "Resume") {
      if (!(file instanceof File) || file.size === 0) {
        return NextResponse.json(
          { error: "Currículo em PDF é obrigatório." },
          { status: 400 }
        );
      }
    }

    const fromEmail =
      process.env.RESEND_FROM_EMAIL?.trim() ||
      "Gasparini Contabilidade <onboarding@resend.dev>";
    const toEmail =
      process.env.RESEND_TO_EMAIL?.trim() ||
      "comercial01@moacyrcontabil.com.br";

    const emailOptions = {
      from: fromEmail,
      to: toEmail,
      subject:
        emailType === "Contact"
          ? `Solicitação de contato: ${name}`
          : `Curriculo: ${name}`,
      react: EmailTemplate({
        email,
        name,
        phone,
        message,
        agree,
        emailType,
        city,
        maritalStatus,
        age,
        numberChildren,
        technicalFormation,
        higherEducation,
        practicesComment,
        role,
        about,
      }),
    };

    if (emailType === "Contact" && email) {
      emailOptions.reply_to = email;
    }

    if (emailType === "Resume" && file instanceof File) {
      const attachmentBuffer = Buffer.from(await file.arrayBuffer());
      emailOptions.attachments = [
        {
          filename: file.name || "curriculo.pdf",
          content: attachmentBuffer,
        },
      ];
    }

    const { data: sentData, error: sendError } =
      await resend.emails.send(emailOptions);

    if (sendError) {
      console.error(sendError);
      return NextResponse.json(
        { error: sendError.message || "Erro ao enviar e-mail." },
        { status: 502 }
      );
    }

    return NextResponse.json(sentData ?? { ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erro ao enviar o e-mail" }, { status: 500 });
  }
}
