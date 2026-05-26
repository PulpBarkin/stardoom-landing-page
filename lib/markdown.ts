/**
 * markdown.ts — server-side .md → HTML conversion.
 *
 * Runs at build time (Next.js static export) so we never ship a markdown
 * parser to the browser. `remark-gfm` enables GitHub-flavored markdown:
 * tables, task lists, autolinks, strikethrough — all of which our
 * privacy + terms .md files use.
 */

import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export interface RenderedDoc {
  /** Front-matter + raw .md content (handy if a page wants title etc) */
  frontmatter: Record<string, unknown>;
  /** Parsed HTML — drop into a div via `dangerouslySetInnerHTML`. */
  html: string;
}

/**
 * Reads `content/{slug}.md`, parses front-matter, and returns rendered
 * HTML. Throws (build-fails) if the file is missing — that's intentional
 * so a typo doesn't ship an empty privacy page.
 */
export async function readMarkdown(slug: string): Promise<RenderedDoc> {
  const filePath = path.join(CONTENT_DIR, `${slug}.md`);
  const raw = await fs.readFile(filePath, 'utf8');
  const { data, content } = matter(raw);

  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    frontmatter: data,
    html: String(processed),
  };
}
