<template>
  <div :class="parentClass" class="relative">
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
      v-slot="{ errors }"
      :rules="rules"
      :id="id"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :class="InputClass"
    />
    <ErrorMessage :name="name" class="text-darkRed text-sm absolute bottom-[-25px] left-2" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
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
    InputClass: {
      type: String
    },
    parentClass: {
      type: String
    },
    requiredIcon: {
      type: String
    }
  }
}
</script>
