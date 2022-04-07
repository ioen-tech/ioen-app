<template>
  <v-menu top>
    <template #activator="{ on: menu, attrs }">
      <v-tooltip bottom>
        <template #activator="{ on: tooltip }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="{ ...tooltip, ...menu }"
          >
            Dropdown w/ Tooltip
          </v-btn>
        </template>
        <span>I am a Tooltip</span>
      </v-tooltip>
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
    const items = [{ title: 'Options 1' }, { title: 'Options 2' }, { title: 'Options 3' }, { title: 'Options 4' }]

    return { items }
  },
}
</script>
