import { config, collection, fields } from '@keystatic/core';

/**
 * Configuração do Keystatic CMS
 * Define todas as coleções de conteúdo editáveis pelo painel /keystatic
 * Para adicionar novos campos, adicione entradas em fields de cada collection
 * Para adicionar novas coleções, adicione uma nova entrada em collections
 */
export default config({
  // Modo de armazenamento — github salva diretamente no repositório
  storage: {
    kind: 'github',
    repo: 'researchgroups-ufma/levi',
  },

  // Interface do painel
  ui: {
    brand: {
      name: 'LEVI — Painel Editorial',
    },
  },

  collections: {

    // ── Membros ────────────────────────────────────────────────────────────
    // Pasta: content/members/
    // Cada arquivo .md é um membro do grupo
    members: collection({
      label: 'Membros',
      slugField: 'title',
      path: 'content/members/*',
      format: { contentField: 'bio' },
      schema: {
        // Nome completo — usado como identificador do arquivo
        title: fields.slug({ name: { label: 'Nome completo' } }),

        // Função no grupo — altere as options para adicionar/remover funções
        role: fields.select({
          label: 'Função',
          options: [
            { label: 'Coordenador', value: 'Coordenador' },
            { label: 'Pesquisador Sênior', value: 'Pesquisador Sênior' },
            { label: 'Pós-Doutorando', value: 'Pós-Doutorando' },
            { label: 'Doutorando', value: 'Doutorando' },
            { label: 'Mestrando', value: 'Mestrando' },
            { label: 'Iniciação Científica', value: 'Iniciação Científica' },
            { label: 'Egresso', value: 'Egresso' },
            { label: 'Colaborador Externo', value: 'Colaborador Externo' },
          ],
          defaultValue: 'Mestrando',
        }),

        // Afiliação institucional
        affiliation: fields.text({ label: 'Afiliação' }),

        // Mini biografia — campo principal de conteúdo
        bio: fields.document({
          label: 'Bio',
          formatting: true,
          links: true,
        }),

        // Foto do membro
        photo: fields.image({
          label: 'Foto',
          directory: 'public/uploads',
          publicPath: '/uploads',
        }),

        // Contato e links acadêmicos
        email: fields.text({ label: 'E-mail', validation: { isRequired: false } }),
        lattes: fields.text({ label: 'Lattes (URL)', validation: { isRequired: false } }),
        orcid: fields.text({ label: 'ORCID (URL)', validation: { isRequired: false } }),
        scholar: fields.text({ label: 'Google Scholar (URL)', validation: { isRequired: false } }),
        arxiv: fields.text({ label: 'arXiv (URL)', validation: { isRequired: false } }),

        // Linha de pesquisa
        research_area: fields.text({ label: 'Linha de pesquisa', validation: { isRequired: false } }),

        // Bolsa e período
        scholarship: fields.text({ label: 'Bolsa (ex: CAPES, CNPq)', validation: { isRequired: false } }),
        year_start: fields.text({ label: 'Ano de início', validation: { isRequired: false } }),

        // Campos exclusivos para egressos
        year_end: fields.text({ label: 'Ano de conclusão (egressos)', validation: { isRequired: false } }),
        current_institution: fields.text({ label: 'Instituição atual (egressos)', validation: { isRequired: false } }),
      },
    }),

    // ── Linhas de Pesquisa ─────────────────────────────────────────────────
    // Pasta: content/research/
    research: collection({
      label: 'Linhas de Pesquisa',
      slugField: 'title',
      path: 'content/research/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Nome da linha de pesquisa' } }),
        summary: fields.text({ label: 'Resumo curto' }),
        body: fields.document({
          label: 'Descrição completa',
          formatting: true,
          links: true,
        }),
        image: fields.image({
          label: 'Imagem',
          directory: 'public/uploads',
          publicPath: '/uploads',
        }),
      },
    }),

    // ── Publicações ────────────────────────────────────────────────────────
    // Pasta: content/publications/
    publications: collection({
      label: 'Publicações',
      slugField: 'title',
      path: 'content/publications/*',
      schema: {
        title: fields.slug({ name: { label: 'Título da publicação' } }),
        authors: fields.text({ label: 'Autores' }),

        // Ano de publicação
        year: fields.number({ label: 'Ano' }),

        journal: fields.text({ label: 'Periódico', validation: { isRequired: false } }),
        doi: fields.text({ label: 'DOI', validation: { isRequired: false } }),
        arxiv: fields.text({ label: 'arXiv', validation: { isRequired: false } }),

        // Tipo de publicação — altere as options conforme necessário
        type: fields.select({
          label: 'Tipo',
          options: [
            { label: 'Artigo', value: 'Artigo' },
            { label: 'Preprint', value: 'Preprint' },
            { label: 'Tese', value: 'Tese' },
            { label: 'Dissertação', value: 'Dissertação' },
            { label: 'Livro', value: 'Livro' },
            { label: 'Capítulo', value: 'Capítulo' },
          ],
          defaultValue: 'Artigo',
        }),

        research_area: fields.text({ label: 'Linha de pesquisa', validation: { isRequired: false } }),

        // Tags para filtro na página de publicações
        // Adicione ou remova tags conforme as áreas do grupo
        tags: fields.multiselect({
          label: 'Tags para filtro',
          options: [
            { label: 'Relatividade Geral', value: 'gr' },
            { label: 'Cosmologia', value: 'cosmo' },
            { label: 'Gravitação Quântica', value: 'qgrav' },
            { label: 'Ondas Gravitacionais', value: 'gw' },
            { label: 'Teorias Alternativas', value: 'alt' },
          ],
        }),

        // Destaque — aparece com badge especial na lista
        featured: fields.checkbox({ label: 'Publicação em destaque', defaultValue: false }),
      },
    }),

    // ── Notícias ───────────────────────────────────────────────────────────
    // Pasta: content/news/
    news: collection({
      label: 'Notícias',
      slugField: 'title',
      path: 'content/news/*',
      format: { contentField: 'body' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        date: fields.date({ label: 'Data' }),

        // Categoria — altere as options conforme necessário
        category: fields.select({
          label: 'Categoria',
          options: [
            { label: 'Publicação', value: 'Publicação' },
            { label: 'Defesa', value: 'Defesa' },
            { label: 'Premiação', value: 'Premiação' },
            { label: 'Visita', value: 'Visita' },
            { label: 'Mídia', value: 'Mídia' },
            { label: 'Outros', value: 'Outros' },
          ],
          defaultValue: 'Outros',
        }),

        excerpt: fields.text({ label: 'Resumo' }),
        body: fields.document({
          label: 'Conteúdo completo',
          formatting: true,
          links: true,
          images: {
            directory: 'public/uploads',
            publicPath: '/uploads',
          },
        }),

        cover_image: fields.image({
          label: 'Imagem de capa',
          directory: 'public/uploads',
          publicPath: '/uploads',
        }),
      },
    }),

  },
});