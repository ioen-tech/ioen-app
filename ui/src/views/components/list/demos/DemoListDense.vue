<template>
  <v-list dense>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-content>
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const selectedItem = ref(1)
    const items = [
      'halvah icing marshmallow',
      'Cake caramels donut danish muffin biscuit',
      'Chocolate cake pie lollipop',
      'Apple pie toffee pudding gummi bears',
      'Jujubes chupa chups cheesecake tart',
      'Candy fruitcake bonbon sesame snaps dessert',
      'Candy wafer tiramisu sugar plum sweet.',
      'Toffee gingerbread muffin macaroon cotton candy bonbon lollipop. ',
    ]

    return { selectedItem, items }
  },
}
</script>
