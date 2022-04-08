<template>
  <v-card>
    <v-data-table
      :headers="tableColumnHeaders"
      :items="userListData"
      show-select
      item-key="fullName"
      hide-default-footer
      class="table-rounded"
    >
      <!-- name -->
      <template #[`item.fullName`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            :color="item.avatar ? '' : 'primary'"
            :class="item.avatar ? '' : 'v-avatar-light-bg primary--text'"
            size="32"
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
            <small>{{ item.userName }}</small>
          </div>
        </div>
      </template>

      <template #[`item.role`]="{item}">
        <div class="d-flex align-center">
          <v-avatar
            size="30"
            :color="role[item.role].color"
            :class="`v-avatar-light-bg ${role[item.role].color}--text me-3`"
          >
            <v-icon
              size="20"
              :color="role[item.role].color"
            >
              {{ role[item.role].icon }}
            </v-icon>
          </v-avatar>
          <span>{{ item.role }}</span>
        </div>
      </template>

      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[item.status]"
          :class="`${statusColor[item.status]}--text`"
          class="v-chip-light-bg font-weight-semibold text-capitalize"
        >
          {{ item.status }}
        </v-chip>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import {
  mdiSquareEditOutline,
  mdiDotsVertical,
  mdiChartTimelineVariant,
  mdiAccountOutline,
  mdiPencilOutline,
  mdiCogOutline,
} from '@mdi/js'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      inactive: 'secondary',
      active: 'success',
      pending: 'warning',
      applied: 'info',
      /* eslint-enable key-spacing */
    }

    const role = {
      maintainer: { icon: mdiChartTimelineVariant, color: 'primary' },
      subscriber: { icon: mdiAccountOutline, color: 'warning' },
      editor: { icon: mdiPencilOutline, color: 'info' },
      author: { icon: mdiCogOutline, color: 'success' },
    }

    const userListData = [
      {
        avatar: '1.png',
        fullName: 'Joseph Wheeler',
        userName: '@gslixby0',
        primaryEmail: 'nuroani@icpair.com',
        role: 'maintainer',
        status: 'inactive',
      },
      {
        avatar: '2.png',
        fullName: 'May Lloyd',
        userName: '@hredmore1',
        primaryEmail: 'jeju@ma.co.uk',
        role: 'subscriber',
        status: 'active',
      },
      {
        avatar: '3.png',
        fullName: 'William Mckinney',
        userName: '@msicely2',
        primaryEmail: 'suumde@ha.co.uk',
        role: 'subscriber',
        status: 'pending',
      },
      {
        fullName: 'Isabel Briggs',
        userName: '@crisby3',
        primaryEmail: 'temiwiho@ohacma.gov',
        role: 'editor',
        status: 'active',
      },
      {
        avatar: '5.png',
        fullName: 'Warren Clarke',
        userName: '@mhurran4',
        primaryEmail: 'hirasles@zozzetkuv.edu',
        role: 'maintainer',
        status: 'inactive',
      },
      {
        avatar: '4.png',
        fullName: 'Adeline Bennett',
        userName: '@shalstead5',
        primaryEmail: 'boz@peh.co.uk',
        role: 'author',
        status: 'pending',
      },
      {
        fullName: 'Cristina Briggs',
        userName: '@bgallemore6',
        primaryEmail: 'temiwiho@ohacma.gov',
        role: 'editor',
        status: 'active',
      },
    ]

    const tableColumnHeaders = [
      { text: 'USER', value: 'fullName' },
      { text: 'EMAIL', value: 'primaryEmail' },
      { text: 'ROLE', value: 'role' },
      { text: 'STATUS', value: 'status' },
    ]

    return {
      userListData,
      statusColor,
      role,
      tableColumnHeaders,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
