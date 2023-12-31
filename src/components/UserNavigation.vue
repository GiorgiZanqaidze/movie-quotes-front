<template>
  <div
    class="text-white absolute sm:top-[5rem] z-10 sm:z-0 top-0 sm:w-[18rem] w-[18rem] sm:height-[10rem] h-[40rem] bg-darkBlack sm:bg-transparent sm:block"
    :class="showNavBar ? 'block' : 'hidden'"
  >
    <div class="grid grid-cols-2 gap-y-0 sm:gap-y-6 h-1/3 pt-4 w-2/3 sm:w-full">
      <ProfileIcon
        :border="(route.name === 'userProfile' && 'border border-red-600') || ''"
        :authUser="true"
      />
      <div class="flex justify-center items-start flex-col w-[13rem]">
        <h3 v-if="user?.name" class="text-lg">{{ user?.name }}</h3>
        <router-link :to="{ name: 'userProfile' }" class="sm:text-sm text-sm w-full">
          {{ $t('news_feed.edit_profile') }}
        </router-link>
      </div>
      <div class="flex justify-center items-start">
        <icon-home-red
          v-if="route.name === 'newsFeed'"
          alt="movies"
          class="w-[2rem] sm:w-auto"
        ></icon-home-red>
        <icon-home-white v-else alt="movies" class="w-[2rem] sm:w-auto"></icon-home-white>
      </div>
      <div>
        <router-link :to="{ name: 'newsFeed' }">
          <h3>{{ $t('news_feed.news_feed') }}</h3>
        </router-link>
      </div>
      <div class="flex justify-center items-start">
        <icon-movies-red
          v-if="route.name === 'moviesList'"
          alt="movies"
          class="w-[2rem] sm:w-auto"
        ></icon-movies-red>
        <icon-movies-white v-else alt="movies" class="w-[2rem] sm:w-auto"></icon-movies-white>
      </div>
      <div class="w-[10rem]">
        <router-link :to="{ name: 'moviesList' }">
          <h3>{{ $t('news_feed.movies_list') }}</h3>
        </router-link>
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
const LanguageDropdown = defineAsyncComponent(() => import('@/components/LanguageDropdown.vue'))
const LogOutButton = defineAsyncComponent(() => import('@/components/LogOutButton.vue'))
const ProfileIcon = defineAsyncComponent(() => import('@/components/ProfileIcon.vue'))
import IconHomeRed from '@/components/icons/IconHomeRed.vue'
import IconHomeWhite from '@/components/icons/IconHomeWhite.vue'
import IconMoviesWhite from '@/components/icons/IconMoviesWhite.vue'
import IconMoviesRed from '@/components/icons/IconMoviesRed.vue'

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

const showNavBar = computed(() => modal.isVisible.name === 'userNavigation')
</script>
