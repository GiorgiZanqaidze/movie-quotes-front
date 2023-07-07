<template>
  <div
    class="w-full h-[86px] relative text-[20px] border rounded"
    :class="{
      'border-darkRed': props.errors,
      'border-green-500': props.modelValue && !props.errors,
      'border-mediumGray': !modelValue && !errors
    }"
  >
    <Field
      rules="required"
      name="movie"
      :value="modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
      id="movie"
      as="select"
      class="w-full bg-black h-full rounded overflow-hidden sm:pl-10 pl-16 focus:outline-none text-sm sm:text-md"
    >
      <option value="" disabled>
        {{ $t('news_feed.write_quote.choose_movie') }}
      </option>
      <option
        v-for="(movie, index) in props.movies"
        :key="index"
        :value="movie.id"
        class="text-white"
      >
        {{ movie.title[$i18n.locale] }}
      </option>
    </Field>

    <icon-choose-movie
      alt="genres"
      class="absolute top-1/2 translate-y-[-50%] sm:left-2 left-5"
    ></icon-choose-movie>
    <ErrorMessage
      :name="name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-1.3rem] left-2 z-40"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import IconChooseMovie from '@/components/icons/IconChooseMovie.vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  errors: {
    required: true
  },
  modelValue: {
    required: true
  },
  movies: {
    type: Object,
    required: true
  }
})
</script>
