# PLANEJAMENTO.md — Site Institucional LEVI/UFMA
# Contexto do Projeto para Claude Code

## O que é este projeto

Site institucional para o **LEVI (Laboratório de Estudos em Física)** do
Departamento de Física / CCET da Universidade Federal do Maranhão (UFMA).

O objetivo de longo prazo é um **template reutilizável** para 4+ grupos de
pesquisa da UFMA, onde cada novo site é criado duplicando o repositório e
editando apenas `lib/config.ts` para trocar identidade visual e dados do grupo.

O desenvolvedor humano deste projeto **está aprendendo desenvolvimento web**
durante a construção. Toda documentação e comentários devem ser claros o
suficiente para que ele entenda e modifique o código sem depender de IA.

---

## Stack Técnica

```
Framework        → Next.js 16.2.7 (App Router, TypeScript)
Estilo           → Tailwind CSS v4 (CSS-first, sem tailwind.config.ts)
CMS              → Keystatic v5 (migração em andamento — ver seção de bloqueios)
Hospedagem       → Cloudflare Pages (gratuito, builds ilimitados)
Repositório      → GitHub (organização researchgroups-ufma)
Conteúdo         → Markdown com frontmatter YAML em content/
Parse            → gray-matter via lib/mdx.ts
Animações        → Framer Motion + Motion Primitives (planejado — não instalado)
```

### URLs de produção
```
Site:       https://levi-ufma.pages.dev
Repositório: https://github.com/researchgroups-ufma/levi
```

### Variáveis de ambiente (.env.local — nunca commitar)
```
KEYSTATIC_GITHUB_CLIENT_ID=...
KEYSTATIC_GITHUB_CLIENT_SECRET=...
KEYSTATIC_SECRET=...
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=...  ← ainda não configurado
```

---

## Estrutura de Pastas

```
/
├── app/                          # Páginas Next.js (App Router)
│   ├── layout.tsx                # Layout raiz — Header, Footer, ThemeProvider
│   ├── page.tsx                  # Homepage com Hero e cards de navegação
│   ├── about/page.tsx            # Apresentação institucional
│   ├── contact/page.tsx          # Contato
│   ├── members/page.tsx          # Membros — agrupados por função
│   ├── news/page.tsx             # Notícias
│   ├── publications/page.tsx     # Publicações com filtros
│   ├── research/page.tsx         # Linhas de pesquisa
│   ├── keystatic/[...params]/
│   │   └── page.tsx              # Painel do Keystatic CMS (/keystatic)
│   └── api/keystatic/[...params]/
│       └── route.ts              # API routes do Keystatic
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Navbar fixa com blur — dark navy
│   │   ├── Footer.tsx            # Rodapé escuro com links e contato
│   │   └── ThemeProvider.tsx     # Injeta CSS variables do config.ts
│   └── ui/
│       ├── GroupLabel.tsx        # Rótulo de subgrupo (ex: "Doutorandos")
│       ├── MemberCards.tsx       # Grid de cards de membros com hover
│       └── PageCard.tsx          # Card de navegação da homepage
│
├── content/                      # Conteúdo gerado pelo CMS
│   ├── about/index.md            # Texto institucional — usado no Hero
│   ├── members/                  # Um .md por membro
│   ├── news/                     # Um .md por notícia
│   ├── publications/             # Um .md por publicação
│   └── research/                 # Um .md por linha de pesquisa
│
├── lib/
│   ├── config.ts                 # ← FONTE DE VERDADE — identidade visual e dados do grupo
│   └── mdx.ts                    # Leitura de arquivos Markdown (getCollection, getSingleFile, formatDate)
│
├── public/
│   ├── admin/                    # Decap CMS (legado — sendo substituído pelo Keystatic)
│   │   ├── index.html
│   │   └── config.yml
│   └── uploads/                  # Imagens enviadas pelo CMS
│
├── keystatic.config.tsx          # Configuração do Keystatic CMS
├── next.config.ts                # Configuração do Next.js
├── app/globals.css               # Tokens de design, reset, classes utilitárias
└── .env.local                    # Credenciais — nunca commitar
```

---

## Regras Fundamentais do Projeto

