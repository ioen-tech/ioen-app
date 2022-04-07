<template>
  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="item in 4"
      :key="item"
    >
      <v-expansion-panel-header>Focusable {{ item }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        Ice cream I love chocolate cake I love liquorice chocolate bar candy canes marzipan. Marshmallow cotton candy dessert bonbon tiramisu sweet. Wafer jelly jelly beans ice cream candy. Candy candy chocolate cake ice cream.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
