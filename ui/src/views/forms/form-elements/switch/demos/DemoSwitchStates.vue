<template>
  <div class="d-flex flex-wrap demo-space-x">
    <v-switch
      color="primary"
      input-value="true"
      label="on"
      value
    ></v-switch>

    <v-switch
      color="primary"
      label="off"
    ></v-switch>

    <v-switch
      color="primary"
      input-value="true"
      disabled
      label="on disabled"
      value
    ></v-switch>

    <v-switch
      disabled
      label="off disabled"
    ></v-switch>

    <v-switch
      loading="warning"
      input-value="true"
      label="on loading"
      value
    ></v-switch>

    <v-switch
      loading="warning"
      label="off loading"
    ></v-switch>
  </div>
</template>
