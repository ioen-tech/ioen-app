<template>
  <div class="demo-space-x">
    <v-btn
      color="primary"
      to="alert"
    >
      String Literal
    </v-btn>

    <v-btn
      color="warning"
      :to="{ path: 'alert' }"
    >
      Object Path
    </v-btn>

    <v-btn
      color="success"
      :to="{ name: 'alert'}"
    >
      Named Router
    </v-btn>

    <v-btn
      color="secondary"
      :to="{ path: 'alert', query: { plan: 'private' } }"
    >
      With Query
    </v-btn>
  </div>
</template>
