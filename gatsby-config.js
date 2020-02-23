/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
		title: 'ART Quilt',
		author: 'Doreen Chan'
	},
	plugins: [
		'gatsby-plugin-sass',
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
