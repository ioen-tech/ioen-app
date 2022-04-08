<template>
  <div id="misc">
    <img
      class="misc-mask"
      height="226"
      :src="require(`@/assets/images/misc/misc-mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <v-img
      class="misc-tree"
      src="@/assets/images/misc/tree-2.png"
    ></v-img>

    <div class="page-title text-center px-5">
      <h2 class="text-2xl font-weight-semibold text--primary">
        We are launching soon 🚀
      </h2>
      <p class="text-sm">
        Our website is opening soon. Please register to get notified when it's ready!
      </p>

      <div class="d-flex align-center justify-center">
        <v-text-field
          outlined
          hide-details
          dense
          placeholder="Enter your email or username"
          class="misc-input-width me-3"
        ></v-text-field>

        <v-btn color="primary">
          Notify
        </v-btn>
      </div>

      <div class="misc-character d-flex justify-center">
        <v-img
          max-width="700"
          src="@/assets/images/3d-characters/launching-soon.png"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@core/preset/preset/misc.scss';
</style>
