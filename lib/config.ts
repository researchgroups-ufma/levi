export const siteConfig = {
  // Identidade do grupo
  name: 'LEVI',
  fullName: 'Laboratório de Estudos em Física',
  acronym: 'LEVI',
  department: 'Departamento de Física',
  unit: 'CCET',
  university: 'Universidade Federal do Maranhão',
  universityAcronym: 'UFMA',
  city: 'São Luís',
  state: 'MA',
  country: 'Brasil',

  // Contato
  email: 'contato@levi.ufma.br',
  location: 'Departamento de Física — CCET, UFMA, São Luís — MA',

  // SEO e metadados
  siteTitle: 'LEVI — Laboratório de Estudos | UFMA',
  siteDescription:
    'Laboratório de estudos científicos do Departamento de Física da UFMA.',

  // Identidade visual
  theme: {
    // Cores principais
    primary: '#cc785c',
    primaryActive: '#a9583e',
    primaryDisabled: '#e6dfd8',

    // Superfícies claras
    canvas: '#faf9f5',
    surfaceSoft: '#f5f0e8',
    surfaceCard: '#efe9de',

    // Superfícies escuras
    surfaceDark: '#181715',
    surfaceDarkElevated: '#252320',
    surfaceDarkSoft: '#1f1e1b',

    // Bordas
    hairline: '#e6dfd8',
    hairlineSoft: '#ebe6df',

    // Texto claro
    ink: '#141413',
    bodyStrong: '#252523',
    body: '#3d3d3a',
    muted: '#6c6a64',
    mutedSoft: '#8e8b82',

    // Texto sobre cores
    onPrimary: '#ffffff',
    onDark: '#faf9f5',
    onDarkSoft: '#a09d96',

    // Fontes
    fontSerif: "'Cormorant Garamond', Garamond, 'Times New Roman', serif",
    fontSans: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    fontMono: "'JetBrains Mono', monospace",

    // Google Fonts URL
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400&display=swap',
  },

  // Navegação
  navLinks: [
    { label: 'Apresentação', href: '/about' },
    { label: 'Pesquisa', href: '/research' },
    { label: 'Membros', href: '/members' },
    { label: 'Publicações', href: '/publications' },
    { label: 'Notícias', href: '/news' },
    { label: 'Contato', href: '/contact' },
  ],

  // Afiliações exibidas na página Sobre
  affiliations: ['UFMA', 'CCET', 'Departamento de Física', 'CNPq', 'FAPEMA'],

  // Redes sociais (deixe vazio se não houver)
  social: {
    lattes: '',
    orcid: '',
    instagram: '',
    twitter: '',
    github: '',
  },
  // Layout
containerPadding: 'px-8 md:px-12',
};