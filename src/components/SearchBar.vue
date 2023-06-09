<template>
  <div
    class="sm:w-1/5 w-[50px] h-full relative text-lightDark border-box hidden sm:block transition-all"
    :class="toggle.input"
  >
    <input
      @focus="openInput"
      @blur="closeInput"
      type="text"
      name="search_movie"
      class="h-full pl-10 w-full rounded-[10px] bg-transparent text-lightDark focus:outline-none"
      :placeholder="toggle.placeholder"
    />
    <img
      src="@/assets/icons/search.svg"
      alt="search"
      class="absolute top-1/2 left-3 translate-y-[-50%]"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

console.log(t('news_feed.news_feed'))

const toggle = reactive({ input: '', placeholder: t('news_feed.search') })

const openInput = () => {
  toggle.input = 'sm:w-[200%]'
  toggle.placeholder = t('news_feed.search_placeholder')
}

const closeInput = () => {
  toggle.input = 'sm:w-1/5'
  toggle.placeholder = t('news_feed.search')
}
</script>
