<template>
  <v-data-table
    :headers="headers"
    :items="userList"
    :items-per-page="5"
    dense
  ></v-data-table>
</template>

<script>
import data from '../datatable'

export default {
  setup() {
    return {
      headers: [
        { text: 'ID', sortable: false, value: 'id' },
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'EXPERIENCE', value: 'experience' },
        { text: 'AGE', value: 'age' },
      ],
      userList: data,
    }
  },
}
</script>
