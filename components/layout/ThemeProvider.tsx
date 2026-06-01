import { siteConfig } from '@/lib/config';

export default function ThemeProvider() {
  const t = siteConfig.theme;

  const css = `
    :root {
      --color-primary: ${t.primary};
      --color-primary-active: ${t.primaryActive};
      --color-primary-disabled: ${t.primaryDisabled};
      --color-canvas: ${t.canvas};
      --color-surface-soft: ${t.surfaceSoft};
      --color-surface-card: ${t.surfaceCard};
      --color-surface-dark: ${t.surfaceDark};
      --color-surface-dark-elevated: ${t.surfaceDarkElevated};
      --color-surface-dark-soft: ${t.surfaceDarkSoft};
      --color-hairline: ${t.hairline};
      --color-hairline-soft: ${t.hairlineSoft};
      --color-ink: ${t.ink};
      --color-body-strong: ${t.bodyStrong};
      --color-body: ${t.body};
      --color-muted: ${t.muted};
      --color-muted-soft: ${t.mutedSoft};
      --color-on-primary: ${t.onPrimary};
      --color-on-dark: ${t.onDark};
      --color-on-dark-soft: ${t.onDarkSoft};
      --font-family-serif: ${t.fontSerif};
      --font-family-sans: ${t.fontSans};
      --font-family-mono: ${t.fontMono};
    }
  `;

  return <style dangerouslySetInnerHTML={{ __html: css }} />;
}
