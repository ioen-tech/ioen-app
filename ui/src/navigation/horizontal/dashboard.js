// eslint-disable-next-line object-curly-newline
import { mdiCartOutline, mdiChartTimelineVariant, mdiHomeOutline, mdiMonitorDashboard } from '@mdi/js'

export default [
  {
    title: 'Dashboards',
    icon: mdiHomeOutline,
    children: [
      {
        icon: mdiMonitorDashboard,
        title: 'CRM',
        to: 'dashboard-crm',
      },
      {
        icon: mdiChartTimelineVariant,
        title: 'Analytics',
        to: 'dashboard-analytics',
      },
      {
        icon: mdiCartOutline,
        title: 'eCommerce',
        to: 'dashboard-eCommerce',
      },
    ],
  },
]
