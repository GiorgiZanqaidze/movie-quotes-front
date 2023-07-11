<template>
  <div class="bg-darkBlack sm:w-[52rem] p-4 rounded-lg flex flex-col gap-4 w-full px-8">
    <header class="flex items-center gap-4 text-sm sm:text-md">
      <profile-icon :path="profileIconUrl"></profile-icon>
      <h2 class="text-sm sm:text-base">{{ props?.quote?.author?.name }}</h2>
    </header>
    <h1 class="text-sm sm:text-base" style="word-break: break-word">
      “{{ props?.quote?.name?.[$i18n.locale] }}.“{{ $t('news_feed.movie') }} -
      <span class="text-lightGrey"> {{ props?.quote?.movie?.title?.[$i18n.locale] }}.</span> ({{
        props?.quote?.movie?.year
      }})
    </h1>
    <div class="rounded-lg overflow-hidden">
      <img
        :src="`${imagePath}${props?.quote?.image}`"
        alt="movie"
        class="mx-auto w-full sm:max-h-[30rem] max-h-[10rem] sm:min-h-[30rem] min-h-[10rem]"
      />
    </div>
    <div class="flex gap-4 mt-2 sm:mt-4 border-b-2 border-light pb-2 sm:pb-4">
      <div class="flex gap-2 items-center">
        <p>{{ props?.quote?.comments?.length }}</p>
        <button>
          <icon-comment alt="comment" class="w-[1.2rem] sm:w-[1.4rem]"></icon-comment>
        </button>
      </div>
      <div class="flex gap-2 items-center">
        <p>{{ props?.quote?.likes?.length }}</p>
        <button>
          <icon-like
            v-if="!liked"
            @click="likeQuote"
            alt="likes"
            class="w-[1.2rem] sm:w-[1.4rem]"
          ></icon-like>
          <icon-heart-fill
            v-if="liked"
            @click="unlikePost"
            alt="likes"
            class="w-[1.2rem] sm:w-[1.7rem]"
          ></icon-heart-fill>
        </button>
      </div>
    </div>
    <ul>
      <the-comment
        v-for="(comment, index) in props.quote.comments.filter(
          (item, index) => index < commentsCount
        )"
        :key="index"
        :text="comment.text"
        :author="comment.author"
      ></the-comment>
    </ul>
    <div v-if="props.quote.comments.length > 2">
      <button @click="showAllComments" class="hover:underline text-sm sm:text-base">
        {{ $t('news_feed.show_comments') }}
      </button>
    </div>
    <PostComment :quote="props?.quote" />
  </div>
</template>

<script setup>
import { ref, defineProps, onMounted, computed } from 'vue'
import imagePath from '@/config/images/path.js'
import { userStore } from '@/stores/user'
import PostComment from '@/components/PostComment.vue'
import { useLikeStore } from '@/stores/likes'
import instantiatePusher from '@/helpers/instantiatePusher'
import IconLike from '@/components/icons/IconLike.vue'
import IconHeartFill from '@/components/icons/IconHeartFill.vue'
import IconComment from '@/components/icons/IconComment.vue'

const props = defineProps({
  quote: {
    type: Object,
    required: true
  }
})

onMounted(async () => {
  instantiatePusher()

  window.Echo.channel('comment').listen('PostComment', (data) => {
    comments.value.unshift(data.comment)
  })

  window.Echo.channel('like').listen('PostLike', (data) => {
    likes.value.push(data)
  })

  window.Echo.channel('dislike').listen('PostDislike', () => {
    likes.value.pop()
  })
})

let commentsCount = ref(2)

const showAllComments = () => {
  if (commentsCount.value === props.quote.comments.length) {
    commentsCount.value = 2
  } else {
    commentsCount.value = props.quote.comments.length
  }
}

const comments = ref(props.quote.comments)

const authUser = userStore()

const likes = ref(props.quote.likes)

const like = useLikeStore()

const liked = ref(likes.value.some((like) => like.author.id === authUser.data.id))

const likeData = {
  user_id: authUser.data.id,
  quote_id: props.quote.id,
  receiver_id: props.quote.author.id,
  type: 'like',
  sender_id: authUser.data.id
}

async function likeQuote() {
  await like.likeQuote(likeData)
  liked.value = true
}

async function unlikePost() {
  await like.dislikeQuote(likeData)
  liked.value = false
}

const profileIconUrl = computed(() => {
  if (props.quote.author.image) {
    return `${imagePath}${props.quote.author.image}`
  } else {
    return '/default_profile.svg'
  }
})
</script>
