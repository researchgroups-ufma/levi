import Link from 'next/link';
import { siteConfig } from '@/lib/config';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-on-dark-soft">
      <div className="container-site py-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Identidade */}
          <div className="col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary text-2xl">✦</span>
              <span className="font-serif text-xl text-on-dark tracking-tight">
                {siteConfig.acronym}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-on-dark-soft">
              {siteConfig.fullName}.<br />
              {siteConfig.department} — {siteConfig.unit}/{siteConfig.universityAcronym}.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-soft mb-4">
              Navegação
            </h3>
            <nav className="flex flex-col gap-2">
              {siteConfig.navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-on-dark-soft hover:text-on-dark transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contato */}
          <div className="col-span-1">
            <h3 className="text-xs font-medium uppercase tracking-widest text-muted-soft mb-4">
              Contato
            </h3>
            <p className="text-sm text-on-dark-soft">
              {siteConfig.email}
            </p>
            <p className="text-sm text-on-dark-soft mt-2">
              {siteConfig.university}<br />
              {siteConfig.city} — {siteConfig.state}, {siteConfig.country}
            </p>
          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="border-t border-surface-dark-elevated pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-muted-soft">
            © {new Date().getFullYear()} {siteConfig.acronym} — Todos os direitos reservados.
          </p>
          <p className="text-xs text-muted-soft">
            {siteConfig.university} — {siteConfig.department} / {siteConfig.unit}
          </p>
        </div>

      </div>
    </footer>
  );
}
