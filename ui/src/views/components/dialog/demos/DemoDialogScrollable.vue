<template>
  <v-dialog
    v-model="isDialogVisible"
    scrollable
    max-width="350px"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        color="primary"
        dark
        v-bind="attrs"
        v-on="on"
      >
        Open Dialog
      </v-btn>
    </template>
    <v-card max-height="400px">
      <v-card-title>Select Country</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-radio-group
          v-model="choosedCountry"
          column
        >
          <v-radio
            v-for="country in countryList"
            :key="country.label"
            :label="country.label"
            :value="country.value"
          ></v-radio>
        </v-radio-group>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          color="error"
          outlined
          @click="isDialogVisible = false"
        >
          Close
        </v-btn>
        <v-btn
          color="success"
          @click="isDialogVisible = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const countryList = [
      { label: 'Bahamas, The', value: 'bahamas' },
      { label: 'Bahrain', value: 'bahrain' },
      { label: 'Bangladesh', value: 'bangladesh' },

      { label: 'Barbados', value: 'barbados' },
      { label: 'Belarus', value: 'belarus' },
      { label: 'Belgium', value: 'belgium' },
      { label: 'Belize', value: 'belize' },
      { label: 'Benin', value: 'benin' },
      { label: 'Bhutan', value: 'bhutan' },
      { label: 'Bolivia', value: 'bolivia' },
      { label: 'Bosnia and Herzegovina', value: 'bosnia' },

      { label: 'Botswana', value: 'botswana' },
      { label: 'Brazil', value: 'brazil' },
      { label: 'Brunei', value: 'brunei' },
      { label: 'Bulgaria', value: 'bulgaria' },
      { label: 'Burkina Faso', value: 'burkina' },
    ]
    const choosedCountry = ref('')
    const isDialogVisible = ref(false)

    return { choosedCountry, isDialogVisible, countryList }
  },
}
</script>
