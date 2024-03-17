import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function GET() {
  return rss({
    title: 'スモツ',
    description: '二次創作同人サークル「スモツ」の倉庫サイト',
    site: 'https://sumotu.dummy.app',
    items: await pagesGlobToRssItems(import.meta.glob('./txt/**/*.md')),
    customData: `<language>ja-jp</language>`,
  });
}