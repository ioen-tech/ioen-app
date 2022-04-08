<template>
  <div>
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="item in 3"
        :key="item"
      >
        <v-expansion-panel-header>Popout {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
