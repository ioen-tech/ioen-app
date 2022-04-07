const charts = [
  {
    path: '/charts-and-maps/charts/apex-chart',
    name: 'apex-chart',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/charts-and-maps/charts/chartjs',
    name: 'chartjs-chart',
    component: () => import('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/charts-and-maps/maps/leaflet',
    name: 'leaflet-maps',
    component: () => import('@/views/charts-and-maps/maps/leaflet/Leaflet.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default charts
