const members = [
  {
    name: 'Prof. Nome Placeholder',
    role: 'Pesquisador Sênior',
    affiliation: 'UFMA — Departamento de Física',
    bio: 'Placeholder — mini biografia do pesquisador sênior. Áreas de atuação, formação e interesses de pesquisa.',
    email: 'placeholder@ufma.br',
    lattes: '#',
    orcid: '#',
  },
  {
    name: 'Nome Placeholder',
    role: 'Doutorando',
    affiliation: 'UFMA — PPGF',
    bio: 'Placeholder — mini biografia do doutorando. Tema da tese e orientador.',
    email: 'placeholder@discente.ufma.br',
    lattes: '#',
    orcid: '#',
  },
  {
    name: 'Nome Placeholder',
    role: 'Mestrando',
    affiliation: 'UFMA — PPGF',
    bio: 'Placeholder — mini biografia do mestrando. Tema da dissertação e orientador.',
    email: 'placeholder@discente.ufma.br',
    lattes: '#',
    orcid: '#',
  },
  {
    name: 'Nome Placeholder',
    role: 'Iniciação Científica',
    affiliation: 'UFMA — Física',
    bio: 'Placeholder — mini biografia do aluno de iniciação científica. Projeto em andamento.',
    email: 'placeholder@discente.ufma.br',
    lattes: '#',
    orcid: null,
  },
];

const roleOrder = ['Pesquisador Sênior', 'Pós-Doutorando', 'Doutorando', 'Mestrando', 'Iniciação Científica'];

export default function MembersPage() {
  return (
    <>
      {/* Hero da página */}
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Equipe
          </span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">
            Membros
          </h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">
            Conheça os pesquisadores e estudantes que fazem parte do LEVI.
          </p>
        </div>
      </section>

      {/* Lista de membros */}
      <section className="bg-surface-soft py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member, i) => (
              <div key={i} className="bg-canvas rounded-lg p-8 border border-hairline flex gap-6">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 rounded-full bg-surface-card shrink-0 flex items-center justify-center">
                  <span className="text-xl text-muted">✦</span>
                </div>
                {/* Info */}
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {member.role}
                  </span>
                  <h2 className="font-sans text-base font-medium text-ink">
                    {member.name}
                  </h2>
                  <p className="text-xs text-muted">{member.affiliation}</p>
                  <p className="text-sm text-body leading-relaxed mt-1">
                    {member.bio}
                  </p>
                  {/* Links */}
                  <div className="flex gap-4 mt-2">
                    {member.lattes && (
                      <a href={member.lattes} className="text-xs font-medium text-primary hover:text-primary-active transition-colors">
                        Lattes
                      </a>
                    )}
                    {member.orcid && (
                      <a href={member.orcid} className="text-xs font-medium text-primary hover:text-primary-active transition-colors">
                        ORCID
                      </a>
                    )}
                    {member.email && (
                      <a href={`mailto:${member.email}`} className="text-xs font-medium text-primary hover:text-primary-active transition-colors">
                        E-mail
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
