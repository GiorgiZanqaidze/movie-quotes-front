<template>
  <div class="flex items-start gap-0 mt-4 flex-col">
    <div class="flex items-center gap-3">
      <profile-icon :path="profileIconPath"></profile-icon>
      <h1>{{ author.name }}</h1>
    </div>

    <div class="flex flex-col border-b-[1px] border-light pb-4 w-full">
      <p class="sm:pl-14 text-[16px] sm:text-[20px]">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import imageUrl from '@/config/images/path.js'
import { computed } from 'vue'

export default {
  props: {
    text: {
      type: String,
      required: true
    },
    author: {
      type: Object,
      required: true
    }
  },

  setup(props) {
    const profileIconPath = computed(() => `${imageUrl}${props.author.image}`)

    return { profileIconPath }
  }
}
</script>
