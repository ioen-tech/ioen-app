<template>
  <l-map
    :zoom="zoom"
    :center="center"
  >
    <l-tile-layer :url="url" />
    <l-geo-json :geojson="geojson" />
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LGeoJson } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LGeoJson,
  },
  async created() {
    const response = await fetch(
      'https://rawgit.com/gregoiredavid/france-geojson/master/regions/pays-de-la-loire/communes-pays-de-la-loire.geojson',
    )
    this.geojson = await response.json()
  },
  setup() {
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const zoom = 8
    const center = [47.31322, -1.319482]
    const geojson = null

    return {
      url,
      zoom,
      center,
      geojson,
    }
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
