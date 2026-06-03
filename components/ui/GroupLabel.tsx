/**
 * GroupLabel — rótulo de subgrupo dentro de uma seção
 * Ex: "Doutorandos", "Mestrandos", "Alunos de graduação"
 */
export default function GroupLabel({ label }: { label: string }) {
  return (
    <div style={{
      fontSize: '0.68rem',
      fontWeight: 600,
      letterSpacing: '0.15em',
      textTransform: 'uppercase' as const,
      color: 'var(--color-blue)',
      marginBottom: '1.25rem',
      paddingBottom: '0.4rem',
      borderBottom: '1px solid var(--color-border)',
    }}>
      {label}
    </div>
  );
}