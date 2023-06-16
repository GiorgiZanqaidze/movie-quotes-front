<template>
  <div class="flex justify-center items-center">
    <img
      :src="props.path"
      alt="profile"
      class="sm:w-[52px] w-[40px] sm:h-[52px] h-[40px] rounded-full overflow-hidden"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  width: {
    type: String,
    required: false
  },
  border: {
    type: String,
    required: false
  },
  path: {
    type: String,
    required: true
  }
})
</script>