### 1. lib/config.ts é a única fonte de verdade visual

Todos os dados do grupo e tokens de design vivem em `lib/config.ts`.
Para criar um site para um novo grupo, **apenas este arquivo precisa ser editado**.

```typescript
// Correto — ler do config
import { siteConfig } from '@/lib/config';
<span>{siteConfig.acronym}</span>

// Errado — nunca hardcodar dados do grupo
<span>LEVI</span>
```

### 2. Cores e espaçamentos via CSS classes, não Tailwind arbitrário

O Tailwind v4 é CSS-first — não gera classes de valor arbitrário como `max-w-[900px]`.
Use as classes CSS definidas em `globals.css`:

```tsx
// Correto — classes definidas em globals.css
<div className="container-site">     // max-width 860px, padding responsivo
<section className="section-padding"> // padding-block 2rem
<h2 className="section-title">       // título com sublinhado azul

// Errado — Tailwind v4 não processa isso
<div className="max-w-[860px]">      // não funciona
<section className="py-24">          // não funciona
```

### 3. Separar Server Components de Client Components

Páginas que leem arquivos (`fs`) são Server Components — sem `'use client'`.
Componentes com eventos (`onClick`, `onMouseEnter`) são Client Components — com `'use client'`.

```tsx
// app/members/page.tsx — Server Component (lê arquivos)
import { getCollection } from '@/lib/mdx';
// SEM 'use client' no topo

// components/ui/MemberCards.tsx — Client Component (tem hover)
'use client';
// COM 'use client' no topo
```

### 4. Datas do CMS sempre via formatDate()

O Decap/Keystatic salva datas como objetos Date — renderizar diretamente quebra o React.
Sempre usar a função utilitária:

```tsx
// Correto
import { formatDate } from '@/lib/mdx';
<span>{formatDate(item.date)}</span>

// Errado — quebra o build
<span>{item.date}</span>
```

### 5. Campos opcionais sempre verificados antes de renderizar

```tsx
// Correto
{member.lattes && <a href={member.lattes}>Lattes</a>}

// Errado — quebra se campo for undefined
<a href={member.lattes}>Lattes</a>
```

---

## Padrão de Documentação — OBRIGATÓRIO

Todo arquivo deve ter cabeçalho comentado explicando propósito.
Valores editáveis devem ter comentário explicando o que fazem e onde impactam.
O desenvolvedor humano deste projeto está aprendendo — a documentação precisa
ser clara o suficiente para modificações sem depender de IA.

### Padrão de comentário em CSS (globals.css)
```css
/* ─── Nome da seção ──────────────────────────────────────────── */
/* Descrição do que essa seção controla                          */
/* Para alterar X, edite o valor Y                               */
.container-site {
  max-width: 860px;    /* largura máxima do conteúdo — aumente para layouts mais largos */
  padding-inline: 2rem; /* margem lateral mínima em mobile */
}
```

### Padrão de comentário em TypeScript/TSX
```tsx
/**
 * NomeDoComponente — descrição em uma linha
 *
 * O que faz, quando é usado, de onde vêm os dados.
 * Para adicionar campos novos, edite public/admin/config.yml E este arquivo.
 *
 * Props:
 *   prop1: descrição
 *   prop2: descrição
 */
```

### Comentários inline para valores editáveis
```tsx
// Altere aqui para mudar X — impacta Y e Z
const MAX_WIDTH = '860px';
```

---

## Estado Atual de Implementação

