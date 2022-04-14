<template>
  <component :is="resolveLayoutVariant" :class="`skin-variant--${appSkinVariant}`">
    <transition :name="appRouteTransition" mode="out-in" appear>
      <router-view></router-view>
    </transition>
  </component>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import useAppConfig from '@core/@app-config/useAppConfig'
import { useRouter } from '@core/utils'
import { useLayout } from '@core/layouts/composable/useLayout'
import { watch, getCurrentInstance, computed } from '@vue/composition-api'

// Layouts
import useDynamicVh from '@core/utils/useDynamicVh'
import LayoutContentVerticalNav from '@/layouts/variants/content/vertical-nav/LayoutContentVerticalNav.vue'
import LayoutContentHorizontalNav from '@/layouts/variants/content/horizontal-nav/LayoutContentHorizontalNav.vue'
import LayoutBlank from '@/layouts/variants/blank/LayoutBlank.vue'
import store from './store'

// Dynamic vh

export default {
  components: {
    LayoutContentVerticalNav,
    LayoutContentHorizontalNav,
    LayoutBlank,
  },
  setup() {
    const { route } = useRouter()
    const { appContentLayoutNav, appSkinVariant, appRouteTransition } = useAppConfig()
    const vm = getCurrentInstance().proxy
    const { handleBreakpointLayoutSwitch } = useLayout()
    handleBreakpointLayoutSwitch()

    const resolveLayoutVariant = computed(() => {
      if (route.value.meta.layout === 'blank') return 'layout-blank'
      if (route.value.meta.layout === 'content') return `layout-content-${appContentLayoutNav.value}-nav`

      return null
    })

    const isLoggedIn = computed(() => store.state.isLoggedIn)

    watch(isLoggedIn, value => {
      if (value === true) {
        vm.$ability.update(store.state.agentAbility)
        vm.$router.push('/')
      }
    })

    useDynamicVh()

    return {
      resolveLayoutVariant,
      appSkinVariant,
      appRouteTransition,
    }
  },
  created() {
    this.$store.dispatch('initialise')
  },
}
</script>
