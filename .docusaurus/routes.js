import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '1ee'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '656'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '45b'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '7a0'),
            routes: [
              {
                path: '/docs/category/tutorial---basics',
                component: ComponentCreator('/docs/category/tutorial---basics', 'd44'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Fig introduction',
                component: ComponentCreator('/docs/Fig introduction', 'cd8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Hello World',
                component: ComponentCreator('/docs/Hello World', '320'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Installation',
                component: ComponentCreator('/docs/Installation', '661'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Comments',
                component: ComponentCreator('/docs/tutorial-basics/Comments', '015'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Control flow',
                component: ComponentCreator('/docs/tutorial-basics/Control flow', '089'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Data Types',
                component: ComponentCreator('/docs/tutorial-basics/Data Types', 'f8d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/External Statement',
                component: ComponentCreator('/docs/tutorial-basics/External Statement', 'a8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Functions',
                component: ComponentCreator('/docs/tutorial-basics/Functions', 'c52'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Import',
                component: ComponentCreator('/docs/tutorial-basics/Import', 'edb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial-basics/Variables',
                component: ComponentCreator('/docs/tutorial-basics/Variables', '44b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'ce6'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
