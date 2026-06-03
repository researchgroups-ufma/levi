import { siteConfig } from '@/lib/config';

/**
 * ThemeProvider
 * Injeta as variáveis CSS do tema definido em lib/config.ts
 * Para trocar a identidade visual do site, edite apenas lib/config.ts
 * Este componente lê os valores e os aplica automaticamente em todo o site
 */
export default function ThemeProvider() {
  const t = siteConfig.theme;

  const css = `
    :root {
      /* ── Cores principais ──────────────────────────────────────────────── */
      --color-navy: ${t.navy};          /* fundo da navbar, hero, footer e títulos */
      --color-blue: ${t.blue};          /* bordas de destaque e títulos de seção   */
      --color-blue-mid: ${t.blueMid};   /* botão primário e hover                  */
      --color-blue-link: ${t.blueLink}; /* links inline e pills                    */

      /* ── Superfícies ───────────────────────────────────────────────────── */
      --color-white: ${t.white};        /* fundo padrão das páginas                */
      --color-light: ${t.light};        /* fundo de cards e seções alternadas      */
      --color-border: ${t.border};      /* bordas e divisores                      */

      /* ── Texto ─────────────────────────────────────────────────────────── */
      --color-text: ${t.text};          /* texto principal                         */
      --color-muted: ${t.muted};        /* texto secundário e descrições           */

      /* ── Tipografia ────────────────────────────────────────────────────── */
      --font-family-serif: ${t.fontSerif}; /* títulos e display                   */
      --font-family-sans: ${t.fontSans};   /* corpo, navegação e labels            */
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}