<template>
  <div class="relative flex flex-col gap-1">
    <label :for="id"
      >{{ label }}
      <img
        v-if="requiredIcon"
        src="@/assets/icons/required_star_icon.svg"
        alt="required"
        class="inline-block"
      />
    </label>
    <Field
      :rules="rules"
      :id="id"
      :type="showPassword ? 'password' : 'text'"
      :name="name"
      :placeholder="placeholder"
      :class="errorClass()"
      class="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 focus:outline border-2"
      @change="changeValue"
      v-model="value"
    />
    <div class="absolute top-9 right-2">
      <div @click="togglePassword" class="cursor-pointer">
        <img src="@/assets/icons/show_password.svg" alt="show" />
      </div>
    </div>
    <div v-if="icon" class="absolute right-5 top-9">
      <img v-if="icon === 'valid'" src="@/assets/icons/valid_icon.svg" alt="valid" />
      <img v-if="icon === 'invalid'" src="@/assets/icons/invalid_icon.svg" alt="valid" />
    </div>

    <ErrorMessage
      :name="name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
export default {
  emits: ['change-input'],
  components: {
    Field,
    ErrorMessage
  },

  data() {
    return {
      value: '',
      icon: null,
      showPassword: true
    }
  },

  methods: {
    changeValue(event) {
      this.$emit('change-input', event.target)
    },
    togglePassword() {
      this.showPassword = !this.showPassword
    },

    errorClass() {
      if (!this.meta.touched && !this.errors[this.name]) {
        return 'border-gray-500 border-2'
      } else if (this.value && !this.errors[this.name]) {
        this.icon = 'valid'
        return 'border-green-500 border-2'
      } else if (this.errors[this.name]) {
        this.icon = 'invalid'
        return 'border-red-500 border-2'
      }
    }
  },

  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    },
    label: {
      type: String,
      required: false
    },
    rules: {
      type: String
    },
    requiredIcon: {
      type: String
    },
    errors: {
      type: Object
    },
    meta: {
      type: Object
    }
  }
}
</script>
