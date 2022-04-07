const components = [
  {
    path: '/components/alert',
    name: 'components-alert',
    component: () => import('@/views/components/alert/Alert.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/button',
    name: 'components-button',
    component: () => import('@/views/components/button/Button.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/avatar',
    name: 'components-avatar',
    component: () => import('@/views/components/avatar/Avatar.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/menu',
    name: 'components-menu',
    component: () => import('@/views/components/menu/Menu.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/expansion-panel',
    name: 'components-expansion-panel',
    component: () => import('@/views/components/expansion-panel/ExpansionPanel.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/list',
    name: 'components-list',
    component: () => import('@/views/components/list/List.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/dialog',
    name: 'components-dialog',
    component: () => import('@/views/components/dialog/Dialog.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/pagination',
    name: 'components-pagination',
    component: () => import('@/views/components/pagination/Pagination.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/tabs',
    name: 'components-tabs',
    component: () => import('@/views/components/tabs/Tabs.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/tooltip',
    name: 'components-tooltip',
    component: () => import('@/views/components/tooltip/Tooltip.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/badge',
    name: 'components-badge',
    component: () => import('@/views/components/badge/Badge.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/chip',
    name: 'components-chip',
    component: () => import('@/views/components/chip/Chip.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/snackbar',
    name: 'components-snackbar',
    component: () => import('@/views/components/snackbar/Snackbar.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/stepper',
    name: 'components-stepper',
    component: () => import('@/views/components/stepper/Stepper.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/timeline',
    name: 'components-timeline',
    component: () => import('@/views/components/timeline/Timeline.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/components/treeview',
    name: 'components-treeview',
    component: () => import('@/views/components/treeview/Treeview.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default components
