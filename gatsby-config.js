/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `BigDayMovies - zachowaj tę chwilę na zawsze...!`,
    shortTitle: `BigDayMovies`
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-transition-link`,
      options: {
        layout: path.join(__dirname, `src`, `components`, `Layout`)
      }
    },
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
        icon: `static/icon.png`
      },
    },
    `gatsby-plugin-offline`,
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
          include: path.join(__dirname, `src`, `assets`, `images`),
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `pages`,
        path: path.join(__dirname, `src`, `pages`),
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `assets`, `images`),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `videos`,
        path: path.join(__dirname, `src`, `assets`, `videos`),
      }
    },
  ],
}