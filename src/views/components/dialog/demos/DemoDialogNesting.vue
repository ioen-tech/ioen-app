<template>
  <div>
    <v-btn
      color="primary"
      dark
      @click="isDialogVisible = true"
    >
      Open Dialog
    </v-btn>

    <v-dialog
      v-model="isDialogVisible"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          Dialog
        </v-card-title>
        <v-card-text>
          Biscuit fruitcake marshmallow jelly beans jujubes halvah cupcake topping. Chocolate cookie jelly-o toffee tart oat cake. Tart sugar plum gingerbread halvah muffin sweet. Cake halvah tart soufflé pudding.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            dark
            outlined
            @click="isDialogVisible = false"
          >
            Close
          </v-btn>
          <v-btn
            color="primary"
            dark
            @click="isDialogTwoShow = !isDialogTwoShow"
          >
            Open Dialog 2
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog
      v-model="isDialogTwoShow"
      max-width="500px"
    >
      <v-card>
        <v-card-title>
          <span>Dialog 2</span>
        </v-card-title>

        <v-card-text>I'm a nested dialog.</v-card-text>
        <v-card-actions>
          <v-btn
            color="primary"
            @click="isDialogTwoShow = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  setup() {
    const isDialogVisible = ref(false)
    const isDialogTwoShow = ref(false)

    return {
      isDialogVisible,
      isDialogTwoShow,
    }
  },
}
</script>
