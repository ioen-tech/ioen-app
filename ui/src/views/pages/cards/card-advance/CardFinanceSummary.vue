<template>
  <v-card>
    <div class="d-flex align-center justify-space-between mb-4">
      <div>
        <v-card-title class="text-no-wrap">
          Finance Summary
        </v-card-title>
        <v-card-subtitle>Check out each Column for more details</v-card-subtitle>
      </div>

      <v-avatar
        color="primary"
        size="48"
        class="v-avatar-light-bg primary--text me-5"
      >
        <v-icon
          size="30"
          color="primary"
        >
          {{ icons.mdiCurrencyUsd }}
        </v-icon>
      </v-avatar>
    </div>

    <v-card-text class="d-flex align-center flex-wrap text-no-wrap">
      <div class="finance-summery-left-content-width mb-3">
        <span>Annual Companies Taxes</span>
        <h2 class="text-xl font-weight-semibold">
          $1450.35
        </h2>
      </div>

      <div class="finance-summery-right-content-width mb-3">
        <span>Next Tax Review Date</span>
        <h2 class="text-xl font-weight-semibold">
          July 14, 2021
        </h2>
      </div>
    </v-card-text>

    <v-card-text class="d-flex align-center flex-wrap text-no-wrap">
      <div class="finance-summery-left-content-width mb-3">
        <span>Average Product Price</span>
        <h2 class="text-xl font-weight-semibold">
          $85.50
        </h2>
      </div>

      <div class="finance-summery-right-content-width mb-3">
        <span>Satisfaction Rate</span>
        <div class="d-flex align-center">
          <v-progress-linear
            :value="progress"
            height="6"
          ></v-progress-linear>
          <span class="text-base font-weight-semibold ms-4">{{ Math.ceil(progress) }}%</span>
        </div>
      </div>
    </v-card-text>

    <v-card-actions>
      <div
        class="v-avatar-group finance-summery-left-content-width"
        :class="rootThemeClasses"
      >
        <v-avatar size="40">
          <v-img src="@/assets/images/avatars/1.png"></v-img>
        </v-avatar>

        <v-avatar size="40">
          <v-img src="@/assets/images/avatars/2.png"></v-img>
        </v-avatar>

        <v-avatar size="40">
          <v-img src="@/assets/images/avatars/3.png"></v-img>
        </v-avatar>
        <v-avatar size="40">
          <v-img src="@/assets/images/avatars/4.png"></v-img>
        </v-avatar>
      </div>

      <v-chip
        small
        color="primary"
        class="v-chip-light-bg primary--text font-weight-semibold"
      >
        5 Days Ago
      </v-chip>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mdiCurrencyUsd } from '@mdi/js'
import { ref } from '@vue/composition-api'
import useVuetify from '@core/utils/vuetify'

export default {
  setup() {
    const progress = ref(75)
    const { rootThemeClasses } = useVuetify()

    return {
      progress,
      rootThemeClasses,
      icons: {
        mdiCurrencyUsd,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.finance-summery-left-content-width {
  width: 224px;
}
.finance-summery-right-content-width {
  width: 176px;
}
</style>
