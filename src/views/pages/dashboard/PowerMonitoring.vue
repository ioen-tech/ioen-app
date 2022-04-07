<template>
  <v-card>
    <v-row class="ma-0">
      <v-col cols="12" sm="7" class="total-profit-chart-col">
        <v-card-title class="pt-2"> Energy Usage Report </v-card-title>

        <vue-apex-charts
          id="total-profit-chart"
          height="320"
          :options="chartOptions"
          :series="chartData"
        ></vue-apex-charts>
      </v-col>
      <v-col cols="12" sm="5">
        <v-card elevation="0">
          <!-- Title/Header -->
          <v-card-title class="align-start pt-0 flex-nowrap">
            <div>
              <p class="mb-0 font-weight-bold text-2xl">420 kWh</p>
              <small class="text--secondary text-xs text-no-wrap">Last week's usage 390 kWh</small>
            </div>
            <v-spacer></v-spacer>
          </v-card-title>

          <v-card-text class="pb-3 pt-5">
            <!-- List -->
            <v-list two-line subheader>
              <!-- List Item: Profit -->
              <v-list-item class="pa-0">
                <v-list-item-avatar class="v-avatar-light-bg success--text justify-center" size="40" rounded>
                  <v-icon size="30" color="success">
                    {{ icons.mdiSolarPower }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-semibold"> 220 kWh </v-list-item-title>
                  <v-list-item-subtitle>Solar</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- List Item: Income -->
              <v-list-item class="pa-0">
                <v-list-item-avatar class="v-avatar-light-bg battery--text justify-center" size="40" rounded>
                  <v-icon size="30" color="battery">
                    {{ icons.mdiBatteryChargingMedium }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-semibold"> 300 kWh </v-list-item-title>
                  <v-list-item-subtitle>Battery</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <!-- List Item: Expense -->
              <v-list-item class="pa-0">
                <v-list-item-avatar
                  color="primary"
                  class="v-avatar-light-bg ioen--text justify-center pa-1"
                  size="40"
                  rounded
                >
                  <v-img height="35" contain :src="require('@/assets/images/svg/logo.svg')" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-semibold"> 220 kWh </v-list-item-title>
                  <v-list-item-subtitle>IOEN</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="pa-0">
                <v-list-item-avatar class="v-avatar-light-bg error--text justify-center" size="40" rounded>
                  <v-icon size="30" color="error">
                    {{ icons.mdiPowerPlugOutline }}
                  </v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-semibold"> 50 kWh </v-list-item-title>
                  <v-list-item-subtitle>Grid</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <!-- Action Button -->
            <v-btn block color="primary"> View Report </v-btn>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
// eslint-disable-next-line object-curly-newline
import {
  mdiDotsVertical,
  mdiSolarPower,
  mdiCurrencyUsd,
  mdiChartBar,
  mdiBatteryChargingMedium,
  mdiPowerPlugOutline,
} from '@mdi/js'
import { getVuetify } from '@core/utils'
import { kFormatter } from '@core/utils/filter'

export default {
  components: {
    VueApexCharts,
  },
  setup() {
    const $vuetify = getVuetify()

    const chartOptions = {
      colors: [
        $vuetify.theme.currentTheme.solar,
        $vuetify.theme.currentTheme.battery,
        $vuetify.theme.currentTheme.ioen,
        $vuetify.theme.currentTheme.grid,
      ],
      chart: {
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: '35%',
          startingShape: 'rounded',
          endingShape: 'rounded',
        },
      },
      xaxis: {
        categories: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          formatter: value => kFormatter(value, 0),
        },
      },
      grid: {
        strokeDashArray: 7,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      stroke: {
        curve: 'smooth',
        width: 6,
        lineCap: 'round',
        colors: ['#fff'],
      },
      responsive: [
        {
          breakpoint: 1400,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '45%',
              },
            },
          },
        },
      ],
    }

    const chartData = [
      {
        name: 'Solar',
        data: [29000, 22000, 25000, 19000, 30000, 21000, 35000],
      },
      {
        name: 'Battery',
        data: [0, 16000, 11000, 15000, 0, 12000, 9000],
      },
      {
        name: 'IOEN',
        data: [0, 0, 0, 14000, 0, 11000, 12000],
      },
      {
        name: 'Grid',
        data: [0, 0, 0, 14000, 0, 11000, 12000],
      },
    ]

    return {
      chartOptions,
      chartData,

      icons: {
        mdiDotsVertical,
        mdiSolarPower,
        mdiBatteryChargingMedium,
        mdiPowerPlugOutline,
        mdiCurrencyUsd,
        mdiChartBar,
      },
    }
  },
  created() {
    console.log(this.icons.mdiSolarPower)
  },
}
</script>

<style lang="scss">
@import '~@core/preset/preset/mixins.scss';
@import '~vuetify/src/styles/styles.sass';
@media #{map-get($display-breakpoints, 'sm-and-up')} {
  .total-profit-chart-col {
    @include ltr() {
      border-right: thin solid;
    }
    @include rtl() {
      border-left: thin solid;
    }
  }
}
@include theme--child(total-profit-chart-col) using ($material) {
  @media #{map-get($display-breakpoints, 'sm-and-up')} {
    border-color: map-get($material, 'dividers');
  }
}
</style>
