<template>
  <div class="relative">
    <div
      class="flex flex-col sm:flex-row items-start text-mediumGray bg-transparent border w-full rounded p-2"
      :class="{
        'border-darkRed': props.errors,
        'border-green-500': props.modelValue && !props.errors,
        'border-mediumGray': !props.modelValue && !props.errors
      }"
    >
      <span class="text-xs text-mediumGray whitespace-nowrap mr-2 mt-3"
        >{{ props.placeholder }}:</span
      >
      <Field
        :rules="props.rules"
        class="text-mediumGray bg-transparent w-full h-[86px] rounded p-2"
        :placeholder="props.placeholder"
        :name="name"
        as="textarea"
        :value="props.modelValue"
        @blur="$emit('update:modelValue', $event.target.value)"
      />
    </div>
    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-15px] left-2"
    />
    <div class="absolute right-4 top-9" :class="{ 'right-14': lang }">
      <icon-valid v-if="props.modelValue && !props.errors" alt="valid"></icon-valid>
      <icon-invalid v-if="props.errors" alt="invalid"></icon-invalid>
    </div>
    <div
      v-if="lang"
      class="translate-y-[-50%] text-mediumGray absolute right-3 top-6 sm:text-md text-sm"
    >
      <h1>{{ lang }}</h1>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import IconValid from '@/components/icons/IconValid.vue'
import IconInvalid from '@/components/icons/IconInvalid.vue'

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
