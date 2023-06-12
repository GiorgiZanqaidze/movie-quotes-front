<template>
  <div class="bg-darkBlack sm:w-[961px] p-4 rounded-lg flex flex-col gap-4 w-full px-8">
    <header class="flex items-center gap-4">
      <profile-icon :path="profileIconUrl"></profile-icon>
      <h2>{{ quote.author.name }}</h2>
    </header>
    <h1>
      “{{ quote.name[this.$i18n.locale] }}”movie- {{ quote.movie.title[this.$i18n.locale] }} ({{
        quote.movie.year
      }})
    </h1>
    <div class="rounded-lg overflow-hidden">
      <img :src="imageUrl" alt="movie" class="mx-auto" />
    </div>
    <div class="flex gap-4 mt-4 border-b-2 border-light pb-4">
      <div class="flex gap-2 items-center just">
        <p>{{ quote.comments.length }}</p>
        <button>
          <img src="@/assets/icons/comment.svg" alt="comment" class="w-[24px]" />
        </button>
      </div>
      <div class="flex gap-2 items-center just">
        <p>{{ quote.likes.length }}</p>
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
        v-for="(comment, index) in quote.comments"
        :key="index"
        :text="comment.text"
        :author="comment.author"
      ></the-comment>
    </ul>
    <PostComment :quote_id="quote.id" />
  </div>
</template>

<script>
import { computed, onMounted, ref, defineAsyncComponent } from 'vue'
import imagePath from '@/config/images/path.js'
import { userStore } from '@/stores/user'
import PostComment from '@/components/PostComment.vue'
import axiosInstance from '@/config/axios/index'

export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  },
  components: {
    PostComment
  },
  setup(props) {
    const authUser = userStore()

    const liked = ref(false)

    liked.value = props.quote.likes.some((like) => like.user_id === authUser.data.id)

    function likeQuote() {
      axiosInstance
        .post('/api/like/quote', { user_id: authUser.data.id, quote_id: props.quote.id })
        .then((response) => {
          console.log(response.data.message)
          liked.value = true
        })
        .catch((error) => {
          console.error(error)
        })
    }
    function unlikePost() {
      axiosInstance
        .post('/api/dislike/quote', { user_id: authUser.data.id, quote_id: props.quote.id })
        .then((response) => {
          console.log(response.data.message)
          liked.value = false
        })
        .catch((error) => {
          console.error(error)
        })
    }

    const imageUrl = `${imagePath}${props.quote.image}`
    const profileIconUrl = `${imagePath}${props.quote.author.image}`
    const authUserIconPath = `${imagePath}${authUser.data.image}`

    return { imageUrl, profileIconUrl, authUserIconPath, liked, likeQuote, unlikePost }
  }
}
</script>
