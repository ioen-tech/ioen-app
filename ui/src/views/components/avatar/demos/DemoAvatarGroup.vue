<template>
  <div
    class="v-avatar-group"
    :class="rootThemeClasses"
  >
    <v-avatar>
      <v-img src="@/assets/images/avatars/1.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/2.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/3.png"></v-img>
    </v-avatar>
    <v-avatar>
      <v-img src="@/assets/images/avatars/4.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/5.png"></v-img>
    </v-avatar>

    <v-avatar>
      <v-img src="@/assets/images/avatars/6.png"></v-img>
    </v-avatar>
  </div>
</template>

<script>
import useVuetify from '@core/utils/vuetify'

export default {
  setup() {
    const { rootThemeClasses } = useVuetify()

    return {
      rootThemeClasses,
    }
  },
}
</script>
