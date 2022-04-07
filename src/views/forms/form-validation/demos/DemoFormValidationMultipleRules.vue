<template>
  <v-form ref="form">
    <v-row>
      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="name"
          outlined
          dense
          hide-details="auto"
          placeholder="Your Name"
          :rules="[required]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="email"
          outlined
          dense
          hide-details="auto"
          placeholder="Your Email"
          :rules="[required,emailValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="password"
          outlined
          dense
          hide-details="auto"
          type="password"
          placeholder="Your Password"
          :rules="[required,passwordValidator]"
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="6"
      >
        <v-text-field
          v-model="confirmPassword"
          outlined
          hide-details="auto"
          dense
          type="password"
          placeholder="Confirm Password"
          :rules="[required,confirmedValidator(confirmPassword,password)]"
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
// eslint-disable-next-line object-curly-newline
import { required, emailValidator, passwordValidator, confirmedValidator } from '@core/utils/validation'
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const form = ref(null)
    const password = ref('')
    const confirmPassword = ref('')

    const validate = () => {
      form.value.validate()
    }

    return {
      form,
      validate,
      name,
      email,
      password,
      confirmPassword,

      // validation rules
      required,
      emailValidator,
      passwordValidator,
      confirmedValidator,
    }
  },
}
</script>
