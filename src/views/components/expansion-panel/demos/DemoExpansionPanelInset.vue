<template>
  <div>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="item in 4"
        :key="item"
      >
        <v-expansion-panel-header>Inset {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
