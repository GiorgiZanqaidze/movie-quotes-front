<template>
  <div class="relative">
    <div
      class="flex items-center text-mediumGray bg-transparent border w-full rounded p-2"
      :class="{
        'border-darkRed': props.errors,
        'border-green-500': props.modelValue && !props.errors,
        'border-mediumGray': !props.modelValue && !props.errors
      }"
    >
      <span class="text-xs text-mediumGray whitespace-nowrap mr-2">{{ props.placeholder }}:</span>
      <Field
        :rules="props.rules"
        class="bg-transparent w-full"
        :placeholder="props.placeholder"
        type="text"
        :name="props.name"
        :value="props.modelValue"
        @blur="$emit('update:modelValue', $event.target.value)"
      />
    </div>

    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
    <div class="absolute right-3 top-4">
      <img
        v-if="props.modelValue && !props.errors"
        src="@/assets/icons/valid_icon.svg"
        alt="valid"
      />
      <img v-if="props.errors" src="@/assets/icons/invalid_icon.svg" alt="invalid" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  errors: {
    required: false
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
  }
})
</script>
