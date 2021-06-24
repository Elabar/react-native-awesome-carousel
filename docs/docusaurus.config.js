/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'RNAwesomeCarousel',
  tagline: 'RNAwesomeCarousel are cool',
  url: 'https://react-native-awesome-carousel.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Elabar', // Usually your GitHub org/user name.
  projectName: 'react-native-awesome-carousel', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'RNAwesomeCarousel',
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://github.com/Elabar/react-native-awesome-carousel',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Elabar. Built with Docusaurus.`,
    },
    algolia: {
      apiKey: '668768d030f5f9b77e947952d64b31a5',
      indexName: 'react-native-awesome-carousel',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Elabar/react-native-awesome-carousel/tree/master/docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
