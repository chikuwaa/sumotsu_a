import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.my-site.dev', // 公開サイトのURLに変更してください
  trailingSlash: "always" // URL末尾のスラッシュを強制
});
