<template>
  <div>
    <v-combobox
      v-model="select"
      :items="items"
      label="Select a favorite activity or create a new one"
      multiple
    ></v-combobox>

    <v-combobox
      v-model="select"
      :items="items"
      label="I use chips"
      multiple
      chips
    ></v-combobox>

    <v-combobox
      v-model="select"
      :items="items"
      label="I use a scoped slot"
      multiple
      chips
      hide-details
    >
      <template #selection="data">
        <v-chip
          :key="JSON.stringify(data.item)"
          v-bind="data.attrs"
          :input-value="data.selected"
          :disabled="data.disabled"
          @click:close="data.parent.selectItem(data.item)"
        >
          <v-avatar
            class="primary white--text"
            left
            v-text="data.item.slice(0, 1).toUpperCase()"
          ></v-avatar>
          {{ data.item }}
        </v-chip>
      </template>
    </v-combobox>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const select = ref(['Vuetify', 'Programming'])
    const items = ['Programming', 'Design', 'Vue', 'Vuetify']

    return { select, items }
  },
}
</script>
