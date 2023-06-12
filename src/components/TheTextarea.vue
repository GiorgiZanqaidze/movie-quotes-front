<template>
  <div class="relative">
    <Field
      rules="required|min:3"
      class="text-mediumGray bg-transparent border w-full h-[86px] rounded p-2"
      :placeholder="placeholder"
      :class="{
        'border-darkRed': errors,
        'border-green-500': modelValue && !errors,
        'border-mediumGray': !modelValue && !errors
      }"
      :name="name"
      as="textarea"
      :value="modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage
      :name="name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-15px] left-2"
    />
    <div class="absolute right-3 top-9">
      <img v-if="modelValue && !errors" src="@/assets/icons/valid_icon.svg" alt="valid" />
      <img v-if="errors" src="@/assets/icons/invalid_icon.svg" alt="invalid" />
    </div>
  </div>
</template>

<script setup>
import { computed, defineProps, watch } from 'vue'
import { Form, Field, ErrorMessage, useField } from 'vee-validate'

defineProps({
  name: {
    type: String,
    required: true
  },
  errors: {
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: true
  }
})
</script>
