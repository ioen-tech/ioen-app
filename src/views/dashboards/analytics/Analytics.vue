<template>
  <v-row>
    <v-col
      cols="12"
      md="4"
    >
      <analytics-congratulation-john></analytics-congratulation-john>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <analytics-statistics-card></analytics-statistics-card>
    </v-col>

    <v-col
      cols="12"
      sm="6"
      md="4"
    >
      <analytics-weekly-overview></analytics-weekly-overview>
    </v-col>

    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <analytics-card-total-earning></analytics-card-total-earning>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <v-row class="match-height">
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-profit-line-chart
            :stat-title="profitLineChart.statTitle"
            :statistics="profitLineChart.statistics"
            :chart-series="profitLineChart.series"
            :chart-color="$vuetify.theme.currentTheme.success"
            chart-height="85"
          ></statistics-card-profit-line-chart>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="totalProfitOptions.change"
            :color="totalProfitOptions.color"
            :icon="totalProfitOptions.icon"
            :statistics="totalProfitOptions.statistics"
            :stat-title="totalProfitOptions.statTitle"
            :subtitle="totalProfitOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>
        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-vertical
            :change="newProjectOptions.change"
            :color="newProjectOptions.color"
            :icon="newProjectOptions.icon"
            :statistics="newProjectOptions.statistics"
            :stat-title="newProjectOptions.statTitle"
            :subtitle="newProjectOptions.subtitle"
          ></statistics-card-vertical>
        </v-col>

        <v-col
          cols="12"
          sm="6"
        >
          <statistics-card-session-bar-chart
            :stat-title="sessionBarChart.statTitle"
            :statistics="sessionBarChart.statistics"
            :chart-series="sessionBarChart.series"
            :chart-color="[
              $vuetify.theme.currentTheme.error,
              $vuetify.theme.currentTheme.primary,
              $vuetify.theme.currentTheme.error,
              $vuetify.theme.currentTheme.primary,
              $vuetify.theme.currentTheme.primary
            ]"
            chart-height="80"
          ></statistics-card-session-bar-chart>
        </v-col>
      </v-row>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <analytics-performance></analytics-performance>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <analytics-card-deposit-and-withdraw></analytics-card-deposit-and-withdraw>
    </v-col>

    <v-col
      cols="12"
      md="4"
    >
      <analytics-card-sales-by-countries></analytics-card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="8"
    >
      <analytics-user-table></analytics-user-table>
    </v-col>
  </v-row>
</template>

<script>
import { mdiPoll, mdiLabelVariantOutline } from '@mdi/js'
import StatisticsCardProfitLineChart from '@core/components/statistics-card/StatisticsCardProfitLineChart.vue'
import StatisticsCardSessionBarChart from '@core/components/statistics-card/StatisticsCardSessionBarChart.vue'
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'

// demos
import AnalyticsCongratulationJohn from './AnalyticsCongratulationJohn.vue'
import AnalyticsStatisticsCard from './AnalyticsStatisticsCard.vue'
import AnalyticsCardTotalEarning from './AnalyticsCardTotalEarning.vue'
import AnalyticsPerformance from './AnalyticsPerformance.vue'
import AnalyticsCardDepositAndWithdraw from './AnalyticsCardDepositAndWithdraw.vue'
import AnalyticsCardSalesByCountries from './AnalyticsCardSalesByCountries.vue'
import AnalyticsUserTable from './AnalyticsUserTable.vue'
import AnalyticsWeeklyOverview from './AnalyticsWeeklyOverview.vue'

export default {
  components: {
    StatisticsCardProfitLineChart,
    StatisticsCardVertical,
    StatisticsCardSessionBarChart,
    AnalyticsCongratulationJohn,
    AnalyticsStatisticsCard,
    AnalyticsCardTotalEarning,
    AnalyticsPerformance,
    AnalyticsCardDepositAndWithdraw,
    AnalyticsCardSalesByCountries,
    AnalyticsUserTable,
    AnalyticsWeeklyOverview,
  },
  setup() {
    const profitLineChart = {
      statTitle: 'Total Profit',
      statistics: '$86.4k',
      series: [
        {
          data: [0, 20, 5, 30, 15, 45],
        },
      ],
    }

    const totalProfitOptions = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'secondary',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    // vertical card options
    const newProjectOptions = {
      statTitle: 'New Project',
      icon: mdiLabelVariantOutline,
      color: 'primary',
      subtitle: 'Yearly Project',
      statistics: '862',
      change: '-18%',
    }

    const sessionBarChart = {
      statTitle: 'Sessions',
      statistics: '2,856',
      series: [
        {
          name: '2020',
          data: [45, 85, 65, 50, 70],
        },
      ],
    }

    return {
      profitLineChart,
      totalProfitOptions,
      newProjectOptions,
      sessionBarChart,
    }
  },
}
</script>
