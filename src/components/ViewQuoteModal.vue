<template>
  <div
    class="absolute sm:top-[4rem] top-0 left-1/2 bg-darkBlack sm:w-[50rem] w-full sm:min-h-[30rem] translate-x-[-50%] pb-5 rounded-md"
  >
    <div>
      <header class="flex justify-between border-b border-gray p-6 pb-4 items-center">
        <div class="flex gap-4 items-center">
          <DeleteButton :quote_id="quote.id" @click="deleteQuote"></DeleteButton>
          <div class="w-[1px] h-4 bg-mediumGray"></div>
          <button class="flex justify-start" @click="modal.toggleModal('editQuoteModal', true)">
            <icon-pencil alt="delete" class="inline-block mr-1"></icon-pencil>
          </button>
        </div>
        <h1 class="text-white sm:text-2xl text-md hidden sm:inline">
          {{ $t('landing.movie_description.view_quote') }}
        </h1>
        <div>
          <button class="" @click="modal.toggleModal('viewQuoteModal', false)">
            <icon-close alt="close"></icon-close>
          </button>
        </div>
      </header>
      <div class="p-5 text-white flex flex-col gap-5">
        <div class="flex justify-start gap-2 items-center">
          <ProfileIcon :path="profileIconUrl" />
          <p class="text-sm sm:text-base">{{ quote.author.name }}</p>
        </div>
        <div class="flex flex-col gap-2 text-base">
          <h1 class="border p-2 flex justify-between border-mediumGray rounded-sm">
            <span class="break-all">"{{ quote.name.en }}"</span
            ><span class="text-mediumGray ml-1">ENG</span>
          </h1>
          <h1 class="border p-2 flex justify-between border-mediumGray rounded-sm">
            <span class="break-all">"{{ quote.name.ka }}"</span
            ><span class="text-mediumGray ml-1">ქარ</span>
          </h1>
        </div>
        <div class="flex justify-center">
          <div class="w-full">
            <img
              :src="`${imagePath}${quote.image}`"
              alt="quote"
              class="w-full rounded max-h-[10rem] sm:max-h-[20rem]"
            />
          </div>
        </div>
        <div>
          <div class="flex gap-4 sm:mt-4 mt-0 border-b-2 border-light pb-4">
            <div class="flex gap-2 items-center just">
              <p>{{ quote.comments.length }}</p>
              <button>
                <icon-comment alt="comment" class="w-[1.2rem] sm:w-[1.5rem]"></icon-comment>
              </button>
            </div>
            <div class="flex gap-2 items-center">
              <p>{{ likes.length }}</p>
              <button>
                <icon-like
                  v-if="!liked"
                  @click="likeQuote"
                  alt="likes"
                  class="sm:w-[1.5rem] w-[1.2rem]"
                ></icon-like>
                <icon-heart-fill
                  v-if="liked"
                  @click="unlikePost"
                  alt="likes"
                  class="sm:w-[1.5rem] w-[1.2rem]"
                ></icon-heart-fill>
              </button>
            </div>
          </div>
        </div>
        <ul class="">
          <the-comment
            v-for="(comment, index) in quote.comments.filter(
              (item, index) => index < commentsCount
            )"
            :key="index"
            :text="comment.text"
            :author="comment.author"
          ></the-comment>
        </ul>
        <div v-if="quote.comments.length > 2">
          <button @click="showAllComments" class="hover:underline text-sm sm:text-base">
            {{ $t('news_feed.show_comments') }}
          </button>
        </div>
        <PostComment :quote="quote" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { useSingleMovieStore } from '@/stores/singleMovie'
import { ref, onMounted, computed } from 'vue'
import imagePath from '@/config/images/path'
import ProfileIcon from '@/components/ProfileIcon.vue'
import PostComment from '@/components/PostComment.vue'
import DeleteButton from '@/components/DeleteButton.vue'
import instantiatePusher from '@/helpers/instantiatePusher'
import { useLikeStore } from '@/stores/likes'
import { userStore } from '@/stores/user'
import IconClose from '@/components/icons/IconClose.vue'
import IconPencil from '@/components/icons/IconPencil.vue'
import IconComment from '@/components/icons/IconComment.vue'
import IconLike from '@/components/icons/IconLike.vue'
import IconHeartFill from '@/components/icons/IconHeartFill.vue'
const modal = useModalStore()

onMounted(() => {
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
  if (commentsCount.value === quote.comments.length) {
    commentsCount.value = 2
  } else {
    commentsCount.value = quote.comments.length
  }
}

const movie = useSingleMovieStore()

const quote = movie.getCurrentQuote

const comments = ref(quote.comments)

const deleteQuote = () => {
  modal.toggleModal('null', false)
}

const authUser = userStore()

const likes = ref(quote.likes)

const like = useLikeStore()

const liked = ref(likes.value.some((like) => like.author.id === authUser.data.id))

const likeData = {
  user_id: authUser.data.id,
  quote_id: quote.id,
  receiver_id: quote.author.id,
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
  if (quote.author.image) {
    return `${imagePath}${quote.author.image}`
  } else {
    return '/default_profile.svg'
  }
})
</script>