### Concluído e funcionando ✅
```
✅ Next.js 16 + TypeScript inicializado
✅ Tailwind CSS v4 configurado (CSS-first via @theme em globals.css)
✅ lib/config.ts — fonte de verdade para identidade visual e dados do grupo
✅ ThemeProvider — injeta CSS variables do config.ts em toda a aplicação
✅ Header — navbar fixa dark navy com blur, links do config.ts
✅ Footer — rodapé escuro com dados do config.ts
✅ Homepage — Hero com fundo estrelado CSS + cards de navegação
✅ Hero — suporta imagem/GIF via CMS (campo hero_image em content/about/index.md)
✅ app/about/page.tsx — página de apresentação
✅ app/research/page.tsx — linhas de pesquisa dinâmicas (lê content/research/)
✅ app/members/page.tsx — membros agrupados por função (Coordenador, Doutorando etc)
✅ app/publications/page.tsx — publicações com links DOI e arXiv
✅ app/news/page.tsx — notícias com formatação de data correta
✅ app/contact/page.tsx — página de contato
✅ lib/mdx.ts — getCollection(), getSingleFile(), formatDate()
✅ components/ui/MemberCards.tsx — Client Component com hover
✅ components/ui/GroupLabel.tsx — rótulo de subgrupo
✅ components/ui/PageCard.tsx — card de navegação da homepage
✅ content/about/index.md — arquivo de apresentação com campo hero_image
✅ Repositório no GitHub (researchgroups-ufma/levi — público)
✅ Cloudflare Pages — deploy automático por commit na branch main
✅ gray-matter instalado e funcionando para parse de Markdown
✅ Decap CMS funcional como CMS legado (público/admin/)
```

### Bloqueado — requer ação imediata ⚠️
```
⚠️ KEYSTATIC CMS — migração incompleta

   Contexto: estamos migrando do Decap CMS para o Keystatic v5.
   O Keystatic v5 usa GitHub App (não OAuth App) para autenticação.
   A variável de ambiente necessária é NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG.

   O que já foi feito:
   - keystatic.config.tsx criado com todas as collections (members, research,
     publications, news)
   - app/keystatic/[...params]/page.tsx criado
   - app/api/keystatic/[...params]/route.ts criado
   - @keystatic/core e @keystatic/next v5 instalados
   - .env.local criado com KEYSTATIC_GITHUB_CLIENT_ID e CLIENT_SECRET
     (de um OAuth App criado antes — este OAuth App NÃO é mais usado no v5)

   O que falta:
   1. Criar GitHub App em github.com/settings/apps/new com:
      - Contents: Read and write
      - Pull requests: Read and write
      - Where can be installed: Only on this account
   2. Anotar o App slug (aparece na URL após criação)
   3. Adicionar ao .env.local:
      NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=nome-do-app-slug
   4. Adicionar a mesma variável no Cloudflare Pages (Settings → Environment Variables)
   5. Testar /keystatic localmente
   6. Após funcionar: remover arquivos do Decap CMS (public/admin/)

   Arquivos relevantes:
   - keystatic.config.tsx
   - app/keystatic/[...params]/page.tsx
   - app/api/keystatic/[...params]/route.ts
   - .env.local
```

### Pendente — próximas sessões ⏳
```
⏳ Reescrever app/publications/page.tsx no novo visual (HTML de referência já analisado)
   - Filtros por área de pesquisa (gr, cosmo, qgrav, gw, alt)
   - Agrupamento por ano
   - Seção de teses e dissertações orientadas
   - Links DOI e arXiv com estilo pill
   - Tags de destaque (featured)

⏳ Reescrever app/research/page.tsx no novo visual

⏳ Reescrever app/news/page.tsx no novo visual

⏳ Reescrever app/about/page.tsx no novo visual

⏳ Reescrever app/contact/page.tsx no novo visual

⏳ Conectar homepage ao conteúdo dinâmico do CMS
   - Seção de pesquisa: ler de content/research/
   - Seção de publicações recentes: ler de content/publications/ (3 mais recentes)

⏳ Adicionar campo tags/topics nas publicações para os filtros funcionarem

⏳ Documentação inline completa em todos os arquivos
   - lib/config.ts — comentar cada campo explicando onde impacta
   - globals.css — comentar cada classe utilitária
   - Componentes principais — comentar props e comportamento

⏳ Criar netlify.toml equivalente para Cloudflare Pages (wrangler.toml ou _headers)
   - Headers de segurança HTTP (X-Frame-Options, X-Content-Type-Options etc)

⏳ Verificar imagens do CMS em produção
   - Confirmar que public/uploads/ está sendo servido corretamente no Cloudflare

⏳ Instalar Framer Motion + Motion Primitives
   npm install framer-motion motion-primitives
   Implementar na ordem:
   1. In View — substituir .fade-in CSS em todas as páginas
   2. Page Transition — fade suave entre páginas
   3. Text Effect — título do Hero
   4. Morphing Dialog — cards de membros (ver especificação abaixo)
   5. Progressive Blur — imagem do Hero
   6. Scroll Progress — páginas longas (publications, members)

⏳ Morphing Dialog nos cards de membros
   Estado fechado: foto, nome, função, linha de pesquisa
   Ao clicar expande com: foto maior, bio completa, links acadêmicos
   (Lattes, ORCID, Google Scholar, arXiv), publicações relacionadas, e-mail

⏳ README.md detalhado
   - Como rodar localmente
   - Como criar novo site a partir do template
   - Como configurar Cloudflare Pages e Keystatic
   - Como convidar editores

⏳ Marcar repositório como template no GitHub
   Settings → Template repository → Enable
```

