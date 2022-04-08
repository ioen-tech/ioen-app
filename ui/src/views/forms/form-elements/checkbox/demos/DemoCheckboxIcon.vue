<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      v-model="toggleCheckboxOne"
      :label="`${toggleCheckboxOne.toString()}`"
      :on-icon="icons.mdiCheck"
      :off-icon="icons.mdiClose"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="toggleCheckboxTwo"
      :label="`${toggleCheckboxTwo.toString()}`"
      :on-icon="icons.mdiAlarmCheck"
      :off-icon="icons.mdiAlarm"
      color="success"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="toggleCheckboxThree"
      :label="`${toggleCheckboxThree.toString()}`"
      :on-icon="icons.mdiCheckCircle"
      :off-icon="icons.mdiCloseCircle"
      color="error"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiCheck, mdiClose, mdiAlarm, mdiAlarmCheck, mdiCheckCircle, mdiCloseCircle } from '@mdi/js'

export default {
  setup() {
    const toggleCheckboxOne = ref(true)
    const toggleCheckboxTwo = ref(true)
    const toggleCheckboxThree = ref(true)

    return {
      toggleCheckboxOne,
      toggleCheckboxTwo,
      toggleCheckboxThree,

      // icons
      icons: {
        mdiCheck,
        mdiClose,
        mdiAlarm,
        mdiAlarmCheck,
        mdiCheckCircle,
        mdiCloseCircle,
      },
    }
  },
}
</script>
