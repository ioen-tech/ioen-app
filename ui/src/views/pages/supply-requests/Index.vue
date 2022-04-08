<template>
  <div>
    <v-row>
      <v-col md="4" sm="6" cols="12">
        <v-card>
          <v-img class="white--text align-end" src="@/assets/images/pages/2.png" height="150" />
          <v-card-text class="position-relative">
            <!-- User Avatar -->
            <v-avatar size="60" color="white" class="avatar-center">
              <v-img src="@/assets/images/avatars/1.png"></v-img>
            </v-avatar>
            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap pt-12">
              <div class="me-2 mb-2">
                <v-card-title class="pt-0 px-0"> Adam Bumpus </v-card-title>
                <v-card-subtitle class="text-xs pa-0"> Community Builder Plan </v-card-subtitle>
              </div>
              <v-btn color="primary"> confirm request </v-btn>
            </div>
            <!-- Mutual Friends -->
            <div class="d-flex justify-space-between align-center mt-8">
              <span class="text--primary font-weight-medium"> 18 mutual friends </span>
              <div class="v-avatar-group" :class="rootThemeClasses">
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/1.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/2.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/3.png"></v-img>
                </v-avatar>
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/4.png"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col md="4" sm="6" cols="12">
        <v-card>
          <v-img class="white--text align-end" src="@/assets/images/pages/2.png" height="150" />
          <v-card-text class="position-relative">
            <!-- User Avatar -->
            <v-avatar size="60" color="white" class="avatar-center">
              <v-img src="@/assets/images/avatars/3.png"></v-img>
            </v-avatar>
            <!-- Title, Subtitle & Action Button -->
            <div class="d-flex justify-space-between flex-wrap pt-12">
              <div class="me-2 mb-2">
                <v-card-title class="pt-0 px-0"> Simon Wilson </v-card-title>
                <v-card-subtitle class="text-xs pa-0"> Community Builder Plan </v-card-subtitle>
              </div>
              <v-btn color="primary"> confirm request </v-btn>
            </div>
            <!-- Mutual Friends -->
            <div class="d-flex justify-space-between align-center mt-8">
              <span class="text--primary font-weight-medium"> 1 mutual friend </span>
              <div class="v-avatar-group" :class="rootThemeClasses">
                <v-avatar size="40">
                  <v-img src="@/assets/images/avatars/3.png"></v-img>
                </v-avatar>
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import useVuetify from '@core/utils/vuetify'
import {
  mdiChevronUp,
  mdiChevronDown,
  mdiCartPlus,
  mdiShareVariantOutline,
  mdiLockOpenOutline,
  mdiStarOutline,
  mdiAccountOutline,
  mdiTrendingUp,
  mdiHelpCircleOutline,
} from '@mdi/js'

export default {
  setup() {
    const { rootThemeClasses } = useVuetify()
    const isCardDetailsVisible = false
    const rating = ref(5)

    return {
      rootThemeClasses,
      isCardDetailsVisible,
      rating,

      // icons
      icons: {
        mdiChevronUp,
        mdiChevronDown,
        mdiCartPlus,
        mdiShareVariantOutline,
        mdiLockOpenOutline,
        mdiStarOutline,
        mdiAccountOutline,
        mdiTrendingUp,
        mdiHelpCircleOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~@core/preset/preset/mixins.scss';

.avatar-center {
  top: -2rem;
  left: 1rem;
  border: 3px solid white;
  position: absolute;
}

// membership pricing
@include theme--child(memberpricing-bg) using ($material) {
  background-color: rgba(map-deep-get($material, 'primary-shade'), map-deep-get($material, 'states', 'hover'));
}

.memberpricing-bg {
  position: relative;
}
.membership-pricing {
  text-align: center;
  sup {
    font-size: 3.75rem;
    top: 9px;
  }
}
</style>
