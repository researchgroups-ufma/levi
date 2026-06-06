import type { NextConfig } from 'next';

/**
 * Configuração do Next.js
 * output: 'export' — gera HTML estático para hospedagem no Cloudflare Pages
 * images: unoptimized — necessário para exportação estática
 * Nota: o Keystatic v5 não requer withKeystaticConfig
 */
const nextConfig: NextConfig = {

  images: {
    unoptimized: true, /* necessário para exportação estática no Cloudflare */
  },
};

export default nextConfig;