<template>
  <v-row class="user-bio-panel">
    <!-- user profile -->
    <v-col cols="12">
      <v-card class="pt-10">
        <v-card-title class="justify-center flex-column">
          <v-avatar
            :color="userData.avatar ? '' : 'primary'"
            :class="userData.avatar ? '' : 'v-avatar-light-bg primary--text'"
            size="120"
            rounded
            class="mb-4"
          >
            <v-img
              v-if="userData.avatar"
              :src="require(`@/assets/images/avatars/${userData.avatar}`)"
            ></v-img>
            <span
              v-else
              class="font-weight-semibold text-5xl"
            >{{ avatarText(userData.fullName) }}</span>
          </v-avatar>

          <span class="mb-2">{{ userData.fullName }}</span>

          <v-chip
            label
            small
            :color="resolveUserRoleVariant(userData.role)"
            :class="`v-chip-light-bg text-sm font-weight-semibold ${resolveUserRoleVariant(userData.role)}--text text-capitalize`"
          >
            {{ userData.role }}
          </v-chip>
        </v-card-title>

        <v-card-text class="d-flex justify-center flex-wrap mt-2 pe-sm-0">
          <div class="d-flex align-center me-8 mb-4">
            <v-avatar
              size="40"
              rounded
              color="primary"
              class="v-avatar-light-bg primary--text me-3"
            >
              <v-icon
                color="primary"
                size="22"
              >
                {{ icons.mdiCheck }}
              </v-icon>
            </v-avatar>

            <div>
              <h3 class="text-xl font-weight-medium mb-n1">
                {{ kFormatter(userData.taskDone) }}
              </h3>
              <span>Task Done</span>
            </div>
          </div>

          <div class="d-flex align-center mb-4 me-4">
            <v-avatar
              size="40"
              rounded
              color="primary"
              class="v-avatar-light-bg primary--text me-3"
            >
              <v-icon
                color="primary"
                size="22"
              >
                {{ icons.mdiBriefcaseVariantOutline }}
              </v-icon>
            </v-avatar>

            <div>
              <h3 class="text-xl font-weight-medium mb-n1">
                {{ kFormatter(userData.projectDone) }}
              </h3>
              <span>Project Done</span>
            </div>
          </div>
        </v-card-text>

        <v-card-text>
          <h2 class="text-xl font-weight-semibold mb-2">
            Details
          </h2>

          <v-divider></v-divider>

          <v-list>
            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Username:</span>
              <span class="text--secondary">{{ userData.username }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium text-no-wrap me-2">Billing Email:</span>
              <span class="text--secondary">{{ userData.email }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Status:</span>
              <span class="text--secondary">
                <v-chip
                  small
                  label
                  :color="resolveUserStatusVariant(userData.status)"
                  :class="`v-chip-light-bg ${resolveUserStatusVariant(userData.status)}--text font-weight-medium text-capitalize`"
                >
                  {{ userData.status }}
                </v-chip>
              </span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Role:</span>
              <span class="text--secondary text-capitalize">{{ userData.role }}</span>
            </v-list-item>
            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Tax ID:</span>
              <span class="text--secondary">{{ userData.taxId }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Contact:</span>
              <span class="text--secondary">+1 {{ userData.contact }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Language:</span>
              <span class="text--secondary">{{ userData.language }}</span>
            </v-list-item>

            <v-list-item
              dense
              class="px-0 mb-n2"
            >
              <span class="font-weight-medium me-2">Country:</span>
              <span class="text--secondary">{{ userData.country }}</span>
            </v-list-item>
          </v-list>
        </v-card-text>

        <v-card-actions class="justify-center">
          <v-btn
            color="primary"
            class="me-3"
            @click="isBioDialogOpen = !isBioDialogOpen"
          >
            Edit
          </v-btn>
          <v-btn
            color="error"
            outlined
          >
            Suspended
          </v-btn>
        </v-card-actions>
      </v-card>

      <!-- edit profile dialog data -->
      <user-bio-edit
        :is-bio-dialog-open.sync="isBioDialogOpen"
        :user-data="userData"
      ></user-bio-edit>
    </v-col>

    <!-- user plan -->
    <v-col cols="12">
      <v-card
        class="user-plan"
        flat
      >
        <v-card-title class="flex-start align-start justify-space-between pb-0">
          <v-chip
            label
            color="primary"
            small
            class="v-chip-light-bg primary--text font-weight-semibold mb-3 me-3"
          >
            {{ userData.currentPlan }}
          </v-chip>

          <div class="user-pricing">
            <sup class="primary--text">$</sup>
            <span class="text-5xl font-weight-semibold primary--text">{{ resolveCurrentPlanValue(userData.currentPlan) }}</span>
            <sub class="text-base font-weight-light">/ month</sub>
          </div>
        </v-card-title>

        <v-card-text>
          <v-list class="pa-0">
            <v-list-item
              v-for="benefit in standardPlan.benefits"
              :key="benefit"
              dense
              class="px-0 mb-n2"
            >
              <v-icon
                size="10"
                class="me-2"
              >
                {{ icons.mdiCheckboxBlankCircle }}
              </v-icon>
              <span>{{ benefit }}</span>
            </v-list-item>
          </v-list>

          <p class="d-flex font-weight-semibold text--primary mt-5 mb-2">
            <span>Days</span>
            <v-spacer></v-spacer>
            <span>26 of 30 Days</span>
          </p>
          <v-progress-linear
            value="86"
            height="8"
            rounded
          ></v-progress-linear>
          <p class="mt-2">
            4 days remaining
          </p>

          <v-btn
            color="primary"
            block
            @click.stop="$emit('update:is-plan-upgrade-dialog-visible',true)"
          >
            Upgrade Plan
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCheck, mdiBriefcaseVariantOutline, mdiCheckboxBlankCircle } from '@mdi/js'
import { avatarText, kFormatter } from '@core/utils/filter'
import { ref } from '@vue/composition-api'
import UserBioEdit from './UserBioEdit.vue'
import useUsersList from '../../user-list/useUsersList'

export default {
  components: {
    UserBioEdit,
  },
  props: {
    userData: {
      type: Object,
      required: true,
    },
    isPlanUpgradeDialogVisible: {
      type: Boolean,
      required: true,
    },
  },
  setup() {
    const { resolveUserStatusVariant, resolveUserRoleVariant } = useUsersList()

    const isBioDialogOpen = ref(false)

    const standardPlan = {
      plan: 'Standard',
      price: 99,
      benefits: ['10 Users', 'Up to 10GB storage', 'Basic Support'],
    }

    // ui
    const resolveCurrentPlanValue = plan => {
      if (plan === 'basic') return '0'
      if (plan === 'standard') return '99'
      if (plan === 'enterprise') return '499'
      if (plan === 'company') return '999'

      return '0'
    }

    return {
      resolveUserStatusVariant,
      resolveUserRoleVariant,
      avatarText,
      kFormatter,
      resolveCurrentPlanValue,

      isBioDialogOpen,
      standardPlan,
      icons: {
        mdiCheck,
        mdiBriefcaseVariantOutline,
        mdiCheckboxBlankCircle,
      },
    }
  },
}
</script>
