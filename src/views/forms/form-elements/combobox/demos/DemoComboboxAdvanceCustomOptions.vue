<template>
  <div>
    <v-combobox
      v-model="model"
      :filter="filter"
      :hide-no-data="!search"
      :items="items"
      :search-input.sync="search"
      hide-selected
      label="Search for an option"
      multiple
      small-chips
      hide-details
    >
      <template #no-data>
        <v-list-item>
          <span class="subheading">Create</span>
          <v-chip
            :color="`${colors[nonce - 1]}`"
            label
            small
          >
            {{ search }}
          </v-chip>
        </v-list-item>
      </template>
      <template #selection="{ attrs, item, parent, selected }">
        <v-chip
          v-if="item === Object(item)"
          v-bind="attrs"
          :color="`${item.color}`"
          :input-value="selected"
          label
          small
        >
          <span class="pe-2">
            {{ item.text }}
          </span>
          <v-icon
            small
            icon
            @click="parent.selectItem(item)"
          >
            {{ icons.mdiClose }}
          </v-icon>
        </v-chip>
      </template>
      <template #item="{ index, item }">
        <v-text-field
          v-if="editing === item"
          v-model="editing.text"
          autofocus
          flat
          background-color="transparent"
          hide-details
          solo
          @keyup.enter="edit(index, item)"
        ></v-text-field>
        <v-chip
          v-else
          :color="`${item.color}`"
          dark
          label
          small
        >
          {{ item.text }}
        </v-chip>
        <v-spacer></v-spacer>
        <v-list-item-action @click.stop>
          <v-btn
            icon
            @click.stop.prevent="edit(index, item)"
          >
            <v-icon>{{ editing !== item ? icons.mdiPencil : icons.mdiCheck }}</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-combobox>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref, watch } from '@vue/composition-api'
import { mdiPencil, mdiCheck, mdiClose } from '@mdi/js'

export default {
  setup() {
    const activator = ref(null)
    const attach = ref(null)
    const colors = ['primary', 'secondary', 'success', 'info', 'warning', 'error']
    const editing = ref()
    const editingIndex = ref(-1)
    const items = ref([
      { header: 'Select an option or create one' },
      {
        text: 'Foo',
        color: 'primary',
      },
      {
        text: 'Bar',
        color: 'error',
      },
    ])
    const nonce = ref(1)
    const menu = ref(false)
    const model = ref([
      {
        text: 'Foo',
        color: 'primary',
      },
    ])

    const search = ref()

    const edit = (index, item) => {
      if (!editing.value) {
        editing.value = item
        editingIndex.value = index
      } else {
        editing.value = null
        editingIndex.value = -1
      }
    }

    const filter = (item, queryText, itemText) => {
      if (item.header) return false

      const hasValue = val => (val != null ? val : '')

      const text = hasValue(itemText)
      const query = hasValue(queryText)

      return text.toString().toLowerCase().indexOf(query.toString().toLowerCase()) > -1
    }

    watch(model, (val, prev) => {
      if (val.length === prev.length) return

      model.value = val.map(v => {
        if (typeof v === 'string') {
          // eslint-disable-next-line no-param-reassign
          v = {
            text: v,
            color: colors[nonce.value - 1],
          }

          items.value.push(v)

          nonce.value += 1
        }

        return v
      })
    })

    return {
      items,
      activator,
      attach,
      editing,
      editingIndex,
      menu,
      search,
      model,
      colors,
      nonce,

      edit,
      filter,

      icons: {
        mdiPencil,
        mdiCheck,
        mdiClose,
      },
    }
  },
}
</script>
