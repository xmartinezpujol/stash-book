require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Stash Book`,
    description: `A way to keep nice texts/quotes from the books I recently read.`,
    author: `@xmartinezpujol`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        background_color: `#4b3621`,
        theme_color: `#4b3621`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-source-prismic',
      options: {
        repositoryName: 'stash-book',
        accessToken: `${process.env.PRISMIC_API_KEY}`,
        linkResolver: ({ node, key, value }) => doc => {
          // Your link resolver
        },
        htmlSerializer: ({ node, key, value }) => (
          type,
          element,
          content,
          children,
        ) => {
          // Your HTML serializer
        },
        lang: 'en-gb',
      },
    },
  ],
}
