/* eslint-disable no-useless-escape */

export const expansionPanelModel = `
<template>
  <div>
    <div class="mb-4">
      <v-btn
        color="primary"
        class="me-4"
        @click="all"
      >
        all
      </v-btn>

      <v-btn
        color="error"
        @click="none"
      >
        none
      </v-btn>

      <div class="mt-3">
        <span class="font-weight-bold">Selected: </span>{{ openedPanels }}
      </div>
    </div>

    <v-expansion-panels
      v-model="openedPanels"
      multiple
    >
      <v-expansion-panel
        v-for="item in items"
        :key="item"
      >
        <v-expansion-panel-header>Header {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          I love I love jujubes halvah cheesecake cookie macaroon sugar plum. Sugar plum I love bear claw marzipan wafer. Wafer sesame snaps danish candy cheesecake carrot cake tootsie roll.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const openedPanels = ref([])

    const items = ref(5)

    const all = () => {
      openedPanels.value = [...Array(items.value).keys()].map((_k, i) => i)
    }

    const none = () => {
      openedPanels.value = []
    }

    return {
      openedPanels,
      items,
      all,
      none,
    }
  },
}
</script>
`

export const expansionPanelFocusable = `
<template>
  <v-expansion-panels focusable>
    <v-expansion-panel
      v-for="item in 4"
      :key="item"
    >
      <v-expansion-panel-header>Focusable {{ item }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        Ice cream I love chocolate cake I love liquorice chocolate bar candy canes marzipan. Marshmallow cotton candy dessert bonbon tiramisu sweet. Wafer jelly jelly beans ice cream candy. Candy candy chocolate cake ice cream.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
`

export const expansionPanelPopout = `
<template>
  <div>
    <v-expansion-panels popout>
      <v-expansion-panel
        v-for="item in 3"
        :key="item"
      >
        <v-expansion-panel-header>Popout {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Cupcake ipsum dolor sit amet. Candy canes cheesecake chocolate bar I love I love jujubes gummi bears ice cream. Cheesecake tiramisu toffee cheesecake sugar plum candy canes bonbon candy.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
`

export const expansionPanelIcon = `
<template>
  <div>
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Server Down
          <template #actions>
            <v-icon color="error">
              {{ icons.mdiAlertCircleOutline }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Gummies biscuit dessert macaroon liquorice carrot cake oat cake jelly beans cake. Candy wafer tiramisu sugar plum sweet. Ice cream topping gummies biscuit soufflé marzipan topping brownie marshmallow. Chocolate cake cookie pudding gummies cotton candy ice cream. Pie liquorice marzipan cake carrot cake macaroon jelly toffee. Lollipop donut gummi bears caramels icing marzipan.
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          Sales report generated
          <template #actions>
            <v-icon color="success">
              {{ icons.mdiCheck }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Bear claw ice cream icing gummies gingerbread cotton candy tootsie roll cupcake macaroon. Halvah brownie soufflé. Pie dragée macaroon. Tart tootsie roll chocolate bar biscuit jujubes lemon drops. Pudding cotton candy tart jelly-o bear claw lollipop. Jelly-o apple pie candy bonbon chupa chups cupcake cotton candy. Sweet roll cotton candy toffee caramels. Jelly-o chocolate cake toffee pastry halvah. Muffin tiramisu ice cream danish jelly-o brownie powde
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header disable-icon-rotate>
          High Memory usage
          <template #actions>
            <v-icon color="warning">
              {{ icons.mdiAlertOutline }}
            </v-icon>
          </template>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Jelly beans wafer lemon drops macaroon muffin gummies muffin. Ice cream oat cake chocolate bar sesame snaps. Halvah macaroon caramels gummies. Marshmallow jelly beans danish. Cake chocolate cake tiramisu chocolate bar sugar plum biscuit jelly danish. Pudding gummi bears sesame snaps cake soufflé ice cream chocolate bar. Cotton candy ice cream danish chocolate cake topping ice cream. Brownie muffin gingerbread.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mdiAlertCircleOutline, mdiCheck, mdiAlertOutline } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAlertCircleOutline,
        mdiCheck,
        mdiAlertOutline,
      },
    }
  },
}
</script>
`

export const expansionPanelInset = `
<template>
  <div>
    <v-expansion-panels inset>
      <v-expansion-panel
        v-for="item in 4"
        :key="item"
      >
        <v-expansion-panel-header>Inset {{ item }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          Chocolate bar sweet roll chocolate cake pastry I love gummi bears pudding chocolate cake. I love brownie powder apple pie sugar plum I love cake candy canes wafer. Tiramisu I love oat cake oat cake danish icing. Dessert sugar plum sugar plum cookie donut chocolate cake oat cake I love gummi bears.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
`

export const expansionPanelAccordion = `
<template>
  <div>
    <v-expansion-panels accordion>
      <v-expansion-panel
        v-for="item in 4"
        :key="item"
      >
        <v-expansion-panel-header>
          Accordion {{ item }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Sweet roll ice cream chocolate bar. Ice cream croissant sugar plum I love cupcake gingerbread liquorice cake. Bonbon tart caramels marshmallow chocolate cake icing icing danish pie.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>
`

export const expansionPanelDefault = `
<template>
  <v-expansion-panels multiple>
    <v-expansion-panel
      v-for="item in 4"
      :key="item"
    >
      <v-expansion-panel-header>
        Collapse Item {{ item }}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        Candy sugar plum lemon drops. Gummi bears muffin dragée I love croissant. Macaroon gummi bears danish pastry lemon drops lemon drops. Jelly beans brownie ice cream jelly chocolate bar.
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
`
