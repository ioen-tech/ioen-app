// eslint-disable-next-line object-curly-newline
import { mdiEyeOffOutline, mdiFileDocumentOutline, mdiLifebuoy, mdiMenu } from '@mdi/js'

export default [
  {
    subheader: 'Others',
  },
  {
    title: 'Menu Levels',
    icon: mdiMenu,
    children: [
      {
        title: 'Menu Level 2.1',
      },
      {
        title: 'Menu Level 2.2',
        children: [
          {
            title: 'Menu Level 3.1',
          },
          {
            title: 'Menu Level 3.2',
          },
        ],
      },
    ],
  },
  {
    title: 'Disabled Menu',
    to: null,
    icon: mdiEyeOffOutline,
    disabled: true,
  },
  {
    title: 'Raise Support',
    href: 'https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/documentation/guide/getting-started/support.html',
    icon: mdiLifebuoy,
  },
  {
    title: 'Documentation',
    href: 'https://themeselection.com/demo/materio-vuetify-vuejs-admin-template/documentation',
    icon: mdiFileDocumentOutline,
  },
]
