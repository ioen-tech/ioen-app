<template>
  <div>
    <v-row>
      <!-- horizontal statistics card -->
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-horizontal
          :stat-title="newCustomerOptions.statTitle"
          :change="newCustomerOptions.change"
          :color="newCustomerOptions.color"
          :icon="newCustomerOptions.icon"
          :statistics="newCustomerOptions.statistics"
        ></statistics-card-horizontal>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-horizontal
          :change="totalRevenueOptions.change"
          :color="totalRevenueOptions.color"
          :icon="totalRevenueOptions.icon"
          :statistics="totalRevenueOptions.statistics"
          :stat-title="totalRevenueOptions.statTitle"
        ></statistics-card-horizontal>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-horizontal
          :change="newTransactions.change"
          :color="newTransactions.color"
          :icon="newTransactions.icon"
          :statistics="newTransactions.statistics"
          :stat-title="newTransactions.statTitle"
        ></statistics-card-horizontal>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-horizontal
          :change="totalProfit.change"
          :color="totalProfit.color"
          :icon="totalProfit.icon"
          :statistics="totalProfit.statistics"
          :stat-title="totalProfit.statTitle"
        ></statistics-card-horizontal>
      </v-col>
      <!--/ horizontal statistics card -->

      <!-- Statistics Card -->
      <v-col
        cols="12"
        md="8"
      >
        <statistics-card></statistics-card>
      </v-col>

      <!-- Total Sales -->
      <v-col
        cols="12"
        md="4"
      >
        <statistics-total-sales></statistics-total-sales>
      </v-col>
      <!-- vertical statistics card -->
      <v-col
        cols="6"
        sm="4"
        md="2"
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
        cols="6"
        sm="4"
        md="2"
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
        cols="6"
        sm="4"
        md="2"
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
        cols="6"
        sm="4"
        md="2"
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
        cols="6"
        sm="4"
        md="2"
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
        cols="6"
        sm="4"
        md="2"
        class="mb-6"
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
      <!--/ vertical statistics card -->

      <!-- card with images -->
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-with-images
          :avatar="ratingsOptions.avatar"
          :avatar-width="ratingsOptions.avatarWidth"
          :change="ratingsOptions.change"
          :chip-color="ratingsOptions.chipColor"
          :chip-text="ratingsOptions.chipText"
          :statistics="ratingsOptions.statistics"
          :stat-title="ratingsOptions.statTitle"
        ></statistics-card-with-images>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-with-images
          :avatar="sessionsOptions.avatar"
          :avatar-width="sessionsOptions.avatarWidth"
          :change="sessionsOptions.change"
          :chip-color="sessionsOptions.chipColor"
          :chip-text="sessionsOptions.chipText"
          :statistics="sessionsOptions.statistics"
          :stat-title="sessionsOptions.statTitle"
        ></statistics-card-with-images>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-with-images
          :avatar="customersOptions.avatar"
          :avatar-width="customersOptions.avatarWidth"
          :change="customersOptions.change"
          :chip-color="customersOptions.chipColor"
          :chip-text="customersOptions.chipText"
          :statistics="customersOptions.statistics"
          :stat-title="customersOptions.statTitle"
        ></statistics-card-with-images>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <statistics-card-with-images
          :avatar="totalOrders.avatar"
          :avatar-width="totalOrders.avatarWidth"
          :change="totalOrders.change"
          :chip-color="totalOrders.chipColor"
          :chip-text="totalOrders.chipText"
          :statistics="totalOrders.statistics"
          :stat-title="totalOrders.statTitle"
        ></statistics-card-with-images>
      </v-col>
      <!-- / card with images -->
    </v-row>

    <v-row class="match-height">
      <!--statistics card with chart -->
      <v-col
        cols="6"
        md="2"
        sm="4"
      >
        <statistics-card-line-chart
          :stat-title="revenueLineChart.statTitle"
          :statistics="revenueLineChart.statistics"
          :chart-series="revenueLineChart.series"
          :chart-color="$vuetify.theme.currentTheme.primary"
        ></statistics-card-line-chart>
      </v-col>
      <v-col
        cols="6"
        md="2"
        sm="4"
      >
        <statistics-card-bar-chart
          :stat-title="barChartWithGap.statTitle"
          :statistics="barChartWithGap.statistics"
          :chart-series="barChartWithGap.series"
        ></statistics-card-bar-chart>
      </v-col>
      <v-col
        cols="6"
        md="2"
        sm="4"
      >
        <statistics-card-area-chart
          :stat-title="growthAreaChart.statTitle"
          :statistics="growthAreaChart.statistics"
          :chart-series="growthAreaChart.series"
        ></statistics-card-area-chart>
      </v-col>
      <v-col
        cols="6"
        md="2"
        sm="4"
      >
        <statistics-card-radial-bar-chart
          :stat-title="salesRadialChart.statTitle"
          :statistics="salesRadialChart.statistics"
          :chart-series="salesRadialChart.series"
          :chart-color="$vuetify.theme.currentTheme.info"
        ></statistics-card-radial-bar-chart>
      </v-col>
      <v-col
        cols="6"
        md="2"
        sm="4"
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
        ></statistics-card-session-bar-chart>
      </v-col>
      <v-col
        cols="6"
        md="2"
        sm="4"
      >
        <statistics-card-profit-line-chart
          :stat-title="profitLineChart.statTitle"
          :statistics="profitLineChart.statistics"
          :chart-series="profitLineChart.series"
          :chart-color="$vuetify.theme.currentTheme.primary"
        ></statistics-card-profit-line-chart>
      </v-col>
      <!-- / statistics card with chart -->
    </v-row>
  </div>
