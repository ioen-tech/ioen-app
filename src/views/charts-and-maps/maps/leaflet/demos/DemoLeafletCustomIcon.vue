<template>
  <l-map
    :zoom="zoom"
    :center="center"
  >
    <l-tile-layer
      :url="url"
      :attribution="attribution"
    />

    <!-- Use default icon -->
    <l-marker :lat-lng="[47.41322, -1.219482]" />

    <!-- Use icon given in icon property -->
    <l-marker
      :lat-lng="[47.41322, -1.209482]"
      :icon="iconData"
    />

    <!-- Create image icon (icon) from l-icon tag -->
    <l-marker
      :lat-lng="[47.41322, -1.199482]"
      :icon="iconData2"
    >
    </l-marker>
  </l-map>
</template>

<script>
/* eslint-disable global-require */
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'
import { latLng, icon, Icon } from 'leaflet'

// eslint-disable-next-line no-underscore-dangle
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
})

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  setup() {
    const zoom = 13
    const center = latLng(47.41322, -1.219482)
    const url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
    const attribution = '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    const iconData = icon({
      iconUrl: require('@/assets/images/misc/leaf-green.png'),
      iconSize: [25, 50],
      iconAnchor: [16, 37],
    })

    const iconData2 = icon({
      iconUrl: require('@/assets/images/misc/leaf-red.png'),
      iconSize: [25, 50],
      iconAnchor: [16, 37],
    })

    return {
      zoom,
      center,
      url,
      attribution,
      iconData,
      iconData2,
    }
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
.vue2leaflet-map {
  &.leaflet-container {
    height: 350px;
  }
}
</style>
