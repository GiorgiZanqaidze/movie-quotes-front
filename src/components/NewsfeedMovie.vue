<template>
  <div class="bg-darkBlack sm:w-[961px] p-4 rounded-lg flex flex-col gap-4 w-full px-8">
    <header class="flex items-center gap-4">
      <profile-icon :path="profileIconUrl"></profile-icon>
      <h2>{{ props?.quote?.author?.name }}</h2>
    </header>
    <h1>
      “{{ props?.quote?.name?.[this.$i18n.locale] }}”movie-
      {{ props?.quote?.movie?.title?.[this.$i18n.locale] }} ({{ props?.quote?.movie?.year }})
    </h1>
    <div class="rounded-lg overflow-hidden">
      <img :src="imageUrl" alt="movie" class="mx-auto" />
    </div>
    <div class="flex gap-4 mt-4 border-b-2 border-light pb-4">
      <div class="flex gap-2 items-center just">
        <p>{{ props?.quote?.comments?.length }}</p>
        <button>
          <img src="@/assets/icons/comment.svg" alt="comment" class="w-[24px]" />
        </button>
      </div>
      <div class="flex gap-2 items-center just">
        <p>{{ likes.length }}</p>
        <button>
          <img
            v-if="!liked"
            @click="likeQuote"
            src="@/assets/icons/likes.svg"
            alt="likes"
            class="w-[24px]"
          />
          <img
            v-if="liked"
            @click="unlikePost"
            src="@/assets/icons/heart_fill.svg"
            alt="likes"
            class="w-[24px]"
          />
        </button>
      </div>
    </div>
    <ul>
      <the-comment
        v-for="(comment, index) in comments"
        :key="index"
        :text="comment.text"
        :author="comment.author"
      ></the-comment>
    </ul>
    <PostComment :quote="props?.quote" />
  </div>
</template>

<script setup>
import { ref, defineProps, reactive, onMounted } from 'vue'
import imagePath from '@/config/images/path.js'
import { userStore } from '@/stores/user'
import PostComment from '@/components/PostComment.vue'
import { useLikeStore } from '@/stores/likes'
import instantiatePusher from '@/helpers/instantiatePusher'

const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

onMounted(async () => {
  instantiatePusher()

  window.Echo.channel('comment').listen('PostComment', (data) => {
    comments.value.push(data.comment)
  })

  window.Echo.channel('like').listen('PostLike', (data) => {
    likes.value.push(data)
  })

  window.Echo.channel('dislike').listen('PostDislike', (data) => {
    liked.value = false
    likes.value.length--
  })
})

const comments = ref(props.quote.comments)

const state = reactive({})

const authUser = userStore()

const likes = ref(props.quote.likes)

const likesLength = likes.value.length

const like = useLikeStore()

const liked = ref(likes.value.some((like) => like.author.id === authUser.data.id))

const likeData = {
  user_id: authUser.data.id,
  quote_id: props.quote.id,
  receiver_id: props.quote.author.id
}

async function likeQuote() {
  await like.likeQuote(likeData)
  liked.value = true
}

async function unlikePost() {
  await like.dislikeQuote(likeData)
  liked.value = false
}

const imageUrl = `${imagePath}${props.quote.image}`
const profileIconUrl = `${imagePath}${props.quote.author.image}`
</script>
