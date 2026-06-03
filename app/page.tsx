import Link from 'next/link';
import { siteConfig } from '@/lib/config';
import { getSingleFile } from '@/lib/mdx';
import PageCard from '@/components/ui/PageCard';

/**
 * Homepage — página principal do site
 * Seções: Hero, Pesquisa, Membros/Publicações (cards), Contato
 * O conteúdo do Hero vem de content/about/index.md via CMS
 * Para editar textos fixos, altere lib/config.ts
 */

// Tipo dos dados da página About lidos do CMS
type AboutData = {
  title?: string;
  subtitle?: string;
  hero_image?: string; /* imagem ou GIF exibido no hero — editável pelo CMS */
};

export default function Home() {
  // Lê o arquivo de conteúdo da apresentação
  // Se não existir ainda, usa valores padrão
  const about = (getSingleFile('about/index.md') ?? {}) as AboutData;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      {/* Fundo escuro estrelado com visual animado em CSS                   */}
      {/* A imagem do lado direito é editável pelo CMS (campo hero_image)    */}
      <section
        style={{
          position: 'relative',
          minHeight: '65vh',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          marginTop: '56px', /* compensa a altura da navbar fixa */
        }}
      >
        {/* Fundo gradiente com estrelas em CSS */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(26,74,138,0.55) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(36,96,181,0.3) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(10,20,60,0.6) 0%, transparent 60%)',
            backgroundColor: '#08111f',
          }}
        >
          {/* Estrelas decorativas em CSS puro */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.55) 0%, transparent 100%), radial-gradient(1px 1px at 25% 60%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 40% 30%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(1px 1px at 55% 75%, rgba(255,255,255,0.35) 0%, transparent 100%), radial-gradient(1px 1px at 70% 20%, rgba(255,255,255,0.5) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 82% 50%, rgba(255,255,255,0.45) 0%, transparent 100%), radial-gradient(1px 1px at 92% 80%, rgba(255,255,255,0.4) 0%, transparent 100%), radial-gradient(1px 1px at 15% 85%, rgba(255,255,255,0.3) 0%, transparent 100%), radial-gradient(1px 1px at 35% 45%, rgba(255,255,255,0.45) 0%, transparent 100%), radial-gradient(1.5px 1.5px at 60% 10%, rgba(255,255,255,0.5) 0%, transparent 100%)',
          }} />
        </div>

        {/* Conteúdo do hero */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            maxWidth: '1100px',
            margin: '0 auto',
            padding: '4rem 3rem',
            display: 'grid',
            gridTemplateColumns: '1fr 300px',
            gap: '4rem',
            alignItems: 'center',
          }}
        >
          {/* Texto esquerdo */}
          <div>
            {/* Eyebrow — nome da instituição */}
            <div style={{
              fontSize: '0.78rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.5)',
              marginBottom: '1.1rem',
            }}>
              {siteConfig.acronym} · {siteConfig.university}
            </div>

            {/* Título principal — vem do CMS ou usa o nome do grupo */}
            <h1 style={{
              fontFamily: 'var(--font-family-serif)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: 400,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '0.5rem',
            }}>
              {about.title ?? siteConfig.fullName}
            </h1>

            {/* Subtítulo — vem do CMS */}
            {about.subtitle && (
              <p style={{
                fontSize: '1rem',
                fontWeight: 300,
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '2rem',
              }}>
                {about.subtitle}
              </p>
            )}

            {/* Botões de ação */}
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
              <Link href="/research" style={{
                display: 'inline-block',
                padding: '0.6rem 1.6rem',
                fontSize: '0.85rem',
                textDecoration: 'none',
                background: 'var(--color-blue-mid)',  /* botão primário azul */
                border: '1.5px solid var(--color-blue-mid)',
                color: 'white',
                transition: 'all 0.2s',
              }}>
                Nossa pesquisa
              </Link>
              <Link href="/members" style={{
                display: 'inline-block',
                padding: '0.6rem 1.6rem',
                fontSize: '0.85rem',
                textDecoration: 'none',
                background: 'transparent',
                border: '1.5px solid rgba(255,255,255,0.55)',
                color: 'rgba(255,255,255,0.85)',
                transition: 'all 0.2s',
              }}>
                Conhecer o grupo
              </Link>
            </div>
          </div>

          {/* Visual direito — imagem do CMS ou placeholder animado */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
              width: '260px',
              height: '260px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '1.5px solid rgba(255,255,255,0.1)',
              boxShadow: '0 0 50px rgba(26,74,138,0.55), 0 0 100px rgba(26,74,138,0.2)',
              flexShrink: 0,
            }}>
              {about.hero_image ? (
                /* Imagem ou GIF enviado pelo CMS */
                <img
                  src={about.hero_image}
                  alt={about.title ?? siteConfig.acronym}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              ) : (
                /* Placeholder animado em CSS — buraco negro */
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'radial-gradient(circle at 38% 38%, #2a5aaa 0%, #102050 35%, #04080f 65%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 38% 35%, #1a3060, #02040a)',
                    boxShadow: '0 0 30px rgba(10,20,60,0.9)',
                    position: 'absolute',
                  }} />
                  <p style={{
                    position: 'absolute',
                    bottom: '18px',
                    fontSize: '0.62rem',
                    color: 'rgba(255,255,255,0.2)',
                    fontFamily: 'var(--font-family-serif)',
                    fontStyle: 'italic',
                  }}>
                    adicione uma imagem via CMS
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    {/* ── Seções do site — cards de navegação ──────────────────────────── */}
      {/* Grid com cards que levam para as páginas internas                  */}
      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

        <section className="page-section">
          <h2 className="section-title">Pesquisa</h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: 'var(--color-muted)', marginBottom: '2rem', fontWeight: 300, maxWidth: '720px' }}>
            Investigamos problemas fundamentais em física teórica, com foco em gravitação, cosmologia e campos relacionados.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <PageCard
              href="/research"
              label="Linhas de pesquisa"
              title="Áreas de investigação"
              description="Temas e projetos ativos do grupo."
              cta="Ver pesquisa →"
            />
            <PageCard
              href="/publications"
              label="Produção científica"
              title="Publicações"
              description="Artigos publicados em periódicos internacionais."
              cta="Ver publicações →"
            />
            <PageCard
              href="/members"
              label="Equipe"
              title="Membros"
              description="Pesquisadores, pós-graduandos e estudantes."
              cta="Ver membros →"
            />
            <PageCard
              href="/news"
              label="Novidades"
              title="Notícias"
              description="Conquistas, eventos e novidades do grupo."
              cta="Ver notícias →"
            />
          </div>
        </section>

        {/* ── Contato rápido ── */}
        <section className="page-section">
          <h2 className="section-title">Contato</h2>
          <p style={{ fontSize: '0.97rem', lineHeight: 1.85, color: 'var(--color-muted)', fontWeight: 300, marginBottom: '1rem' }}>
            Interessado em ingressar no grupo como aluno de IC, mestrando ou doutorando?
          </p>
          <Link href="/contact" style={{
            display: 'inline-block',
            padding: '0.6rem 1.6rem',
            fontSize: '0.85rem',
            textDecoration: 'none',
            background: 'var(--color-blue-mid)',
            border: '1.5px solid var(--color-blue-mid)',
            color: 'white',
            transition: 'all 0.2s',
          }}>
            Entre em contato
          </Link>
        </section>

      </main>
    </>
  );
}