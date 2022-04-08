<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-text-field
        v-model="password"
        :append-icon="show1 ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Normal with hint text"
        hint="At least 8 characters"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-text-field
        :append-icon="show2 ? icons.mdiEyeOutline : icons.mdiEyeOffOutline"
        :rules="[rules.required, rules.min]"
        :type="show2 ? 'text' : 'password'"
        name="input-10-2"
        label="Visible"
        hint="At least 8 characters"
        value="wqfasds"
        class="input-group--focused"
        @click:append="show2 = !show2"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiEyeOutline, mdiEyeOffOutline } from '@mdi/js'

export default {
  setup() {
    const show1 = ref(false)
    const show2 = ref(true)
    const password = ref('Password')

    const rules = {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
    }

    return {
      show1,
      show2,
      password,
      rules,

      // icons
      icons: {
        mdiEyeOffOutline,
        mdiEyeOutline,
      },
    }
  },
}
</script>
