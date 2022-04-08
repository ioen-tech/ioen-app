import { mdiChartDonut, mdiMapOutline } from '@mdi/js'

export default [
  {
    subheader: 'CHARTS AND MAPS',
  },
  {
    title: 'Charts',
    icon: mdiChartDonut,
    badge: '2',
    badgeColor: 'error',
    children: [
      {
        title: 'Apex Chart',
        to: 'apex-chart',
      },
      {
        title: 'Chartjs',
        to: 'chartjs-chart',
      },
    ],
  },
  {
    icon: mdiMapOutline,
    title: 'Leaflet Maps',
    to: 'leaflet-maps',
  },
]
