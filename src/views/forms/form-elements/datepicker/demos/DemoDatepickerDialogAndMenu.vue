<template>
  <v-row>
    <v-col cols="12">
      <v-dialog
        ref="dialog"
        v-model="modal"
        :return-value.sync="date"
        persistent
        width="290px"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker in dialog"
            :prepend-icon="icons.mdiCalendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>

        <v-date-picker
          v-model="date"
          scrollable
          color="primary"
        >
          <v-btn
            text
            color="primary"
            @click="modal = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.dialog.save(date)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-dialog>
    </v-col>

    <v-col cols="12">
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="Picker without buttons"
            :prepend-icon="icons.mdiCalendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          color="primary"
          @input="menu2 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCalendar } from '@mdi/js'

export default {
  setup() {
    const date = new Date().toISOString().substr(0, 10)
    const menu = ref(false)
    const modal = ref(false)
    const menu2 = ref(false)
    const menuref = ref(null)

    return {
      date,
      menu,
      modal,
      menu2,
      menuref,

      // icons
      icons: {
        mdiCalendar,
      },
    }
  },
}
</script>
