<template>
  <main>
    <div>
      <div
        class="container first bg-mediumDark min-w-full flex flex-col items-center justify-center"
        style="min-height: 80vh"
      >
        <h1
          class="w-[15rem] sm:w-[50rem] text-xl sm:text-6xl text-lightGrey font-medium text-center"
        >
          {{ $t('landing.title') }}
        </h1>
        <button
          @click="modal.toggleModal('logIn', true)"
          class="font-normal text-white rounded mt-4 bg-darkRed px-2 py-1 sm:px-3 sm:py-2"
        >
          {{ $t('landing.start') }}
        </button>
      </div>
      <div class="container min-w-full min-h-screen bg-interstelar">
        <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
          <div class="flex">
            <div
              class="sm:w-[3rem] h-[2px] w-[1.8rem] sm:h-[3px] bg-white sm:mt-4 sm:mr-1 translate-y-[1rem] translate-x-[-0.5rem]"
            ></div>
            <div>
              <h1 class="sm:text-4xl sm:w-[50rem]">“{{ $t('landing.movie_1.title') }}”</h1>
              <p class="sm:mt-2 sm:text-xl text-sm text-lightGray">
                {{ $t('landing.movie_1.name') }}, {{ $t('landing.movie_1.released') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container min-w-full min-h-screen bg-the_royal">
        <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
          <div class="flex">
            <div
              class="sm:w-[3rem] h-[2px] w-[1.8rem] sm:h-[3px] bg-white sm:mt-4 sm:mr-1 translate-y-[1rem] translate-x-[-0.5rem]"
            ></div>
            <div>
              <h1 class="sm:text-4xl sm:w-[50rem]">“{{ $t('landing.movie_2.title') }}”</h1>
              <p class="sm:mt-2 sm:text-xl text-sm text-lightGray">
                {{ $t('landing.movie_2.name') }},{{ $t('landing.movie_2.released') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container min-w-full min-h-screen bg-lord_of_rings">
        <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
          <div class="flex">
            <div
              class="sm:w-[3rem] h-[2px] w-[1.8rem] sm:h-[3px] bg-white sm:mt-4 sm:mr-1 translate-y-[1rem] translate-x-[-0.5rem]"
            ></div>
            <div>
              <h1 class="sm:text-4xl sm:w-[50rem]">“{{ $t('landing.movie_3.title') }}”</h1>
              <p class="sm:mt-2 sm:text-xl text-sm text-lightGray">
                {{ $t('landing.movie_3.name') }},{{ $t('landing.movie_3.released') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { useModalStore } from '@/stores/modal'
import verifyUser from '@/services/verifyUser.js'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const modal = useModalStore()
const route = useRoute()

onMounted(async () => {
  const passwordToken = route.query.reset_password_token
  if (passwordToken) {
    modal.toggleModal('newPassword', true)
  }

  const verifyToken = route.query.email_verify_token

  if (verifyToken) {
    modal.toggleModal('activatedEccount', true)

    const response = await verifyUser(verifyToken)

    if (response.response.status >= 400) {
      modal.toggleModal('linkExpired', true)
    }

    console.log(response.response.status)
  }
})
</script>

<style scoped>
.container {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
