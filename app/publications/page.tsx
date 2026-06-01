type Publication = {
  title: string;
  authors: string;
  year: number;
  journal: string | null;
  type: string;
  doi: string | null;
  arxiv: string | null;
};

const publications: Publication[] = [
  { title: 'Publicacao Placeholder 1', authors: 'Autor A, Autor B', year: 2024, journal: 'Journal Placeholder', type: 'Artigo', doi: '10.xxxx/p1', arxiv: 'xxxx.xxxxx' },
  { title: 'Publicacao Placeholder 2', authors: 'Autor A, Autor D', year: 2024, journal: 'Physical Review Placeholder', type: 'Artigo', doi: '10.xxxx/p2', arxiv: null },
  { title: 'Publicacao Placeholder 3', authors: 'Autor B, Autor E', year: 2023, journal: null, type: 'Preprint', doi: null, arxiv: 'xxxx.xxxxx' },
  { title: 'Publicacao Placeholder 4', authors: 'Autor A, Autor C', year: 2023, journal: 'Placeholder Letters', type: 'Artigo', doi: '10.xxxx/p4', arxiv: 'xxxx.xxxxx' },
];

export default function PublicationsPage() {
  return (
    <>
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">Producao cientifica</span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">Publicacoes</h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">Artigos, preprints e outros trabalhos produzidos pelos membros do LEVI.</p>
        </div>
      </section>
      <section className="bg-surface-dark py-24">
        <div className="container-site flex flex-col gap-6">
          {publications.map((pub, i) => (
            <div key={i} className="bg-surface-dark-elevated rounded-lg p-8">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium uppercase tracking-widest text-primary">{pub.type}</span>
                    <span className="text-xs text-muted-soft">·</span>
                    <span className="text-xs text-muted-soft">{pub.year}</span>
                  </div>
                  <h2 className="font-sans text-base font-medium text-on-dark leading-snug">{pub.title}</h2>
                  <p className="text-sm text-on-dark-soft">{pub.authors}</p>
                  {pub.journal !== null && <p className="text-sm text-muted-soft italic">{pub.journal}</p>}
                </div>
                <div className="flex gap-3 shrink-0">
                  {pub.doi !== null && <a href={'https://doi.org/' + pub.doi} className="text-xs font-medium text-primary border border-surface-dark-soft px-3 py-1 rounded-pill">DOI</a>}
                  {pub.arxiv !== null && <a href={'https://arxiv.org/abs/' + pub.arxiv} className="text-xs font-medium text-primary border border-surface-dark-soft px-3 py-1 rounded-pill">arXiv</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
