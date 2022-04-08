<template>
  <div id="create">
    <v-speed-dial
      v-model="fab"
      direction="right"
      bottom
      left
      open-on-hover
      transition="scale-transition"
    >
      <template #activator>
        <v-btn
          v-model="fab"
          color="primary"
          dark
          fab
        >
          <v-icon v-if="fab">
            {{ icons.mdiClose }}
          </v-icon>
          <v-icon v-else>
            {{ icons.mdiAccountCircleOutline }}
          </v-icon>
        </v-btn>
      </template>

      <v-btn
        fab
        dark
        small
        color="success"
      >
        <v-icon>{{ icons.mdiPencil }}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="info"
      >
        <v-icon>{{ icons.mdiPlus }}</v-icon>
      </v-btn>
      <v-btn
        fab
        dark
        small
        color="error"
      >
        <v-icon>{{ icons.mdiDeleteOutline }}</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
// eslint-disable-next-line object-curly-newline
import { mdiClose, mdiAccountCircleOutline, mdiPencil, mdiPlus, mdiDeleteOutline } from '@mdi/js'

export default {
  setup() {
    const fab = ref(false)

    return {
      fab,
      icons: {
        mdiClose,
        mdiAccountCircleOutline,
        mdiPencil,
        mdiPlus,
        mdiDeleteOutline,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
/* This is for demo purposes and will not be needed in your application */
#create {
  height: 40px;
}
#create .v-speed-dial {
  position: absolute;
  top: 90px;
}

#create .v-btn--floating {
  position: relative;
}
</style>
