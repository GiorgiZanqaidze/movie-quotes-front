<template>
  <div class="relative">
    <label v-if="label" :for="id">
      {{ label }}

      <icon-star-required
        v-if="requiredIcon"
        alt="required"
        class="inline-block"
      ></icon-star-required>
    </label>
    <Field
      :rules="props.rules"
      class="text-mediumGray border w-full rounded p-2 text-sm sm:text-md pr-10 sm:pr-16"
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
      @input="$emit('update:modelValue', $event.target.value)"
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
    <div
      class="absolute right-6 top-3"
      :class="{ 'sm:right-[2.5rem] right-[3rem]': lang, 'top-8': props.signUp }"
    >
      <icon-valid
        v-if="props.modelValue && !props.errors && !props.backEndErrors"
        alt="valid"
      ></icon-valid>
      <icon-invalid v-if="props.errors || props.backEndErrors" alt="invalid"></icon-invalid>
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
import IconValid from '@/components/icons/IconValid.vue'
import IconInvalid from '@/components/icons/IconInvalid.vue'
import IconStarRequired from '@/components/icons/IconStarRequired.vue'

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
