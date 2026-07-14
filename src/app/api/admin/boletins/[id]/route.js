import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { deleteBoletim } from "@/lib/boletins/queries";

export const runtime = "nodejs";

export async function DELETE(_req, { params }) {
  try {
    const { id } = params;
    if (!id) {
      return NextResponse.json({ error: "ID inválido." }, { status: 400 });
    }

    await deleteBoletim(id);
    revalidatePath("/inicio");
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    const message =
      error?.message === "Não autenticado."
        ? "Sessão expirada. Faça login novamente."
        : "Não foi possível excluir o boletim.";
    const status = error?.message === "Não autenticado." ? 401 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
