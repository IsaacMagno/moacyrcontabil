import { NextResponse } from "next/server";
import { getAllBoletins } from "@/lib/boletins/queries";

export const runtime = "nodejs";

export async function GET() {
  try {
    const boletins = await getAllBoletins();
    return NextResponse.json({ boletins });
  } catch (error) {
    return NextResponse.json(
      { error: "Não foi possível carregar os boletins." },
      { status: error?.message === "Não autenticado." ? 401 : 500 }
    );
  }
}
