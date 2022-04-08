<template>
  <v-card>
    <v-card-title class="align-start">
      <span>Meeting Schedule</span>
      <v-spacer></v-spacer>

      <v-btn
        class="me-n3 mt-n2"
        icon
        small
      >
        <v-icon>
          {{ icons.mdiDotsVertical }}
        </v-icon>
      </v-btn>
    </v-card-title>

    <v-card-text>
      <v-list class="pt-0">
        <v-list-item
          v-for="(data,index) in meetingSchedule"
          :key="data.title"
          :class="`d-flex align-center px-0 ${index > 0 ? 'mt-3':''}`"
        >
          <v-list-item-avatar size="38">
            <v-img :src="data.avatar"></v-img>
          </v-list-item-avatar>

          <div class="d-flex align-center flex-grow-1 flex-wrap text-no-wrap">
            <div class="me-2">
              <v-list-item-title class="text-sm font-weight-medium">
                {{ data.title }}
              </v-list-item-title>

              <div class="d-flex align-center">
                <v-icon
                  size="14"
                  class="me-1"
                >
                  {{ icons.mdiCalendarBlankOutline }}
                </v-icon>
                <v-list-item-subtitle class="text-xs">
                  {{ data.dateAndTime }}
                </v-list-item-subtitle>
              </div>
            </div>

            <v-spacer></v-spacer>

            <v-chip
              small
              :color="data.chipColor"
              :class="`v-chip-light-bg ${data.chipColor}--text font-weight-semibold`"
            >
              {{ data.chipText }}
            </v-chip>
          </div>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import { mdiCalendarBlankOutline, mdiDotsVertical } from '@mdi/js'

export default {
  setup() {
    const meetingSchedule = [
      {
        avatar: require('@/assets/images/avatars/4.png'),
        title: 'Call with Woods',
        dateAndTime: '21 Jul | 08:20-10:30',
        chipText: 'Business',
        chipColor: 'primary',
      },
      {
        avatar: require('@/assets/images/avatars/8.png'),
        title: 'Call with hilda',
        dateAndTime: '24 Jul | 11:30-12:00',
        chipText: 'Meditation',
        chipColor: 'success',
      },
      {
        avatar: require('@/assets/images/avatars/7.png'),
        title: 'Conference call',
        dateAndTime: '28 Jul | 05:00-6:45',
        chipText: 'Meditation',
        chipColor: 'success',
      },
      {
        avatar: require('@/assets/images/avatars/3.png'),
        title: 'Meeting with Mark',
        dateAndTime: '03 Aug | 07:00-8:30',
        chipText: 'Meetup',
        chipColor: 'secondary',
      },
      {
        avatar: require('@/assets/images/avatars/2.png'),
        title: 'Meeting in Oakland',
        dateAndTime: '14 Aug | 04:15-05:30',
        chipText: 'Business',
        chipColor: 'primary',
      },
    ]

    return {
      meetingSchedule,
      icons: {
        mdiDotsVertical,
        mdiCalendarBlankOutline,
      },
    }
  },
}
</script>
