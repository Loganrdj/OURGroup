module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `OURGroup`,
    description: `OURGroup DESCRIPTION`,
    author: `Logan Moss`,
    data: ['item 1', 'item 2'],
    portfolioData: [
      {
        name: "project1",
        description: "Laborum qui reprehenderit irure ipsum et id fugiat fugiat sunt."
      },
      {
        name: "project2",
        description: "Aliqua aliqua duis Lorem qui quis."
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


