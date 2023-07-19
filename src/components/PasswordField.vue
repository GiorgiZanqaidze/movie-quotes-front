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
      class="text-mediumGray border w-full rounded p-2 text-sm sm:text-lg"
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
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div class="absolute right-2 sm:top-4" :class="{ 'sm:top-[2.5rem] top-10': props.signUp }">
      <div @click="togglePassword" class="cursor-pointer">
        <icon-show-password v-if="showPassword" alt="show"></icon-show-password>
        <icon-visible v-else class="w-3" alt="close"></icon-visible>
      </div>
    </div>
    <ErrorMessage
      :name="props.name"
      class="text-darkRed text-[12px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-22px] left-2"
    />
    <span
      v-if="props.backEndErrors"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
      >{{ props.backEndErrors }}</span
    >
    <div class="absolute right-6 top-3" :class="{ 'top-9': props.signUp }">
      <icon-valid
        v-if="props.modelValue && !props.errors && !props.backEndErrors"
        alt="valid"
      ></icon-valid>
      <icon-invalid v-if="props.errors || props.backEndErrors" alt="invalid"></icon-invalid>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import IconStarRequired from '@/components/icons/IconStarRequired.vue'
import IconShowPassword from '@/components/icons/IconShowPassword.vue'
import IconValid from '@/components/icons/IconValid.vue'
import IconInvalid from '@/components/icons/IconInvalid.vue'
import IconVisible from '@/components/icons/IconVisible.vue'

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
