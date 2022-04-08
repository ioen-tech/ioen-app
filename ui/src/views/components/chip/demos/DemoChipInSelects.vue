<template>
  <v-combobox
    v-model="chips"
    :items="items"
    chips
    clearable
    label="Your favorite hobbies"
    multiple
    :prepend-icon="icons.mdiFilterVariant"
    solo
  >
    <template #selection="{ attrs, item, select, selected }">
      <v-chip
        v-bind="attrs"
        :input-value="selected"
        close
        @click="select"
        @click:close="remove(item)"
      >
        <strong>{{ item }}</strong>&nbsp;
      </v-chip>
    </template>
  </v-combobox>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiFilterVariant } from '@mdi/js'

export default {
  setup() {
    const chips = ref(['Programming', 'Playing video games', 'Sleeping'])
    const items = ref(['Streaming', 'Eating'])

    const remove = item => {
      chips.value.splice(chips.value.indexOf(item), 1)
      chips.value = [...chips.value]
    }

    return {
      chips,
      items,
      remove,
      icons: {
        mdiFilterVariant,
      },
    }
  },
}
</script>
