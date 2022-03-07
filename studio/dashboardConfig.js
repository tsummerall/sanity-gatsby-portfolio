export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622679bf3f5849008d8f1c3d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ubrxqt17',
                  apiId: 'a14a6db1-1ea1-44b7-8500-62fa18b969d7'
                },
                {
                  buildHookId: '622679bf45b43100962f160f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-t2hsyyzw',
                  apiId: '2c097bd1-cdff-4074-afa0-8e31ed4872a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tsummerall/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-t2hsyyzw.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
