<template>
  <div
    @click="modal.toggleModal('null', false)"
    v-if="modal.isVisible.condition"
    class="fixed top-[-10px] left-[-10px] right-[-10px] bottom-[-10px]"
    style="background: rgba(0, 0, 0, 0.54); backdrop-filter: blur(3px)"
  ></div>
  <div
    class="text-white absolute sm:top-[150px] z-[30] top-0 sm:w-[300px] w-[340px] sm:height-[200px] h-[658px] bg-darkBlack sm:bg-transparent sm:block"
    :class="showNavBar ? 'block' : 'hidden'"
  >
    <div class="grid grid-cols-2 gap-y-0 sm:gap-y-6 h-1/3 pt-4 w-2/3 sm:w-full">
      <ProfileIcon :path="imageUrl" />
      <div class="flex justify-center items-start flex-col w-[200px]">
        <h3 v-if="user.name" class="text-[20px]">{{ user.name }}</h3>
        <a href="#" class="sm:text-sm text-[14px]">{{ $t('news_feed.edit_profile') }}</a>
      </div>
      <div class="flex justify-center items-start">
        <a href="/news-feed">
          <img :src="homeIcon" alt="home" class="w-[24px] sm:w-auto" />
        </a>
      </div>
      <div>
        <h3>{{ $t('news_feed.news_feed') }}</h3>
      </div>
      <div class="flex justify-center items-start">
        <a href="/movies-list">
          <img :src="moviesIcon" alt="movies" class="w-[24px] sm:w-auto" />
        </a>
      </div>
      <div class="w-[200px]">
        <h3>{{ $t('news_feed.movies_list') }}</h3>
      </div>
    </div>
    <div class="sm:hidden flex gap-3 justify-center items-center w-2/3">
      <LanguageDropdown />
      <LogOutButton />
    </div>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue'
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

const user = computed(() => userData.data)

const imageUrl = computed(() => `${imagePath}${userData.data.image}`)

const showNavBar = computed(() => modal.isVisible.name === 'userNavigation')

const homeIcon = computed(() =>
  route.name === 'newsFeed' ? 'src/assets/icons/home_red.svg' : 'src/assets/icons/home_white.svg'
)

const moviesIcon = computed(() =>
  route.name !== 'newsFeed'
    ? 'src/assets/icons/movies_red.svg'
    : 'src/assets/icons/movies_white.svg'
)
</script>
