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
        You are not authorized! 🔐
      </h2>
      <p class="text-sm">
        You don’t have permission to access this page. Go Home!
      </p>

      <div class="misc-character d-flex justify-center">
        <v-img
          max-width="700"
          src="@/assets/images/3d-characters/not-authorized.png"
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
