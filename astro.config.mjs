// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
const site = process.env.SITE_URL ?? 'https://stevending1st.github.io';
const base = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/ai-coding-from-zero' : '/');
const repository = 'https://github.com/stevending1st/ai-coding-from-zero';
const docsEditBase = `${repository}/edit/main/src/content/docs/`;

export default defineConfig({
	site,
	base,

	markdown: {
		remarkPlugins: [remarkMath],  // 新增
		rehypePlugins: [rehypeKatex]  // 新增
	},

	integrations: [
		starlight({
			title: 'AI Coding from Zero',
			social: [{ icon: 'github', label: 'GitHub', href: repository }],
			editLink: { baseUrl: docsEditBase },
			sidebar: [
				{
					label: '基础篇',
					items: [
						// Each item here is one entry in the navigation menu.
						'basic/first-application',
						'basic/discovering-needs',
						'basic/software-architecture',
						'basic/application-form',
						'basic/introduction-to-programming-languages',
						'basic/introduction-to-simple-code-reuse-techniques',
						'basic/basic-technology-selection',
					],
				},
				{
					label: '专项篇',
					items: [],
				}
			],
		}),
	],
});
