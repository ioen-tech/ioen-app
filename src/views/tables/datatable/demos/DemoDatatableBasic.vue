<template>
  <v-data-table
    :headers="headers"
    :items="userData"
    :items-per-page="5"
  ></v-data-table>
</template>

<script>
import data from '../datatable'

export default {
  setup() {
    const userData = data

    return {
      headers: [
        { text: 'ID', sortable: false, value: 'id' },
        { text: 'NAME', value: 'full_name' },
        { text: 'EMAIL', value: 'email' },
        { text: 'DATE', value: 'start_date' },
        { text: 'EXPERIENCE', value: 'experience' },
        { text: 'AGE', value: 'age' },
      ],
      userData,
    }
  },
}
</script>