---

## Identidade Visual Atual

Definida em `lib/config.ts` → bloco `theme`. Para trocar o visual do site inteiro,
edite apenas esses valores.

```
Cor dominante:   #0c1a2e  (navy — navbar, hero, footer, títulos)
Azul primário:   #1a4a8a  (bordas de destaque, títulos de seção)
Azul médio:      #2460b5  (botão primário, hover)
Azul link:       #1a56cc  (links inline, pills)
Fundo padrão:    #ffffff  (branco)
Fundo alternado: #f4f5f7  (cards e seções leves)
Bordas:          #d0d5de
Texto:           #1a1a1a
Texto muted:     #555555
Fonte serif:     EB Garamond (títulos, display, nomes)
Fonte sans:      Source Sans 3 (corpo, navegação, labels)
```

---

## Modelo de Conteúdo do CMS

### Membros (content/members/)
```yaml
title: string           # nome completo — usado como slug do arquivo
role: select            # Coordenador | Pesquisador Sênior | Pós-Doutorando |
                        # Doutorando | Mestrando | Iniciação Científica |
                        # Egresso | Colaborador Externo
affiliation: string     # instituição de vínculo
bio: document           # biografia completa (Keystatic) ou text (Decap)
photo: image            # foto — salva em public/uploads/
email: string           # e-mail institucional
lattes: string          # URL do Lattes
orcid: string           # URL do ORCID
scholar: string         # URL do Google Scholar
arxiv: string           # URL do arXiv
research_area: string   # linha de pesquisa (texto livre)
scholarship: string     # bolsa (CAPES, CNPq, FAPEMA)
year_start: string      # ano de início no grupo
year_end: string        # ano de conclusão (apenas egressos)
current_institution: string  # instituição atual (apenas egressos)
```

### Publicações (content/publications/)
```yaml
title: string           # título do artigo
authors: string         # autores separados por vírgula
year: number            # ano de publicação
journal: string         # periódico (opcional)
doi: string             # DOI (opcional)
arxiv: string           # ID do arXiv (opcional)
type: select            # Artigo | Preprint | Tese | Dissertação | Livro | Capítulo
research_area: string   # linha de pesquisa (opcional)
tags: multiselect       # gr | cosmo | qgrav | gw | alt (para filtros)
featured: boolean       # publicação em destaque (badge especial)
```

### Linhas de Pesquisa (content/research/)
```yaml
title: string           # nome da linha
summary: string         # resumo curto (uma linha)
body: document          # descrição completa
image: image            # imagem ilustrativa (opcional)
```

### Notícias (content/news/)
```yaml
title: string           # título da notícia
date: date              # data (usar formatDate() ao renderizar — nunca renderizar direto)
category: select        # Publicação | Defesa | Premiação | Visita | Mídia | Outros
excerpt: string         # resumo curto
body: document          # conteúdo completo
cover_image: image      # imagem de capa (opcional)
```

### Apresentação (content/about/index.md)
```yaml
title: string           # título exibido no Hero da homepage
subtitle: string        # subtítulo do Hero
mission: string         # missão do grupo
history: markdown       # histórico
hero_image: string      # imagem ou GIF exibido no Hero (URL do upload)
                        # Se vazio, exibe placeholder CSS animado (buraco negro)
```

---

## Comportamento de Datas

