<template>
  <select
    v-model="state.currentLocale"
    class="text-white bg-gray text-sm sm:text-lg w-12 sm:w-14"
    @change="changeLocale(state.currentLocale)"
  >
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
      :selected="state.currentLocale === locale"
    >
      {{ $t(`landing.${locale}`) }}
    </option>
  </select>
</template>

<script setup>
import { setLocale } from '@vee-validate/i18n'
import { useI18n } from 'vue-i18n'
import { reactive, onMounted } from 'vue'
const { locale } = useI18n()

const state = reactive({
  currentLocale: localStorage.getItem('locale') || 'en'
})

const changeLocale = (newLocale) => {
  locale.value = newLocale
  localStorage.setItem('locale', newLocale)
  setLocale(newLocale)
  state.currentLocale = newLocale
}
</script>
