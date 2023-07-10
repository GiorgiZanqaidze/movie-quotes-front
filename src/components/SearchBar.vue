<template>
  <form
    class="sm:w-1/5 w-[50px] h-full relative text-lightDark border-box hidden sm:block transition-all border-gray"
    :class="toggle.input"
    @submit.prevent="handleSubmit"
  >
    <input
      @focus="openInput"
      @blur="closeInput"
      type="text"
      name="search_movie"
      class="h-full pl-10 w-full rounded-[10px] bg-transparent text-lightDark focus:outline-none text-sm sm:text-md"
      :placeholder="toggle.placeholder"
      v-model="searchValue"
    />
    <icon-search alt="search" class="absolute top-1/2 left-3 translate-y-[-50%]"></icon-search>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useQuerySearchStore } from '@/stores/querySearch'
import IconSearch from '@/components/icons/IconSearch.vue'
import { useRoute, useRouter } from 'vue-router'

const { t } = useI18n()

const query = useQuerySearchStore()

const route = useRoute()
const router = useRouter()

const searchValue = ref(route.query.query)

const toggle = reactive({ input: '', placeholder: t('news_feed.search') })

const openInput = () => {
  toggle.input = 'sm:w-[200%] border-b-2  ml-4'
  toggle.placeholder = `${t('news_feed.enter')} @ ${t('news_feed.search_placeholder')}`
}

const closeInput = () => {
  if (!searchValue.value) {
    toggle.input = 'sm:w-1/5'
    toggle.placeholder = t('news_feed.search')
  }
}

async function handleSubmit() {
  router.push({ path: '/news-feed', query: { query: searchValue.value } })
  await query.setSearchQuery(searchValue.value)
}
</script>
