const news = [
  {
    title: 'Título da Notícia Placeholder 1',
    date: '15 de maio de 2025',
    category: 'Publicação',
    excerpt:
      'Placeholder — resumo da notícia 1. Descreva brevemente o que aconteceu e por que é relevante para o grupo.',
  },
  {
    title: 'Título da Notícia Placeholder 2',
    date: '02 de abril de 2025',
    category: 'Defesa',
    excerpt:
      'Placeholder — resumo da notícia 2. Descreva brevemente o que aconteceu e por que é relevante para o grupo.',
  },
  {
    title: 'Título da Notícia Placeholder 3',
    date: '18 de março de 2025',
    category: 'Premiação',
    excerpt:
      'Placeholder — resumo da notícia 3. Descreva brevemente o que aconteceu e por que é relevante para o grupo.',
  },
  {
    title: 'Título da Notícia Placeholder 4',
    date: '05 de fevereiro de 2025',
    category: 'Visita',
    excerpt:
      'Placeholder — resumo da notícia 4. Descreva brevemente o que aconteceu e por que é relevante para o grupo.',
  },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero da página */}
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">
            Novidades
          </span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">
            Notícias
          </h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">
            Acompanhe as últimas novidades, conquistas e acontecimentos do LEVI.
          </p>
        </div>
      </section>

      {/* Lista de notícias */}
      <section className="bg-surface-soft py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.map((item, i) => (
              <div key={i} className="bg-canvas rounded-lg p-8 border border-hairline flex flex-col gap-4">
                {/* Categoria e data */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted">
                    {item.date}
                  </span>
                </div>
                {/* Título */}
                <h2 className="font-serif text-xl text-ink tracking-tight leading-snug">
                  {item.title}
                </h2>
                {/* Resumo */}
                <p className="text-sm text-body leading-relaxed">
                  {item.excerpt}
                </p>
                {/* Link */}
                <div className="mt-auto pt-2">
                  <span className="text-xs font-medium text-primary hover:text-primary-active transition-colors cursor-pointer">
                    Ler mais →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
