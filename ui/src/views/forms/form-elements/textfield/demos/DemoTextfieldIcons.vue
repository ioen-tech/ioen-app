<template>
  <div>
    <v-text-field
      label="Prepend"
      :prepend-icon="icons.mdiMapMarkerOutline"
    ></v-text-field>

    <v-text-field
      label="Prepend inner"
      :prepend-inner-icon="icons.mdiMapMarkerOutline"
    ></v-text-field>

    <v-text-field
      label="Append"
      :append-icon="icons.mdiMapMarkerOutline"
    ></v-text-field>

    <v-text-field
      label="Append outer"
      :append-outer-icon="icons.mdiMapMarkerOutline"
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
import { mdiMapMarkerOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiMapMarkerOutline,
      },
    }
  },
}
</script>
