<template>
  <div class="border rounded bg-transparent px-3 py-3 sm:flex sm:justify-between">
    <div>
      <div class="flex gap-3">
        <div class="w-10 flex items-center justify-center">
          <!-- <ProfileIcon width="max-w-[60px]" :border="borderClass" /> -->
        </div>
        <div class="flex flex-col justify-start">
          <h1 class="text-left">giorgi zankaidze</h1>
          <p v-if="comment" class="text-[14px] sm:text-[20px]">
            <img
              src="@/assets/icons/comment_notify.svg"
              alt="comment"
              class="inline mr-1 w-[24px]"
            />
            {{ $t('news_feed.commented_on') }}
          </p>
          <p v-else class="text-[14px] sm:text-[20px]">
            <img src="@/assets/icons/like_notify.svg" alt="like" class="inline mr-1 w-[24px]" />{{
              $t('news_feed.reacted_on')
            }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex gap-3 items-center sm:gap-0 sm:flex-col"
      :class="{ 'sm:flex-col-reverse': newNotification }"
    >
      <p v-if="newNotification" class="text-[14px] text-center w-10 text-lightBlue">
        {{ $t('news_feed.new') }}
      </p>
      <p :class="{ 'ml-[60px]': !newNotification }" class="text-[14px]">5 minutes ago</p>
    </div>
  </div>
</template>

<script setup>
import ProfileIcon from '@/components/ProfileIcon.vue'
import { computed, defineProps } from 'vue'

const props = defineProps({
  condition: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  }
})

const newNotification = computed(() => {
  return props.condition === 'new'
})
const borderClass = computed(() => {
  if (newNotification.value) {
    return 'border-2 border-lightBlue'
  } else {
    return ''
  }
})

const comment = computed(() => props.type === 'comment')

const like = computed(() => props.type === 'like')
</script>
