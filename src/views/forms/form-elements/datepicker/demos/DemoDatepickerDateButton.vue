<template>
  <v-date-picker
    v-model="date"
    color="primary"
    @contextmenu:year="contextMenu"
    @dblclick:date="dblClick"
  ></v-date-picker>
</template>

<script>
import { ref, set } from '@vue/composition-api'

export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const done = ref([false, false, false])
    const mouseMonth = ref(null)

    const contextMenu = (year, event) => {
      set(done.value, 2, true)
      event.preventDefault()

      // eslint-disable-next-line no-alert
      alert(`You have activated context menu for year ${year}`)
    }

    const dblClick = d => {
      set(done.value, 0, true)

      // eslint-disable-next-line no-alert
      alert(`You have just double clicked the following date: ${d}`)
    }

    return {
      date,
      done,
      mouseMonth,
      contextMenu,
      dblClick,
    }
  },
}
</script>
