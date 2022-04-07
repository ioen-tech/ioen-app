<template>
  <v-tabs show-arrows>
    <v-tab
      v-for="i in 10"
      :key="i"
    >
      Item {{ i }}
    </v-tab>
  </v-tabs>
</template>