O Decap CMS e o Keystatic salvam campos `datetime` como objetos Date do JavaScript.
Renderizar diretamente quebra o React com erro "Objects are not valid as a React child".
**Sempre usar `formatDate()` de `lib/mdx.ts`:**

```tsx
import { formatDate } from '@/lib/mdx';

// Correto — converte qualquer formato para "02 de junho de 2026"
<span>{formatDate(item.date)}</span>

// Errado — quebra o build no Netlify/Cloudflare
<span>{item.date}</span>
```

---

## Fluxo de Deploy

```
Desenvolvedor edita código localmente
        ↓
git add . && git commit -m "..." && git push
        ↓
Cloudflare Pages detecta commit na branch main
        ↓
npm run build executado (Next.js exportação estática → pasta out/)
        ↓
Site publicado em levi-ufma.pages.dev
```

```
Editor acessa levi-ufma.pages.dev/keystatic (após configuração)
        ↓
Autentica via GitHub App
        ↓
Cria ou edita conteúdo no painel
        ↓
Keystatic commita arquivo .md no GitHub
        ↓
Cloudflare Pages detecta commit e rebuilda
        ↓
Site atualizado com novo conteúdo
```

---

## Configuração do Cloudflare Pages

```
Build command:      npm run build
Output directory:   out
Branch:             main
Node version:       22.x
```

Variáveis de ambiente a adicionar no painel do Cloudflare
(Settings → Environment Variables → Production):
```
NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG   ← obrigatório para o Keystatic funcionar
KEYSTATIC_GITHUB_CLIENT_ID              ← se necessário para o GitHub App
KEYSTATIC_GITHUB_CLIENT_SECRET          ← se necessário para o GitHub App
KEYSTATIC_SECRET                        ← string aleatória longa
```

---

## Plano para Sites Futuros (Template Reutilizável)

O repositório foi construído para ser duplicado. Para criar um novo site:

```
1. Duplicar repositório no GitHub (usar "Use this template")
2. Editar lib/config.ts — nome, universidade, e-mail, cores, fontes
3. Substituir logo em public/ (quando implementado)
4. Criar novo site no Cloudflare Pages apontando para o novo repositório
5. Configurar GitHub App do Keystatic para o novo repositório
6. Convidar editores
```

Nenhum outro arquivo precisa ser tocado para uma troca completa de identidade visual.

Stack planejada para sites futuros (2º site em diante):
```
Astro 5.0 + Keystatic + Tailwind CSS + Cloudflare Pages
```
Motivo: integração oficial Astro+Keystatic, performance superior, sintaxe mais
simples para sites de conteúdo. O Next.js permanece apenas no LEVI (1º site).

---

## Bugs Conhecidos

```
⚠️ PowerShell — criação de pastas com colchetes no nome ([...params])
   O PowerShell trata colchetes como caracteres especiais em paths.
   Sempre criar essas pastas via VS Code GUI (botão direito → New Folder).
   Nunca usar New-Item para pastas com colchetes.

⚠️ Set-Content no PowerShell — encoding UTF-16
   O comando Set-Content sem parâmetro -Encoding pode salvar em UTF-16,
   corrompendo arquivos TypeScript/TSX.
   Usar: Set-Content -LiteralPath "caminho" -Value "conteúdo"
   Para arquivos maiores, usar o editor do VS Code diretamente.

⚠️ Tailwind v4 — classes arbitrárias não geradas
   Classes como max-w-[860px] ou py-24 não funcionam no Tailwind v4 CSS-first.
   Usar as classes utilitárias definidas em globals.css (.container-site, .section-padding).

⚠️ Netlify — créditos esgotados
   O projeto foi migrado do Netlify para o Cloudflare Pages por esgotamento
   de créditos de build no plano gratuito do Netlify.
   Não usar mais o Netlify para este projeto.
```

---

## Referências Rápidas

```
Cloudflare Pages:    dash.cloudflare.com
GitHub repositório:  github.com/researchgroups-ufma/levi
Keystatic docs:      keystatic.com/docs
Motion Primitives:   motion-primitives.com/docs
Framer Motion:       motion.dev/docs
Tailwind CSS v4:     tailwindcss.com/docs
Next.js App Router:  nextjs.org/docs/app
```
