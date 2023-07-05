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
      :type="showPassword ? 'password' : 'text'"
      :name="props.name"
      :value="props.modelValue"
      @blur="$emit('update:modelValue', $event.target.value)"
    />
    <div class="absolute top-1/2 translate-y-[-50%] right-2" :class="{ 'top-10': props.signUp }">
      <div @click="togglePassword" class="cursor-pointer">
        <img src="@/assets/icons/show_password.svg" alt="show" />
      </div>
    </div>
    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[12px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
    <span
      v-if="props.backEndErrors"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
      >{{ props.backEndErrors }}</span
    >
    <div class="absolute right-6 top-3" :class="{ 'top-9': props.signUp }">
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

const showPassword = ref(true)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>
