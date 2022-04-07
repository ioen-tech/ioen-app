<template>
  <div>
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="item in 4"
        :key="item"
      >
        <v-expansion-panel-header>
          Accordion {{ item }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
