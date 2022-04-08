const dashboard = [
  {
    path: '/dashboards/crm',
    name: 'dashboard-crm',
    component: () => import('@/views/dashboards/crm/Crm.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboards/analytics/Analytics.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/dashboards/eCommerce',
    name: 'dashboard-eCommerce',
    component: () => import('@/views/dashboards/ecommerce/Ecommerce.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default dashboard
