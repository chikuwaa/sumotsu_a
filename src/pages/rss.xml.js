import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'サイト名',
    description: 'サイトの説明',
    site: 'https://dummy.app',
    items: await pagesGlobToRssItems(import.meta.glob('./txt/**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}