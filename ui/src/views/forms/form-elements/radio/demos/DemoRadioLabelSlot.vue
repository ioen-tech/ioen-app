<template>
  <v-radio-group
    v-model="radios"
    class="mt-0"
    hide-details
  >
    <template #label>
      <div>Your favourite <strong>search engine</strong></div>
    </template>
    <v-radio value="Google">
      <template #label>
        <div>Of course it's <strong class="success--text">Google</strong></div>
      </template>
    </v-radio>
    <v-radio value="Duckduckgo">
      <template #label>
        <div>Definitely <strong class="primary--text">Duckduckgo</strong></div>
      </template>
    </v-radio>
  </v-radio-group>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const radios = ref('Duckduckgo')

    return { radios }
  },
}
</script>
