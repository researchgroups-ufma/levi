import { getCollection } from '@/lib/mdx';

type Research = {
  slug: string;
  title: string;
  summary: string;
  body?: string;
  image?: string;
};

export default function ResearchPage() {
  const areas = getCollection('research') as Research[];

  const fallback = [
    { slug: 'placeholder-1', title: 'Linha de Pesquisa 1', summary: 'Placeholder — resumo curto da linha de pesquisa 1.', body: 'Placeholder — descrição completa da linha de pesquisa 1.' },
    { slug: 'placeholder-2', title: 'Linha de Pesquisa 2', summary: 'Placeholder — resumo curto da linha de pesquisa 2.', body: 'Placeholder — descrição completa da linha de pesquisa 2.' },
    { slug: 'placeholder-3', title: 'Linha de Pesquisa 3', summary: 'Placeholder — resumo curto da linha de pesquisa 3.', body: 'Placeholder — descrição completa da linha de pesquisa 3.' },
  ];

  const data = areas.length > 0 ? areas : fallback;

  return (
    <>
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Pesquisa
          </span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">
            Linhas de pesquisa
          </h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">
            Descrição geral das áreas de investigação do LEVI e sua contribuição para o avanço científico.
          </p>
        </div>
      </section>

      <section className="bg-surface-soft py-24">
        <div className="container-site flex flex-col gap-8">
          {data.map((area) => (
            <div key={area.slug} className="bg-canvas rounded-lg p-8 border border-hairline">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-primary text-xl mt-1">✦</span>
                <div>
                  <h2 className="font-serif text-2xl text-ink tracking-tight mb-2">
                    {area.title}
                  </h2>
                  <p className="text-sm font-medium text-muted mb-4">
                    {area.summary}
                  </p>
                  {area.body && (
                    <p className="text-base text-body leading-relaxed">
                      {area.body}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}