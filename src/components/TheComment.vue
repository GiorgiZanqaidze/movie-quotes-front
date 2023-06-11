<template>
  <div class="flex items-start gap-4 mt-4 flex-col">
    <div class="flex items-center gap-3">
      <profile-icon></profile-icon>
      <h1>{{ author.name }}</h1>
    </div>

    <div class="flex flex-col gap-2 border-b-[1px] border-light pb-4">
      <p class="sm:pl-14 text-[16px] sm:text-[20px]">{{ text }}</p>
    </div>
  </div>
</template>

<script>
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
  }
}
</script>
