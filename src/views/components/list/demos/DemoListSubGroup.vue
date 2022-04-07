<template>
  <v-list>
    <v-list-item>
      <v-list-item-icon>
        <v-icon>{{ mdiHomeOutline }}</v-icon>
      </v-list-item-icon>

      <v-list-item-title>Home</v-list-item-title>
    </v-list-item>

    <v-list-group
      :value="true"
      :prepend-icon="mdiAccountCircleOutline"
    >
      <template #activator>
        <v-list-item-title>Users</v-list-item-title>
      </template>

      <v-list-group
        no-action
        sub-group
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>Admin</v-list-item-title>
          </v-list-item-content>
        </template>

        <v-list-item
          v-for="([title, icon], i) in admins"
          :key="i"
          link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>

      <v-list-group
        no-action
        :value="true"
        sub-group
      >
        <template #activator>
          <v-list-item-content>
            <v-list-item-title>Actions</v-list-item-title>
          </v-list-item-content>
        </template>
        <v-list-item
          v-for="([title, icon], i) in cruds"
          :key="i"
          link
        >
          <v-list-item-title v-text="title"></v-list-item-title>

          <v-list-item-icon>
            <v-icon v-text="icon"></v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-group>
    </v-list-group>
  </v-list>
</template>

<script>
import {
  mdiAccountMultipleOutline,
  mdiCogOutline,
  mdiPlusOutline,
  mdiFileOutline,
  mdiUpdate,
  mdiDeleteOutline,
  mdiHomeOutline,
  mdiAccountCircleOutline,
} from '@mdi/js'

export default {
  setup() {
    const admins = [
      ['Management', mdiAccountMultipleOutline],
      ['Settings', mdiCogOutline],
    ]

    const cruds = [
      ['Create', mdiPlusOutline],
      ['Read', mdiFileOutline],
      ['Update', mdiUpdate],
      ['Delete', mdiDeleteOutline],
    ]

    return {
      admins,
      cruds,
      mdiHomeOutline,
      mdiAccountCircleOutline,
    }
  },
}
</script>
