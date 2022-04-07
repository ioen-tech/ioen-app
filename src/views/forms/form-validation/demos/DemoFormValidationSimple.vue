<template>
  <v-form ref="form">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="firstName"
          label="First Name"
          outlined
          dense
          hide-details="auto"
          :rules="[required]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          label="Email"
          outlined
          hide-details="auto"
          :rules="[required,emailValidator]"
          dense
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        class="pt-0"
      >
        <v-btn
          color="primary"
          @click="validate"
        >
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'
import { required, emailValidator } from '@core/utils/validation'

export default {
  setup() {
    const firstName = ref('')
    const email = ref('')
    const form = ref(null)
    const validate = () => {
      form.value.validate()
    }

    return {
      firstName,
      email,
      validate,
      form,

      // validation rules
      required,
      emailValidator,
    }
  },
}
</script>
