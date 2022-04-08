import { mdiHomeOutline } from '@mdi/js'

export default [
  {
    subheader: 'Template pages',
  },
  {
    title: 'Dashboards',
    icon: mdiHomeOutline,
    badge: '3',
    badgeColor: 'warning',
    children: [
      {
        title: 'CRM',
        to: 'dashboard-crm',
      },
      {
        title: 'Analytics',
        to: 'dashboard-analytics',
      },
      {
        title: 'eCommerce',
        to: 'dashboard-eCommerce',
      },
    ],
  },
]
