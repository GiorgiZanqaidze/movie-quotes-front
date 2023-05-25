<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 sm:w-[601px] h-[400px] sm:h-[402px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-2 px-2"
  >
    <header class="flex flex-col items-center">
      <img :src="imgSrc" alt="sent email" />
      <h1 class="text-white sm:mt-8 sm:text-3xl mb-2">{{ title }}</h1>
      <span class="text-mediumGray text-sm my-4 text-center max-w-[360px]">{{ title }}</span>
    </header>
    <button>{{ buttonText }}</button>
    <p v-if="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    }
  }
}
</script>
