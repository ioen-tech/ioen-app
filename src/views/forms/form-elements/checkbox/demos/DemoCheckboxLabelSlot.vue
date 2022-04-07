<template>
  <v-checkbox
    v-model="checkbox"
    hide-details
  >
    <template #label>
      <div>
        I agree that
        <v-tooltip bottom>
          <template #activator="{ on }">
            <a
              href="javascript:void(0)"
              @click.stop
              v-on="on"
            >
              Vuetify
            </a>
          </template>
          Opens in new window
        </v-tooltip>
        is awesome
      </div>
    </template>
  </v-checkbox>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const checkbox = ref(false)

    return { checkbox }
  },
}
</script>
