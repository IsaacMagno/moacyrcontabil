/**
 * Formata data ISO (YYYY-MM-DD) para exibição pt-BR.
 * @param {string} date - Data em formato ISO ou parseável por Date
 * @returns {string}
 */
export function formatBoletimDate(date) {
  if (!date) return "";
  const parsed = new Date(`${date}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return "";
  return parsed.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

/**
 * @param {object} row
 * @returns {object}
 */
export function mapBoletimRow(row) {
  return {
    id: row.id,
    title: row.title,
    published_at: row.published_at,
    pdf_url: row.pdf_url,
    pdf_path: row.pdf_path,
    is_published: row.is_published ?? true,
  };
}

export function generatePdfSlug(title) {
  const base = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  const stamp = Date.now();
  return `${stamp}-${base || "boletim"}.pdf`;
}

const MAX_PDF_BYTES = 10 * 1024 * 1024;

/**
 * @param {{ title?: string, published_at?: string, file?: File | null }} payload
 * @returns {{ valid: boolean, errors: string[] }}
 */
export function validateBoletimPayload({ title, published_at, file }) {
  const errors = [];

  if (!title?.trim()) {
    errors.push("Informe o título do boletim.");
  }
  if (!published_at) {
    errors.push("Informe a data de publicação.");
  }
  if (!file) {
    errors.push("Selecione um arquivo PDF.");
  } else {
    if (file.type && file.type !== "application/pdf") {
      errors.push("O arquivo deve ser um PDF.");
    }
    if (!file.name?.toLowerCase().endsWith(".pdf")) {
      errors.push("O arquivo deve ter extensão .pdf.");
    }
    if (file.size > MAX_PDF_BYTES) {
      errors.push("O PDF deve ter no máximo 10MB.");
    }
  }

  return { valid: errors.length === 0, errors };
}

export { MAX_PDF_BYTES };
