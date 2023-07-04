<template>
  <div class="relative">
    <label v-if="label" :for="id">
      {{ label }}
      <img
        v-if="requiredIcon"
        src="@/assets/icons/required_star_icon.svg"
        alt="required"
        class="inline-block"
      />
    </label>
    <Field
      :rules="props.rules"
      class="text-mediumGray border w-full rounded p-2 text-sm sm:text-md"
      :placeholder="props.placeholder"
      :class="{
        'border-darkRed': props.errors || props.backEndErrors,
        'border-green-500': props.modelValue && !props.errors && !props.backEndErrors,
        'border-mediumGray': !props.modelValue && !props.errors,
        'sm:bg-lightDark bg-transparent': props.updateUser,
        'bg-lightDark': props.signUp,
        'bg-transparent': !props.updateUser && !props.signUp
      }"
      type="text"
      :name="props.name"
      :value="props.modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
    />
    <ErrorMessage
      v-if="!backEndErrors"
      :name="props.name"
      class="text-darkRed text-[12px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
    <span
      v-if="props.backEndErrors"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
      >{{ props.backEndErrors }}</span
    >
    <div class="absolute right-3 top-4" :class="{ 'right-14': lang, 'top-8': props.signUp }">
      <img
        v-if="props.modelValue && !props.errors && !props.backEndErrors"
        src="@/assets/icons/valid_icon.svg"
        alt="valid"
      />

      <img
        v-if="props.errors || props.backEndErrors"
        src="@/assets/icons/invalid_icon.svg"
        alt="invalid"
      />
    </div>
    <div
      v-if="lang"
      class="translate-y-[-50%] text-mediumGray absolute right-3 top-1/2 sm:text-md text-sm"
    >
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
  },
  label: {
    type: String
  },
  requiredIcon: {
    type: String
  },
  id: {
    type: String
  },
  signUp: {
    type: Boolean
  },
  backEndErrors: {
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
