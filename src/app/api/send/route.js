import { EmailTemplate } from "@/components/emailTemplate";
import { Resend } from "resend";
import formidable from "formidable";
import fs from "fs";

const resend = new Resend("re_74nAsEND_AY7rdDwaeUa4eWUDKchzjVqz");

export async function POST(req, res) {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Erro ao processar o formulário" });
    }

    const {
      email,
      name,
      phone,
      message,
      agree,
      city,
      maritalStatus,
      age,
      numberChildren,
      technicalFormation,
      higherEducation,
      practicesComment,
      role,
      about,
    } = fields;

    const { emailType } = fields;

    try {
      // Ler o arquivo PDF
      const pdfPath = files.file.path;
      const pdfContent = fs.readFileSync(pdfPath);

      // Criar um objeto de opções para o e-mail
      const emailOptions = {
        from: "Acme <onboarding@resend.dev>",
        to: "comercial01@moacyrcontabil.com.br",
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
        attachments: [
          {
            filename: files.file.name,
            content: pdfContent,
          },
        ],
      };

      // Enviar o e-mail
      const data = await resend.emails.send(emailOptions);

      return res.json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao enviar o e-mail" });
    }
  });
}
