<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        label="Default"
      ></v-text-field>

      <v-text-field
        label="Outlined"
        outlined
      ></v-text-field>

      <v-text-field
        label="Shaped"
        outlined
        shaped
      ></v-text-field>

      <v-text-field
        label="Solo"
        solo
        hide-details
      ></v-text-field>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <v-text-field
        label="Filled"
        filled
      ></v-text-field>

      <v-text-field
        label="Solo Inverted"
        solo-inverted
      ></v-text-field>

      <v-text-field
        label="Flat"
        solo-inverted
        flat
      ></v-text-field>

      <v-text-field
        label="Rounded"
        filled
        rounded
        hide-details
      ></v-text-field>
    </v-col>
  </v-row>
</template>
