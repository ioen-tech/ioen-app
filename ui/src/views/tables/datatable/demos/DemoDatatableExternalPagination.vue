<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userList"
      :page.sync="page"
      :items-per-page="itemsPerPage"
      hide-default-footer
      @page-count="pageCount = $event"
    >
      <!-- name -->
      <template #[`item.full_name`]="{item}">
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
            <span v-else>{{ item.full_name.slice(0,2).toUpperCase() }}</span>
          </v-avatar>
          <div class="d-flex flex-column ms-3">
            <span class="d-block font-weight-semibold text--primary text-truncate">{{ item.full_name }}</span>
            <small>{{ item.post }}</small>
          </div>
        </div>
      </template>

      <!-- salary -->
      <template #[`item.salary`]="{item}">
        {{ `$${item.salary}` }}
      </template>

      <!-- status -->
      <template #[`item.status`]="{item}">
        <v-chip
          small
          :color="statusColor[status[item.status]]"
          :class="`${statusColor[status[item.status]]}--text`"
          class="v-chip-light-bg"
        >
          {{ status[item.status] }}
        </v-chip>
      </template>
    </v-data-table>

    <v-card-text class="pt-2">
      <v-row>
        <v-col
          lg="2"
          cols="3"
        >
          <v-text-field
            :value="itemsPerPage"
            label="Rows per page:"
            type="number"
            min="-1"
            max="15"
            hide-details
            @input="itemsPerPage = parseInt($event, 10)"
          ></v-text-field>
        </v-col>

        <v-col
          lg="10"
          cols="9"
          class="d-flex justify-end"
        >
          <v-pagination
            v-model="page"
            total-visible="6"
            :length="pageCount"
          ></v-pagination>
        </v-col>
      </v-row>
    </v-card-text>
  </div>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const statusColor = {
      /* eslint-disable key-spacing */
      Current: 'primary',
      Professional: 'success',
      Rejected: 'error',
      Resigned: 'warning',
      Applied: 'info',
      /* eslint-enable key-spacing */
    }

    return {
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      userList: data,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      statusColor,

      // icons
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
    }
  },
}
</script>
