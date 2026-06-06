export const siteConfig = {
  // ─── Identidade do grupo ───────────────────────────────────────────────────
  // Altere esses campos para cada novo grupo acadêmico
  name: 'LEVI',                                    // Nome curto — aparece no navbar e rodapé
  fullName: 'Laboratório de Estudos em [área]',    // Nome completo — aparece na página Sobre e metadados
  acronym: 'LEVI',                                 // Sigla — usada em títulos e breadcrumbs
  department: 'Departamento de Física',            // Departamento — exibido no rodapé e página de contato
  unit: 'CCET',                                    // Unidade acadêmica — exibida junto ao departamento
  university: 'Universidade Federal do Maranhão',  // Nome completo da universidade
  universityAcronym: 'UFMA',                       // Sigla da universidade — usada em textos curtos
  city: 'São Luís',                                // Cidade — exibida no endereço de contato
  state: 'MA',                                     // Estado (sigla) — exibido junto à cidade
  country: 'Brasil',                               // País — usado em metadados de SEO

  // ─── Contato ───────────────────────────────────────────────────────────────
  email: 'contato@levi.ufma.br',                                       // E-mail principal — aparece na página de contato e rodapé
  location: 'Departamento de Física — CCET, UFMA, São Luís — MA',     // Endereço textual completo — aparece na página de contato

  // ─── SEO e metadados ───────────────────────────────────────────────────────
  siteTitle: 'LEVI — Laboratório de Estudos | UFMA',                           // <title> de todas as páginas — aparece na aba do navegador e no Google
  siteDescription: 'Laboratório de estudos científicos do Departamento de Física da UFMA.',  // Meta description — indexada pelo Google, limite ~160 chars

  // ─── Navegação ─────────────────────────────────────────────────────────────
  // Adicione ou remova links conforme as seções ativas do site
  // label: texto exibido no menu | href: rota Next.js correspondente
  navLinks: [
    { label: 'Apresentação', href: '/about' },
    { label: 'Pesquisa', href: '/research' },
    { label: 'Membros', href: '/members' },
    { label: 'Publicações', href: '/publications' },
    { label: 'Notícias', href: '/news' },
    { label: 'Contato', href: '/contact' },
  ],

  // ─── Afiliações ────────────────────────────────────────────────────────────
  // Exibidas no rodapé como badges de parceiros/financiadores
  affiliations: ['UFMA', 'CCET', 'Departamento de Física', 'CNPq', 'FAPEMA'],

  // ─── Redes sociais ─────────────────────────────────────────────────────────
  // Deixe vazio ('') para não exibir o ícone correspondente no rodapé
  social: {
    lattes: '',    // URL do currículo Lattes do coordenador
    orcid: '',     // URL do perfil ORCID do coordenador
    instagram: '', // URL do perfil Instagram do grupo
    twitter: '',   // URL do perfil X/Twitter do grupo
    github: '',    // URL da organização GitHub do grupo
  },

  // ─── Tema visual ───────────────────────────────────────────────────────────
  // Para trocar a identidade visual, altere apenas os valores abaixo
  theme: {
    // Cores principais
    navy: '#0c1a2e',        // Cor dominante — navbar, hero, footer, títulos
    blue: '#1a4a8a',        // Azul institucional — bordas de destaque, títulos de seção
    blueMid: '#2460b5',     // Azul médio — botão primário, hover
    blueLink: '#1a56cc',    // Azul link — links inline, pills hover

    // Superfícies
    white: '#ffffff',       // Fundo padrão das páginas
    light: '#f4f5f7',       // Fundo de cards e seções alternadas
    border: '#d0d5de',      // Bordas e divisores

    // Texto
    text: '#1a1a1a',        // Texto principal
    muted: '#555555',       // Texto secundário, descrições

    // Fontes
    // Altere aqui para trocar a tipografia do site inteiro
    fontSerif: "'EB Garamond', Georgia, 'Times New Roman', serif",
    fontSans: "'Source Sans 3', -apple-system, BlinkMacSystemFont, sans-serif",

    // Google Fonts URL — atualize se trocar as fontes acima
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=Source+Sans+3:wght@300;400;600&display=swap',
  },
};