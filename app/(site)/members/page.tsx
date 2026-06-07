import { getCollection } from '@/lib/mdx';
import MemberCards from '@/components/ui/MemberCards';
import GroupLabel from '@/components/ui/GroupLabel';

/**
 * Página de Membros — Server Component
 * Lê membros de content/members/ via Decap CMS
 * Agrupa por função: Coordenador, Pesquisadores, Pós-graduação, IC, Egressos, Colaboradores
 * Para adicionar campos novos, edite public/admin/config.yml
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

export default function MembersPage() {
  const allMembers = getCollection('members') as unknown as Member[];

  // Agrupa membros por função
  const coordinator = allMembers.find(m => m.role === 'Coordenador');
  const senior = allMembers.filter(m => m.role === 'Pesquisador Sênior' || m.role === 'Pós-Doutorando');
  const phd = allMembers.filter(m => m.role === 'Doutorando');
  const masters = allMembers.filter(m => m.role === 'Mestrando');
  const ic = allMembers.filter(m => m.role === 'Iniciação Científica');
  const alumni = allMembers.filter(m => m.role === 'Egresso');
  const collaborators = allMembers.filter(m => m.role === 'Colaborador Externo');

  return (
    <>
      {/* ── Cabeçalho escuro da página ── */}
      <div style={{
        background: '#0c1a2e',
        padding: '5.5rem 2rem 3rem',
        textAlign: 'center',
        marginTop: '56px',
      }}>
        <div style={{ fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.75rem' }}>
          LEVI · Universidade Federal do Maranhão
        </div>
        <h1 style={{ fontFamily: 'var(--font-family-serif)', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 400, color: 'white', lineHeight: 1.15 }}>
          Membros do grupo
        </h1>
      </div>

      <main style={{ maxWidth: '860px', margin: '0 auto', padding: '0 2rem' }}>

        {/* ── Coordenador ── */}
        {coordinator && (
          <section className="page-section">
            <h2 className="section-title">Coordenador</h2>
            <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '2.5rem', alignItems: 'start' }}>
              {/* Foto */}
              <figure style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '160px', aspectRatio: '0.85', background: '#dde3ee', border: '1px solid var(--color-border)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {coordinator.photo ? (
                    <img src={coordinator.photo} alt={coordinator.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  ) : (
                    <span style={{ color: '#aaa', fontSize: '0.78rem', textAlign: 'center', padding: '1rem', fontStyle: 'italic' }}>
                      Foto do coordenador
                    </span>
                  )}
                </div>
                <figcaption style={{ fontSize: '0.72rem', color: '#999', textAlign: 'center', marginTop: '0.5rem', fontStyle: 'italic' }}>
                  {coordinator.title} · UFMA
                </figcaption>
              </figure>

              {/* Informações */}
              <div>
                <div style={{ fontFamily: 'var(--font-family-serif)', fontSize: '1.6rem', fontWeight: 500, color: 'var(--color-navy)', marginBottom: '0.2rem' }}>
                  {coordinator.title}
                </div>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-blue)', marginBottom: '1rem' }}>
                  {coordinator.affiliation}
                </div>
                {coordinator.bio && (
                  <p style={{ fontSize: '0.92rem', lineHeight: 1.8, color: 'var(--color-muted)', fontWeight: 300 }}>
                    {coordinator.bio}
                  </p>
                )}
                {/* Links acadêmicos */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginTop: '1.2rem' }}>
                  {coordinator.lattes && <a href={coordinator.lattes} target="_blank" className="pill">Lattes</a>}
                  {coordinator.orcid && <a href={coordinator.orcid} target="_blank" className="pill">ORCID</a>}
                  {coordinator.scholar && <a href={coordinator.scholar} target="_blank" className="pill">Google Scholar</a>}
                  {coordinator.arxiv && <a href={coordinator.arxiv} target="_blank" className="pill">arXiv</a>}
                  {coordinator.email && <a href={'mailto:' + coordinator.email} className="pill">E-mail</a>}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── Pesquisadores Sênior e Pós-Doutorandos ── */}
        {senior.length > 0 && (
          <section className="page-section">
            <h2 className="section-title">Pesquisadores</h2>
            <MemberCards members={senior} />
          </section>
        )}

        {/* ── Pós-graduação ── */}
        {(phd.length > 0 || masters.length > 0) && (
          <section className="page-section">
            <h2 className="section-title">Pós-graduação</h2>
            {phd.length > 0 && (
              <div className="fade-in">
                <GroupLabel label="Doutorandos" />
                <MemberCards members={phd} />
              </div>
            )}
            {masters.length > 0 && (
              <div className="fade-in">
                <GroupLabel label="Mestrandos" />
                <MemberCards members={masters} />
              </div>
            )}
          </section>
        )}

        {/* ── Iniciação Científica ── */}
        {ic.length > 0 && (
          <section className="page-section">
            <h2 className="section-title">Iniciação Científica</h2>
            <div className="fade-in">
              <GroupLabel label="Alunos de graduação" />
              <MemberCards members={ic} />
            </div>
          </section>
        )}

        {/* ── Egressos ── */}
        {alumni.length > 0 && (
          <section className="page-section">
            <h2 className="section-title">Egressos</h2>
            <div className="fade-in" style={{ display: 'flex', flexDirection: 'column' }}>
              {alumni.map(m => (
                <div key={m.slug} style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '1rem', alignItems: 'baseline', padding: '0.75rem 0', borderBottom: '1px solid #eee' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--font-family-serif)', fontSize: '1rem', color: 'var(--color-navy)' }}>{m.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-muted)', fontWeight: 300 }}>
                      {m.research_area}{m.current_institution ? ` · ${m.current_institution}` : ''}
                    </div>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#aaa', whiteSpace: 'nowrap' }}>{m.year_end}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── Colaboradores externos ── */}
        {collaborators.length > 0 && (
          <section className="page-section">
            <h2 className="section-title">Colaboradores externos</h2>
            <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {collaborators.map(m => (
                <div key={m.slug} style={{ padding: '1rem 1.25rem', border: '1px solid var(--color-border)', background: 'var(--color-light)' }}>
                  <div style={{ fontFamily: 'var(--font-family-serif)', fontSize: '1rem', fontWeight: 500, color: 'var(--color-navy)', marginBottom: '0.15rem' }}>{m.title}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-muted)', fontWeight: 300 }}>{m.affiliation}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Mensagem quando não há membros cadastrados */}
        {allMembers.length === 0 && (
          <section className="page-section">
            <p style={{ color: 'var(--color-muted)', fontStyle: 'italic' }}>
              Nenhum membro cadastrado ainda. Acesse o painel /admin para adicionar membros.
            </p>
          </section>
        )}

      </main>
    </>
  );
}