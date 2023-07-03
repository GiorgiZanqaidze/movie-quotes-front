<template>
  <div
    @click="modal.toggleModal('null', false)"
    v-if="modal.isVisible.condition"
    class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px]"
    style="background: rgba(0, 0, 0, 0.54); backdrop-filter: blur(3px)"
  ></div>
  <div
    class="text-white absolute sm:top-[150px] z-10 top-0 sm:w-[300px] w-[340px] sm:height-[200px] h-[658px] bg-darkBlack sm:bg-transparent sm:block"
    :class="showNavBar ? 'block' : 'hidden'"
  >
    <div class="grid grid-cols-2 gap-y-0 sm:gap-y-6 h-1/3 pt-4 w-2/3 sm:w-full">
      <ProfileIcon :border="state.border" :path="imageUrl" />
      <div class="flex justify-center items-start flex-col w-[250px]">
        <h3 v-if="user.name" class="text-[20px]">{{ user.name }}</h3>
        <a href="/user-profile" class="sm:text-sm text-[14px] w-full">{{
          $t('news_feed.edit_profile')
        }}</a>
      </div>
      <div class="flex justify-center items-start">
        <img
          v-if="route.name === 'newsFeed'"
          src="@/assets/icons/home_red.svg"
          alt="movies"
          class="w-[24px] sm:w-auto"
        />
        <img v-else src="@/assets/icons/home_white.svg" alt="movies" class="w-[24px] sm:w-auto" />
      </div>
      <div>
        <a href="/news-feed">
          <h3>{{ $t('news_feed.news_feed') }}</h3>
        </a>
      </div>
      <div class="flex justify-center items-start">
        <img
          v-if="route.name === 'moviesList'"
          src="@/assets/icons/movies_red.svg"
          alt="movies"
          class="w-[24px] sm:w-auto"
        />
        <img v-else src="@/assets/icons/movies_white.svg" alt="movies" class="w-[24px] sm:w-auto" />
      </div>
      <div class="w-[200px]">
        <a href="/movies-list">
          <h3>{{ $t('news_feed.movies_list') }}</h3>
        </a>
      </div>
    </div>
    <div class="sm:hidden flex gap-3 justify-center items-center w-2/3">
      <LanguageDropdown />
      <LogOutButton />
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, reactive, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { userStore } from '@/stores/user.js'
import { useModalStore } from '@/stores/modal.js'
import imagePath from '@/config/images/path'
const LanguageDropdown = defineAsyncComponent(() => import('@/components/LanguageDropdown.vue'))
const LogOutButton = defineAsyncComponent(() => import('@/components/LogOutButton.vue'))
const ProfileIcon = defineAsyncComponent(() => import('@/components/ProfileIcon.vue'))

const userData = userStore()

const modal = useModalStore()

const route = useRoute()

const state = reactive({
  border: ''
})

onMounted(() => {
  if (route.name === 'userProfile') {
    state.border = 'border border-red-600'
  }
})

const user = computed(() => userData.data)

const imageUrl = computed(() => `${imagePath}${userData.data.image}`)

const showNavBar = computed(() => modal.isVisible.name === 'userNavigation')

console.log(modal.isVisible.condition)
</script>
