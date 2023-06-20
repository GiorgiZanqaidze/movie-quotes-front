<template>
  <div
    class="absolute sm:top-[4rem] top-0 left-1/2 bg-darkBlack sm:w-[50rem] w-full sm:min-h-[30rem] translate-x-[-50%] pb-5 rounded-md"
  >
    <div>
      <header class="flex justify-between border-b border-gray p-6 pb-4 items-center">
        <div class="flex gap-4 items-center">
          <DeleteButton :quote_id="quote.id"></DeleteButton>
          <div class="w-[1px] h-4 bg-mediumGray"></div>
          <button class="flex justify-start" @click="modal.toggleModal('editQuoteModal', true)">
            <img src="@/assets/icons/pencil.svg" alt="delete" class="inline-block mr-1" />
          </button>
        </div>
        <h1 class="text-white sm:text-2xl text-md">View quote</h1>
        <div>
          <button class="" @click="modal.toggleModal('viewQuoteModal', false)">
            <img src="@/assets/icons/close.svg" alt="close" />
          </button>
        </div>
      </header>
      <div class="p-5 text-white flex flex-col gap-9">
        <div class="flex justify-start gap-2 items-center">
          <ProfileIcon :path="`${imagePath}${quote.author.image}`" />
          <p>{{ quote.author.name }}</p>
        </div>
        <div class="flex flex-col gap-2 text-sm">
          <h1 class="border p-2 flex justify-between border-mediumGray rounded-sm">
            <span>"{{ quote.name.en }}"</span><span class="text-mediumGray ml-1">ENG</span>
          </h1>
          <h1 class="border p-2 flex justify-between border-mediumGray rounded-sm">
            <span>"{{ quote.name.ka }}"</span><span class="text-mediumGray ml-1">ქარ</span>
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
                <img src="@/assets/icons/comment.svg" alt="comment" class="w-[24px]" />
              </button>
            </div>
            <div class="flex gap-2 items-center">
              <p>{{ quote.likes.length }}</p>
              <button>
                <img v-if="!liked" src="@/assets/icons/likes.svg" alt="likes" class="w-[24px]" />
                <img v-else src="@/assets/icons/heart_fill.svg" alt="likes" class="w-[24px]" />
              </button>
            </div>
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
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import { useSingleMovieStore } from '@/stores/singleMovie'
import { ref } from 'vue'
import imagePath from '@/config/images/path'
import ProfileIcon from '@/components/ProfileIcon.vue'
import PostComment from '@/components/PostComment.vue'
import DeleteButton from '@/components/DeleteButton.vue'
const modal = useModalStore()

const movie = useSingleMovieStore()

const liked = ref(false)

const quote = movie.getCurrentQuote
</script>
