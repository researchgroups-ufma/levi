'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-canvas border-b border-hairline sticky top-0 z-50">
      <div className="container-site h-16 flex items-center justify-between">

        {/* Logo + Nome */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <span className="text-primary text-2xl">✦</span>
          <span className="font-serif text-xl text-ink tracking-tight">{siteConfig.acronym}</span>
          <span className="text-muted text-sm hidden sm:block">/ {siteConfig.universityAcronym}</span>
        </Link>

        {/* Nav Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body hover:text-ink transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          className="md:hidden text-ink p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          <div className="w-5 h-0.5 bg-ink mb-1"></div>
          <div className="w-5 h-0.5 bg-ink mb-1"></div>
          <div className="w-5 h-0.5 bg-ink"></div>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-canvas border-t border-hairline px-6 py-4 flex flex-col gap-4">
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-body hover:text-ink transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
