<template>
  <v-menu
    open-on-hover
    bottom
    offset-y
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        On hover
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
</template>

<script>
export default {
  setup() {
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }]

    return { items }
  },
}
</script>
