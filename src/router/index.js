import { canNavigate } from '@/plugins/acl/routeProtection'
import Vue from 'vue'
import VueRouter from 'vue-router'
import apps from './apps'
import dashboard from './dashboard'
import ioen from './ioen'
import pages from './pages'
import userInterface from './user-interface'

Vue.use(VueRouter)

const routes = [
  // ? We are redirecting to different pages based on role.
  // NOTE: Role is just for UI purposes. ACL is based on abilities.
  {
    path: '/',
    redirect: to => {
      const userData = JSON.parse(localStorage.getItem('userData'))
      const userRole = userData && userData.role ? userData.role : null

      if (userRole === 'admin') return { name: 'ioen-dashboard' }
      if (userRole === 'client') return { name: 'page-access-control' }

      return { name: 'auth-login', query: to.query }
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error404.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
    },
  },
  {
    path: '/login',
    name: 'auth-login',
    component: () => import('@/views/Login.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/register',
    name: 'auth-register',
    component: () => import('@/views/Register.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  {
    path: '/forgot-password',
    name: 'auth-forgot-password',
    component: () => import('@/views/ForgotPassword.vue'),
    meta: {
      layout: 'blank',
      resource: 'Public',
      redirectIfLoggedIn: true,
    },
  },
  ...dashboard,
  ...userInterface,
  ...apps,
  ...pages,
  ...ioen,
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

// ? Router Before Each hook: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach((to, _, next) => {
  const userData = localStorage.getItem('userData')

  const isLoggedIn = userData && localStorage.getItem('accessToken') && localStorage.getItem('userAbility')

  if (!canNavigate(to)) {
    // Redirect to login if not logged in
    if (!isLoggedIn) return next({ name: 'auth-login', query: { marketplace: to.query.marketplace } })

    // If logged in => not authorized
    return next({ name: 'misc-not-authorized' })

    // return next({ name: 'misc-not-authorized' })
  }

  // Redirect if logged in
  if (to.meta.redirectIfLoggedIn && isLoggedIn) {
    next('/')
  }

  return next()
})

export default router
