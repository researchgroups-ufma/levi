import ThemeProvider from '@/components/layout/ThemeProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

/**
 * Layout das páginas públicas do site
 * Inclui Header, Footer e ThemeProvider
 * Separado do layout raiz para que o /keystatic não herde esses elementos
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider />
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}