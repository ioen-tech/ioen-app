const apps = [
  {
    path: '/apps/calendar',
    name: 'apps-calendar',
    component: () => import('@/views/apps/calendar/Calendar.vue'),
    meta: {
      layout: 'content',
    },
  },

  //
  //* ——— Invoice ——————————————————
  //

  {
    path: '/apps/invoice/list',
    name: 'apps-invoice-list',
    component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/invoice/preview/:id',
    name: 'apps-invoice-preview',
    component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/invoice/add/',
    name: 'apps-invoice-add',
    component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/invoice/edit/:id',
    name: 'apps-invoice-edit',
    component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
    meta: {
      layout: 'content',
    },
  },

  //
  //* ——— User ——————————————————
  //

  {
    path: '/apps/user/list',
    name: 'apps-user-list',
    component: () => import('@/views/apps/user/user-list/UserList.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/user/view/:id',
    name: 'apps-user-view',
    component: () => import('@/views/apps/user/user-view/UserView.vue'),
    meta: {
      layout: 'content',
    },
  },

  //
  //* ——— Chat ——————————————————
  //

  {
    path: '/apps/chat',
    name: 'apps-chat',
    component: () => import('@/views/apps/chat/Chat.vue'),
    meta: {
      layout: 'content',
    },
  },
]

export default apps
