<template>
  <header class="flex px-2 sm:p-8 justify-between items-center bg-gray h-[38px]">
    <h1 class="text-lightGrey text-sm sm:text-lg">{{ $t('landing.quotes') }}</h1>
    <div class="flex sm:gap-5 gap-3">
      <div class="flex items-center">
        <select v-model="$i18n.locale" class="text-white bg-gray text-sm sm:text-lg">
          <option
            v-for="locale in $i18n.availableLocales"
            :key="`locale-${locale}`"
            :value="locale"
          >
            {{ $t(`landing.${locale}`) }}
          </option>
        </select>
      </div>
      <button
        class="text-white text-sm sm:text-lg sm:py-[3px] px-2 py-1 sm:px-3 rounded cursor-default"
      >
        <img
          src="@/assets/icons/notification.svg"
          alt="notification"
          class="cursor-pointer w-[30px]"
        />
      </button>
      <button
        class="text-white border text-sm sm:text-lg sm:py-[3px] px-2 sm:px-3 py-1 rounded bg-transparent"
      >
        Log Out
      </button>
    </div>
  </header>
</template>

<script>
import { useModalStore } from '@/stores/modal'
import { setLocale } from '@vee-validate/i18n'
export default {
  setup() {
    const modal = useModalStore()
    return { modal }
  },

  methods: {
    setLocale
  }
}
</script>
