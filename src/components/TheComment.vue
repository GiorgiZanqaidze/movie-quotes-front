<template>
  <div class="flex items-start gap-0 mt-2 flex-col">
    <div class="flex items-center gap-3 mb-2 text-xs sm:text-base">
      <profile-icon :path="profileIconUrl"></profile-icon>
      <h1>{{ props.author.name }}</h1>
    </div>

    <div class="flex flex-col border-b-[1px] border-light pb-2 w-full">
      <p class="sm:pl-14 text-xs sm:text-base">{{ props.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps } from 'vue'
import imagePath from '@/config/images/path'
const props = defineProps({
  text: {
    type: String,
    required: true
  },
  author: {
    type: Object,
    required: true
  }
})

const profileIconUrl = computed(() => {
  if (props.author.image) {
    return `${imagePath}${props.author.image}`
  } else {
    return '/default_profile.svg'
  }
})
</script>
