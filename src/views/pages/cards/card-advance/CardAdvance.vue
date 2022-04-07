<template>
  <v-row class="match-height">
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-transaction></card-transaction>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-upgrade-plan></card-upgrade-plan>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-meeting-schedule></card-meeting-schedule>
    </v-col>
    <v-col
      cols="12"
      md="5"
      sm="6"
    >
      <card-team-members></card-team-members>
    </v-col>
    <v-col
      cols="12"
      md="7"
    >
      <card-deposit-and-withdraw></card-deposit-and-withdraw>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-total-earning></card-total-earning>
    </v-col>
    <v-col
      cols="12"
      md="5"
      sm="6"
    >
      <card-finance-summary></card-finance-summary>
    </v-col>
    <v-col
      cols="12"
      md="3"
      sm="6"
    >
      <card-social-analytics></card-social-analytics>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-website-statistics></card-website-statistics>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-developer-meetup></card-developer-meetup>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-sales-by-countries></card-sales-by-countries>
    </v-col>
    <v-col
      cols="12"
      md="6"
      sm="6"
    >
      <card-activity-timeline></card-activity-timeline>
    </v-col>
    <v-col
      cols="12"
      md="4"
      sm="6"
    >
      <card-cafe-badilico></card-cafe-badilico>
    </v-col>
  </v-row>
</template>

<script>
import CardTransaction from './CardTransaction.vue'
import CardUpgradePlan from './CardUpgradePlan.vue'
import CardMeetingSchedule from './CardMeetingSchedule.vue'
import CardTeamMembers from './CardTeamMembers.vue'
import CardDepositAndWithdraw from './CardDepositAndWithdraw.vue'
import CardTotalEarning from './CardTotalEarning.vue'
import CardFinanceSummary from './CardFinanceSummary.vue'
import CardSocialAnalytics from './CardSocialAnalytics.vue'
import CardWebsiteStatistics from './CardWebsiteStatistics.vue'
import CardDeveloperMeetup from './CardDeveloperMeetup.vue'
import CardSalesByCountries from './CardSalesByCountries.vue'
import CardActivityTimeline from './CardActivityTimeline.vue'
import CardCafeBadilico from './CardCafeBadilico.vue'

export default {
  components: {
    CardTransaction,
    CardUpgradePlan,
    CardMeetingSchedule,
    CardTeamMembers,
    CardDepositAndWithdraw,
    CardTotalEarning,
    CardFinanceSummary,
    CardSocialAnalytics,
    CardWebsiteStatistics,
    CardDeveloperMeetup,
    CardSalesByCountries,
    CardActivityTimeline,
    CardCafeBadilico,
  },
}
</script>
