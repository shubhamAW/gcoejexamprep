// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GCOEJ EXAM PREP',
  tagline: 'making study easy',
  url: 'https://gcoejexamprep-shubhamaw.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shubhamAW', // Usually your GitHub org/user name.
  projectName: 'gcoejexamprep', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
           showLastUpdateAuthor:true,
           showLastUpdateTime:true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
           
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    //for computer dept.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'computer',
        path: 'computer',
        routeBasePath: 'computer',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
    //for languages
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Languages',
        path: 'Languages',
        routeBasePath: 'Languages',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
    //for Entc dept.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Entc',
        path: 'Entc',
        routeBasePath: 'Entc',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
    //for Data-structure Folder.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Data-Structures',
        path: 'Data-Structures',
        routeBasePath: 'Data-Structures',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
      hideOnScroll: true,
        title: 'GCOEJ EXAM PREP',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to:'/computer/intro',
            position:'left',
            label:'Computer',
            activeBaseRegex:`/computer/`,
           
          },
          // {
          //   label:'Languages',
          //   to:'/Languages/intro'
          // },
          //{to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   href: 'https://github.com/shubhamAW/gcoejexamprep/',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Classes',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label:'Computer',
                to:'/computer/intro',
              },
              
              {
                label:'Entc',
                to:'/Entc/intro',
              },


            ],
          },
          {
            title: 'DSA',
            items: [
              
              {
                label: 'Languages(c,c++..)',
                to:'Languages/intro',
              },
              {
                label: 'Data-Structures',
                to:'Data-Structures/intro',
              },
              
            ],
          },
          {
            title: 'Development',
            items: [
              // {
              //   label: 'Blog',
              //   to: '/blog',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/shubhamAW/gcoejexamprep/',
              },
            ],
          },
        ],
        copyright: `Made in ❤️ with GCOEJ.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
