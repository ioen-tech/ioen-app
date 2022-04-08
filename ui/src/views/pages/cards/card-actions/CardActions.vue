<template>
  <v-row>
    <v-col cols="12">
      <!-- Main Card -->
      <app-card-actions @refresh="refetchData">
        <template slot="title">
          Card Actions
        </template>
        <v-card-text>
          <v-simple-table>
            <thead>
              <tr>
                <th>ACTION</th>
                <th>ICON</th>
                <th>DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Collapse
                </td>
                <td>
                  <v-icon size="20">
                    {{ icons.mdiChevronUp }}
                  </v-icon>
                </td>
                <td>
                  Collapse card content using collapse action.
                </td>
              </tr>
              <tr>
                <td>
                  Refresh Content
                </td>
                <td>
                  <v-icon size="20">
                    {{ icons.mdiRefresh }}
                  </v-icon>
                </td>
                <td>
                  Refresh your card content using refresh action.
                </td>
              </tr>
              <tr>
                <td>
                  Remove Card
                </td>
                <td>
                  <v-icon size="20">
                    {{ icons.mdiClose }}
                  </v-icon>
                </td>
                <td>
                  Remove card from page using remove card action
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
      </app-card-actions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-actions action-collapse>
        <template slot="title">
          Collapsible
        </template>
        <v-card-text>
          <p>You can specifically add collapsible action using <code>actionCollapse</code> prop</p>
          <span>Click on <v-icon size="20">{{ icons.mdiChevronUp }}</v-icon> icon to see it in action</span>
        </v-card-text>
      </app-card-actions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-actions
        action-refresh
        @refresh="refetchData"
      >
        <template slot="title">
          Refresh Content
        </template>
        <v-card-text>
          <p>You can specifically add refresh action using <code>actionRefresh</code> prop</p>
          <span>Click on <v-icon size="20">{{ icons.mdiRefresh }}</v-icon> icon to see it in action</span>
        </v-card-text>
      </app-card-actions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-actions action-remove>
        <template slot="title">
          Remove Card
        </template>
        <v-card-text>
          <p>You can specifically add remove action using <code>actionRemove</code> prop</p>
          <span>Click on <v-icon size="20">{{ icons.mdiClose }}</v-icon> icon to see it in action</span>
        </v-card-text>
      </app-card-actions>
    </v-col>

    <v-col
      cols="12"
      md="6"
    >
      <app-card-actions @refresh="refetchData">
        <template slot="title">
          Slots
        </template>
        <template slot="before-actions">
          <v-chip
            class="v-chip-light-bg primary--text me-3"
            color="primary"
            small
          >
            3 Updates
          </v-chip>
        </template>
        <v-card-text>
          <p><code>app-card-actions</code> also provides <code>before-actions</code> and <code>after-actions</code> slot</p>
          <span>You can find more details in our documentation</span>
        </v-card-text>
      </app-card-actions>
    </v-col>
  </v-row>
</template>

<script>
import AppCardActions from '@core/components/app-card-actions/AppCardActions.vue'
import { mdiChevronUp, mdiRefresh, mdiClose } from '@mdi/js'

export default {
  components: {
    AppCardActions,
  },
  setup() {
    const refetchData = hideOverlay => {
      setTimeout(() => {
        hideOverlay()
      }, 3000)
    }

    return {
      refetchData,
      icons: {
        mdiChevronUp,
        mdiRefresh,
        mdiClose,
      },
    }
  },
}
</script>
