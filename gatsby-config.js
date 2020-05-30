module.exports = {
  siteMetadata: {
    title: `CR4-DL`,
    description: `The Cradle. A vault for notes on artificial intelligence and the brain.`,
    author: {
      name: `Brian Pho`,
      github: `Brian-Pho`,
    },
    siteUrl: `https://brianpho.com/CR4-DL/`,
    menu: [
      {
        label: "Home",
        path: "/",
      },
      {
        label: "Notes",
        path: "/notes/",
      },
      {
        label: "Timeline",
        path: "/timeline/",
      },
      {
        label: "About",
        path: "/about/",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/pages`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
            },
          },
          {
            resolve: "gatsby-plugin-codegen",
            options: {}
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CR4-DL`,
        short_name: `Cradle`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#677B8C`,
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Arima Madurai`,
            variants: [`100`],
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
