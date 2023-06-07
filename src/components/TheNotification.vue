<template>
  <div class="border rounded bg-transparent px-3 py-3">
    <div>
      <div class="flex gap-3">
        <div class="w-10 flex items-center justify-center">
          <ProfileIcon width="max-w-[60px]" :border="borderClass" />
        </div>
        <div class="flex flex-col justify-start">
          <h1 class="text-left">giorgi zankaidze</h1>
          <p class="text-[14px]">Commented to your movie quote</p>
        </div>
      </div>
    </div>
    <div class="flex gap-3 items-center">
      <p v-if="newNotification" class="text-[14px] text-center w-10 text-lightBlue">New</p>
      <p :class="{ 'ml-[60px]': !newNotification }" class="text-[14px]">5 minutes ago</p>
    </div>
  </div>
</template>

<script>
import ProfileIcon from '@/components/ProfileIcon.vue'
import { computed } from 'vue'

export default {
  components: {
    ProfileIcon
  },
  props: {
    condition: {
      type: String,
      required: true
    }
  },

  setup(props) {
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

    return { newNotification, borderClass }
    console.log(borderClass.value)
  }
}
</script>
