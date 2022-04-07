<template>
  <v-card>
    <v-card-title class="align-start">
      <span class="font-weight-semibold">Statistics Card</span>

      <v-spacer></v-spacer>

      <v-btn
        icon
        small
        class="mt-n2 me-n3"
      >
        <v-icon class="cursor-pointer">
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-subtitle class="mb-7">
      <span class="font-weight-semibold text--primary me-1">Total 48.5% growth</span>
      <span>😎 this month</span>
    </v-card-subtitle>

    <v-card-text>
      <v-row>
        <v-col
          v-for="data in statisticsData"
          :key="data.title"
          cols="6"
          sm="4"
          class="d-flex align-center"
        >
          <v-avatar
            size="44"
            :color="resolveStatisticsIconVariation (data.title).color"
            rounded
            class="elevation-1"
          >
            <v-icon
              dark
              color="white"
              size="30"
            >
              {{ resolveStatisticsIconVariation (data.title).icon }}
            </v-icon>
          </v-avatar>

          <div class="ms-3">
            <p class="text-xs mb-0">
              {{ data.title }}
            </p>
            <h3 class="text-xl font-weight-bold">
              {{ data.total }}
            </h3>
          </div>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiTrendingUp, mdiDotsVertical, mdiLabelOutline } from '@mdi/js'

export default {
  setup() {
    const statisticsData = [
      {
        title: 'Sales',
        total: '245k',
      },
      {
        title: 'Customers',
        total: '12.5k',
      },
      {
        title: 'Product',
        total: '1.54k',
      },
    ]

    const resolveStatisticsIconVariation = data => {
      if (data === 'Sales') return { icon: mdiTrendingUp, color: 'primary' }
      if (data === 'Customers') return { icon: mdiAccountOutline, color: 'success' }
      if (data === 'Product') return { icon: mdiLabelOutline, color: 'warning' }

      return { icon: mdiAccountOutline, color: 'success' }
    }

    return {
      statisticsData,
      resolveStatisticsIconVariation,

      // icons
      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>
