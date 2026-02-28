// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
const site = process.env.SITE_URL ?? 'https://stevending1st.github.io';
const base = process.env.BASE_PATH ?? (process.env.NODE_ENV === 'production' ? '/ai-coding-from-zero' : '/');
const repository = 'https://github.com/stevending1st/ai-coding-from-zero';
const docsEditBase = `${repository}/edit/main/src/content/docs/`;

export default defineConfig({
	site,
	base,
	integrations: [
		starlight({
			title: 'AI Coding from Zero',
			social: [{ icon: 'github', label: 'GitHub', href: repository }],
			editLink: { baseUrl: docsEditBase },
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						'guides/first-application',
						'guides/discovering-needs',
						'guides/software-architecture',
						'guides/application-form',
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
