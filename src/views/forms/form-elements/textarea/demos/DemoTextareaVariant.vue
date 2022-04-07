<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Default"
        rows="2"
      ></v-textarea>

      <v-textarea
        label="Outlined"
        rows="2"
        outlined
      ></v-textarea>

      <v-textarea
        label="Shaped"
        rows="2"
        outlined
        shaped
      ></v-textarea>

      <v-textarea
        label="Solo"
        rows="2"
        solo
        hide-details
      ></v-textarea>
    </v-col>

    <v-col
      cols="12"
      sm="6"
    >
      <v-textarea
        label="Filled"
        rows="2"
        filled
      ></v-textarea>

      <v-textarea
        label="Solo Inverted"
        rows="2"
        solo-inverted
      ></v-textarea>

      <v-textarea
        label="Flat"
        rows="2"
        solo-inverted
        flat
      ></v-textarea>

      <v-textarea
        label="Solo Inverted"
        rows="1"
        filled
        rounded
        hide-details
      ></v-textarea>
    </v-col>
  </v-row>
</template>
