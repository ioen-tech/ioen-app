<template>
  <div id="user-view">
    <v-row>
      <v-col
        cols="12"
        md="5"
        lg="4"
      >
        <user-bio-panel
          :user-data="userData"
          :is-plan-upgrade-dialog-visible.sync="isPlanUpgradeDialogVisible"
        ></user-bio-panel>
      </v-col>

      <v-col
        cols="12"
        md="7"
        lg="8"
      >
        <v-tabs
          v-model="userTab"
          show-arrows
          class="user-tabs"
        >
          <v-tab
            v-for="tab in tabs"
            :key="tab.icon"
          >
            <v-icon
              size="20"
              class="me-3"
            >
              {{ tab.icon }}
            </v-icon>
            <span>{{ tab.title }}</span>
          </v-tab>
        </v-tabs>

        <v-tabs-items
          id="user-tabs-content"
          v-model="userTab"
          class="mt-5 pa-1"
        >
          <v-tab-item>
            <user-tab-overview></user-tab-overview>
          </v-tab-item>

          <v-tab-item>
            <user-tab-security></user-tab-security>
          </v-tab-item>
          <v-tab-item>
            <user-tab-billings-plans :is-plan-upgrade-dialog-visible.sync="isPlanUpgradeDialogVisible"></user-tab-billings-plans>
          </v-tab-item>
          <v-tab-item>
            <user-tab-notifications></user-tab-notifications>
          </v-tab-item>
          <v-tab-item>
            <user-tab-connections></user-tab-connections>
          </v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>

    <v-dialog
      v-model="isPlanUpgradeDialogVisible"
      max-width="650"
    >
      <v-card class="py-8">
        <v-card-title class="justify-center text-h5 px-5">
          Upgrade Plan
        </v-card-title>
        <v-card-text class="text-center mt-n2 px-5">
          Choose the best plan for user.
        </v-card-text>
        <v-card-text class="d-flex align-center flex-wrap flex-sm-nowrap mt-5 px-15">
          <v-select
            v-model="selectedPlan"
            label="Choose Plan"
            :items="plansList"
            item-text="text"
            item-value="value"
            outlined
            dense
            hide-details
            class="me-3"
          ></v-select>
          <v-btn
            color="primary"
            class="mt-3 mt-sm-0"
          >
            Upgrade
          </v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="px-15 pt-8">
          <p class="font-weight-medium text--primary mb-2">
            User current plan is {{ userData.currentPlan }} plan
          </p>
          <div class="d-flex justify-space-between flex-wrap">
            <div class="user-pricing me-3">
              <sup class="primary--text">$</sup>
              <span class="text-5xl font-weight-semibold primary--text">{{ resolveCurrentPlanValue(userData.currentPlan) }}</span>
              <sub class="text-base font-weight-light">/ month</sub>
            </div>
            <v-btn
              color="error"
              outlined
              class="mt-3"
            >
              Cancel Subscription
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { onUnmounted, ref } from '@vue/composition-api'
import {
  mdiAccountOutline, mdiLockOutline, mdiBookmarkOutline, mdiBellOutline, mdiLinkVariant,
} from '@mdi/js'
import router from '@/router'
import store from '@/store'

// eslint-disable-next-line object-curly-newline
import UserBioPanel from './user-bio-panel/UserBioPanel.vue'
import userStoreModule from '../userStoreModule'
import UserTabOverview from './user-tab-overview/UserTabOverview.vue'
import UserTabSecurity from './user-tab-security/UserTabSecurity.vue'
import UserTabBillingsPlans from './user-tab-billings-plans/UserTabBillingsPlans.vue'
import UserTabNotifications from './user-tab-notifications/UserTabNotifications.vue'
import UserTabConnections from './user-tab-connections/UserTabConnections.vue'

export default {
  components: {
    UserBioPanel,
    UserTabOverview,
    UserTabSecurity,
    UserTabBillingsPlans,
    UserTabNotifications,
    UserTabConnections,
  },
  setup() {
    const USER_APP_STORE_MODULE_NAME = 'app-user'

    // Register module
    if (!store.hasModule(USER_APP_STORE_MODULE_NAME)) store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(USER_APP_STORE_MODULE_NAME)) store.unregisterModule(USER_APP_STORE_MODULE_NAME)
    })

    const userData = ref({})
    const userTab = ref(null)
    const selectedPlan = ref('')
    const isPlanUpgradeDialogVisible = ref(false)

    store
      .dispatch('app-user/fetchUser', { id: router.currentRoute.params.id })
      .then(response => {
        userData.value = response.data
        selectedPlan.value = response.data.currentPlan
      })
      .catch(error => {
        if (error.response.status === 404) {
          userData.value = {}
        }
      })

    const plansList = [
      { text: 'Basic - $0/month', value: 'basic' },
      { text: 'Standard - $99/month', value: 'standard' },
      { text: 'Enterprise - $499/month', value: 'enterprise' },
      { text: 'Company - $999/month', value: 'company' },
    ]

    const tabs = [
      { icon: mdiAccountOutline, title: 'Overview' },
      { icon: mdiLockOutline, title: 'Security' },
      { icon: mdiBookmarkOutline, title: 'Billing & Plan' },
      { icon: mdiBellOutline, title: 'Notifications' },
      { icon: mdiLinkVariant, title: 'Connections' },
    ]

    // ui
    const resolveCurrentPlanValue = plan => {
      if (plan === 'basic') return '0'
      if (plan === 'standard') return '99'
      if (plan === 'enterprise') return '499'
      if (plan === 'company') return '999'

      return '0'
    }

    return {
      tabs,
      userTab,
      plansList,
      selectedPlan,
      isPlanUpgradeDialogVisible,
      userData,
      resolveCurrentPlanValue,
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/apps/user.scss';
</style>
