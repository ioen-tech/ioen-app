<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-date-picker
        ref="picker"
        v-model="date"
        color="primary"
        :picker-date.sync="pickerDate"
        full-width
      ></v-date-picker>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <div class="title">
        Month news ({{ pickerDate || 'change month...' }})
      </div>
      <div class="subheading">
        Change month to see other news
      </div>
      <ul class="ma-4">
        <li
          v-for="note in notes"
          :key="note"
        >
          {{ note }}
        </li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import { ref, watch } from '@vue/composition-api'

export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const pickerDate = ref(null)
    const notes = ref([])
    const allNotes = [
      'President met with prime minister',
      'New power plant opened',
      'Rocket launch announced',
      'Global warming discussion cancelled',
      'Company changed its location',
    ]

    watch(pickerDate, () => {
      notes.value = [
        allNotes[Math.floor(Math.random() * 5)],
        allNotes[Math.floor(Math.random() * 5)],
        allNotes[Math.floor(Math.random() * 5)],
      ].filter((value, index, self) => self.indexOf(value) === index)
    })

    return {
      date,
      pickerDate,
      notes,
      allNotes,
    }
  },
}
</script>
