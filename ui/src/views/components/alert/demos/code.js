/* eslint-disable no-useless-escape */

export const alertBorder = `
<template>
  <div>
    <v-alert
      border="left"
      color="primary"
      dark
      text
    >
      I'm an alert with a top border and red color
    </v-alert>

    <v-alert
      border="top"
      color="secondary"
      text
      dark
    >
      I'm an alert with a right border and blue-grey color
    </v-alert>

    <v-alert
      border="bottom"
      color="success"
      text
      dark
    >
      I'm an alert with a bottom border and pink color
    </v-alert>

    <v-alert
      border="right"
      color="info"
      dark
      text
      class="mb-0"
    >
      I'm an alert with a border left type info
    </v-alert>
  </div>
</template>
`

export const alertColoredBorder = `
<template>
  <div>
    <v-alert
      border="left"
      colored-border
      text
      color="primary"
    >
      Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

      Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>
    <v-alert
      border="left"
      colored-border
      text
      color="secondary"
    >
      Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
    </v-alert>
    <v-alert
      border="left"
      colored-border
      text
      color="success"
    >
      Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero.
    </v-alert>
    <v-alert
      border="left"
      colored-border
      text
      color="info"
    >
      Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.
    </v-alert>

    <v-alert
      border="left"
      colored-border
      text
      color="warning"
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt animi corporis alias quo odio nobis, delectus est voluptas reprehenderit minima dolor fuga mollitia omnis cum aspernatur. Magni, consequuntur fugit?
    </v-alert>

    <v-alert
      border="left"
      colored-border
      text
      color="error"
      class="mb-0"
    >
      Eaque pariatur, repudiandae nostrum obcaecati ipsum sed facilis voluptate autem vitae eos ipsam maxime nemo exercitationem incidunt hic nisi eius nam, quia quasi cumque vel odit illum. Numquam, sed blanditiis.
    </v-alert>
  </div>
</template>
`

export const alertIcons = `
<template>
  <div>
    <v-alert
      color="primary"
      dark
      :icon="icons.mdiFirework"
    >
      Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
    </v-alert>

    <v-alert
      color="secondary"
      dark
      :icon="icons.mdiMaterialDesign"
    >
      Phasellus blandit leo ut odio. Morbi mattis ullamcorper velit.
    </v-alert>

    <v-alert
      color="success"
      dark
      :icon="icons.mdiVuetify"
      class="mb-0"
    >
      Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
    </v-alert>
  </div>
</template>

<script>
import { mdiFirework, mdiMaterialDesign, mdiVuetify } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiFirework,
        mdiMaterialDesign,
        mdiVuetify,
      },
    }
  },
}
</script>
`

export const alertOutlined = `
<template>
  <div>
    <v-alert
      outlined
      color="primary"
    >
      Duis vel nibh at velit scelerisque suscipit. Praesent blandit laoreet nibh. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.
    </v-alert>

    <v-alert
      outlined
      color="secondary"
    >
      Praesent venenatis metus at tortor pulvinar varius. Aenean commodo ligula eget dolor. Praesent ac massa at ligula laoreet iaculis.
    </v-alert>

    <v-alert
      outlined
      color="success"
    >
      Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Suspendisse non nisl sit amet velit hendrerit rutrum.
    </v-alert>

    <v-alert
      outlined
      color="info"
    >
      Marshmallow jelly beans toffee. Sweet roll lemon drops muffin biscuit. Gummies jujubes halvah dessert cream croissant.
    </v-alert>

    <v-alert
      outlined
      color="warning"
    >
      Tootsie roll candy canes wafer icing sweet jelly macaroon. Caramels icing fruitcake chocolate cake cake donut.
    </v-alert>

    <v-alert
      outlined
      color="error"
      class="mb-0"
    >
      Jelly beans dragée jelly. Cotton candy danish chocolate cake. Carrot cake pastry jelly beans gummi bears.
    </v-alert>
  </div>
</template>
`

export const alertElevation = `
<template>
  <div>
    <v-slider
      v-model="alertShadow"
      :max="24"
      :min="0"
      thumb-label
    ></v-slider>

    <v-alert
      color="primary"
      dark
      class="ma-0"
      :elevation="alertShadow"
    >
      I'm an alert with box shadow.
    </v-alert>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const alertShadow = ref(5)

    return { alertShadow }
  },
}
</script>
`

export const alertType = `
<template>
  <div>
    <v-alert type="info">
      I'm a alert with a <strong>type</strong> of info
    </v-alert>

    <v-alert type="success">
      I'm a alert with a <strong>type</strong> of success
    </v-alert>

    <v-alert type="warning">
      I'm a alert with a <strong>type</strong> of warning
    </v-alert>

    <v-alert
      type="error"
      class="mb-0"
    >
      I'm a alert with a <strong>type</strong> of error
    </v-alert>
  </div>
</template>
`

