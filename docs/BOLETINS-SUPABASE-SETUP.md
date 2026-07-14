# Supabase — gasparinicontabilidade

Projeto: **gasparinicontabilidade**  
URL: `https://zdikqahgotqixcbxueuu.supabase.co`  
Ref: `zdikqahgotqixcbxueuu`

## Variáveis no `.env` local e na Vercel

```
NEXT_PUBLIC_SUPABASE_URL=https://zdikqahgotqixcbxueuu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<anon key do dashboard>
```

Obtenha a anon key em: Dashboard → Project Settings → API.

## Criar usuário admin (Moacyr)

1. Abra o [Supabase Dashboard](https://supabase.com/dashboard/project/zdikqahgotqixcbxueuu)
2. **Authentication** → **Users** → **Add user**
3. Informe e-mail e senha do Moacyr
4. Marque **Auto Confirm User**
5. Envie as credenciais ao cliente por canal seguro

## Schema aplicado

Migration `001_boletins`:

- Tabela `public.boletins`
- Bucket Storage `boletins` (PDFs públicos para leitura)
- RLS: leitura pública dos publicados; CRUD completo para usuários autenticados

## MCP do projeto

Configurado em `.cursor/mcp.json` (somente neste workspace).
