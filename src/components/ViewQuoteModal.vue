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
        <h1 class="text-white sm:text-2xl text-md">
          {{ $t('landing.movie_description.view_quote') }}
        </h1>
        <div>
          <button class="" @click="modal.toggleModal('viewQuoteModal', false)">
            <icon-close alt="close"></icon-close>
          </button>
        </div>
      </header>
      <div class="p-5 text-white flex flex-col gap-9">
        <div class="flex justify-start gap-2 items-center">
          <ProfileIcon :path="`${imagePath}${quote.author.image}`" />
          <p class="text-sm sm:text-md">{{ quote.author.name }}</p>
        </div>
        <div class="flex flex-col gap-2 text-sm">
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
            <img :src="`${imagePath}${quote.image}`" alt="quote" class="w-full rounded" />
          </div>
        </div>
        <div>
          <div class="flex gap-4 sm:mt-4 mt-0 border-b-2 border-light pb-4">
            <div class="flex gap-2 items-center just">
              <p>{{ quote.comments.length }}</p>
              <button>
                <icon-comment alt="comment" class="w-[24px]"></icon-comment>
              </button>
            </div>
            <div class="flex gap-2 items-center">
              <p>{{ likes.length }}</p>
              <button>
                <icon-like
                  v-if="!liked"
                  @click="likeQuote"
                  alt="likes"
                  class="w-[24px]"
                ></icon-like>
                <icon-heart-fill
                  v-if="liked"
                  @click="unlikePost"
                  alt="likes"
                  class="w-[24px]"
                ></icon-heart-fill>
              </button>
            </div>
          </div>
        </div>
        <ul class="max-h-[10rem] overflow-y-scroll">
          <the-comment
            v-for="(comment, index) in comments"
            :key="index"
            :text="comment.text"
            :author="comment.author"
          ></the-comment>
        </ul>
        <PostComment :quote="quote" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { useSingleMovieStore } from '@/stores/singleMovie'
import { ref, onMounted } from 'vue'
import imagePath from '@/config/images/path'
import ProfileIcon from '@/components/ProfileIcon.vue'
import PostComment from '@/components/PostComment.vue'
import DeleteButton from '@/components/DeleteButton.vue'
import instantiatePusher from '@/helpers/instantiatePusher'
import { useLikeStore } from '@/stores/likes'
import { userStore } from '@/stores/user'
import IconClose from '@/icons/IconClose.vue'
import IconPencil from '@/icons/IconPencil.vue'
import IconComment from '@/icons/IconComment.vue'
import IconLike from '@/icons/IconLike.vue'
import IconHeartFill from '@/icons/IconHeartFill.vue'
const modal = useModalStore()

onMounted(() => {
  instantiatePusher()

  window.Echo.channel('comment').listen('PostComment', (data) => {
    comments.value.push(data.comment)
  })

  window.Echo.channel('like').listen('PostLike', (data) => {
    likes.value.push(data)
  })

  window.Echo.channel('dislike').listen('PostDislike', (data) => {
    likes.value.pop()
  })
})

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
</script>
