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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url: 'https://api-euwest.graphcms.com/v1/ck27mzrd923oc01ffcg3u0pqj/master'
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
        icon: `src/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans\:200,300,600,800`,
          `Sacramento\:400`
        ],
      },
    },
  ],
}