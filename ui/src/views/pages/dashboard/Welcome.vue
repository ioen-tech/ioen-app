<template>
  <v-card>
    <v-row class="ma-0 pa-0">
      <v-col cols="8" sm="6">
        <v-card-title class="greeting-title d-flex flex-nowrap text-2xl">
          <span class="text-no-wrap">Congratulations</span>
          <span v-if="userData" class="text-no-wrap font-weight-bold mx-1">{{ userData.username }}!</span>
          <span>🎉</span>
        </v-card-title>

        <v-card-text>
          <span>You have joined the</span
          ><span class="text--primary font-weight-semibold"> Internet Of ENergy Community</span>
          <p>
            You can now communicate with others in the community via the
            <v-btn text to="/apps/ioen-mail">
              <v-icon>{{ icons.mdiEmailOutline }}</v-icon> Inbox
            </v-btn>
          </p>
          <p>
            Check out the Supply Agreements in your community
            <v-btn text to="/pages/supply-agreements">
              <v-icon>{{ icons.mdiSolarPower }}</v-icon> Supply Agreements
            </v-btn>
          </p>
          <p>And sign up to become a Supplier and/or a Consumer below.</p>
        </v-card-text>
      </v-col>

      <v-col cols="4" sm="6">
        <div>
          <v-img width="120" src="@/assets/images/misc/tree-4.png" class="gamification-tree-4"></v-img>
          <v-img width="121" src="@/assets/images/3d-characters/pose-2.png" class="gamification-john-pose-2"></v-img>
          <v-img width="80" :src="require('@/assets/images/svg/logo.svg')" class="gamification-tree mr-3"></v-img>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { computed } from '@vue/composition-api'
import { mdiEmailOutline, mdiSolarPower } from '@mdi/js'
import store from '../../../store'

export default {
  setup() {
    return {
      userData: computed(() => store.state.agentProfile),
      icons: {
        mdiEmailOutline,
        mdiSolarPower,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.gamification-tree-4,
.gamification-john-pose-2,
.gamification-tree {
  position: absolute;
}
.gamification-tree {
  top: 10%;
  right: 0;
}
.gamification-john-pose-2 {
  bottom: 0;
  right: 15%;
}
.gamification-tree-4 {
  bottom: 0;
  right: 30%;
}

@media (max-width: 600px) {
  .gamification-tree,
  .gamification-tree-4 {
    display: none;
  }
  .gamification-john-pose-2 {
    right: 5%;
  }
}

@media (max-width: 500px) {
  .gamification-john-pose-2 {
    max-width: 70px;
  }
}

@media (max-width: 400px) {
  .greeting-title {
    font-size: 1.2rem !important;
  }
}

// rtl
.v-application {
  &.v-application--is-rtl {
    .gamification-john-pose-2 {
      right: initial;
      left: 15%;
    }
    .gamification-tree {
      right: initial;
      left: 0;
    }
    .gamification-tree-4 {
      left: 30%;
      right: initial;
    }
  }
}
</style>
