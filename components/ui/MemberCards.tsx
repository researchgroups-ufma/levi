'use client';

/**
 * MemberCards — grid de cards de membros
 * Marcado como 'use client' pois usa onMouseEnter/onMouseLeave
 * Cada card exibe nome, área de pesquisa, bolsa e links acadêmicos
 */

type Member = {
  slug: string;
  title: string;
  role: string;
  affiliation?: string;
  bio?: string;
  photo?: string;
  email?: string;
  lattes?: string;
  orcid?: string;
  scholar?: string;
  arxiv?: string;
  research_area?: string;
  scholarship?: string;
  year_start?: string;
  year_end?: string;
  current_institution?: string;
};

export default function MemberCards({ members }: { members: Member[] }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: '1px',
      background: 'var(--color-border)',
      border: '1px solid var(--color-border)',
      marginBottom: '2.5rem',
    }}>
      {members.map(m => (
        <div
          key={m.slug}
          style={{ background: 'white', padding: '1.5rem', transition: 'background 0.15s' }}
          onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#f0f5fc'}
          onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'white'}
        >
          {/* Nome do membro */}
          <div style={{
            fontFamily: 'var(--font-family-serif)',
            fontSize: '1.1rem',
            fontWeight: 500,
            color: 'var(--color-navy)',
            marginBottom: '0.15rem',
          }}>
            {m.title}
          </div>

          {/* Área de pesquisa e bolsa */}
          <div style={{
            fontSize: '0.8rem',
            color: 'var(--color-muted)',
            fontWeight: 300,
            lineHeight: 1.5,
            marginBottom: '1rem',
          }}>
            {m.research_area}
            {m.scholarship && (
              <>
                <br />
                <em style={{ fontSize: '0.75rem', color: '#aaa' }}>
                  {m.scholarship}{m.year_start ? ` · desde ${m.year_start}` : ''}
                </em>
              </>
            )}
          </div>

          {/* Links acadêmicos */}
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {m.lattes && <a href={m.lattes} target="_blank" className="pill">Lattes</a>}
            {m.orcid && <a href={m.orcid} target="_blank" className="pill">ORCID</a>}
            {m.email && <a href={'mailto:' + m.email} className="pill">E-mail</a>}
          </div>
        </div>
      ))}
    </div>
  );
}