<template>
  <v-form>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
    ></v-text-field>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const email = ref('')
    const rules = {
      required: value => !!value || 'Required.',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        return pattern.test(value) || 'Invalid e-mail.'
      },
    }

    return {
      email,
      rules,
    }
  },
}
</script>
