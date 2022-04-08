<template>
  <div>
    <v-alert
      border="left"
      color="primary"
      dark
      text
    >
      I'm an alert with a top border and red color
    </v-alert>

    <v-alert
      border="top"
      color="secondary"
      text
      dark
    >
      I'm an alert with a right border and blue-grey color
    </v-alert>

    <v-alert
      border="bottom"
      color="success"
      text
      dark
    >
      I'm an alert with a bottom border and pink color
    </v-alert>

    <v-alert
      border="right"
      color="info"
      dark
      text
      class="mb-0"
    >
      I'm an alert with a border left type info
    </v-alert>
  </div>
</template>
