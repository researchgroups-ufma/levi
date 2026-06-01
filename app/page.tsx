import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-canvas py-24">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-6">
              Laboratório de Estudos — UFMA
            </span>
            <h1 className="font-serif text-5xl md:text-6xl text-ink leading-tight tracking-tight mb-6">
              Pesquisa científica de fronteira na UFMA
            </h1>
            <p className="text-lg text-body leading-relaxed mb-8">
              O LEVI é um grupo de pesquisa do Departamento de Física da UFMA
              dedicado ao avanço do conhecimento científico em suas linhas de pesquisa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/research"
                className="bg-primary text-on-primary text-sm font-medium px-5 py-3 rounded-md hover:bg-primary-active transition-colors"
              >
                Nossas pesquisas
              </Link>
              <Link
                href="/members"
                className="bg-canvas text-ink text-sm font-medium px-5 py-3 rounded-md border border-hairline hover:bg-surface-soft transition-colors"
              >
                Conhecer o grupo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Linhas de pesquisa */}
      <section className="bg-surface-soft py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Linhas de pesquisa
          </span>
          <h2 className="font-serif text-4xl text-ink tracking-tight mb-12">
            O que investigamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface-card rounded-lg p-8 min-h-48 min-h-48 min-h-48 min-h-48 min-h-48 min-h-48">
                <div className="text-primary text-2xl mb-4">✦</div>
                <h3 className="font-sans text-base font-medium text-ink mb-3">
                  Linha de Pesquisa {i}
                </h3>
                <p className="text-sm text-body leading-relaxed">
                  Descrição placeholder da linha de pesquisa {i}. Este texto será
                  substituído pelo conteúdo real do grupo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membros destaque */}
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Equipe
          </span>
          <h2 className="font-serif text-4xl text-ink tracking-tight mb-12">
            Quem somos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {['Pesquisador Sênior', 'Doutorando', 'Mestrando', 'Iniciação Científica'].map((role) => (
              <div key={role} className="text-center">
                <div className="w-20 h-20 rounded-full bg-surface-card mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-muted">✦</span>
                </div>
                <p className="text-sm font-medium text-ink">Nome Placeholder</p>
                <p className="text-xs text-muted mt-1">{role}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/members"
              className="text-sm font-medium text-primary hover:text-primary-active transition-colors"
            >
              Ver todos os membros →
            </Link>
          </div>
        </div>
      </section>

      {/* Publicações recentes */}
      <section className="bg-surface-dark py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Publicações
          </span>
          <h2 className="font-serif text-4xl text-on-dark tracking-tight mb-12">
            Trabalhos recentes
          </h2>
          <div className="flex flex-col gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-surface-dark-elevated rounded-lg p-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-medium uppercase tracking-widest text-primary mb-2 block">
                    Artigo · 2024
                  </span>
                  <h3 className="text-base font-medium text-on-dark mb-1">
                    Título da Publicação Placeholder {i}
                  </h3>
                  <p className="text-sm text-on-dark-soft">
                    Autor A, Autor B, Autor C — Journal Placeholder
                  </p>
                </div>
                <div className="shrink-0">
                  <span className="text-xs font-medium text-muted-soft border border-surface-dark-elevated px-3 py-1 rounded-pill">
                    DOI placeholder
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/publications"
              className="text-sm font-medium text-primary hover:text-primary-active transition-colors"
            >
              Ver todas as publicações →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA contato */}
      <section className="bg-primary py-24">
        <div className="container-site text-center">
          <h2 className="font-serif text-4xl text-on-primary tracking-tight mb-6">
            Quer fazer parte do LEVI?
          </h2>
          <p className="text-base text-on-primary opacity-90 mb-8 max-w-xl mx-auto">
            Estamos sempre abertos a colaborações, estudantes e pesquisadores
            interessados em nossas linhas de pesquisa.
          </p>
          <Link
            href="/contact"
            className="bg-canvas text-ink text-sm font-medium px-6 py-3 rounded-md hover:bg-surface-soft transition-colors inline-block"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </>
  );
}
