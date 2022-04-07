<template>
  <div class="demo-space-x">
    <v-menu
      top
      :offset-x="offset"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          offset x
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu
      top
      :offset-y="offset"
    >
      <template #activator="{ on, attrs }">
        <v-btn
          color="success"
          dark
          v-bind="attrs"
          v-on="on"
        >
          offset y
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const offset = ref(true)
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]

    return { offset, items }
  },
}
</script>