</template>

<script>
import StatisticsCardWithImages from '@core/components/statistics-card/StatisticsCardWithImages.vue'
import StatisticsCardLineChart from '@core/components/statistics-card/StatisticsCardLineChart.vue'
import StatisticsCardBarChart from '@core/components/statistics-card/StatisticsCardBarChart.vue'
import StatisticsCardAreaChart from '@core/components/statistics-card/StatisticsCardAreaChart.vue'
import StatisticsCardRadialBarChart from '@core/components/statistics-card/StatisticsCardRadialBarChart.vue'
import StatisticsCardSessionBarChart from '@core/components/statistics-card/StatisticsCardSessionBarChart.vue'
import StatisticsCardProfitLineChart from '@core/components/statistics-card/StatisticsCardProfitLineChart.vue'

// eslint-disable-next-line object-curly-newline
import { mdiAccountOutline, mdiCurrencyUsd, mdiTrendingUp, mdiPoll, mdiLabelVariantOutline, mdiCheck } from '@mdi/js'
import StatisticsCardVertical from '@/@core/components/statistics-card/StatisticsCardVertical.vue'
import StatisticsCardHorizontal from '@/@core/components/statistics-card/StatisticsCardHorizontal.vue'

// demos
import StatisticsCard from './CardStatisticsCard.vue'
import StatisticsTotalSales from './CardStatisticsTotalSales.vue'

