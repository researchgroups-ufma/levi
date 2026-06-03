export const siteConfig = {
  // ─── Identidade do grupo ───────────────────────────────────────────────────
  // Altere esses campos para cada novo grupo acadêmico
  name: 'LEVI',
  fullName: 'Laboratório de Estudos em [área]',
  acronym: 'LEVI',
  department: 'Departamento de Física',
  unit: 'CCET',
  university: 'Universidade Federal do Maranhão',
  universityAcronym: 'UFMA',
  city: 'São Luís',
  state: 'MA',
  country: 'Brasil',

  // ─── Contato ───────────────────────────────────────────────────────────────
  email: 'contato@levi.ufma.br',
  location: 'Departamento de Física — CCET, UFMA, São Luís — MA',

  // ─── SEO e metadados ───────────────────────────────────────────────────────
  siteTitle: 'LEVI — Laboratório de Estudos | UFMA',
  siteDescription: 'Laboratório de estudos científicos do Departamento de Física da UFMA.',

  // ─── Navegação ─────────────────────────────────────────────────────────────
  // Adicione ou remova links conforme as seções ativas do site
  navLinks: [
    { label: 'Apresentação', href: '/about' },
    { label: 'Pesquisa', href: '/research' },
    { label: 'Membros', href: '/members' },
    { label: 'Publicações', href: '/publications' },
    { label: 'Notícias', href: '/news' },
    { label: 'Contato', href: '/contact' },
  ],

  // ─── Afiliações ────────────────────────────────────────────────────────────
  affiliations: ['UFMA', 'CCET', 'Departamento de Física', 'CNPq', 'FAPEMA'],

  // ─── Redes sociais ─────────────────────────────────────────────────────────
  // Deixe vazio ('') para não exibir
  social: {
    lattes: '',
    orcid: '',
    instagram: '',
    twitter: '',
    github: '',
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