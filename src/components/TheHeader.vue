<template>
  <header class="flex mx-2 sm:m-5 justify-between items-center bg-black h-[38px]">
    <h1 class="text-lightGrey text-sm sm:text-lg">{{ $t('landing.quotes') }}</h1>
    <div class="flex sm:gap-7 gap-3">
      <div class="flex items-center">
        <select v-model="$i18n.locale" class="text-white bg-black text-sm sm:text-lg">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ $t(`landing.${locale}`) }}
          </option>
        </select>
      </div>
      <div>
        <a
          @click="toggleModal('signUp', true)"
          href="#"
          class="text-white text-sm sm:text-lg sm:py-[7px] px-2 py-1 sm:px-3 rounded bg-darkRed"
          >{{ $t('landing.sign_up') }}
        </a>
      </div>
      <div>
        <a
          @click="toggleModal('logIn', true)"
          href="#"
          class="text-white border text-sm sm:text-lg sm:py-[7px] px-2 sm:px-3 py-1 rounded bg-transparent"
          >{{ $t('landing.log_in') }}</a
        >
      </div>
    </div>
  </header>
</template>

<script>
import { useModalStore } from '@/stores/modal'
export default {
  setup() {
    const modal = useModalStore()
    return { modal }
  },

  methods: {
    toggleModal(signUp, show) {
      this.modal.toggleModal(signUp, show)
    }
  }
}
</script>
