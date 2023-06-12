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
          <img src="@/assets/icons/likes.svg" alt="likes" class="w-[24px]" />
        </button>
      </div>
    </div>
    <ul>
      <li v-for="(comment, index) in quote.comments" :key="index">
        <the-comment :text="comment.text" :author="comment.author"></the-comment>
      </li>
    </ul>
    <div class="flex items-center gap-4 mt-4">
      <!-- <div class="rounded-full overflow-hidden sm:max-w-[52px] max-w-[40px]">
        <img src="@/assets/images/landing_image.svg" alt="" class="" />
      </div> -->
      <profile-icon :path="authUserIconPath"></profile-icon>
      <div class="flex flex-col gap-2 w-full">
        <input
          type="text"
          name="comment"
          :placeholder="$t('news_feed.write_a_comment')"
          class="py-2 px-3 rounded-md bg-gray sm:text-[20px] text-[16px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import imagePath from '@/config/images/path.js'
import { userStore } from '@/stores/user'

export default {
  props: {
    quote: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const authUser = userStore()

    const imageUrl = `${imagePath}${props.quote.image}`
    const profileIconUrl = `${imagePath}${props.quote.author.image}`
    const authUserIconPath = `${imagePath}${authUser.data.image}`

    return { imageUrl, profileIconUrl, authUserIconPath }
  }
}
</script>
