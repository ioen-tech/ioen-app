<template>
  <div class="demo-space-x d-flex flex-wrap">
    <v-checkbox
      v-model="colorCheckbox"
      label="primary"
      color="primary"
      value="primary"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="colorCheckbox"
      label="secondary"
      color="secondary"
      value="secondary"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="colorCheckbox"
      label="success"
      color="success"
      value="success"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="colorCheckbox"
      label="info"
      color="info"
      value="info"
      hide-details
    ></v-checkbox>

    <v-checkbox
      v-model="colorCheckbox"
      label="warning"
      color="warning"
      value="warning"
      hide-details
    ></v-checkbox>
    <v-checkbox
      v-model="colorCheckbox"
      label="error"
      color="error"
      value="error"
      hide-details
    ></v-checkbox>
  </div>
</template>

<script>
export default {
  setup() {
    const colorCheckbox = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

    return { colorCheckbox }
  },
}
</script>
