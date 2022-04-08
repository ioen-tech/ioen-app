<template>
  <v-list rounded>
    <v-list-item-group
      v-model="selectedItem"
      color="primary"
    >
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiInstagram, mdiFacebook, mdiTwitter } from '@mdi/js'

export default {
  setup() {
    const selectedItem = ref(1)
    const items = [
      { text: 'Cupcake sesame snaps dessert marzipan.', icon: mdiInstagram },
      { text: 'Jelly beans jelly-o gummi bears chupa chups marshmallow.', icon: mdiFacebook },
      { text: 'Bonbon macaroon gummies pie jelly', icon: mdiTwitter },
    ]

    return { selectedItem, items }
  },
}
</script>
