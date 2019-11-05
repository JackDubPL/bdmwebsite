/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `BigDayMovies - zachowaj tę chwilę na zawsze...!`,
    shortTitle: `BigDayMovies`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BigDayMovies - zachowaj tę chwilę na zawsze...!`,
        short_name: `BigDayMovies`,
        start_url: `/`,
        background_color: `#fff`,
        lang: 'pl',
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            'family': 'Open Sans',
            'variants': [
              '200',
              '300',
              '600',
              '800'
            ],
            'subsets': [
              'latin-ext'
            ]
          },
          {
            'family': 'Sacramento',
            'variants': [
              '400'
            ],
            'subsets': [
              'latin-ext'
            ]
          }
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      }
    }
  ],
}