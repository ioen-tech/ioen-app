/* eslint-disable no-useless-escape */

export const paginationColor = `
<template>
  <div>
    <v-pagination
      v-model="pageSuccess"
      :length="7"
      color="success"
      class="mb-5"
    ></v-pagination>

    <v-pagination
      v-model="pageError"
      :length="7"
      color="error"
      class="mb-5"
    ></v-pagination>

    <v-pagination
      v-model="pageInfo"
      :length="7"
      color="info"
    ></v-pagination>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const pageSuccess = ref(1)
    const pageError = ref(2)
    const pageInfo = ref(3)

    return { pageSuccess, pageError, pageInfo }
  },
}
</script>
`

export const paginationIcons = `
<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    :prev-icon="icons.mdiMenuLeft"
    :next-icon="icons.mdiMenuRight"
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMenuLeft, mdiMenuRight } from '@mdi/js'

export default {
  setup() {
    const currentPage = ref(1)

    return {
      currentPage,

      // Icons
      icons: {
        mdiMenuLeft,
        mdiMenuRight,
      },
    }
  },
}
</script>
`

export const paginationCircle = `
<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
    circle
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentPage = ref(1)

    return { currentPage }
  },
}
</script>
`

export const paginationTotalVisible = `
<template>
  <v-pagination
    v-model="currentPage"
    :length="15"
    :total-visible="7"
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentPage = ref(1)

    return { currentPage }
  },
}
</script>
`

export const paginationLength = `
<template>
  <v-pagination
    v-model="currentPage"
    :length="7"
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentPage = ref(1)

    return { currentPage }
  },
}
</script>
`

export const paginationBasic = `
<template>
  <v-pagination
    v-model="currentPage"
    :length="5"
  ></v-pagination>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const currentPage = ref(1)

    return { currentPage }
  },
}
</script>
`

export const paginationDisabled = `
<template>
  <v-pagination
    :length="5"
    disabled
  ></v-pagination>
</template>
`
