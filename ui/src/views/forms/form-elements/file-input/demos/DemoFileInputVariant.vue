<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-file-input
        label="Default"
      ></v-file-input>

      <v-file-input
        label="Outlined"
        outlined
      ></v-file-input>

      <v-file-input
        label="Shaped"
        shaped
        outlined
      ></v-file-input>

      <v-file-input
        label="Solo"
        solo
        hide-details
      ></v-file-input>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-file-input
        label="Filled"
        filled
      ></v-file-input>

      <v-file-input
        label="Solo Inverted"
        solo-inverted
      ></v-file-input>

      <v-file-input
        label="flat"
        solo-inverted
        flat
      ></v-file-input>

      <v-file-input
        label="Rounded"
        rounded
        filled
        hide-details
      ></v-file-input>
    </v-col>
  </v-row>
</template>
