<template>
  <section id="knowledge-base">
    <!-- seach banner  -->
    <v-card
      flat
      class="knowledge-base-bg d-flex align-center justify-center text-center mb-7"
    >
      <v-card-text>
        <p class="kb-title text-2xl font-weight-semibold primary--text mb-2">
          Hello, how can we help?
        </p>
        <p class="mb-7">
          or choose a category to quickly find the help you need
        </p>

        <v-form class="kb-search-input mx-auto">
          <v-text-field
            v-model="knowledgeBaseSearchQuery"
            outlined
            placeholder="Ask a question...."
            hide-details
            class="kb-search-input"
          >
            <template #prepend-inner>
              <v-icon
                size="23"
                class="mx-1"
              >
                {{ icons.mdiMagnify }}
              </v-icon>
            </template>
          </v-text-field>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- kb search content -->
    <div id="knowledge-base-content">
      <v-row class="kb-search-content-info match-height">
        <v-col
          v-for="item in filteredKB"
          :key="item.character"
          md="4"
          sm="6"
          cols="12"
          class="kb-search-content"
        >
          <v-card
            color="text-center cursor-pointer"
            @click.native="$router.push({ name: 'page-knowledge-base-category', params: { category: item.category } })"
          >
            <div class="kb-character-wrapper">
              <v-img
                contain
                :max-width="item.characterSize"
                class="mx-auto"
                :src="item.character"
              ></v-img>
            </div>

            <!-- title -->
            <v-card-title class="justify-center pb-3">
              {{ item.title }}
            </v-card-title>
            <v-card-text>{{ item.desc }}</v-card-text>
          </v-card>
        </v-col>

        <!-- no result found -->
        <v-col
          v-show="!filteredKB.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
/* eslint-disable implicit-arrow-linebreak */
import { mdiMagnify } from '@mdi/js'
import { computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const knowledgeBaseSearchQuery = ref('')
    const kbContentData = [
      {
        character: require('@/assets/images/3d-characters/pose-f-3.png'),
        category: 'sales-automation',
        characterSize: '139',
        title: 'Sales Automation 👩🏻‍💻',
        desc: 'There is perhaps no better demonstration of the folly of image of our tiny world.',
      },
      {
        character: require('@/assets/images/3d-characters/pose-f-28.png'),
        category: 'marketing-automation',
        characterSize: '188',
        title: 'Marketing Automation 🚀',
        desc: 'Look again at that dot. That’s here. That’s home. That’s us. On it everyone you love.',
      },
      {
        character: require('@/assets/images/3d-characters/pose-m-34.png'),
        category: 'api-questions',
        characterSize: '126',
        title: 'API Questions 📱',
        desc: 'Every hero and coward, every creator and destroyer of civilization.',
      },
      {
        character: require('@/assets/images/3d-characters/pose-f-39.png'),
        category: 'email-marketing',
        characterSize: '172',
        title: 'Email Marketing ✉️',
        desc: 'There is perhaps no better demonstration of the folly of human conceits.',
      },
      {
        character: require('@/assets/images/3d-characters/pose-m-14.png'),
        category: 'personalization',
        characterSize: '163',
        title: 'Personalization 🤩',
        desc: 'It has been said that astronomy is a humbling and character experience.',
      },
      {
        character: require('@/assets/images/3d-characters/pose-m-5.png'),
        category: 'demand-generation',
        characterSize: '156',
        title: 'Demand Generation 🤟🏻',
        desc: 'Competent means we will never take anything for granted.',
      },
    ]

    const filteredKB = computed(() => {
      const knowledgeBaseSearchQueryLower = knowledgeBaseSearchQuery.value.toLowerCase()

      return kbContentData.filter(
        item =>
          // eslint-disable-next-line operator-linebreak
          item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) ||
          item.desc.toLowerCase().includes(knowledgeBaseSearchQueryLower),
      )
    })

    return {
      knowledgeBaseSearchQuery,
      kbContentData,
      filteredKB,
      icons: { mdiMagnify },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/pages/knowledge-base.scss';
</style>
