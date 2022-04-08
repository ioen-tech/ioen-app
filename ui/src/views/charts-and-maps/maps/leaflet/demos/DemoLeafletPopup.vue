<template>
  <l-map
    :zoom="zoom"
    :center="center"
  >
    <l-tile-layer :url="url" />
    <l-marker :lat-lng="markerLatLng">
      <l-popup>You're here!</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup,
  },
  setup() {
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const zoom = 8
    const center = [47.31322, -1.319482]
    const markerLatLng = [47.31322, -1.319482, { draggable: 'true' }]

    return {
      url,
      zoom,
      center,
      markerLatLng,
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
