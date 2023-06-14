<template>
  <div class="bg-darkBlack sm:w-[961px] p-4 rounded-lg flex flex-col gap-4 w-full px-8">
    <header class="flex items-center gap-4">
      <profile-icon :path="profileIconUrl"></profile-icon>
      <h2>{{ props.quote.author.name }}</h2>
    </header>
    <h1>
      “{{ props.quote.name[this.$i18n.locale] }}”movie-
      {{ props.quote.movie.title[this.$i18n.locale] }} ({{ props.quote.movie.year }})
    </h1>
    <div class="rounded-lg overflow-hidden">
      <img :src="imageUrl" alt="movie" class="mx-auto" />
    </div>
    <div class="flex gap-4 mt-4 border-b-2 border-light pb-4">
      <div class="flex gap-2 items-center just">
        <p>{{ props.quote.comments.length }}</p>
        <button>
          <img src="@/assets/icons/comment.svg" alt="comment" class="w-[24px]" />
        </button>
      </div>
      <div class="flex gap-2 items-center just">
        <p>{{ likesLength }}</p>
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
        v-for="(comment, index) in props.quote.comments"
        :key="index"
        :text="comment.text"
        :author="comment.author"
      ></the-comment>
    </ul>
    <PostComment :quote_id="props.quote.id" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineAsyncComponent, defineProps } from 'vue'
import imagePath from '@/config/images/path.js'
import { userStore } from '@/stores/user'
import PostComment from '@/components/PostComment.vue'
import { useQuoteStore } from '@/stores/quote'
import { useLikeStore } from '@/stores/likes'

const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

const authUser = userStore()

const quote = useQuoteStore()

const likesLength = ref(props.quote.likes.length)

const like = useLikeStore()

const liked = ref(false)

const likeData = {
  user_id: authUser.data.id,
  quote_id: props.quote.id
}

liked.value = props.quote.likes.some((like) => like.user_id === authUser.data.id)

async function likeQuote() {
  const response = await like.likeQuote(likeData)
  likesLength.value++
  liked.value = true
}

async function unlikePost() {
  await like.dislikeQuote(likeData)
  likesLength.value--
  liked.value = false
}

const imageUrl = `${imagePath}${props.quote.image}`
const profileIconUrl = `${imagePath}${props.quote.author.image}`
const authUserIconPath = `${imagePath}${authUser.data.image}`
</script>
