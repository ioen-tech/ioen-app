<template>
  <div class="demo-space-x">
    <v-menu
      v-for="menu in menusVariant"
      :key="menu"
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          :color="menu"
          dark
          v-bind="attrs"
          v-on="on"
        >
          {{ menu }}
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
export default {
  setup() {
    const menusVariant = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    const items = [{ title: 'Option 1' }, { title: 'Option 2' }, { title: 'Option 3' }]

    return { menusVariant, items }
  },
}
</script>
