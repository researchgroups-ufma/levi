import { getCollection } from '@/lib/mdx';

type News = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  cover_image?: string;
};

export default function NewsPage() {
  const news = getCollection('news') as unknown as News[];

  const fallback: News[] = [
    { slug: 'placeholder-1', title: 'Título da Notícia Placeholder 1', date: '15 de maio de 2025', category: 'Publicação', excerpt: 'Placeholder — resumo da notícia 1.' },
    { slug: 'placeholder-2', title: 'Título da Notícia Placeholder 2', date: '02 de abril de 2025', category: 'Defesa', excerpt: 'Placeholder — resumo da notícia 2.' },
    { slug: 'placeholder-3', title: 'Título da Notícia Placeholder 3', date: '18 de março de 2025', category: 'Premiação', excerpt: 'Placeholder — resumo da notícia 3.' },
    { slug: 'placeholder-4', title: 'Título da Notícia Placeholder 4', date: '05 de fevereiro de 2025', category: 'Visita', excerpt: 'Placeholder — resumo da notícia 4.' },
  ];

  const data = news.length > 0 ? news : fallback;

  return (
    <>
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

      <section className="bg-surface-soft py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.map((item) => (
              <div key={item.slug} className="bg-canvas rounded-lg p-8 border border-hairline flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {item.category}
                  </span>
                  <span className="text-xs text-muted">
                    {item.date}
                  </span>
                </div>
                <h2 className="font-serif text-xl text-ink tracking-tight leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-body leading-relaxed">
                  {item.excerpt}
                </p>
                <div className="mt-auto pt-2">
                  <span className="text-xs font-medium text-primary cursor-pointer">
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