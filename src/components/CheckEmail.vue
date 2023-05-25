<template>
  <div
    class="rounded fixed top-1/2 left-1/2 bg-darkGray z-50 w-[350px] sm:w-[601px] h-[400px] translate-x-[-50%] translate-y-[-50%] font-helventica_light font-medium py-6 px-2"
  >
    <header class="flex flex-col items-center მყ-6">
      <img src="@/assets/icons/sent_email.svg" alt="sent email" />
      <h1 class="text-white sm:mt-8 sm:text-3xl mb-2">{{ $t('modals.new_password.title') }}</h1>
      <span class="text-mediumGray text-sm my-4 text-center max-w-[360px]">{{
        $t('modals.new_password.welcome')
      }}</span>
    </header>
  </div>
</template>

<script>
export default {}
</script>
