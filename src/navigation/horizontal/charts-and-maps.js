import { mdiChartDonut, mdiMapOutline } from '@mdi/js'

export default [
  {
    title: 'Charts & Maps',
    icon: mdiChartDonut,
    children: [
      {
        title: 'Charts',
        icon: mdiChartDonut,
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
    ],
  },
]
