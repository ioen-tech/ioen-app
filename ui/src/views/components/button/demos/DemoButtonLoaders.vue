<template>
  <div class="demo-space-x">
    <v-btn
      :loading="loadings.loading1"
      :disabled="loadings.loading1"
      color="primary"
      @click="triggerLoading('loading1')"
    >
      Accept Terms
    </v-btn>

    <v-btn
      :loading="loadings.loading2"
      :disabled="loadings.loading2"
      color="secondary"
      class="white--text"
      @click="triggerLoading('loading2')"
    >
      Upload
      <v-icon
        right
        dark
      >
        {{ icons.mdiCloudUploadOutline }}
      </v-icon>
    </v-btn>

    <v-btn
      :loading="loadings.loading3"
      :disabled="loadings.loading3"
      color="success"
      @click="triggerLoading('loading3')"
    >
      Custom Loader
      <template #loader>
        <span>Loading...</span>
      </template>
    </v-btn>

    <v-btn
      :loading="loadings.loading4"
      :disabled="loadings.loading4"
      color="info"
      @click="triggerLoading('loading4')"
    >
      Icon Loader
      <template #loader>
        <span class="custom-loader">
          <v-icon light>{{ icons.mdiCached }}</v-icon>
        </span>
      </template>
    </v-btn>

    <v-btn
      :loading="loadings.loading5"
      :disabled="loadings.loading5"
      color="warning"
      class="white--text"
      fab
      @click="triggerLoading('loading5')"
    >
      <v-icon dark>
        {{ icons.mdiCloudUploadOutline }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiCloudUploadOutline, mdiCached } from '@mdi/js'

export default {
  setup() {
    const loadings = ref({
      loading1: false,
      loading2: false,
      loading3: false,
      loading4: false,
      loading5: false,
    })

    const triggerLoading = loadingIndex => {
      loadings.value[loadingIndex] = true

      setTimeout(() => {
        loadings.value[loadingIndex] = false
      }, 3000)
    }

    return {
      loadings,
      triggerLoading,

      // icon
      icons: { mdiCloudUploadOutline, mdiCached },
    }
  },

  watch: {
    loader() {
      const l = this.loader
      this[l] = !this[l]

      setTimeout(() => {
        this[l] = false
      }, 3000)

      this.loader = null
    },
  },
}
</script>

<style lang="scss" scoped>
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
