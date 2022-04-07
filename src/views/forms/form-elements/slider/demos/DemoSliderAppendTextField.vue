<template>
  <div>
    <v-responsive
      :style="{ background: `rgb(${redColorValue}, ${greenColorValue}, ${blueColorValue})` }"
      height="300px"
    ></v-responsive>

    <div class="mt-5">
      <v-slider
        v-model="redColorValue"
        :max="255"
        label="R"
        hide-details
        class="align-center"
      >
        <template #append>
          <v-text-field
            v-model="redColorValue"
            class="mt-0 pt-0"
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>

      <v-slider
        v-model="greenColorValue"
        :max="255"
        label="G"
        hide-details
        class="align-center"
      >
        <template #append>
          <v-text-field
            v-model="greenColorValue"
            class="mt-0 pt-0"
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>

      <v-slider
        v-model="blueColorValue"
        :max="255"
        label="B"
        hide-details
        class="align-center"
      >
        <template #append>
          <v-text-field
            v-model="blueColorValue"
            class="mt-0 pt-0"
            type="number"
            style="width: 60px"
          ></v-text-field>
        </template>
      </v-slider>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const redColorValue = ref(115)
    const greenColorValue = ref(103)
    const blueColorValue = ref(240)

    return { redColorValue, greenColorValue, blueColorValue }
  },
}
</script>
