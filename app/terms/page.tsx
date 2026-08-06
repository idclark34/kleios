import fs from 'node:fs/promises';
import path from 'node:path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export const metadata = { title: 'Terms — Kleios' };

export default async function TermsPage() {
  const raw = await fs.readFile(path.join(process.cwd(), 'content', 'terms.md'), 'utf8');
  return (
    <main className="bg-cream text-ink min-h-screen px-6 md:px-10 py-16">
      <div className="max-w-[680px] mx-auto prose prose-stone prose-headings:font-sans prose-headings:font-bold prose-headings:tracking-[-0.03em] prose-h1:text-[40px] prose-h2:text-[22px] prose-p:text-[15px] prose-p:leading-[1.65]">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{raw}</ReactMarkdown>
      </div>
    </main>
  );
}
