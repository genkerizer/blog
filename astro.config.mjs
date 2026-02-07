// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
    site: 'https://hopny.github.io',
    base: '/blog',
    integrations: [
        mdx(),
        tailwind()
    ],
    markdown: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        shikiConfig: {
            themes: {
                light: 'github-light',
                dark: 'github-dark'
            },
            defaultColor: false,
            wrap: true
        }
    }
});
