<template>
  <v-row>
    <v-col
      cols="12"
      md="8"
      class="align-self-end"
    >
      <ecommerce-congratulation-john></ecommerce-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      sm="6"
      md="2"
      class="align-self-end"
    >
      <statistics-card-vertical
        :change="transactionsOptions.change"
        :color="transactionsOptions.color"
        :icon="transactionsOptions.icon"
        :statistics="transactionsOptions.statistics"
        :stat-title="transactionsOptions.statTitle"
        :subtitle="transactionsOptions.subtitle"
      ></statistics-card-vertical>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="2"
      class="align-self-end"
    >
      <statistics-card-vertical
        :change="revenueOptions.change"
        :color="revenueOptions.color"
        :icon="revenueOptions.icon"
        :statistics="revenueOptions.statistics"
        :stat-title="revenueOptions.statTitle"
        :subtitle="revenueOptions.subtitle"
      ></statistics-card-vertical>
    </v-col>

    <v-col
      cols="12"
      md="8"
    >
      <ecommerce-total-profit></ecommerce-total-profit>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row class="match-height">
        <v-col cols="12">
          <ecommerce-statistics-total-sales></ecommerce-statistics-total-sales>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-line-chart
            :stat-title="revenueLineChart.statTitle"
            :statistics="revenueLineChart.statistics"
            :chart-series="revenueLineChart.series"
            :chart-color="$vuetify.theme.currentTheme.primary"
            chart-height="130"
          ></statistics-card-line-chart>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-radial-bar-chart
            :stat-title="salesRadialChart.statTitle"
            :statistics="salesRadialChart.statistics"
            :chart-series="salesRadialChart.series"
            :chart-color="$vuetify.theme.currentTheme.info"
          ></statistics-card-radial-bar-chart>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <ecommerce-card-transaction></ecommerce-card-transaction>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="logisticsOptions.change"
            :color="logisticsOptions.color"
            :icon="logisticsOptions.icon"
            :statistics="logisticsOptions.statistics"
            :stat-title="logisticsOptions.statTitle"
            :subtitle="logisticsOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="reportsOptions.change"
            :color="reportsOptions.color"
            :icon="reportsOptions.icon"
            :statistics="reportsOptions.statistics"
            :stat-title="reportsOptions.statTitle"
            :subtitle="reportsOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>

        <v-col
          cols="12"
          class="mt-3"
        >
          <ecommerce-new-visitor-chart></ecommerce-new-visitor-chart>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <ecommerce-card-website-statistics></ecommerce-card-website-statistics>
    </v-col>

    <v-col
      cols="12"
      md="8"
    >
      <ecommerce-user-table></ecommerce-user-table>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <ecommerce-card-meeting-schedule></ecommerce-card-meeting-schedule>
    </v-col>
  </v-row>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiTrendingUp, mdiCurrencyUsd, mdiCheck, mdiChartTimelineVariant } from '@mdi/js'
import StatisticsCardLineChart from '@core/components/statistics-card/StatisticsCardLineChart.vue'
import StatisticsCardRadialBarChart from '@core/components/statistics-card/StatisticsCardRadialBarChart.vue'
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'

// demos
import EcommerceCongratulationJohn from './EcommerceCongratulationJohn.vue'
import EcommerceTotalProfit from './EcommerceTotalProfit.vue'
import EcommerceStatisticsTotalSales from './EcommerceStatisticsTotalSales.vue'
import EcommerceCardTransaction from './EcommerceCardTransaction.vue'
import EcommerceNewVisitorChart from './EcommerceNewVisitorChart.vue'
import EcommerceCardWebsiteStatistics from './EcommerceCardWebsiteStatistics.vue'
import EcommerceUserTable from './EcommerceUserTable.vue'
import EcommerceCardMeetingSchedule from './EcommerceCardMeetingSchedule.vue'

export default {
  components: {
    StatisticsCardVertical,
    StatisticsCardLineChart,
    StatisticsCardRadialBarChart,
    EcommerceCongratulationJohn,
    EcommerceTotalProfit,
    EcommerceStatisticsTotalSales,
    EcommerceCardTransaction,
    EcommerceNewVisitorChart,
    EcommerceCardWebsiteStatistics,
    EcommerceUserTable,
    EcommerceCardMeetingSchedule,
  },
  setup() {
    const transactionsOptions = {
      statTitle: 'Transactions',
      icon: mdiTrendingUp,
      color: 'info',
      subtitle: 'Daily Transactions',
      statistics: '1.2k',
      change: '+12%',
    }
    const revenueOptions = {
      statTitle: 'Revenue',
      icon: mdiCurrencyUsd,
      color: 'success',
      subtitle: 'Revenue Increase',
      statistics: '$95.2k',
      change: '+12%',
    }

    const revenueLineChart = {
      statTitle: 'Total Revenue',
      statistics: '$35.4k',
      series: [
        {
          data: [28, 58, 40, 68],
        },
      ],
    }

    const salesRadialChart = {
      statTitle: 'Total Sales',
      statistics: '135k',
      series: [78],
    }

    const logisticsOptions = {
      statTitle: 'Logistics',
      icon: mdiChartTimelineVariant,
      color: 'error',
      subtitle: 'Revenue Increase',
      statistics: '44.1k',
      change: '+12%',
    }

    const reportsOptions = {
      statTitle: 'Reports',
      icon: mdiCheck,
      color: 'warning',
      subtitle: 'System Bugs',
      statistics: '268',
      change: '-8%',
    }

    return {
      transactionsOptions,
      revenueOptions,
      revenueLineChart,
      salesRadialChart,
      logisticsOptions,
      reportsOptions,
    }
  },
}
</script>
