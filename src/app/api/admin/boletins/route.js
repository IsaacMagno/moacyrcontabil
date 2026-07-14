import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { createBoletim } from "@/lib/boletins/queries";
import { validateBoletimPayload } from "@/helpers/boletins";

export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title")?.toString() || "";
    const published_at = formData.get("published_at")?.toString() || "";
    const file = formData.get("file");

    const validation = validateBoletimPayload({
      title,
      published_at,
      file: file instanceof File ? file : null,
    });

    if (!validation.valid) {
      return NextResponse.json({ error: validation.errors[0] }, { status: 400 });
    }

    const boletim = await createBoletim({
      title,
      published_at,
      file,
    });

    revalidatePath("/inicio");

    return NextResponse.json({ boletim }, { status: 201 });
  } catch (error) {
    const message =
      error?.message === "Não autenticado."
        ? "Sessão expirada. Faça login novamente."
        : "Não foi possível publicar o boletim.";
    const status = error?.message === "Não autenticado." ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
