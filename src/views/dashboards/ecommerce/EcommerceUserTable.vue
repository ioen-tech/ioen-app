<template>
  <v-card>
    <v-data-table
      v-model="selected"
      :headers="tableColumnHeaders"
      :items="userlist"
      item-key="id"
      show-select
      hide-default-footer
      class="table-rounded"
    >
      <!-- trending header -->
      <template #[`header.status`]>
        <v-icon size="22">
          {{ icons.mdiTrendingUp }}
        </v-icon>
      </template>

      <!-- trending  -->
      <template #[`item.status`]="{item}">
        <v-avatar
          size="30"
          :color="item.statusColor"
          :class="`v-avatar-light-bg ${item.statusColor}--text`"
        >
          <v-icon
            size="18"
            :color="item.statusColor"
          >
            {{ item.status }}
          </v-icon>
        </v-avatar>
      </template>

      <!-- client -->
      <template #[`item.client`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            :color="item.avatar ? '' : item.avatarColor"
            :class="`v-avatar-light-bg ${item.avatarColor}--text`"
            size="30"
          >
            <v-img
              v-if="item.avatar"
              :src="require(`@/assets/images/avatars/${item.avatar}`)"
            ></v-img>
            <span
              v-else
              class="font-weight-medium"
            >{{ item.fullName.slice(0,2).toUpperCase() }}</span>
          </v-avatar>

          <div class="d-flex flex-column ms-3">
            <span class="d-block text--primary  font-weight-semibold text-truncate">{{ item.fullName }}</span>
            <span class="text-xs">{{ item.email }}</span>
          </div>
        </div>
      </template>

      <!-- total -->
      <template #[`item.total`]="{item}">
        ${{ item.total }}
      </template>

      <!-- Balance -->
      <template #[`item.balance`]="{item}">
        <span v-if="typeof item.balance === 'number'"> ${{ item.balance }}</span>
        <v-chip
          v-else
          small
          :color="chipColor[item.balance]"
          :class="`v-chip-light-bg ${chipColor[item.balance]}--text font-weight-semibold`"
        >
          {{ item.balance }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiEmailOutline, mdiChartTimelineVariant, mdiArrowDown, mdiTrendingUp } from '@mdi/js'

export default {
  setup() {
    const selected = ref([])
    const chipColor = {
      Paid: 'success',
      Unpaid: 'error',
    }

    const tableColumnHeaders = [
      {
        text: '#ID',
        align: 'start',
        value: 'id',
      },
      { text: 'Status', value: 'status' },
      { text: 'CLIENT', value: 'client' },
      { text: 'TOTAL', value: 'total' },
      { text: 'BALANCE', value: 'balance' },
    ]

    const userlist = [
      {
        id: '#2798',
        status: mdiEmailOutline,
        statusColor: 'primary',
        avatar: '1.png',
        avatarColor: 'primary',
        fullName: 'Joseph Wheeler',
        email: 'ciakgu@geawo.gov',
        total: 277.39,
        balance: 459,
      },
      {
        id: '#1304',
        status: mdiChartTimelineVariant,
        statusColor: 'warning',
        avatar: '2.png',
        avatarColor: 'primary',
        fullName: 'May Lloyd',
        email: 'nofbek@zu.org',
        total: 117.58,
        balance: 'Paid',
      },
      {
        id: '#7900',
        status: mdiChartTimelineVariant,
        statusColor: 'warning',
        avatar: '3.png',
        avatarColor: 'primary',
        fullName: 'William Mckinney',
        email: 'cidagehe@nonaloobo.com',
        total: 1792,
        balance: 'Unpaid',
      },
      {
        id: '#63036',
        status: mdiArrowDown,
        statusColor: 'info',
        avatarColor: 'primary',
        fullName: 'Isabel Briggs',
        email: 'wafe@wavkes.net',
        total: 632.82,
        balance: 'Unpaid',
      },
      {
        id: '#33052',
        status: mdiEmailOutline,
        statusColor: 'primary',
        avatar: '5.png',
        avatarColor: 'primary',
        fullName: 'Warren Clarke',
        email: 'tabigzi@nep.net',
        total: 356.42,
        balance: 899,
      },
      {
        id: '#23579',
        status: mdiArrowDown,
        statusColor: 'info',
        avatar: '4.png',
        avatarColor: 'primary',
        fullName: 'Adeline Bennett',
        email: 'haurvu@wiendo.org',
        total: 289.9,
        balance: 'Unpaid',
      },
      {
        id: '#81618',
        status: mdiChartTimelineVariant,
        statusColor: 'warning',
        fullName: 'Abbie Webster',
        avatarColor: 'success',
        email: 'noj@ej.org',
        total: 2282,
        balance: 'Paid',
      },
    ]

    return {
      selected,
      tableColumnHeaders,
      userlist,
      chipColor,
      icons: {
        mdiTrendingUp,
      },
    }
  },
}
</script>
