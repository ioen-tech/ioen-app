import {
  mdiCalendarOutline,
  mdiEmailOutline,
  mdiFileDocumentOutline,
  mdiSolarPower,
  mdiViewDashboardVariantOutline,
} from '@mdi/js'

export default [
  {
    subheader: 'IOEN',
  },
  {
    title: 'Dashboard',
    icon: mdiViewDashboardVariantOutline,
    to: 'ioen-dashboard',
    resource: 'Community',
    action: 'read',
  },
  {
    title: 'Inbox',
    icon: mdiEmailOutline,
    to: 'apps-ioen-mail',
    resource: 'Community',
    action: 'read',
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
    icon: mdiSolarPower,
    resource: 'Community',
    action: 'read',
  },
  {
    title: 'Demo Setup',
    icon: mdiCalendarOutline,
    to: 'apps-calendar',
  },
]
