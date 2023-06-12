<template>
  <div class="flex justify-center items-center">
    <img
      :src="path"
      alt="profile"
      class="sm:w-[52px] w-[40px] sm:h-[52px] h-[40px] rounded-full overflow-hidden"
    />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
export default {
  props: {
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
  }
}
</script>
