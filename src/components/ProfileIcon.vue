<template>
  <div class="rounded-full overflow-hidden sm:max-w-[52px] max-w-[40px]" :class="[width, border]">
    <img src="@/assets/images/landing_image.svg" alt="" class="" />
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
    }
  }
}
</script>
