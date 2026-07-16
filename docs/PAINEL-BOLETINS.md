# Painel de Boletins — Moacyr Contábil

## O que é

Área na **home do site** com os últimos boletins informativos. Cada item mostra a **data**, o **título** e um link para **abrir o PDF**.

## Acesso ao painel

- No site, clique **5 vezes rápido** no **logo** (hero da home ou rodapé) → abre a tela de login.
- Ou acesse diretamente: `/admin/login`
- Use o **e-mail e senha** criados no Supabase Auth (fornecidos pelo desenvolvedor).

## Publicar um boletim

1. Entre no painel (5 cliques no logo ou `/admin/login`) com e-mail e senha.
2. Clique em **Novo boletim**.
3. Preencha o **título** e a **data de publicação**.
4. Selecione o arquivo **PDF** (máximo 10MB).
5. Clique em **Publicar**.

O boletim aparece automaticamente na home do site.

## Excluir um boletim

1. Na lista de boletins do painel, clique em **Excluir**.
2. Confirme a exclusão.

O boletim some da home e o PDF é removido do armazenamento.

## O que o visitante vê

Na página inicial (`/inicio`), seção **Boletins** com lista no formato:

`DD/MM/AAAA — Título do boletim`

Ao clicar, o PDF abre em nova aba.

## Limites

- Apenas arquivos **PDF**
- Tamanho máximo: **10 MB** por arquivo

## Suporte

Em caso de dúvida, contate o desenvolvedor (Isaac).
