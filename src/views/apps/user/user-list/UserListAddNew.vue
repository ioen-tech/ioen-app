<template>
  <v-navigation-drawer
    :value="isAddNewUserSidebarActive"
    temporary
    touchless
    :right="!$vuetify.rtl"
    :width="$vuetify.breakpoint.smAndUp ? 350 : '100%'"
    app
    @input="(val) => $emit('update:is-add-new-user-sidebar-active', val)"
  >
    <v-card height="100%">
      <div class="drawer-header d-flex align-center mb-4">
        <span class="font-weight-semibold text-base text--primary">Add New User</span>
        <v-spacer></v-spacer>
        <v-btn
          icon
          small
          @click="$emit('update:is-add-new-user-sidebar-active',false)"
        >
          <v-icon size="22">
            {{ icons.mdiClose }}
          </v-icon>
        </v-btn>
      </div>

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          @submit.prevent="onSubmit"
        >
          <v-text-field
            v-model="userData.fullName"
            outlined
            dense
            :rules="[validators.required]"
            label="Full Name"
            placeholder="John Doe"
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <v-text-field
            v-model="userData.username"
            :rules="[validators.required]"
            outlined
            dense
            label="Username"
            placeholder="Username"
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <v-text-field
            v-model="userData.email"
            :rules="[validators.required,validators.emailValidator]"
            outlined
            dense
            type="email"
            label="Email"
            placeholder="Email"
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <v-text-field
            v-model="userData.contact"
            :rules="[validators.required]"
            outlined
            dense
            type="number"
            label="Contact"
            placeholder="Contact"
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <v-text-field
            v-model="userData.company"
            :rules="[validators.required]"
            outlined
            dense
            label="Company"
            placeholder="Company"
            hide-details="auto"
            class="mb-6"
          ></v-text-field>

          <v-select
            v-model="userData.country"
            :rules="[validators.required]"
            label="Country"
            :items="countries"
            outlined
            dense
            hide-details="auto"
            class="mb-6"
          >
          </v-select>

          <v-select
            v-model="userData.role"
            :rules="[validators.required]"
            label="User Role"
            :items="roleOptions"
            item-text="title"
            item-value="value"
            outlined
            dense
            hide-details="auto"
            class="mb-6"
          >
          </v-select>

          <v-select
            v-model="userData.currentPlan"
            :rules="[validators.required]"
            label="Plan"
            :items="planOptions"
            item-text="title"
            item-value="value"
            outlined
            dense
            hide-details="auto"
            class="mb-6"
          >
          </v-select>

          <v-btn
            color="primary"
            class="me-3"
            type="submit"
          >
            Add
          </v-btn>
          <v-btn
            color="secondary"
            outlined
            type="reset"
            @click="resetuserData"
          >
            Cancel
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
import { mdiClose } from '@mdi/js'
import { ref } from '@vue/composition-api'
import { required, emailValidator } from '@core/utils/validation'
import countries from '@/@fake-db/data/other/countries'
import store from '@/store'

export default {
  model: {
    prop: 'isAddNewUserSidebarActive',
    event: 'update:is-add-new-user-sidebar-active',
  },
  props: {
    isAddNewUserSidebarActive: {
      type: Boolean,
      required: true,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    planOptions: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const blankUserData = {
      fullName: '',
      username: '',
      email: '',
      role: null,
      currentPlan: null,
      company: '',
      country: '',
      contact: '',
    }

    const valid = ref(false)
    const form = ref(null)

    const validate = () => {
      form.value.validate()
    }

    const resetForm = () => {
      form.value.reset()
    }

    const userData = ref(JSON.parse(JSON.stringify(blankUserData)))
    const resetuserData = () => {
      userData.value = JSON.parse(JSON.stringify(blankUserData))
      resetForm()
      emit('update:is-add-new-user-sidebar-active', false)
    }

    const onSubmit = () => {
      if (valid.value) {
        store.dispatch('app-user/addUser', userData.value).then(() => {
          emit('refetch-data')
          emit('update:is-add-new-user-sidebar-active', false)
        })

        resetuserData()
      } else {
        validate()
      }
    }

    return {
      resetuserData,
      form,
      onSubmit,
      countries,
      userData,
      valid,
      validate,

      // validation
      validators: { required, emailValidator },
      icons: {
        mdiClose,
      },
    }
  },
}
</script>
