'use client';

import Link from 'next/link';
import { useState } from 'react';
import { siteConfig } from '@/lib/config';

/**
 * Header — Navbar fixa no topo
 * Fundo escuro (navy) com blur, altura de 56px
 * Links de navegação vêm de siteConfig.navLinks em lib/config.ts
 * Para adicionar/remover links, edite navLinks no config
 */
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        height: '56px',
        background: 'rgba(12,26,46,0.97)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      {/* ── Logo / Nome do grupo ── */}
      <Link
        href="/"
        style={{
          fontFamily: 'var(--font-family-serif)',
          fontSize: '1.2rem',
          fontWeight: 500,
          color: 'white',
          textDecoration: 'none',
          letterSpacing: '0.01em',
        }}
      >
        {siteConfig.acronym}
      </Link>

      {/* ── Navegação desktop ── */}
      <nav style={{ display: 'flex', listStyle: 'none', gap: 0 }}>
        {siteConfig.navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              display: 'block',
              padding: '0 1rem',
              lineHeight: '56px',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.65)',
              textDecoration: 'none',
              transition: 'color 0.15s',
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.color = 'white';
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.65)';
            }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ── Botão hamburguer mobile ── */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menu"
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: '0.5rem',
          color: 'white',
        }}
        className="mobile-menu-btn"
      >
        <div style={{ width: '20px', height: '2px', background: 'white', marginBottom: '4px' }} />
        <div style={{ width: '20px', height: '2px', background: 'white', marginBottom: '4px' }} />
        <div style={{ width: '20px', height: '2px', background: 'white' }} />
      </button>

      {/* ── Menu mobile expandido ── */}
      {menuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '56px',
            left: 0,
            right: 0,
            background: 'rgba(12,26,46,0.98)',
            padding: '1rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            borderTop: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          {siteConfig.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: '0.9rem',
                color: 'rgba(255,255,255,0.75)',
                textDecoration: 'none',
                padding: '0.5rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}