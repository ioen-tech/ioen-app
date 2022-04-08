<template>
  <div class="d-flex demo-space-x flex-wrap">
    <v-checkbox
      input-value="true"
      value
      label="On"
      hide-details
    ></v-checkbox>

    <v-checkbox
      value
      label="Off"
      hide-details
    ></v-checkbox>

    <v-checkbox
      value
      indeterminate
      label="Indeterminate"
      hide-details
    ></v-checkbox>

    <v-checkbox
      input-value="true"
      value
      disabled
      label="On disabled"
      hide-details
    ></v-checkbox>

    <v-checkbox
      value
      disabled
      label="Off disabled"
      hide-details
    ></v-checkbox>
  </div>
</template>
