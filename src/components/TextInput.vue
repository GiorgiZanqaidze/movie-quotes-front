<template>
  <div class="relative flex flex-col gap-1">
    <label :for="id">
      {{ label }}
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
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :class="errorClass"
      class="font-helventica_light text-sm h-[38px] rounded text-darkGray py-2 px-2 focus:outline border-2"
      @change="changeValue"
      v-model="value"
    />
    <div v-if="icon" class="absolute right-3 top-9">
      <img v-if="icon === 'valid'" src="@/assets/icons/valid_icon.svg" alt="valid" />
      <img v-if="icon === 'invalid'" src="@/assets/icons/invalid_icon.svg" alt="invalid" />
    </div>
    <ErrorMessage
      v-if="!backEndErrors"
      :name="name"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
    />
    <span
      v-if="backEndErrors"
      class="text-darkRed text-[14px] sm:text-sm absolute bottom-[-22px] sm:bottom-[-25px] left-2"
      >{{ backEndErrors }}</span
    >
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { Field, ErrorMessage } from 'vee-validate'
import { computed } from 'vue'
export default {
  components: {
    Field,
    ErrorMessage
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
    },
    backEndErrors: {
      type: String
    }
  },

  setup(props, { emit }) {
    const value = ref('')
    const icon = ref(null)

    const changeValue = (event) => {
      emit('change-input', event.target)
    }

    const errorClass = computed(() => {
      if (!props.meta.touched && !props.errors[props.name]) {
        return 'border-gray-500 border-2'
      } else if (value.value && !props.errors[props.name]) {
        return 'border-green-500 border-2'
      } else if (props.errors[props.name] || props.backEndErrors) {
        return 'border-red-500 border-2'
      } else {
        return ''
      }
    })

    watch(
      () => props.meta.touched,
      () => {
        if (!props.meta.touched && !props.errors[props.name]) {
          icon.value = null
        }
      }
    )

    return {
      value,
      icon,
      changeValue,
      errorClass
    }
  }
}
</script>
