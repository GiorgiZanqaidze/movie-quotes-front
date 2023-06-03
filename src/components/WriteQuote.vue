<template>
  <div
    class="fixed top-[200px] left-1/2 bg-darkGray sm:w-[961px] translate-x-[-50%] pb-5 rounded-md"
  >
    <header class="p-5 relative border-b-2">
      <h3 class="text-center">Write New Quote</h3>
      <button class="absolute top-1/2 right-4 translate-y-[-50%]">
        <img src="@/assets/icons/close.svg" alt="close" />
      </button>
    </header>
    <div class="px-4 mt-4">
      <div class="flex items-center gap-3">
        <profile-icon></profile-icon>
        <h1>Nino Tabagari</h1>
      </div>
    </div>
    <Form class="px-3 mt-4 flex flex-col gap-3">
      <div>
        <textarea
          @change="handleChange"
          v-bind="field"
          placeholder="Start create new quote"
          class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
        ></textarea>
      </div>
      <div>
        <textarea
          @change="handleChange"
          v-bind="field"
          placeholder="Start create new quote"
          class="text-mediumGray bg-transparent border w-full h-[86px]"
        ></textarea>
      </div>
    </Form>
  </div>
</template>

<script>
import { Form, Field } from 'vee-validate'

export default {
  components: {
    Form
  },

  data() {
    return {
      name_en: ''
    }
  }
}
</script>
