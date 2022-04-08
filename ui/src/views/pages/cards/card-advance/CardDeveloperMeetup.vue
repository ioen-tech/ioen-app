<template>
  <v-card>
    <v-img src="@/assets/images/pages/developerMeetup.png"></v-img>
    <v-card-text class="d-flex mt-5">
      <v-avatar
        size="54"
        rounded
        color="primary"
        class="v-avatar-light-bg primary--text mt-1"
      >
        <div>
          <p class="font-weight-medium mb-0">
            Jan
          </p>
          <p class="text-xl primary--text font-weight-bold mb-0">
            24
          </p>
        </div>
      </v-avatar>

      <div class="ms-3">
        <p class="text-base font-weight-semibold text--primary mb-0">
          Developer Meetup
        </p>
        <span class="text-xs">The WordPress open source, free software project is the community behind the…</span>
      </div>
    </v-card-text>
    <v-card-text>
      <v-divider></v-divider>
    </v-card-text>
    <v-card-text class="text-center">
      <v-row>
        <v-col cols="3">
          <div>
            <v-icon size="30">
              {{ icons.mdiStarOutline }}
            </v-icon>
          </div>
          <span class="text-no-wrap text--primary">
            Intrested
          </span>
        </v-col>
        <v-col cols="3">
          <div>
            <v-icon size="30">
              {{ icons.mdiCheckCircleOutline }}
            </v-icon>
          </div>
          <span class="text-no-wrap text--primary">
            Joined
          </span>
        </v-col>
        <v-col cols="3">
          <div>
            <v-icon
              size="30"
              color="primary"
            >
              {{ icons.mdiAccountOutline }}
            </v-icon>
          </div>
          <span class="text-no-wrap primary--text">
            Invited
          </span>
        </v-col>
        <v-col cols="3">
          <div>
            <v-icon
              size="30"
            >
              {{ icons.mdiDotsHorizontal }}
            </v-icon>
          </div>
          <span class="text-no-wrap text--primary">
            More
          </span>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>
      <v-divider></v-divider>
    </v-card-text>
    <v-card-text>
      <div
        v-for="(data,index) in developerMeetup"
        :key="data.icon"
        :class="`d-flex align-center ${index > 0 ? 'mt-2':''}`"
      >
        <v-icon
          size="20"
          class="mt-n4"
        >
          {{ data.icon }}
        </v-icon>
        <div class="ms-2">
          <p class="text--primary mb-0">
            {{ data.title }}
          </p>
          <span class="text-xs">{{ data.subtitle }}</span>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import {
  mdiStarOutline,
  mdiCheckCircleOutline,
  mdiAccountOutline,
  mdiDotsHorizontal,
  mdiClockOutline,
  mdiMapMarkerOutline,
} from '@mdi/js'

export default {
  setup() {
    const developerMeetup = [
      { icon: mdiClockOutline, title: 'Tuesday, 24 january, 10:20 - 12:30', subtitle: 'After 1 week' },
      { icon: mdiMapMarkerOutline, title: 'The Rochard NYC', subtitle: '1305 Lexington Ave, New York' },
    ]

    return {
      developerMeetup,
      icons: {
        mdiStarOutline,
        mdiCheckCircleOutline,
        mdiAccountOutline,
        mdiDotsHorizontal,
      },
    }
  },
}
</script>
