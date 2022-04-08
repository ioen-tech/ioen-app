<template>
  <v-row class="match-height">
    <!-- basic -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Basic"
        :code="codeSnippets.ratingBasic"
      >
        <v-card-text>
          The <code>v-rating</code> component provides a simple interface for gathering user feedback.
        </v-card-text>

        <v-card-text>
          <demo-rating-basic></demo-rating-basic>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- dense -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Dense"
        :code="codeSnippets.ratingDense"
      >
        <v-card-text>
          Use <code>dense</code> prop to make icons smaller size.
        </v-card-text>

        <v-card-text>
          <demo-rating-dense></demo-rating-dense>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- color -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Colors"
        :code="codeSnippets.ratingColors"
      >
        <v-card-text>
          The <code>v-rating</code> component can be colored as you want, you can set both selected and not selected colors.
        </v-card-text>

        <v-card-text>
          <demo-rating-colors></demo-rating-colors>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- size -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Size"
        :code="codeSnippets.ratingSize"
      >
        <v-card-text>
          Utilize the same sizing classes available in v-icon or provide your own with the <code>size</code> prop.
        </v-card-text>

        <v-card-text>
          <demo-rating-size></demo-rating-size>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- length -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Length"
        :code="codeSnippets.ratingLength"
      >
        <v-card-text>
          Sometimes an application will call for a customized implementation. Easily change length or displayed icons.
        </v-card-text>

        <v-card-text>
          <demo-rating-length></demo-rating-length>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- clearable -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Clearable"
        :code="codeSnippets.ratingClearable"
      >
        <v-card-text>
          Use <code>clearable</code> prop to allows for the component to be cleared. Triggers when the icon containing the current value is clicked.
        </v-card-text>

        <v-card-text>
          <demo-rating-clearable></demo-rating-clearable>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- readonly -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Readonly"
        :code="codeSnippets.ratingReadonly"
      >
        <v-card-text>
          Removes all hover effects and pointer events
        </v-card-text>

        <v-card-text>
          <demo-rating-readonly></demo-rating-readonly>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- hover -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Hover"
        :code="codeSnippets.ratingHover"
      >
        <v-card-text>
          Provides visual feedback when hovering over icons
        </v-card-text>

        <v-card-text>
          <demo-rating-hover></demo-rating-hover>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- Incremented -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Incremented"
        :code="codeSnippets.ratingIncremented"
      >
        <v-card-text>
          A rating can have 3 defined icons, <code>full-icon</code>, <code>half-icon</code> (with the <code>half-increments</code> prop) and <code>empty-icon</code>.
        </v-card-text>

        <v-card-text>
          <demo-rating-incremented></demo-rating-incremented>
        </v-card-text>
      </app-card-code>
    </v-col>

    <!-- item slot -->
    <v-col
      cols="12"
      md="6"
    >
      <app-card-code
        title="Item slot"
        :code="codeSnippets.ratingItemSlot"
      >
        <v-card-text>
          Slots are provided to give you even more freedom in how you display the rating.
        </v-card-text>

        <v-card-text>
          <demo-rating-item-slot></demo-rating-item-slot>
        </v-card-text>
      </app-card-code>
    </v-col>
  </v-row>
</template>

<script>
import AppCardCode from '@/@core/components/app-card-code/AppCardCode.vue'

// demos
import DemoRatingBasic from './demos/DemoRatingBasic.vue'
import DemoRatingDense from './demos/DemoRatingDense.vue'
import DemoRatingColors from './demos/DemoRatingColors.vue'
import DemoRatingSize from './demos/DemoRatingSize.vue'
import DemoRatingLength from './demos/DemoRatingLength.vue'
import DemoRatingHover from './demos/DemoRatingHover.vue'
import DemoRatingReadonly from './demos/DemoRatingReadonly.vue'
import DemoRatingClearable from './demos/DemoRatingClearable.vue'
import DemoRatingIncremented from './demos/DemoRatingIncremented.vue'
import DemoRatingItemSlot from './demos/DemoRatingItemSlot.vue'

// code
import {
  ratingBasic,
  ratingDense,
  ratingColors,
  ratingSize,
  ratingLength,
  ratingHover,
  ratingReadonly,
  ratingClearable,
  ratingIncremented,
  ratingItemSlot,
} from './demos/code'

export default {
  components: {
    AppCardCode,
    DemoRatingBasic,
    DemoRatingDense,
    DemoRatingColors,
    DemoRatingSize,
    DemoRatingLength,
    DemoRatingHover,
    DemoRatingReadonly,
    DemoRatingClearable,
    DemoRatingIncremented,
    DemoRatingItemSlot,
  },
  setup() {
    return {
      codeSnippets: {
        ratingBasic,
        ratingDense,
        ratingColors,
        ratingSize,
        ratingLength,
        ratingHover,
        ratingReadonly,
        ratingClearable,
        ratingIncremented,
        ratingItemSlot,
      },
    }
  },
}
</script>
