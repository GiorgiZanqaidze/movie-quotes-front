<template>
  <div>
    <div class="flex gap-2 items-center">
      <input :id="id" :type="type" :name="name" />
      <label :for="id">{{ label }}</label>
    </div>
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

  methods: {
    changeValue(event) {
      this.$emit('change-input', event.target)
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
    label: {
      type: String,
      required: false
    }
  }
}
</script>
