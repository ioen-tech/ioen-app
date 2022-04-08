/* eslint-disable no-useless-escape */

export const comboboxNoDataWithChips = `
<template>
  <v-combobox
    v-model="selectedList"
    :items="items"
    :search-input.sync="search"
    hide-selected
    hint="Maximum of 5 tags"
    label="Add some tags"
    multiple
    persistent-hint
    small-chips
  >
    <template #no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { ref, watch, nextTick } from '@vue/composition-api'

export default {
  setup() {
    const items = ['Gaming', 'Programming', 'Vue', 'Vuetify']
    const selectedList = ref(['Vuetify'])
    const search = ref(null)

    watch(selectedList, value => {
      if (value.length > 5) {
        nextTick(() => selectedList.value.pop())
      }
    })

    return { items, selectedList, search }
  },
}
</script>
`

export const comboboxBasic = `
<template>
  <v-combobox
    :items="items"
    hide-details
  ></v-combobox>
</template>

<script>
export default {
  setup() {
    const items = ['Programming', 'Design', 'Vue', 'Vuetify']

    return { items }
  },
}
</script>
`

export const comboboxVariant = `
<template>
  <div>
    <v-combobox
      v-model="select"
      :items="items"
      multiple
      solo
    ></v-combobox>

    <v-combobox
      v-model="select"
      :items="items"
      multiple
      outlined
    ></v-combobox>

    <v-combobox
      v-model="select"
      :items="items"
      multiple
      filled
      hide-details
    ></v-combobox>
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
`

export const comboboxClearable = `
<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    clearable
  ></v-combobox>
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
`

export const comboboxMultiple = `
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
`

export const comboboxDense = `
<template>
  <v-combobox
    v-model="select"
    :items="items"
    label="Combobox"
    multiple
    hide-details
  ></v-combobox>
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
`

export const comboboxAdvanceCustomOptions = `
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
            :color="\`\${colors[nonce - 1]}\`"
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
          :color="\`\${item.color}\`"
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
          :color="\`\${item.color}\`"
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
`
