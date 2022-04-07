<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="userList"
    >
      <template #top>
        <v-card-text>Try editing <code class="mx-1">name</code> or <code class="mx-1">salary</code> column</v-card-text>
      </template>

      <!-- name -->
      <template #[`item.full_name`]="{item}">
        <v-edit-dialog
          :return-value.sync="item.full_name"
        >
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

          <!-- {{ item.full_name }} -->
          <template v-slot:input>
            <v-text-field
              v-model="item.full_name"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <!-- salary -->
      <template #[`item.salary`]="{item}">
        <v-edit-dialog
          :return-value.sync="item.salary"
          large
          persistent
        >
          {{ `$${item.salary}` }}
          <template v-slot:input>
            <div class="mt-4 title">
              Update Salary
            </div>
            <v-text-field
              v-model="item.salary"
              :rules="[max25chars]"
              label="Edit"
              single-line
              counter
              autofocus
              type="number"
              prefix="$"
            ></v-text-field>
          </template>
        </v-edit-dialog>
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
  </div>
</template>

<script>
import { mdiSquareEditOutline, mdiDotsVertical } from '@mdi/js'
import data from '../datatable'

export default {
  setup() {
    const userList = []

    return {
      snack: false,
      snackColor: '',
      snackText: '',
      max25chars: v => v.length <= 25 || 'Input too long!',
      headers: [
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'SALARY', value: 'salary' },
        { text: 'AGE', value: 'age' },
        { text: 'STATUS', value: 'status' },
      ],
      statusColor: {
        /* eslint-disable key-spacing */
        Current: 'primary',
        Professional: 'success',
        Rejected: 'error',
        Resigned: 'warning',
        Applied: 'info',
        /* eslint-enable key-spacing */
      },
      status: {
        1: 'Current',
        2: 'Professional',
        3: 'Rejected',
        4: 'Resigned',
        5: 'Applied',
      },
      icons: {
        mdiSquareEditOutline,
        mdiDotsVertical,
      },
      userList,
    }
  },
  created() {
    this.userList = JSON.parse(JSON.stringify(data))
  },
}
</script>
