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
      :type="showPassword ? 'password' : 'text'"
      :name="props.name"
      :value="props.modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
    />
    <div class="absolute top-1/2 translate-y-[-50%] right-2">
      <div @click="togglePassword" class="cursor-pointer">
        <img src="@/assets/icons/show_password.svg" alt="show" />
      </div>
    </div>
    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
    <div class="absolute right-6 top-3">
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
import { defineProps, ref } from 'vue'
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
  }
})

const showPassword = ref(true)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>