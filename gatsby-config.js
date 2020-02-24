/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require('dotenv').config();

module.exports = {
	siteMetadata: {
		title: 'ART Quilt',
		author: 'Doreen Chan'
	},
	plugins: [
		'gatsby-plugin-sass',
		'gatsby-plugin-stripe',

		{
			resolve: 'gatsby-source-stripe',
			options: {
				objects: ['Product', 'Sku'],
				secretKey: process.env.STRIPE_SECRET_KEY,
				downloadFiles: true
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Roboto Mono`,
						variants: [`400`, `700`]
					},
					{
						family: `Roboto`,
						subsets: [`latin`]
					}
				]
			}
		}
	]
};
