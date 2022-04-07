<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      v-model="toggleSwiteches"
      label="primary"
      color="primary"
      value="primary"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="secondary"
      color="secondary"
      value="secondary"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="success"
      color="success"
      value="success"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="info"
      color="info"
      value="info"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="warning"
      color="warning"
      value="warning"
      hide-details
    ></v-switch>

    <v-switch
      v-model="toggleSwiteches"
      label="error"
      color="error"
      value="error"
      hide-details
    ></v-switch>
  </div>
</template>

<script>
export default {
  setup() {
    const toggleSwiteches = ['primary', 'secondary', 'success', 'info', 'warning', 'error']

    return { toggleSwiteches }
  },
}
</script>
