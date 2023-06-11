<template>
  <div class="relative">
    <Field
      rules="required|min:3"
      class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
      :class="{
        'border-darkRed': errors.quote_en,
        'border-green-500': state.quote_en && !errors.quote_en,
        'border-mediumGray': !state.quote_en && !errors.quote_en
      }"
      name="quote_en"
      as="textarea"
      placeholder="Start create new quote"
      v-model="state.quote_en"
      @change="handleChange"
    ></Field>
    <ErrorMessage
      name="quote_en"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-15px] left-2"
    />
    <div class="absolute right-3 top-9">
      <img
        v-if="state.quote_en && !errors.quote_en"
        src="@/assets/icons/valid_icon.svg"
        alt="valid"
      />
      <img v-if="errors.quote_en" src="@/assets/icons/invalid_icon.svg" alt="invalid" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
