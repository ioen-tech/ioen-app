<template>
  <v-form>
    <v-text-field
      v-model="username"
      label="Username"
      outlined
      dense
      placeholder="Username"
    ></v-text-field>

    <v-text-field
      v-model="email"
      label="Email"
      type="email"
      hint="Enter a Valid Email"
      outlined
      dense
      placeholder="Email"
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      hint="Your password must be 8-20 characters long."
      persistent-hint
      outlined
      dense
      class="mb-2"
      type="password"
      placeholder="password"
    ></v-text-field>

    <v-autocomplete
      v-model="values"
      :items="items"
      outlined
      dense
      chips
      small-chips
      label="Outlined"
      multiple
    ></v-autocomplete>

    <v-checkbox
      v-model="checkbox"
      label="Remember me"
      class="mt-0"
    ></v-checkbox>

    <v-btn color="primary">
      Submit
    </v-btn>

    <v-btn
      type="reset"
      outlined
      class="mx-2"
    >
      Reset
    </v-btn>
  </v-form>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const username = ref('')
    const email = ref('')
    const mobile = ref()
    const password = ref()
    const checkbox = ref(false)
    const value = ref(null)
    const items = ['foo', 'bar', 'fizz', 'buzz']
    const values = []

    return {
      username,
      email,
      mobile,
      password,
      checkbox,
      value,
      items,
      values,
    }
  },
}
</script>
