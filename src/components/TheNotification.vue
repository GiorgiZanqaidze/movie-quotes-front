<template>
  <div class="border rounded bg-transparent px-3 py-3 sm:flex sm:justify-between">
    <div>
      <div class="flex gap-3">
        <div class="w-10 flex items-center justify-center">
          <ProfileIcon width="max-w-[60px]" :border="borderClass" :path="userImage" />
        </div>
        <div class="flex flex-col justify-start">
          <h1 class="text-left">giorgi zankaidze</h1>
          <p v-if="comment" class="text-[14px] sm:text-[20px]">
            <icon-comment-notify alt="comment" class="inline mr-1 w-[24px]"></icon-comment-notify>
            {{ $t('news_feed.commented_on') }}
          </p>
          <p v-else class="text-[14px] sm:text-[20px]">
            <icon-like-notify alt="like" class="inline mr-1 w-[24px]"></icon-like-notify>
            {{ $t('news_feed.reacted_on') }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="flex gap-3 items-center sm:gap-0 sm:flex-col"
      :class="{ 'sm:flex-col-reverse': !newNotification }"
    >
      <p v-if="!newNotification" class="text-[14px] text-center w-10 text-lightBlue">
        {{ $t('news_feed.new') }}
      </p>
      <p :class="{ 'ml-[60px]': newNotification }" class="text-[14px]">
        {{ timeAgoCompute }} {{ $t('news_feed.minutes_ago') }}
      </p>
    </div>
  </div>
</template>

<script setup>
import ProfileIcon from '@/components/ProfileIcon.vue'
import { computed, defineProps } from 'vue'
import ImageSrc from '@/config/images/path'
import IconCommentNotify from '@/components/icons/IconCommentNotify.vue'
import IconLikeNotify from '@/components/icons/IconLikeNotify.vue'

const props = defineProps({
  condition: {
    required: true
  },
  type: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

const timeAgoCompute = computed(() => {
  const now = new Date()
  const createdAt = new Date(props.data.created_at)
  const diff = Math.floor((now - createdAt) / (1000 * 60))

  return diff
})

const newNotification = computed(() => {
  return props.condition
})

const borderClass = computed(() => {
  if (!newNotification.value) {
    return 'border-2 border-lightBlue'
  } else {
    return ''
  }
})

const comment = computed(() => props.type === 'comment')

const userImage = computed(() => `${ImageSrc}${props.data.sender.image}`)
</script>
