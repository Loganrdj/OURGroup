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
        type: "Restoration",
        location: "Shanghai",
        work: "Heritage Building Restoration",
        owner: "OCT Group",
        scale: "3800 metres squared",
        designperiod: "2011-2018",
        summary: "This project embodies the protection and utilization of architectural heritage from four aspects: 1) the protective restoration of the building itself, 2) the presentation of heritage values, 3) the standardized implementation of work procedures, and 4) the use of precision restoration techniques.",
        firstDescription: "The preservation and revitalization of the former site of the Shanghai General Chamber of Commerce is a typical case of successful practice in the protection of urban heritage. It is a historical and cultural landmark to commemorate the modern Chinese business elites in promoting the development of Shanghai’s urban development. It is also a contemporary historical heritage protection worker. In the face of the goal of an excellent global city, it is a Shanghai urban construction achievement that does not forget the original aspiration and works hard together.",
        secondDescription: "This project embodies the exemplary protection and utilization of architectural heritage from four aspects: the protective restoration of the building itself, the diverse presentation of heritage values, the standardized implementation of work procedures, and the multi-level promotion of cultural protection."
      },
      {
        name: "Wuhan LanLing District - Urban Planning",
        type: "Urban Renewal / Cultural and Tourism",
        location: "Wuhan",
        work: "Master Planning - Urban Planning",
        owner: "Wuhan Tourism Development Investment Group Co., Ltd.",
        scale: "62 Hectares",
        designperiod: "2021",
        summary: "The objective of this project starts from repurposing of different trade mixes and contents to create an all-inclusive community. Special effort is put into strengthening cultural recognition of Wuhan and its heritage value. At the same time, we aim to become a global model for combining historical neighbourhood and people of all ages to form a green and harmonious society.",
        firstDescription: "The urban design of this project is guided by the industrial positioning, combined with the historical functional positioning and spatial form of the Lanling area, and proposes three diversified renewal viewpoints, namely, activating the urban vitality through the use of multiple functions and combinations of the layout to form an urban space.",
        secondDescription: "It amplifies diversity by strengthening cultural recognition and increasing cultural experience places for exploring ancient sources, showing how the diversity of history and culture is formed, and by creating a global model of future life. It is suitable for social groups of all ages and forms a diversity of social structure."
      },
      {
        name: "Nanjing BaiZiTing - Heritage Precinct",
        type: "Urban Renewal",
        location: "Nanjing",
        work: "Consultancy",
        owner: "Nanjing Zhong Shan Group / Shui On Group",
        scale: "~79,000 metres squared",
        designperiod: "2018",
        summary: "The intention of the BaiZiTing project is to research the historical resources and hertiage in order to review its spirit and identity. Many heartwarming details are discovered and are conveyed in a meaningful way to the public through architectural design.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "Shandong - Outlet Mall",
        type: "Leisure and Tourism Real Estate",
        location: "Shandong",
        work: "Concept Design / Architectural Design",
        owner: "Shandong Wellness City Development",
        scale: "~240,000 metres squared",
        designperiod: "2019",
        summary: "The first western style outlet mall in this part of Shandong Province. In order to create foot traffic during winter months, a hot spring hotel was added to make the project a year round destination.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "Suzhou Riverbank Redevelopment",
        type: "Urban Renewal",
        location: "Shanghai",
        work: "City Planning / Design Management",
        owner: "Overseas Chinese Town Holdings Company (OCT Group)",
        scale: "~100,000 metres squared",
        designperiod: "2011-2015",
        summary: "The project calls for research into the historical significance of the area and come to conclusion on the heritage value of various buildings. We then proceeded with city planning and preservation strategy.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "TaiLaiFang & TongYiLi - Urban Renewal",
        type: "Urban Repurposing",
        location: "Shanghai",
        work: "Retail Planning / Architectural Design",
        owner: "Shanghai Western Property Group",
        scale: "TaiLaiFang -  6,752.67 metres squared, TongYiLi - 8751.58 metres squared, ",
        designperiod: "2020",
        summary: "This development aims to create high quality iconic community in Putuo District, Shanghai. TaiLaiFang will accommodate a prestigious boutique hotel while TongYiLi will offer a lifestyle hub that combines retail and entertainment.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "Rockbund",
        type: "Urban Renewal",
        location: "Shanghai",
        work: "Design / Restoration",
        owner: "New Huangpu Group",
        scale: "~50,000 squared metres",
        designperiod: "2007-2010",
        summary: "The development process of Rockbund in Shanghai is a way of integrating past memories and today’s lifestyle, a pristine example of repositioning and repurposing a historical portion of a district.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "Xian Textile City",
        type: "Urban Renewal / Real Estate",
        location: "Xian",
        work: "Positioning / Concept Design / Architectural Design / Leasing & Asset Management",
        owner: "Xian Changle City Development Co. Ltd.",
        scale: "29.3 Hectares",
        designperiod: "2017 - Present",
        summary: "A beautifully crafted old textile factory was given a new lease of life, we converted it into a theme park with retail, entertainment, food & beverage, tourist services and it eventually became a landmark project in Xian.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "Wuhan XianAn Estate - Restoration",
        type: "Heritage Building",
        location: "Wuhan",
        work: "Restoration",
        owner: "Huafa Group",
        scale: "14,000 metres squared",
        designperiod: "2018",
        summary: "With the spirit of creating precious masterpiece, we spared no detail in preserving the hertitage buildings while new merchandising plans were introduced.",
        firstDescription: "",
        secondDescription: ""
      },
      {
        name: "Zhang Yuan - Preservation Project",
        type: "Urban Repurposing",
        location: "Shanghai",
        work: "Retail Planning / Concept Design",
        owner: "China Resources (Holdings) Co., Ltd.",
        scale: "~45,715 metres squared",
        designperiod: "2019",
        summary: "Zhang Yuan came with very challenging preservation restrictions such as a Shikumen Museum and 42 heritage buildings—In addition, a 60% building coverage and 3 subway station interchanges. While striving to fulfill the above constraints, we managed to explore 4 levels of underground to create functional space.",
        firstDescription: "",
        secondDescription: ""
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


