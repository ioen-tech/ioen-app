<template>
  <v-list flat>
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
      'Sweet gummi bears gingerbread carrot',
      'Cake macaroon brownie wafer soufflé',
      'Jelly beans lemon drops',
      'Lollipop ice cream donut chupa chups',
      'Chocolate candy canes tootsie roll',
    ]

    return { selectedItem, items }
  },
}
</script>
