<template>
  <!-- edit profile dialog -->
  <v-dialog
    v-model="isBioDialogOpen"
    max-width="650px"
    @click:outside="$emit('update:is-bio-dialog-open',false)"
  >
    <v-card class="user-edit-info pa-sm-10 pa-3">
      <v-card-title class="justify-center text-h5">
        Edit User Information
      </v-card-title>
      <v-card-text class="text-center mt-n2">
        Updating user details will receive a privacy audit.
      </v-card-text>

      <v-card-text class="mt-5">
        <v-form class="multi-col-validation">
          <v-row>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userDataLocal.fullName"
                outlined
                dense
                label="Full Name"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userDataLocal.username"
                prefix="@"
                outlined
                dense
                label="Username"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userDataLocal.email"
                outlined
                dense
                label="Billing Email"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                v-model="userDataLocal.status"
                :items="statusOptions"
                item-text="title"
                item-value="value"
                outlined
                dense
                label="Status"
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userDataLocal.taxId"
                outlined
                dense
                label="Tax ID"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-text-field
                v-model="userDataLocal.contact"
                prefix="+1"
                outlined
                dense
                label="Contact"
              ></v-text-field>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                v-model="userDataLocal.language"
                :items="languageOptions"
                outlined
                dense
                label="Language"
              ></v-select>
            </v-col>
            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                v-model="userDataLocal.country"
                :items="countries"
                outlined
                dense
                label="Country"
              ></v-select>
            </v-col>

            <v-col cols="12">
              <v-switch
                v-model="isBillingAddress"
                class="mt-0"
                hide-details
              >
                <template #label>
                  <span class="font-weight-medium text--primary">Use as a billing address?</span>
                </template>
              </v-switch>
            </v-col>

            <v-col
              cols="12"
              class="d-flex justify-center mt-3"
            >
              <v-btn
                color="primary"
                class="me-3"
                type="submit"
                @click.prevent="onSubmit"
              >
                submit
              </v-btn>

              <v-btn
                outlined
                color="secondary"
                @click.prevent="$emit('update:is-bio-dialog-open',false)"
              >
                Discard
              </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, watch } from '@vue/composition-api'
import countries from '@/@fake-db/data/other/countries'

export default {
  props: {
    isBioDialogOpen: {
      type: Boolean,
      required: true,
    },
    userData: {
      type: Object,
      required: true,
    },
  },

  setup(props, { emit }) {
    const isBillingAddress = ref(true)

    const userDataLocal = ref({})
    userDataLocal.value = JSON.parse(JSON.stringify(props.userData))

    const statusOptions = [
      { title: 'Pending', value: 'pending' },
      { title: 'Active', value: 'active' },
      { title: 'Inactive', value: 'inactive' },
    ]
    const languageOptions = ['English', 'Spanish', 'Portuguese', 'Russian', 'French', 'German']

    // on form submit
    const onSubmit = () => {
      emit('update:is-bio-dialog-open', false)
    }

    watch(
      () => props.isBioDialogOpen,
      () => {
        userDataLocal.value = JSON.parse(JSON.stringify(props.userData))
      },
    )

    return {
      isBillingAddress,
      statusOptions,
      languageOptions,
      countries,
      userDataLocal,
      onSubmit,
    }
  },
}
</script>
