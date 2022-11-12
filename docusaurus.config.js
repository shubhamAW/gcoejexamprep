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
  favicon: 'img/engineering_team.svg',

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
    //for ele dept.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'electrical',
        path: 'electrical',
        routeBasePath: 'electrical',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
    //for instrumentation dept.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Instrumentation',
        path: 'Instrumentation',
        routeBasePath: 'Instrumentation',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
    //for civil dept.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'civil',
        path: 'civil',
        routeBasePath: 'civil',
        sidebarPath: require.resolve('./sidebars.js'),
        // ... other options
        
        editUrl:
            'https://github.com/shubhamAW/gcoejexamprep/tree/main/',
        showLastUpdateAuthor:true,
        showLastUpdateTime:true,
      },
      
    ],
    //for mech dept.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mech',
        path: 'mech',
        routeBasePath: 'mech',
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
    //for git and github.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'git-Github',
        path: 'git-Github',
        routeBasePath: 'git-Github',
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
          
        },
      },
      navbar: {
      hideOnScroll: true,
        title: 'GCOEJ EXAM PREP',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Tutorial',
          // },
          {
            to:'/computer/intro',
            position:'left',
            label:'Computer',
            activeBaseRegex:`/computer/`,
           
          },

          {
            to:'/Entc/intro',
            position:'left',
            label:'Entc',
            activeBaseRegex:`/Entc/`,
           
          },
          {
            to:'/electrical/intro',
            position:'left',
            label:'Electrical',
            activeBaseRegex:`/electrical/`,
           
          },
          {
            to:'/Instrumentation/intro',
            position:'left',
            label:'Instru.',
            activeBaseRegex:`/instrumentation/`,
           
          },
          {
            to:'/civil/intro',
            position:'left',
            label:'civil',
            activeBaseRegex:`/civil/`,
           
          },
          {
            to:'/mech/intro',
            position:'left',
            label:'Mech.',
            activeBaseRegex:`/mech/`,
           
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
              {
                label:'electrical',
                to:'/electrical/intro',
              },
              {
                label:'instru.',
                to:'/Instrumentation/intro',
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
                label: 'Git& GitHub',
                to:'git-github/intro',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shubhamAW/gcoejexamprep/',
              },
            ],
          },
          {
            title: 'Program',
            items: [
              {
                label: 'Become a Contributor',
                href:'https://forms.gle/WQQcAWM7qYobye1M6',
              },
              {
                label: 'Contributors',
                to: '/docs/intro',
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