export default {
  components: {
    StatisticsCardVertical,
    StatisticsCardHorizontal,
    StatisticsCardWithImages,
    StatisticsCardLineChart,
    StatisticsCardBarChart,
    StatisticsCardAreaChart,
    StatisticsCardRadialBarChart,
    StatisticsCardSessionBarChart,
    StatisticsCardProfitLineChart,

    StatisticsCard,
    StatisticsTotalSales,
  },
  setup() {
    // transparent background card
    const newCustomerOptions = {
      statTitle: 'New Customers',
      statistics: '2,856',
      change: '-10.2%',
      icon: mdiAccountOutline,
      color: 'primary',
    }

    // transparent background card
    const totalRevenueOptions = {
      statTitle: 'Total Revenue',
      statistics: '28.6k',
      change: '+25.8%',
      icon: mdiCurrencyUsd,
      color: 'success',
    }

    // transparent background card
    const newTransactions = {
      statTitle: 'New Transactions',
      statistics: '13.6k',
      change: '-25.8%',
      icon: mdiTrendingUp,
      color: 'info',
    }

    // transparent background card
    const totalProfit = {
      statTitle: 'Total Profit',
      statistics: '2,856',
      change: '+25.8%',
      icon: mdiPoll,
      color: 'warning',
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

    const totalProfitOptions = {
      statTitle: 'Total Profit',
      icon: mdiPoll,
      color: 'secondary',
      subtitle: 'Weekly Project',
      statistics: '$25.6k',
      change: '+42%',
    }

    const revenueOptions = {
      statTitle: 'Revenue',
      icon: mdiCurrencyUsd,
      color: 'success',
      subtitle: 'Revenue Increase',
      statistics: '$95.2k',
      change: '+12%',
    }

    const logisticsOptions = {
      statTitle: 'Logistics',
      icon: mdiCurrencyUsd,
      color: 'error',
      subtitle: 'Revenue Increase',
      statistics: '44.10k',
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

    const transactionsOptions = {
      statTitle: 'Transactions',
      icon: mdiTrendingUp,
      color: 'info',
      subtitle: 'Daily Transactions',
      statistics: '1.2k',
      change: '+12%',
    }

    // card with images
    const ratingsOptions = {
      statTitle: 'Ratings',
      statistics: '13k',
      change: '+38%',
      chipText: 'Year of 2021',
      chipColor: 'primary',
      avatar: require('@/assets/images/avatars/9.png'),
      avatarWidth: '112',
    }

    const sessionsOptions = {
      statTitle: 'Sessions',
      statistics: '24.5k',
      change: '-22%',
      chipText: 'Last Week',
      chipColor: 'secondary',
      avatar: require('@/assets/images/avatars/10.png'),
      avatarWidth: '86',
    }

    const customersOptions = {
      statTitle: 'Customers',
      statistics: '2,856',
      change: '+59%',
      chipText: 'Daily Customers',
      chipColor: 'info',
      avatar: require('@/assets/images/avatars/11.png'),
      avatarWidth: '88',
    }

    const totalOrders = {
      statTitle: 'Total Orders',
      statistics: '42.5k',
      change: '+26%',
      chipText: 'Last Month',
      chipColor: 'warning',
      avatar: require('@/assets/images/avatars/12.png'),
      avatarWidth: '73',
    }

    // chart card
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

    const revenueLineChart = {
      statTitle: 'Total Revenue',
      statistics: '$35.4k',
      series: [
        {
          data: [28, 58, 40, 68],
        },
      ],
    }

    const barChartWithGap = {
      statTitle: 'Sessions',
      statistics: '4,350',
      series: [
        {
          name: 'Earning',
          data: [180, 120, 284, 180, 102],
        },
        {
          name: 'Expense',
          data: [-100, -130, -100, -60, -120],
        },
      ],
    }

    const growthAreaChart = {
      statTitle: 'Total Growth',
      statistics: '42.5k',
      series: [
        {
          name: 'Subscribers',
          data: [28, 40, 36, 52, 38, 60, 55],
        },
      ],
    }

    const salesRadialChart = {
      statTitle: 'Total Sales',
      statistics: '135k',
      series: [78],
    }

    const profitLineChart = {
      statTitle: 'Total Profit',
      statistics: '$86.4k',
      series: [
        {
          data: [0, 20, 5, 30, 15, 45],
        },
      ],
    }

    return {
      newCustomerOptions,
      totalRevenueOptions,
      newTransactions,
      totalProfit,

      // horizontal card
      newProjectOptions,
      totalProfitOptions,
      reportsOptions,
      logisticsOptions,
      revenueOptions,
      transactionsOptions,

      // card with images
      ratingsOptions,
      sessionsOptions,
      customersOptions,
      totalOrders,

      // chart
      sessionBarChart,
      revenueLineChart,
      barChartWithGap,
      growthAreaChart,
      salesRadialChart,
      profitLineChart,
    }
  },
}
</script>
