'use client';

/**
 * PageCard — card de navegação com efeito hover
 * Usado na homepage para links para as páginas internas
 * Props:
 *   href: destino do link
 *   label: texto pequeno no topo (ex: "Linhas de pesquisa")
 *   title: título principal do card
 *   description: texto descritivo
 *   cta: texto do link no rodapé (ex: "Ver pesquisa →")
 */

import Link from 'next/link';
import { useState } from 'react';

type PageCardProps = {
  href: string;
  label: string;
  title: string;
  description: string;
  cta: string;
};

export default function PageCard({ href, label, title, description, cta }: PageCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={href}
      style={{
        display: 'block',
        textDecoration: 'none',
        border: `1px solid ${hovered ? 'var(--color-blue)' : 'var(--color-border)'}`,
        padding: '1.75rem 2rem',
        background: hovered ? '#eef4fc' : 'var(--color-light)',
        transition: 'border-color 0.15s, background 0.15s',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label superior */}
      <div style={{
        fontSize: '0.68rem',
        fontWeight: 600,
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--color-blue)',
        marginBottom: '0.5rem',
      }}>
        {label}
      </div>

      {/* Título */}
      <h3 style={{
        fontFamily: 'var(--font-family-serif)',
        fontSize: '1.4rem',
        fontWeight: 400,
        color: 'var(--color-navy)',
        marginBottom: '0.4rem',
      }}>
        {title}
      </h3>

      {/* Descrição */}
      <p style={{
        fontSize: '0.83rem',
        color: 'var(--color-muted)',
        fontWeight: 300,
        lineHeight: 1.55,
      }}>
        {description}
      </p>

      {/* CTA */}
      <div style={{
        marginTop: '1.2rem',
        fontSize: '0.8rem',
        color: 'var(--color-blue)',
        fontWeight: 600,
      }}>
        {cta}
      </div>
    </Link>
  );
}