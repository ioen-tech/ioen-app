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
          <v-card>
            <!-- title -->
            <v-card-title class="kbc-title d-flex flex-nowrap">
              <v-icon
                :color="item.color ? item.color:'' "
                :class="`me-3 ${item.class ? item.class :''}`"
              >
                {{ item.icon }}
              </v-icon>

              <span class="text-truncate">{{ item.title }} ({{ item.questions.length }})</span>
            </v-card-title>

            <div class="kb-questions py-1">
              <div
                v-for="que in item.questions"
                :key="que.question"
                class="kb-question d-flex align-start text-sm px-5 my-6 cursor-pointer"
                @click="$router.push({ name: 'page-knowledge-base-question', params: { category: $route.params.category, slug: que.slug } })"
              >
                <v-icon
                  size="14"
                  class="me-2 mt-1"
                  color="secondary"
                >
                  {{ icons.mdiCheckboxBlankCircleOutline }}
                </v-icon>

                <span class="text--secondary">{{ que.question }}</span>
              </div>
            </div>
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
import {
  mdiMagnify,
  mdiCogOutline,
  mdiCheckboxBlankCircleOutline,
  mdiLink,
  mdiCurrencyUsd,
  mdiLockOpenOutline,
  mdiCellphoneCog,
  mdiInformationOutline,
} from '@mdi/js'
import { computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const knowledgeBaseSearchQuery = ref('')

    const kbContentData = [
      {
        category: 'account-settings',
        icon: mdiCogOutline,
        color: 'primary',
        title: 'Account Settings',
        questions: [
          { question: 'How Secure Is My Password?', slug: 'how-secure-is-my-password' },
          { question: 'Can I Change My Username?', slug: 'can-i-change-my-username' },
          { question: 'Where Can I Upload My Avatar?', slug: 'where-can-i-upload-my-avatar' },
          { question: 'How Do I Change My Timezone?', slug: 'how-do-i-change-my-timezone' },
          { question: 'How Do I Change My Password?', slug: 'how-do-i-change-my-password' },
        ],
      },
      {
        category: 'api-questions',
        icon: mdiLink,
        color: 'success',
        title: 'API Questions',
        questions: [
          { question: 'What Technologies Are Used?', slug: 'what-technologies-are-used' },
          { question: 'What Are The API Limits?', slug: 'what-are-the-api-limits' },
          { question: 'Why Was My Application Rejected?', slug: 'why-was-my-application-rejected' },
          { question: 'Where can I find the documentation?', slug: 'where-can-i-find-the-documentation' },
          { question: 'How Do I Get An API Key?', slug: 'how-do-i-get-an-api-key' },
        ],
      },
      {
        category: 'billing',
        icon: mdiCurrencyUsd,
        color: 'error',
        title: 'Billing',
        questions: [
          { question: 'Can I Contact A Salés Rep?', slug: 'can-i-contact-a-salés-rep' },
          { question: 'Do I Need To Pay VAT?', slug: 'do-i-need-to-pay-vat' },
          { question: 'Can I Get A Refund?', slug: 'can-i-get-a-refund' },
          { question: 'Difference Annual & Monthly Billing', slug: 'difference-annual-monthly-billing' },
          { question: 'What Happens If The Price Increases?', slug: 'what-happens-if-the-price-increases' },
        ],
      },
      {
        category: 'copyright-legal',
        icon: mdiLockOpenOutline,
        color: 'warning',
        title: 'Copyright & Legal',
        questions: [
          { question: 'How Do I Contact Legal?', slug: 'how-do-i-contact-legal' },
          { question: 'Where Are Your Offices Located?', slug: 'where-are-your-offices-located' },
          { question: 'Who Owns The Copyright On Text?', slug: 'who-owns-the-copyright-on-text' },
          { question: 'Our Content Policy', slug: 'our-content-policy' },
          { question: 'How Do I File A DMCA?', slug: 'how-do-i-file-a-dmca' },
        ],
      },
      {
        category: 'mobile-apps',
        icon: mdiCellphoneCog,
        color: 'info',
        title: 'Mobile Apps',
        questions: [
          { question: 'How Do I Download The Android App?', slug: 'how-do-i-download-the-android-app' },
          { question: 'How To Download Our iPad App', slug: 'how-to-download-our-i-pad-app' },
          { question: 'Where Can I Upload My Avatar?', slug: 'where-can-i-upload-my-avatar' },
          { question: 'Can I Use My Android Phone?', slug: 'can-i-use-my-android-phone' },
          { question: 'Is There An iOS App?', slug: 'is-there-an-i-os-app' },
        ],
      },
      {
        category: 'using-knowHow',
        icon: mdiInformationOutline,
        class: 'text--primary',
        title: 'Using KnowHow',
        questions: [
          { question: 'Customization', slug: 'customization' },
          { question: 'Upgrading', slug: 'upgrading' },
          { question: 'Customizing Your Theme', slug: 'customizing-your-theme' },
          { question: 'Upgrading Your Theme', slug: 'upgrading-your-theme' },
        ],
      },
    ]

    const filteredKB = computed(() => {
      const knowledgeBaseSearchQueryLower = knowledgeBaseSearchQuery.value.toLowerCase()

      return kbContentData.filter(
        item =>
          // eslint-disable-next-line operator-linebreak
          item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) ||
          item.questions.filter(queObj => queObj.question.toLowerCase().includes(knowledgeBaseSearchQueryLower)).length,
      )
    })

    return {
      knowledgeBaseSearchQuery,
      kbContentData,
      filteredKB,
      icons: { mdiMagnify, mdiCheckboxBlankCircleOutline },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/pages/knowledge-base.scss';
</style>
