export default function ContactPage() {
  return (
    <>
      <section className="bg-canvas py-24">
        <div className="container-site">
          <span className="inline-block text-xs font-medium uppercase tracking-widest text-primary mb-4">Contato</span>
          <h1 className="font-serif text-5xl text-ink tracking-tight mb-6">Fale com o LEVI</h1>
          <p className="text-lg text-body leading-relaxed max-w-2xl">Tem interesse em colaborar, ingressar no grupo ou simplesmente saber mais sobre nossas pesquisas? Entre em contato.</p>
        </div>
      </section>
      <section className="bg-surface-soft py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-canvas rounded-lg p-8 border border-hairline">
              <span className="text-primary text-2xl block mb-4">✦</span>
              <h2 className="font-sans text-base font-medium text-ink mb-2">E-mail</h2>
              <p className="text-sm text-muted mb-3">Para colaboracoes, duvidas e informacoes gerais.</p>
              <a href="mailto:contato@levi.ufma.br" className="text-sm font-medium text-primary hover:text-primary-active transition-colors">contato@levi.ufma.br</a>
            </div>
            <div className="bg-canvas rounded-lg p-8 border border-hairline">
              <span className="text-primary text-2xl block mb-4">✦</span>
              <h2 className="font-sans text-base font-medium text-ink mb-2">Localizacao</h2>
              <p className="text-sm text-muted mb-3">Venha nos visitar no campus da UFMA.</p>
              <p className="text-sm text-body leading-relaxed">Departamento de Fisica — CCET<br/>Universidade Federal do Maranhao<br/>Sao Luis — MA, Brasil</p>
            </div>
            <div className="bg-canvas rounded-lg p-8 border border-hairline">
              <span className="text-primary text-2xl block mb-4">✦</span>
              <h2 className="font-sans text-base font-medium text-ink mb-2">Oportunidades</h2>
              <p className="text-sm text-muted mb-3">Interessado em ingressar no grupo?</p>
              <p className="text-sm text-body leading-relaxed">Consulte os requisitos e entre em contato diretamente com o pesquisador responsavel pela linha de seu interesse.</p>
            </div>
          </div>
          <div className="bg-surface-card rounded-lg p-8 border border-hairline max-w-2xl">
            <h2 className="font-serif text-2xl text-ink tracking-tight mb-4">Como entrar em contato</h2>
            <p className="text-base text-body leading-relaxed mb-4">No momento, o contato e feito exclusivamente por e-mail. Descreva brevemente sua solicitacao e aguarde retorno em ate 5 dias uteis.</p>
            <a href="mailto:contato@levi.ufma.br" className="inline-block bg-primary text-on-primary text-sm font-medium px-5 py-3 rounded-md hover:bg-primary-active transition-colors">Enviar e-mail</a>
          </div>
        </div>
      </section>
    </>
  );
}
