<template>
  <select
    v-model="currentLocale"
    class="text-white bg-gray text-sm sm:text-lg w-12"
    @change="changeLocale(currentLocale)"
  >
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
      :selected="currentLocale === locale"
    >
      {{ $t(`landing.${locale}`) }}
    </option>
  </select>
</template>

<script>
import { setLocale } from '@vee-validate/i18n'

export default {
  data() {
    return {
      currentLocale: 'en',
      locales: ['en', 'ka']
    }
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale
      setLocale(locale)
      this.currentLocale = locale
      localStorage.setItem('locale', locale)
    }
  },

  created() {
    this.currentLocale = localStorage.getItem('locale')
    this.$i18n.locale = localStorage.getItem('locale')
    setLocale(localStorage.getItem('locale'))
  }
}
</script>
