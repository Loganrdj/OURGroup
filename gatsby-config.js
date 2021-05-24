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
        name: "BVLGARI Hotel (Former Chamber of Commerce)",
        type: "Historic Building",
        location: "Shanghai",
        work: "Historical preservation and repair",
        owner: "OCT Group",
        scale: "3800 square meters",
        designperiod: "2011-2018",
        description: "The preservation and revitalization of the former site of the Shanghai General Chamber of Commerce is a typical case of successful practice in the protection of urban heritage. It is a historical and cultural landmark to commemorate the modern Chinese business elites in promoting the development of Shanghai’s urban development. It is also a contemporary historical heritage protection worker. In the face of the goal of an excellent global city, it is a Shanghai urban construction achievement that does not forget the original aspiration and works hard together."
      },
      {
        name: "Wuhan Renewal Project",
        type: "Area Update",
        location: "Wuhan",
        work: "Urban Design",
        owner: "Wuhan Tourism Development Investment Group Co., Ltd.",
        scale: "62 hectares",
        designperiod: "2021",
        description: "The urban design of this project is guided by the industrial positioning, combined with the historical functional positioning and spatial form of the Lanling area, and proposes three diversified renewal viewpoints, namely, activating the urban vitality through the use of multiple functions and combinations of the layout to form an urban space."
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
        name: `OURGroup`,
        short_name: `OURGroup`,
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


