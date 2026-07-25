import { createClient } from "@/lib/supabase/server";
import { mapBoletimRow, generatePdfSlug } from "@/helpers/boletins";

const BUCKET = "boletins";

export async function getPublishedBoletins(limit) {
  const supabase = createClient();
  let query = supabase
    .from("boletins")
    .select("id, title, published_at, pdf_path, pdf_url, is_published")
    .eq("is_published", true)
    .order("published_at", { ascending: false });

  if (typeof limit === "number") {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) throw error;
  return (data ?? []).map(mapBoletimRow);
}

export async function countPublishedBoletins() {
  const supabase = createClient();
  const { count, error } = await supabase
    .from("boletins")
    .select("id", { count: "exact", head: true })
    .eq("is_published", true);

  if (error) throw error;
  return count ?? 0;
}

export async function getAllBoletins() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("boletins")
    .select("id, title, published_at, pdf_path, pdf_url, is_published, created_at")
    .order("published_at", { ascending: false });

  if (error) throw error;
  return (data ?? []).map(mapBoletimRow);
}

export async function createBoletim({ title, published_at, file }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado.");
  }

  const pdfPath = generatePdfSlug(title);

  const { error: uploadError } = await supabase.storage
    .from(BUCKET)
    .upload(pdfPath, file, {
      contentType: "application/pdf",
      upsert: false,
    });

  if (uploadError) throw uploadError;

  const { data: publicData } = supabase.storage.from(BUCKET).getPublicUrl(pdfPath);

  const { data, error } = await supabase
    .from("boletins")
    .insert({
      title: title.trim(),
      published_at,
      pdf_path: pdfPath,
      pdf_url: publicData.publicUrl,
      is_published: true,
    })
    .select("id, title, published_at, pdf_path, pdf_url, is_published")
    .single();

  if (error) {
    await supabase.storage.from(BUCKET).remove([pdfPath]);
    throw error;
  }

  return mapBoletimRow(data);
}

export async function deleteBoletim(id) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    throw new Error("Não autenticado.");
  }

  const { data: row, error: fetchError } = await supabase
    .from("boletins")
    .select("pdf_path")
    .eq("id", id)
    .single();

  if (fetchError) throw fetchError;

  const { error: deleteError } = await supabase.from("boletins").delete().eq("id", id);
  if (deleteError) throw deleteError;

  if (row?.pdf_path) {
    await supabase.storage.from(BUCKET).remove([row.pdf_path]);
  }

  return true;
}
