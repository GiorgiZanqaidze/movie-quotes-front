<template>
  <div class="relative">
    <Field
      :rules="rules"
      class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2 text-sm sm:text-md pr-10"
      :placeholder="props.placeholder"
      :class="{
        'border-darkRed': props.errors,
        'border-green-500': props.modelValue && !props.errors,
        'border-mediumGray': !props.modelValue && !props.errors
      }"
      :name="name"
      as="textarea"
      :value="props.modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
    />
    <span v-if="props.edit" class="text-xs relative bottom-8 left-2 text-mediumGray"
      >{{ props.placeholder }}:</span
    >
    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-0.5rem] sm:bottom-[-15px] left-2"
    />
    <div class="absolute right-4 top-9" :class="{ 'right-14': lang }">
      <icon-valid v-if="props.modelValue && !props.errors" alt="valid"></icon-valid>
      <icon-valid v-if="props.errors" alt="invalid"></icon-valid>
    </div>
    <div
      v-if="lang"
      class="translate-y-[-50%] text-mediumGray absolute right-3 top-4 sm:text-md text-sm"
    >
      <h1>{{ lang }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import IconValid from '@/components/icons/IconValid.vue'

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
  edit: {
    required: false
  },
  rules: {
    type: String
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
