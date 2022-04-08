<template>
  <section id="faq">
    <!-- seach banner  -->
    <v-card
      flat
      class="faq-bg d-flex align-center justify-center text-center mb-9"
    >
      <v-card-text>
        <p class="faq-title text-2xl font-weight-semibold primary--text mb-2">
          Hello, how can we help?
        </p>
        <p>or choose a category to quickly find the help you need</p>

        <v-form class="faq-search-input mx-auto">
          <v-text-field
            v-model="knowledgeBaseSearchQuery"
            outlined
            placeholder="Ask a question...."
            hide-details
            class="faq-search-input"
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

    <v-card-text class="question-section">
      <v-row>
        <v-col
          v-for="item in filterFaqData"
          :key="item.title"
          md="10"
          offset-md="2"
          cols="12"
          class="mx-auto mb-8"
        >
          <div class="faq-title d-flex align-center">
            <v-avatar
              color="secondary"
              rounded
              size="40"
              class="v-avatar-light-bg"
            >
              <v-icon
                size="24"
                class="text--primary"
              >
                {{ item.icon }}
              </v-icon>
            </v-avatar>

            <div class="ms-4">
              <h2 class="text--primary text-xl font-weight-medium">
                {{ item.title }}
              </h2>
              <p class="mb-0">
                {{ item.subtitle }}
              </p>
            </div>
          </div>

          <div class="faq-question-answers mt-6">
            <v-expansion-panels>
              <v-expansion-panel
                v-for="data in item.qAndA"
                :key="data.question"
              >
                <v-expansion-panel-header class="text-base">
                  {{ data.question }}
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  {{ data.answer }}
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </div>
        </v-col>

        <!-- no result found -->
        <v-col
          v-show="!filterFaqData.length"
          cols="12"
          class="text-center"
        >
          <h4 class="mt-4">
            Search result not found!!
          </h4>
        </v-col>
      </v-row>
    </v-card-text>

    <v-card-text class="text-center">
      <p class="text-xl font-weight-medium text--primary mb-1">
        You still have a question?
      </p>
      <p>If you cannot find a question in our FAQ, you can always contact us. We will answer to you shortly!</p>
    </v-card-text>

    <v-row class="mx-auto">
      <v-col
        v-for="(contact,index) in contactDetails"
        :key="contact.icon"
        cols="12"
        sm="6"
        md="5"
        :class="index > 0 ? 'me-auto': 'ms-auto'"
      >
        <v-card
          class="faq-contact text-center pa-5"
          flat
        >
          <v-avatar
            rounded
            color="secondary"
            size="38"
            class="v-avatar-light-bg mb-6"
          >
            <v-icon
              class="text--primary"
              size="24"
            >
              {{ contact.icon }}
            </v-icon>
          </v-avatar>

          <p class="text-xl text--primary font-weight-medium mb-2">
            {{ contact.contact }}
          </p>

          <p class="text-sm mb-0">
            {{ contact.tagLine }}
          </p>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
/* eslint-disable operator-linebreak */

import {
  mdiMagnify,
  mdiHelpCircleOutline,
  mdiCurrencyUsd,
  mdiBriefcaseVariantOutline,
  mdiPhone,
  mdiEmailOutline,
} from '@mdi/js'
import { computed, ref } from '@vue/composition-api'

export default {
  setup() {
    const knowledgeBaseSearchQuery = ref('')

    const faqQiestions = [
      {
        title: 'Common',
        subtitle: 'Most asked questions.',
        icon: mdiHelpCircleOutline,
        qAndA: [
          {
            question: 'General settings',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'Users',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'Personal data',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'Advanced settings',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
        ],
      },
      {
        title: 'Payment',
        subtitle: 'Payment methods questions.',
        icon: mdiCurrencyUsd,
        qAndA: [
          {
            question: 'Does my subscription automatically renew?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'Can I store the item on an intranet so everyone has access?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'What does non-exclusive mean?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'Is the Regular License the same thing as an editorial license?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
        ],
      },
      {
        title: 'Product & Services',
        subtitle: 'Product related questions.',
        icon: mdiBriefcaseVariantOutline,
        qAndA: [
          {
            question: 'Can I avail of an open delivery?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'I haven’t received the refund of my returned shipment. What do I do?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'How can I ship my order to an international location?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
          {
            question: 'I missed the delivery of my order today. What should I do?',
            answer:
              'Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar diam eros in elit. Pellentesque convallis laoreet laoreet.',
          },
        ],
      },
    ]

    const contactDetails = [
      {
        icon: mdiPhone,
        contact: '+ (810) 2548 2568',
        tagLine: 'We are always happy to help!',
      },
      {
        icon: mdiEmailOutline,
        contact: 'hello@help.com',
        tagLine: 'Best way to get answer faster!',
      },
    ]
    const filterFaqData = computed(() => {
      const knowledgeBaseSearchQueryLower = knowledgeBaseSearchQuery.value.toLowerCase()

      return faqQiestions.filter(
        item =>
          // eslint-disable-next-line implicit-arrow-linebreak
          item.title.toLowerCase().includes(knowledgeBaseSearchQueryLower) ||
          item.qAndA.filter(queObj => queObj.question.toLowerCase().includes(knowledgeBaseSearchQueryLower)).length,
      )
    })

    return {
      faqQiestions,
      knowledgeBaseSearchQuery,
      filterFaqData,
      contactDetails,
      icons: { mdiMagnify },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/pages/faq.scss';
</style>
