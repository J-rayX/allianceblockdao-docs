// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AllianceBlock DAO',
			social: {
				github: 'https://github.com/j-rayx/allianceblockdao-docs',
			},
			sidebar: [
				{
					label: 'Introduction',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'DAO Overview', slug: 'introduction/introduction' },
						{ label: 'What can you do with DAO', slug: 'introduction/do-with-dao' },
						{ label: 'How DAO works', slug: 'introduction/how-dao-works' },
						{ label: 'DAO Smart Contracts', slug: 'introduction/smart-contracts' },
						{ label: 'DAO Fund', slug: 'introduction/dao-fund' },
						{ label: 'Participation Requirments', slug: 'introduction/participation-requirements' },
						{ label: 'Covenant & Constitution', slug: 'introduction/covenant-constitution' },
						{ label: '11 NoMercy Methods', slug: 'introduction/no-mercy' },
					],
				},
				{
					label: 'Grants',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Community Grants', slug: 'grants/community' },
						{ label: 'Receiving Grants', slug: 'grants/receiving' },
						{ label: 'Requesting Grants', slug: 'grants/requesting' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'DAO User Guide', slug: 'guides/user-guide' },
					],
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
