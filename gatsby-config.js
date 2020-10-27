module.exports = {
  siteMetadata: {
    title: 'Shabad OS',
    description: 'Our mission is to learn about the Shabad and make it universally accessible to every person on the planet.',
    author: 'Shabad OS Team <team@shabados.com>',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-better-jss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Shabad OS',
        short_name: 'ShabadOS',
        start_url: '/',
        display: 'standalone',
        icon: 'static/logo.png',
      },
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: './graphqlTypes.ts',
        documentPaths: [
          './src/**/*.{ts,tsx}',
          './node_modules/gatsby-*/**/*.js',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'fonts',
        path: `${__dirname}/src/fonts/`,
      },
    },
  ],
}
