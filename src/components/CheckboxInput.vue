<template>
  <div>
    <div class="flex gap-2 items-center">
      <input :id="id" type="checkbox" :name="name" @change="changeValue" :value="value" />
      <label :for="id" class="cursor-pointer">{{ label }}</label>
    </div>
  </div>
</template>

<script>
export default {
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
    },
    value: {
      type: Boolean
    }
  },
  setup(props, { emit }) {
    function changeValue(event) {
      emit('change-input', event.target)
    }
    return { changeValue }
  }
}
</script>
