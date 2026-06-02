import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getCollection(folder: string): any[] {
  const dir = path.join(contentDirectory, folder);

  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

  return files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      ...data,
      content,
    };
  });
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getSingleFile(filePath: string): any | null {
  const fullPath = path.join(contentDirectory, filePath);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { ...data, content };
}
/**
 * Formata uma data para o padrão brasileiro legível.
 * Aceita string ISO, objeto Date ou qualquer valor que o Decap CMS gere.
 * Uso: formatDate(item.date) → "02 de junho de 2026"
 * Retorna string vazia se a data for inválida ou ausente.
 */
export function formatDate(date: unknown): string {
  if (!date) return '';
  try {
    return new Date(String(date)).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}