export default function AboutPage() {
  return (
    <>
      {/* Hero da página */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Apresentação
          </span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">
            Sobre o LEVI
          </h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">
            Placeholder — descrição geral do laboratório, sua missão e seu papel
            dentro do Departamento de Física da UFMA.
          </p>
        </div>
      </section>

      {/* Missão */}
      <section className="bg-surface-soft section-padding">
        <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-3xl text-ink tracking-tight mb-4">
              Missão
            </h2>
            <p className="text-base text-body leading-relaxed">
              Placeholder — descreva aqui a missão do grupo de pesquisa.
              O que o laboratório busca alcançar com suas investigações científicas.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl text-ink tracking-tight mb-4">
              Histórico
            </h2>
            <p className="text-base text-body leading-relaxed">
              Placeholder — descreva aqui o histórico do grupo. Quando foi fundado,
              como evoluiu, marcos importantes da trajetória do LEVI.
            </p>
          </div>
        </div>
      </section>

      {/* Afiliações */}
      <section className="bg-canvas section-padding">
        <div className="container-site">
          <h2 className="font-serif text-3xl text-ink tracking-tight mb-8">
            Afiliações
          </h2>
          <div className="flex flex-wrap gap-4">
            {['UFMA', 'CCET', 'Departamento de Física', 'CNPq', 'FAPEMA'].map((item) => (
              <span
                key={item}
                className="text-sm font-medium text-body border border-hairline px-4 py-2 rounded-pill"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
