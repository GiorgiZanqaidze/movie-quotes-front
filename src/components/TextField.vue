<template>
  <div class="relative">
    <Field
      :rules="props.rules"
      class="text-mediumGray border w-full rounded p-2"
      :placeholder="props.placeholder"
      :class="{
        'border-darkRed': props.errors,
        'border-green-500': props.modelValue && !props.errors,
        'border-mediumGray': !props.modelValue && !props.errors,
        'sm:bg-lightDark bg-transparent': props.updateUser,
        'bg-transparent': !props.updateUser
      }"
      type="text"
      :name="props.name"
      :value="props.modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
    <div class="absolute right-3 top-4" :class="{ 'right-14': lang }">
      <img
        v-if="props.modelValue && !props.errors"
        src="@/assets/icons/valid_icon.svg"
        alt="valid"
      />
      <img v-if="props.errors" src="@/assets/icons/invalid_icon.svg" alt="invalid" />
    </div>
    <div v-if="lang" class="translate-y-[-50%] text-mediumGray absolute right-3 top-1/2">
      <h1>{{ lang }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

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
  placeholder: {
    type: String,
    required: true
  },
  rules: {
    type: String,
    required: false
  },
  updateUser: {
    type: Boolean
  },
  language: {
    type: String
  }
})

const lang = computed(() => {
  if (props.language === 'en') {
    return 'ENG'
  } else if (props.language === 'ka') {
    return 'ქარ'
  } else {
    return false
  }
})
</script>
