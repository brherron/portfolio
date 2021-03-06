module.exports = {
  siteMetadata: {
    title: "Beau Herron",
    titleTemplate: "%s | Designer, Developer, & Musician",
    description: `Designer, Developer, & Musician.`,
    author: `Beau Herron`,
    siteUrl: `https://beauherrondev.com`,
    keywords: `Developer`,
    image: `/src/images/main-logo.svg`,
    twitterUsername: "@beauherron_dev"
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['proxima-nova', 'permanent-marker', 'aktiv-grotesk'],
          urls: ['https://use.typekit.net/dok2zlr.css']
        }
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Beau Herron Portfolio`,
        short_name: `beauherrondev`,
        description: `Portfolio website for Beau Herron | Designer, Developer, & Musician`,
        lang: `en`,
        display: `standalone`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/site-icon.png`,
      },
    },
    `gatsby-plugin-sass`
  ],
}
