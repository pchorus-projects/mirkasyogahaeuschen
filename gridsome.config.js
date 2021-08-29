// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Mirkas Yogahäuschen',
  siteUrl: 'https://mirkasyogahaeuschen.de',
  chainWebpack: (config) => config.resolve.alias.set('@assets', '@/assets'),
  // TODO: siteDescription
  siteDescription: 'Yoga & mehr',
  plugins: [
    {
      use: 'gridsome-source-graphql-prismic',
      options: {
        url: 'https://mirkasyogahaeuschen.prismic.io',
        fieldName: 'prismic',
        typeName: 'prismic',
        headers: {
          'Prismic-Ref': process.env.PRISMIC_REF,
          Authorization: `Token ${process.env.PRISMIC_TOKEN}`,
        },
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
  ],
};
