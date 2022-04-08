<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Social Analytics</span>
      <v-spacer></v-spacer>

      <v-btn
        icon
        small
        class="me-n3 mt-n2"
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>
    <v-card-text>
      <div
        v-for="(data,index) in socialAnalytics"
        :key="data.avatar"
        :class="`d-flex align-center ${index > 0 ?'mt-4':''}`"
      >
        <v-avatar
          :color="data.color"
          size="40"
          :class="`v-avatar-light-bg ${data.color}--text`"
        >
          <v-img
            contain
            height="20"
            :src="data.avatar"
          ></v-img>
        </v-avatar>
        <div class="ms-4">
          <h2 class="text-xl font-weight-semibold">
            {{ data.title }}
          </h2>
          <p class="mb-0">
            {{ data.subtitle }}
          </p>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiDotsVertical } from '@mdi/js'

export default {
  setup() {
    const socialAnalytics = [
      {
        avatar: require('@/assets/images/pages/heart-medical.png'),
        color: 'primary',
        title: '42.8k',
        subtitle: 'Number of like',
      },
      {
        avatar: require('@/assets/images/pages/graph-bar.png'),
        color: 'warning',
        title: '21.2k',
        subtitle: 'Number of Followers',
      },
      {
        avatar: require('@/assets/images/pages/comment-alt-lines.png'),
        color: 'info',
        title: '2.4k',
        subtitle: 'Number of Comments',
      },
      {
        avatar: require('@/assets/images/pages/user.png'),
        color: 'success',
        title: '389.50k',
        subtitle: 'Number of Visits',
      },
    ]

    return {
      socialAnalytics,
      icons: {
        mdiDotsVertical,
      },
    }
  },
}
</script>
