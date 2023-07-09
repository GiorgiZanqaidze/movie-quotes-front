<template>
  <div class="flex justify-center items-center">
    <img
      :src="userImageUrl"
      alt="profile"
      class="sm:w-[52px] w-[40px] sm:h-[52px] h-[40px] rounded-full overflow-hidden"
      :class="props.border"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import imagePath from '@/config/images/path'
import { userStore } from '@/stores/user'

const authUserStore = userStore()

const props = defineProps({
  width: {
    type: String,
    required: false
  },

  path: {
    type: String
  },
  border: {
    type: String
  },
  authUser: {
    type: Boolean
  }
})

const userImageUrl = computed(() => {
  if (props.authUser && authUserStore.data.image) {
    return `${imagePath}${authUserStore.data.image}`
  } else if (props.authUser && !authUserStore.data.image) {
    return '/default_profile.svg'
  } else {
    return props.path
  }
})
</script>
