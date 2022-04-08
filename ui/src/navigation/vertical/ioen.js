import { mdiCalendarOutline, mdiEmailOutline, mdiFileDocumentOutline, mdiViewDashboardVariantOutline } from '@mdi/js'

export default [
  {
    subheader: 'IOEN',
  },
  {
    title: 'Dashboard',
    icon: mdiViewDashboardVariantOutline,
    to: 'ioen-dashboard',
  },
  {
    title: 'Inbox',
    icon: mdiEmailOutline,
    to: 'apps-ioen-mail',
  },
  {
    title: 'Invoices',
    icon: mdiFileDocumentOutline,
    to: 'apps-invoice-list',
  },
  {
    title: 'Supply Requests',
    to: 'supply-requests',
  },
  {
    title: 'Supply Agreements',
    to: 'supply-agreements',
  },
  {
    title: 'Demo Setup',
    icon: mdiCalendarOutline,
    to: 'apps-calendar',
  },
]
