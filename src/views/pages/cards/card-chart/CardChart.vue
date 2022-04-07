<template>
  <div>
    <v-row class="match-height">
      <v-col
        cols="12"
        md="8"
      >
        <total-profit></total-profit>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <total-visitors></total-visitors>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <weekly-sales></weekly-sales>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <total-revenue></total-revenue>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <weekly-overview></weekly-overview>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <performance></performance>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="6"
      >
        <analytics></analytics>
      </v-col>
      <v-col
        cols="12"
        md="4"
        sm="12"
      >
        <sales-state></sales-state>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <total-profit-radial></total-profit-radial>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <total-sales></total-sales>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <total-visits></total-visits>
      </v-col>
      <v-col
        cols="12"
        md="3"
        sm="6"
      >
        <revenue-report></revenue-report>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <activity-timeline></activity-timeline>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <sales-overview></sales-overview>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import TotalProfit from './cards/TotalProfit.vue'
import TotalVisitors from './cards/TotalVisitors.vue'
import WeeklySales from './cards/WeeklySales.vue'
import TotalRevenue from './cards/TotalRevenue.vue'
import WeeklyOverview from './cards/WeeklyOverview.vue'
import Performance from './cards/Performance.vue'
import Analytics from './cards/Analytics.vue'
import SalesState from './cards/SalesState.vue'
import TotalSales from './cards/TotalSales.vue'
import TotalProfitRadial from './cards/TotalProfitRadial.vue'
import TotalVisits from './cards/TotalVisits.vue'
import RevenueReport from './cards/RevenueReport.vue'
import ActivityTimeline from './cards/ActivityTimeline.vue'
import SalesOverview from './cards/SalesOverview.vue'

export default {
  components: {
    TotalProfit,
    TotalVisitors,
    WeeklySales,
    TotalRevenue,
    WeeklyOverview,
    Performance,
    Analytics,
    SalesState,
    TotalSales,
    TotalProfitRadial,
    TotalVisits,
    RevenueReport,
    ActivityTimeline,
    SalesOverview,
  },
}
</script>
