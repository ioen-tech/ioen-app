<template>
  <v-row>
    <!-- congratulations john card -->
    <v-col
      cols="12"
      md="4"
      sm="6"
      order="2"
      order-md="1"
      class="mb-10"
    >
      <v-card class="triangle-card">
        <v-row>
          <v-col cols="8">
            <v-card-title class="page-title text-no-wrap pt-2">
              Congratulations John! 🥳
            </v-card-title>
            <v-card-subtitle class="text-no-wrap">
              Best seller of the month
            </v-card-subtitle>
            <v-card-text class="d-flex align-center pb-2">
              <div>
                <p class="text-2xl font-weight-semibold primary--text mb-0">
                  $42.8k
                </p>
                <p>78% of target 🤟🏻</p>
                <v-btn
                  small
                  color="primary"
                >
                  View Sales
                </v-btn>
              </div>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-img
              contain
              width="166px"
              height="190px"
              :src="require(`@/assets/images/misc/triangle-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
              class="triangle-bg"
            ></v-img>
            <v-img
              contain
              height="108"
              max-width="83"
              class="gamification-trophy"
              src="@/assets/images/misc/trophy.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- congratulations flora -->
    <v-col
      cols="12"
      md="8"
      order="1"
      order-md="2"
      class="align-self-end mb-10 mt-sm-10 mt-md-0"
    >
      <v-card class="ps-3">
        <v-row>
          <v-col
            cols="8"
            sm="6"
          >
            <v-card-title class="page-title flex-nowrap text-2xl">
              <span class="text-no-wrap">Congratulations</span>
              <span class="text-no-wrap font-weight-bold mx-1">John!</span>
              <span>🎉</span>
            </v-card-title>
            <v-card-text>
              You have done 72% 🤩 more sales today.
              Check your new raising badge in your profile.
            </v-card-text>
          </v-col>
          <v-col
            cols="4"
            sm="6"
          >
            <div>
              <v-img
                width="120"
                src="@/assets/images/misc/tree-4.png"
                class="gamification-tree-4"
              ></v-img>
              <v-img
                width="128"
                src="@/assets/images/3d-characters/pose-2.png"
                class="gamification-john-pose-2"
              ></v-img>
              <v-img
                width="100"
                src="@/assets/images/misc/tree.png"
                class="gamification-tree"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- welcome back john -->
    <v-col
      cols="12"
      md="8"
      order="4"
      order-md="3"
      class="align-self-end mb-sm-10 mt-sm-10 mt-md-0"
    >
      <v-card class="john-card ps-3">
        <v-row>
          <v-col
            cols="8"
            sm="6"
          >
            <v-card-title class="page-title flex-nowrap text-2xl pt-4">
              <span class="text-no-wrap">Welcome back </span>
              <span class="text-no-wrap font-weight-bold mx-1">John!</span>
              <span>🥳</span>
            </v-card-title>
            <v-card-text class="pb-4">
              You have 4 task to finish today,
              Your already completed 68% 😍 task good job.
            </v-card-text>
          </v-col>
          <v-col
            cols="4"
            sm="6"
          >
            <div>
              <v-img
                width="120"
                src="@/assets/images/misc/tree-2.png"
                class="gamification-tree-4"
              ></v-img>
              <v-img
                width="141"
                src="@/assets/images/3d-characters/pose-m-1.png"
                class="gamification-john-pose-2"
              ></v-img>
              <v-img
                width="100"
                src="@/assets/images/misc/tree.png"
                class="gamification-tree"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-col>

    <!-- upgrade account -->
    <v-col
      cols="12"
      md="4"
      sm="6"
      order="3"
      order-md="4"
      class="mb-10"
    >
      <v-card class="triangle-card">
        <v-row>
          <v-col cols="8">
            <v-card-title class="page-title text-no-wrap pt-2">
              Upgrade Account 👩🏻‍💻
            </v-card-title>
            <v-card-subtitle class="text-no-wrap">
              Add 15 team members
            </v-card-subtitle>
            <v-card-text class="pb-2">
              <p class="text-2xl font-weight-semibold primary--text mb-0">
                $199
              </p>
              <p>40% OFF 🤩</p>
              <v-btn
                small
                color="primary"
              >
                Upgrade Plan
              </v-btn>
            </v-card-text>
          </v-col>
          <v-col cols="4">
            <v-img
              contain
              width="166px"
              height="190px"
              :src="require(`@/assets/images/misc/triangle-${$vuetify.theme.dark ? 'dark':'light'}.png`)"
              class="triangle-bg"
            ></v-img>
            <v-img
              contain
              height="176"
              max-width="45"
              class="ms-6"
              src="@/assets/images/3d-characters/pose-m-9.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
@import '~vuetify/src/styles/styles.sass';
.triangle-card {
  position: relative;
  .triangle-bg {
    position: absolute;
    bottom: 0;
    @include ltr() {
      right: 0;
    }
    @include rtl() {
      left: 0;
    }
  }
  .gamification-trophy {
    position: absolute;
    bottom: 10%;
    @include ltr() {
      right: 8%;
    }
    @include rtl() {
      left: 8%;
    }
  }
}
.gamification-tree-4,
.gamification-john-pose-2,
.gamification-tree {
  position: absolute;
}
.gamification-tree {
  top: 10%;
  @include ltr() {
    right: 0;
  }
  @include rtl() {
    left: 0;
  }
}
.gamification-john-pose-2 {
  bottom: 0;
  @include ltr() {
    right: 15%;
  }
  @include rtl() {
    left: 15%;
  }
}
.gamification-tree-4 {
  bottom: 0;
  @include ltr() {
    right: 30%;
  }
  @include rtl() {
    left: 35%;
  }
}

@media (max-width: 600px) {
  .gamification-tree,
  .gamification-tree-4 {
    display: none;
  }
  .gamification-john-pose-2 {
    @include ltr() {
      right: 5%;
    }
    @include rtl() {
      left: 5%;
    }
  }
}

@media (max-width: 500px) {
  .gamification-john-pose-2 {
    max-width: 70px;
  }
}

@media (max-width: 400px) {
  .page-title {
    font-size: 1.2rem !important;
  }
}
</style>
