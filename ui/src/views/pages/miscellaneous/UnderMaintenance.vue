<template>
  <div id="misc">
    <img
      class="misc-mask"
      height="226"
      :src="require(`@/assets/images/misc/misc-mask-${$vuetify.theme.dark ? 'dark' : 'light'}.png`)"
    />

    <v-img
      class="misc-tree"
      src="@/assets/images/misc/tree.png"
    ></v-img>

    <div class="page-title text-center px-5">
      <h2 class="text-2xl font-weight-semibold text--primary">
        Under Maintenance! 🚧
      </h2>
      <p class="text-sm">
        Sorry for the inconvenience but we're performing some maintenance at the moment
      </p>

      <div class="misc-character d-flex justify-center">
        <v-img
          max-width="700"
          src="@/assets/images/3d-characters/under-maintenance.png"
        ></v-img>
      </div>

      <v-btn
        color="primary"
        to="/"
        class="mb-4"
      >
        Back to home
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss">
@import '@core/preset/preset/misc.scss';
</style>
