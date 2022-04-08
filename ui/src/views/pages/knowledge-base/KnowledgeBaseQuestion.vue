<template>
  <div id="knowledge-base">
    <v-row>
      <v-col
        cols="12"
        md="5"
        lg="3"
        order="2"
        order-md="1"
      >
        <v-card
          v-for="item in kbContentData"
          :key="item.character"
        >
          <v-card-title class="kbc-title align-center flex-nowrap">
            <v-icon
              color="primary"
              class="me-3"
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

      <v-col
        cols="12"
        md="7"
        lg="9"
        order="1"
        order-md="2"
      >
        <v-card>
          <v-card-text class="pb-0">
            <v-btn
              dark
              color="secondary"
              outlined
              @click.native="$router.push({ name: 'page-knowledge-base-category', params: { category: $route.params.category } })"
            >
              <v-icon
                left
                dark
              >
                {{ icons.mdiChevronLeft }}
              </v-icon>
              <span>Back</span>
            </v-btn>
          </v-card-text>
          <v-card-title class="flex-nowrap">
            <v-icon class="text--primary me-2">
              {{ article.titleIcon }}
            </v-icon>
            <span class="text-break">{{ article.title }}</span>
          </v-card-title>
          <v-card-text>Last updated on {{ article.lastUpdated }}</v-card-text>

          <v-card-text>
            {{ article.postDesc }}
          </v-card-text>

          <v-card-text>
            <v-img
              contain
              :src="article.postImg"
            ></v-img>
          </v-card-text>

          <v-card-text>
            <span class="text-base">{{ article.subtitle }}</span>
          </v-card-text>

          <v-card-text class="pb-3">
            {{ article.postDesc2 }}
          </v-card-text>

          <v-card-text>
            <v-list class="kb-questions py-0 ps-2">
              <v-list-item
                v-for="topic in article.postTopics"
                :key="topic"
                class="d-flex align-start cursor-pointer text-sm"
              >
                <v-icon
                  size="14"
                  class="me-2 mt-1"
                  color="secondary"
                >
                  {{ icons.mdiCheckboxBlankCircleOutline }}
                </v-icon>

                <span class="text--secondary">
                  {{ topic }}
                </span>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import { mdiCogOutline, mdiCheckboxBlankCircleOutline, mdiCellphoneCog, mdiChevronLeft } from '@mdi/js'

export default {
  setup() {
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
    ]

    const article = {
      title: 'Why Was My Developer Application Rejected?',
      titleIcon: mdiCellphoneCog,
      lastUpdated: '10 Dec 2018',
      postDesc:
        'It has been said that astronomy is a humbling and character-building experience. There is perhaps no better demonstration of the folly of human conceits than this distant image of our tiny world. To me, it underscores our responsibility to deal more kindly with one another, and to preserve and cherish the pale blue dot, the only home we’ve ever known. The Earth is a very small stage in a vast cosmic arena. Think of the rivers of blood spilled by all those generals and emperors so that, in glory and triumph, they could become the momentary masters of a fraction of a dot. Think of the endless cruelties visited by the inhabitants of one corner of this pixel on the scarcely distinguishable inhabitants of some other corner, how frequent their misunderstandings, how eager they are to kill one another, how fervent their hatreds.',
      postImg: require('@/assets/images/pages/mac-pc.png'),
      subtitle: 'Houston',
      postDesc2:
        'that may have seemed like a very long final phase. The auto targeting was taking us right into a … crater, with a large number of big boulders and rocks … and it required … flying manually over the rock field to find a reasonably good area.',
      postTopics: [
        'I am a stranger. I come in peace. Take me to your leader and there will be a massive reward for you in eternity.',
        'It’s just mind-blowingly awesome. I apologize, and I wish I was more articulate, but it’s hard to be articulate when your mind’s blown—but in a very good way.',
        'A good rule for rocket experimenters to follow is this',
      ],
    }

    return {
      kbContentData,
      article,
      icons: {
        mdiCogOutline,
        mdiCheckboxBlankCircleOutline,
        mdiCellphoneCog,
        mdiChevronLeft,
      },
    }
  },
}
</script>

<style lang="scss">
@import '@core/preset/preset/pages/knowledge-base.scss';
</style>
