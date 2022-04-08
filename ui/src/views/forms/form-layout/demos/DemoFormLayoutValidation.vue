<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :rules="nameRules"
      label="Name"
      required
      outlined
      dense
      hide-details="auto"
      class="mb-6"
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
      outlined
      dense
      hide-details="auto"
      class="mb-6"
    ></v-text-field>

    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
      hide-details="auto"
      class="mb-6"
      outlined
      dense
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
      class="mt-0"
    ></v-checkbox>

    <div class="mt-4">
      <v-btn
        :disabled="!valid"
        color="success"
        @click="validate"
      >
        Validate
      </v-btn>
      <v-btn
        color="error"
        class="mx-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </div>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const valid = ref(true)
    const name = ref('')
    const nameRules = [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ]
    const email = ref('')
    const emailRules = [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid']
    const select = ref(null)
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4']
    const checkbox = ref(false)
    const form = ref(null)

    const validate = () => {
      form.value.validate()
    }
    const reset = () => {
      form.value.reset()
    }

    const resetValidation = () => {
      form.value.resetValidation()
    }

    return {
      form,
      valid,
      name,
      nameRules,
      email,
      emailRules,
      select,
      items,
      checkbox,
      validate,
      reset,
      resetValidation,
    }
  },
}
</script>
