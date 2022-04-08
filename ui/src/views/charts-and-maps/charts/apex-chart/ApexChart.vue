<template>
  <v-row>
    <!-- line chart -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>Line Chart</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon
              size="18"
              class="me-1"
            >
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            <span>2019-05-01 to 2019-05-10</span>
          </span>
        </v-card-title>
        <v-card-subtitle>
          Commercial networks
        </v-card-subtitle>
        <v-card-text>
          <apex-chart-line-chart></apex-chart-line-chart>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- data science -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>Data Science</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon
              size="18"
              class="me-1"
            >
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            <span>2019-05-01 to 2019-05-10</span>
          </span>
        </v-card-title>
        <v-card-text>
          <apex-chart-data-science></apex-chart-data-science>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- New technology data -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>New Technologies Data</span>
          <v-spacer></v-spacer>
          <v-btn-toggle
            dense
            color="primary"
          >
            <v-btn
              outlined
              color="primary"
            >
              Daily
            </v-btn>
            <v-btn
              outlined
              color="primary"
            >
              Monthly
            </v-btn>
            <v-btn
              outlined
              color="primary"
            >
              Yearly
            </v-btn>
          </v-btn-toggle>
        </v-card-title>
        <v-card-text>
          <apex-chart-new-technologies-data></apex-chart-new-technologies-data>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- balance -->
    <v-col cols="12">
      <v-card>
        <v-card-title>
          <span>Balance</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">$100,000</span>
        </v-card-title>
        <v-card-subtitle>
          Commercial networks & enterprises
        </v-card-subtitle>
        <v-card-text>
          <apex-chart-balance></apex-chart-balance>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- apex chart bar -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title class="pb-0">
          <span>Balance</span>
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon
              size="18"
              class="me-1"
            >
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            <span>2019-05-01 to 2019-05-10</span>
          </span>
        </v-card-title>
        <v-card-text>
          <h3>$74,382.72</h3>
        </v-card-text>
        <v-card-text>
          <apex-chart-bar></apex-chart-bar>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- apex chart stock price -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Stocks Prices
          <v-spacer></v-spacer>
          <span class="subtitle-2">
            <v-icon
              size="18"
              class="me-1"
            >
              {{ icons.mdiCalendarBlankOutline }}
            </v-icon>
            <span>2019-05-01 to 2019-05-10</span>
          </span>
        </v-card-title>
        <v-card-subtitle>
          $50,863.98
        </v-card-subtitle>
        <v-card-text>
          <apex-chart-stock-price></apex-chart-stock-price>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Daily Sales States -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>Daily Sales States</v-card-title>

        <v-card-text>
          <apex-chart-daily-sales-states></apex-chart-daily-sales-states>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Statistics -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Statistics
        </v-card-title>

        <v-card-text>
          <apex-chart-statistics></apex-chart-statistics>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Mobile Comparison -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Mobile Comparison
        </v-card-title>
        <v-card-text>
          <apex-chart-mobile-comparison></apex-chart-mobile-comparison>
        </v-card-text>
      </v-card>
    </v-col>

    <!-- Expense Ratio -->
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-title>
          Expense Ratio
        </v-card-title>
        <v-card-subtitle>
          Spending on various categories
        </v-card-subtitle>
        <v-card-text>
          <apex-chart-expense-ratio></apex-chart-expense-ratio>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mdiCalendarBlankOutline } from '@mdi/js'

// demos
import ApexChartLineChart from './ApexChartLineChart.vue'
import ApexChartDataScience from './ApexChartDataScience.vue'
import ApexChartNewTechnologiesData from './ApexChartNewTechnologiesData.vue'
import ApexChartBalance from './ApexChartBalance.vue'
import ApexChartStockPrice from './ApexChartStockPrice.vue'
import ApexChartBar from './ApexChartBar.vue'
import ApexChartDailySalesStates from './ApexChartDailySalesStates.vue'
import ApexChartStatistics from './ApexChartStatistics.vue'
import ApexChartMobileComparison from './ApexChartMobileComparison.vue'
import ApexChartExpenseRatio from './ApexChartExpenseRatio.vue'

export default {
  components: {
    ApexChartLineChart,
    ApexChartDataScience,
    ApexChartNewTechnologiesData,
    ApexChartBalance,
    ApexChartStockPrice,
    ApexChartBar,
    ApexChartDailySalesStates,
    ApexChartStatistics,
    ApexChartMobileComparison,
    ApexChartExpenseRatio,
  },
  setup() {
    return {
      icons: {
        mdiCalendarBlankOutline,
      },
    }
  },
}
</script>
