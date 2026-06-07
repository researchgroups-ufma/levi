import type { NextConfig } from 'next';

/**
 * Configuração do Next.js
 *
 * IMPORTANTE: output: 'export' foi removido pois conflita com as API routes
 * do Keystatic (/api/keystatic/[...params]). O Cloudflare Pages suporta
 * Next.js com rotas de API nativamente via @cloudflare/next-on-pages.
 *
 * images.unoptimized: necessário pois não há servidor de imagens em runtime.
 */
const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
import('@opennextjs/cloudflare').then(m => m.initOpenNextCloudflareForDev());
