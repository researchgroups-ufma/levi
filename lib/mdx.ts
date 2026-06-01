import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getCollection(folder: string) {
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

export function getSingleFile(filePath: string) {
  const fullPath = path.join(contentDirectory, filePath);

  if (!fs.existsSync(fullPath)) return null;

  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(fileContent);
  return { ...data, content };
}