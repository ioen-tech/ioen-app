const pages = [
  {
    path: '/pages/dashboard',
    name: 'ioen-dashboard',
    component: () => import('@/views/pages/dashboard/Index.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/pages/supply-agreements',
    name: 'supply-agreements',
    component: () => import('@/views/pages/supply-agreements/Index.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/pages/supply-requests',
    name: 'supply-requests',
    component: () => import('@/views/pages/supply-requests/Index.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/ioen-mail',
    name: 'apps-ioen-mail',
    component: () => import('@/views/apps/ioen-mail/Mail.vue'),
    meta: {
      layout: 'content',
    },
  },
  {
    path: '/apps/ioen-mail/:folder',
    name: 'apps-ioen-mail-folder',
    component: () => import('@/views/apps/ioen-mail/Mail.vue'),
    meta: {
      layout: 'content',
      navActiveLink: 'apps-ioen-mail',
    },
    beforeEnter(to, _, next) {
      if (['sent', 'draft', 'starred', 'spam', 'trash'].includes(to.params.folder)) next()
      else next({ name: 'error-404' })
    },
  },
  {
    path: '/apps/ioen-mail/label/:label',
    name: 'apps-ioen-mail-label',
    component: () => import('@/views/apps/ioen-mail/Mail.vue'),
    meta: {
      layout: 'content',
      navActiveLink: 'apps-ioen-mail',
    },
    beforeEnter(to, _, next) {
      if (['personal', 'company', 'important', 'private'].includes(to.params.label)) next()
      else next({ name: 'error-404' })
    },
  },
]

export default pages
