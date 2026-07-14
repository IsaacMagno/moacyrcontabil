-- Tabela de boletins
CREATE TABLE IF NOT EXISTS public.boletins (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  published_at date NOT NULL,
  pdf_path text NOT NULL,
  pdf_url text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  is_published boolean NOT NULL DEFAULT true
);

CREATE INDEX IF NOT EXISTS boletins_published_at_idx ON public.boletins (published_at DESC);

ALTER TABLE public.boletins ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public read published boletins" ON public.boletins;
CREATE POLICY "Public read published boletins"
ON public.boletins FOR SELECT
TO anon
USING (is_published = true);

DROP POLICY IF EXISTS "Authenticated read all boletins" ON public.boletins;
CREATE POLICY "Authenticated read all boletins"
ON public.boletins FOR SELECT
TO authenticated
USING (true);

DROP POLICY IF EXISTS "Authenticated insert boletins" ON public.boletins;
CREATE POLICY "Authenticated insert boletins"
ON public.boletins FOR INSERT
TO authenticated
WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated update boletins" ON public.boletins;
CREATE POLICY "Authenticated update boletins"
ON public.boletins FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

DROP POLICY IF EXISTS "Authenticated delete boletins" ON public.boletins;
CREATE POLICY "Authenticated delete boletins"
ON public.boletins FOR DELETE
TO authenticated
USING (true);

GRANT SELECT ON public.boletins TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON public.boletins TO authenticated;

INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('boletins', 'boletins', true, 10485760, ARRAY['application/pdf'])
ON CONFLICT (id) DO UPDATE SET
  public = EXCLUDED.public,
  file_size_limit = EXCLUDED.file_size_limit,
  allowed_mime_types = EXCLUDED.allowed_mime_types;

DROP POLICY IF EXISTS "Public read boletins PDFs" ON storage.objects;
CREATE POLICY "Public read boletins PDFs"
ON storage.objects FOR SELECT
TO public
USING (bucket_id = 'boletins');

DROP POLICY IF EXISTS "Authenticated upload boletins PDFs" ON storage.objects;
CREATE POLICY "Authenticated upload boletins PDFs"
ON storage.objects FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'boletins');

DROP POLICY IF EXISTS "Authenticated update boletins PDFs" ON storage.objects;
CREATE POLICY "Authenticated update boletins PDFs"
ON storage.objects FOR UPDATE
TO authenticated
USING (bucket_id = 'boletins')
WITH CHECK (bucket_id = 'boletins');

DROP POLICY IF EXISTS "Authenticated delete boletins PDFs" ON storage.objects;
CREATE POLICY "Authenticated delete boletins PDFs"
ON storage.objects FOR DELETE
TO authenticated
USING (bucket_id = 'boletins');
