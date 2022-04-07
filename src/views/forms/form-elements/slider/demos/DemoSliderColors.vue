<template>
  <div>
    <v-slider
      v-model="slider1.val"
      :color="slider1.color"
      :label="slider1.label"
    ></v-slider>

    <v-slider
      v-model="slider2.val"
      :label="slider2.label"
      :track-color="slider2.color"
      class="my-6"
    ></v-slider>

    <v-slider
      v-model="slider3.val"
      :label="slider3.label"
      :thumb-color="slider3.color"
      thumb-label="always"
      hide-details
    ></v-slider>
  </div>
</template>

<script>
export default {
  setup() {
    const slider1 = { label: 'color', val: 25, color: 'error' }
    const slider2 = { label: 'track-color', val: 75, color: 'error' }
    const slider3 = { label: 'thumb-color', val: 50, color: 'error' }

    return { slider1, slider2, slider3 }
  },
}
</script>
