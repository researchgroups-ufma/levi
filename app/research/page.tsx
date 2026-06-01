export default function ResearchPage() {
  const areas = [
    {
      title: 'Linha de Pesquisa 1',
      summary: 'Placeholder — resumo curto da linha de pesquisa 1.',
      description:
        'Placeholder — descrição completa da linha de pesquisa 1. Explique os objetivos, métodos e resultados esperados desta área de investigação do LEVI.',
    },
    {
      title: 'Linha de Pesquisa 2',
      summary: 'Placeholder — resumo curto da linha de pesquisa 2.',
      description:
        'Placeholder — descrição completa da linha de pesquisa 2. Explique os objetivos, métodos e resultados esperados desta área de investigação do LEVI.',
    },
    {
      title: 'Linha de Pesquisa 3',
      summary: 'Placeholder — resumo curto da linha de pesquisa 3.',
      description:
        'Placeholder — descrição completa da linha de pesquisa 3. Explique os objetivos, métodos e resultados esperados desta área de investigação do LEVI.',
    },
  ];

  return (
    <>
      {/* Hero da página */}
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Pesquisa
          </span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">
            Linhas de pesquisa
          </h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">
            Placeholder — descrição geral das áreas de investigação do LEVI
            e sua contribuição para o avanço científico.
          </p>
        </div>
      </section>

      {/* Lista de áreas */}
      <section className="bg-surface-soft py-24">
        <div className="container-site flex flex-col gap-8">
          {areas.map((area, i) => (
            <div key={i} className="bg-canvas rounded-lg p-8 border border-hairline">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-primary text-xl mt-1">✦</span>
                <div>
                  <h2 className="font-serif text-2xl text-ink tracking-tight mb-2">
                    {area.title}
                  </h2>
                  <p className="text-sm font-medium text-muted mb-4">
                    {area.summary}
                  </p>
                  <p className="text-base text-body leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
