<template>
  <v-expansion-panels multiple>
    <v-expansion-panel
      v-for="item in 4"
      :key="item"
    >
      <v-expansion-panel-header>
        Collapse Item {{ item }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Candy sugar plum lemon drops. Gummi bears muffin dragée I love croissant. Macaroon gummi bears danish pastry lemon drops lemon drops. Jelly beans brownie ice cream jelly chocolate bar.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