export const alertDismissible = `
<template>
  <div>
    <v-alert
      v-model="isAlertVisible"
      border="top"
      color="primary"
      dark
      dismissible
      class="mb-0"
    >
      Aenean imperdiet. Quisque id odio. Cras dapibus. Pellentesque ut neque. Cras dapibus.

      Vivamus consectetuer hendrerit lacus. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>

    <!-- button -->
    <div class="text-center">
      <v-btn
        v-if="!isAlertVisible"
        color="primary"
        dark
        @click="isAlertVisible = true"
      >
        Reset
      </v-btn>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isAlertVisible = ref(true)

    return { isAlertVisible }
  },
}
</script>
`

export const alertVModel = `
<template>
  <div>
    <v-alert
      v-model="isAlertVisible"
      color="warning"
      text
      transition="slide-y-transition"
    >
      non adipiscing dolor urna a orci. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur blandit mollis lacus. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
    </v-alert>

    <!-- button -->
    <v-btn
      color="primary"
      @click="isAlertVisible = !isAlertVisible"
    >
      {{ isAlertVisible ? "Hide Alert" : "Show Alert" }}
    </v-btn>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isAlertVisible = ref(true)

    return { isAlertVisible }
  },
}
</script>
`

export const alertColors = `
<template>
  <div>
    <v-alert
      color="primary"
      dark
    >
      I'm an alert with primary background color.
    </v-alert>

    <v-alert
      color="secondary"
      dark
    >
      I'm an alert with secondary background color.
    </v-alert>

    <v-alert
      color="success"
      dark
    >
      I'm an alert with success background color.
    </v-alert>

    <v-alert
      color="info"
      dark
    >
      I'm an alert with info background color.
    </v-alert>

    <v-alert
      color="warning"
      dark
    >
      I'm an alert with warning background color.
    </v-alert>

    <v-alert
      color="error"
      dark
      class="mb-0"
    >
      I'm an alert with error background color.
    </v-alert>
  </div>
</template>
`

export const alertTransition = `
<template>
  <div>
    <v-btn
      color="primary"
      class="mb-4"
      @click="isAlertVisible = !isAlertVisible"
    >
      {{ isAlertVisible ? 'Hide Alert' : 'Show Alert' }}
    </v-btn>

    <!-- alert -->
    <div style="height:76px">
      <v-alert
        v-model="isAlertVisible"
        text
        color="error"
        dark
        transition="slide-y-transition"
        class="mb-0"
      >
        Phasellus tempus. Fusce ac felis sit amet ligula pharetra condimentum. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. Pellentesque posuere. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.
      </v-alert>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isAlertVisible = ref(true)

    return { isAlertVisible }
  },
}
</script>
`

export const alertDense = `
<template>
  <div>
    <v-alert
      dense
      text
      color="primary"
    >
      I'm a <strong>dense</strong> alert with color of primary
    </v-alert>

    <v-alert
      dense
      text
      color="secondary"
    >
      I'm a <strong>dense</strong> alert with color of secondary
    </v-alert>

    <v-alert
      dense
      text
      color="success"
    >
      I'm a <strong>dense</strong> alert with the color of success
    </v-alert>

    <v-alert
      dense
      text
      color="info"
    >
      I'm a <strong>dense</strong> alert with color of info
    </v-alert>

    <v-alert
      dense
      text
      color="warning"
    >
      I'm a <strong>dense</strong> alert with the color of warning
    </v-alert>

    <v-alert
      dense
      text
      color="error"
      class="mb-0"
    >
      I'm a <strong>dense</strong> alert with the color of error
    </v-alert>
  </div>
</template>
`

export const alertText = `
<template>
  <div>
    <v-alert
      text
      color="primary"
    >
      Maecenas nec odio et ante tincidunt tempus. Sed mollis, eros et ultrices tempus.
    </v-alert>

    <v-alert
      text
      color="secondary"
    >
      Nullam tincidunt adipiscing enim. In consectetuer turpis ut velit.
    </v-alert>

    <v-alert
      text
      color="success"
    >
      Vestibulum ullamcorper mauris at ligula. Nulla porta dolor.
    </v-alert>

    <v-alert
      text
      color="info"
    >
      Praesent blandit laoreet nibh. Praesent nonummy mi in odio. Phasellus tempus. Mauris turpis nunc.
    </v-alert>

    <v-alert
      text
      color="warning"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </v-alert>

    <v-alert
      text
      color="error"
    >
      Marzipan topping croissant cake sweet roll ice cream soufflé chocolate. Jelly beans chupa chups tootsie roll biscuit.
    </v-alert>
  </div>
</template>
`

export const alertBasic = `
<template>
  <div>
    <v-alert
      color="primary"
      dark
      class="mb-0"
    >
      Good Morning! Start your day with some alerts.
    </v-alert>
  </div>
</template>
`
