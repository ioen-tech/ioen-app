<template>
  <v-row>
    <v-col cols="12">
      <app-card-code
        title="Basic Map"
        :code="codeSnippets.leafletBasic"
      >
        <v-card-text>
          <demo-leaflet-basic />
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col cols="12">
      <app-card-code
        title="Marker, Circle &amp; Polygon Map"
        :code="codeSnippets.leafletMarkerCirclePolygon"
      >
        <v-card-text>
          <demo-leaflet-marker-circle-polygon />
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col cols="12">
      <app-card-code
        title="Popup Map"
        :code="codeSnippets.leafletPopup"
      >
        <v-card-text>
          <demo-leaflet-popup />
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col cols="12">
      <app-card-code
        title="GeoJSON Map"
        :code="codeSnippets.leafletGeoJSON"
      >
        <v-card-text>
          <demo-leaflet-geo-jSON />
        </v-card-text>
      </app-card-code>
    </v-col>

    <v-col cols="12">
      <app-card-code
        title="Layer Group"
        :code="codeSnippets.leafletLayerGroup"
      >
        <demo-leaflet-layer-group />
      </app-card-code>
    </v-col>

    <v-col cols="12">
      <app-card-code
        title="Custom Icon"
        :code="codeSnippets.leafletCustomIcon"
      >
        <v-card-text>
          <demo-leaflet-custom-icon />
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

import DemoLeafletBasic from './demos/DemoLeafletBasic.vue'
import DemoLeafletMarkerCirclePolygon from './demos/DemoLeafletMarkerCirclePolygon.vue'
import DemoLeafletPopup from './demos/DemoLeafletPopup.vue'
import DemoLeafletGeoJSON from './demos/DemoLeafletGeoJSON.vue'
import DemoLeafletLayerGroup from './demos/DemoLeafletLayerGroup.vue'
import DemoLeafletCustomIcon from './demos/DemoLeafletCustomIcon.vue'

import {
  leafletBasic,
  leafletMarkerCirclePolygon,
  leafletPopup,
  leafletGeoJSON,
  leafletLayerGroup,
  leafletCustomIcon,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoLeafletBasic,
    DemoLeafletMarkerCirclePolygon,
    DemoLeafletPopup,
    DemoLeafletGeoJSON,
    DemoLeafletLayerGroup,
    DemoLeafletCustomIcon,
  },
  setup() {
    return {
      codeSnippets: {
        leafletBasic,
        leafletMarkerCirclePolygon,
        leafletPopup,
        leafletGeoJSON,
        leafletLayerGroup,
        leafletCustomIcon,
      },
    }
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  height: 400px;
  z-index: 1;
}
</style>
