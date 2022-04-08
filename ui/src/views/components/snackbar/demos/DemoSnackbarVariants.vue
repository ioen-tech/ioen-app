<template>
  <div class="demo-space-x">
    <!-- shaped toggle btn -->
    <v-btn
      color="primary"
      @click="isShapedSnackbarVisible = true"
    >
      shaped
    </v-btn>

    <!-- shaped snackbar -->
    <v-snackbar
      v-model="isShapedSnackbarVisible"
      shaped
      top
      :light="$vuetify.theme.dark"
    >
      Donut sweet marshmallow cookie bonbon pastry tootsie roll.
    </v-snackbar>

    <!-- rounded toggle btn-->
    <v-btn
      color="primary"
      @click="isRoundedSnackbarVisible = true"
    >
      Rounded
    </v-btn>

    <!-- rounded snackbar -->
    <v-snackbar
      v-model="isRoundedSnackbarVisible"
      rounded="pill"
      top
      :light="$vuetify.theme.dark"
      right
    >
      Jelly chocolate bar candy canes apple pie.
    </v-snackbar>

    <!-- color toggle btn-->
    <v-btn
      color="primary"
      @click="isColorSnackbarVisible = true"
    >
      Color
    </v-btn>

    <!-- color snackbar -->
    <v-snackbar
      v-model="isColorSnackbarVisible"
      bottom
      right
      color="primary"
    >
      Ice cream cake candy canes.
    </v-snackbar>

    <!-- text toggle btn-->
    <v-btn
      color="primary"
      @click="isTextSnackbarVisible = true"
    >
      Text
    </v-btn>

    <!-- text snackbar -->
    <v-snackbar
      v-model="isTextSnackbarVisible"
      bottom
      :light="$vuetify.theme.dark"
      text
      color="primary"
    >
      Pie icing biscuit soufflé liquorice topping.
    </v-snackbar>

    <!-- outline toggle btn-->
    <v-btn
      color="primary"
      @click="isOutlinedSnackbarVisible = true"
    >
      Outlined
    </v-btn>

    <!-- outline snackbar -->
    <v-snackbar
      v-model="isOutlinedSnackbarVisible"
      left
      bottom
      outlined
      :light="$vuetify.theme.dark"
      color="error"
    >
      Oat cake caramels sesame snaps candy.
    </v-snackbar>

    <!-- Tile toggle btn-->
    <v-btn
      color="primary"
      @click="isTileSnackbarVisible = true"
    >
      Tile
    </v-btn>

    <!-- tile snackbar -->
    <v-snackbar
      v-model="isTileSnackbarVisible"
      top
      left
      :light="$vuetify.theme.dark"
      tile
    >
      Dessert tootsie wafer ice cream toffee jelly-o.
    </v-snackbar>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isShapedSnackbarVisible = ref(false)
    const isRoundedSnackbarVisible = ref(false)
    const isColorSnackbarVisible = ref(false)
    const isTextSnackbarVisible = ref(false)
    const isOutlinedSnackbarVisible = ref(false)
    const isTileSnackbarVisible = ref(false)

    return {
      isShapedSnackbarVisible,
      isRoundedSnackbarVisible,
      isColorSnackbarVisible,
      isTextSnackbarVisible,
      isOutlinedSnackbarVisible,
      isTileSnackbarVisible,
    }
  },
}
</script>
