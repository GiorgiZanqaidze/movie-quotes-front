<template>
  <div>
    <div
      class="container first bg-mediumDark min-w-full flex flex-col items-center justify-center"
      style="min-height: 80vh"
    >
      <h1 class="w-[281px] sm:w-[703px] sm:text-6xl text-lightGrey font-medium text-center">
        {{ $t('landing.title') }}
      </h1>
      <a href="#" class="font-normal text-white rounded mt-4 bg-darkRed px-2 py-1 sm:px-3 sm:py-2">
        {{ $t('landing.start') }}
      </a>
    </div>
    <div
      class="container min-w-full min-h-screen"
      style="background-image: url(src/assets/images/landing_image_1.png)"
    >
      <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
        <div class="flex">
          <div class="sm:w-[53px] sm:h-[3px] bg-white sm:mt-4 sm:mr-1"></div>
          <div>
            <h1 class="sm:text-4xl w-[317px] sm:w-[761px]">“{{ $t('landing.movie_1.title') }}”</h1>
            <p class="sm:mt-2">
              {{ $t('landing.movie_1.name') }}, {{ $t('landing.movie_1.released') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container min-w-full min-h-screen"
      style="background-image: url(src/assets/images/landing_image_2.png)"
    >
      <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
        <div class="flex">
          <div class="sm:w-[53px] sm:h-[3px] bg-white sm:mt-4 sm:mr-1"></div>
          <div>
            <h1 class="sm:text-4xl sm:w-[761px] w-[317px]">“{{ $t('landing.movie_2.title') }}”</h1>
            <p class="sm:mt-2">
              {{ $t('landing.movie_2.name') }},{{ $t('landing.movie_2.released') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container min-w-full min-h-screen"
      style="background-image: url(src/assets/images/landing_image_3.png)"
    >
      <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
        <div class="flex">
          <div class="sm:w-[53px] sm:h-[3px] bg-white sm:mt-4 sm:mr-1"></div>
          <div>
            <h1 class="sm:text-4xl sm:w-[761px] w-[317px]">“{{ $t('landing.movie_3.title') }}”</h1>
            <p class="sm:mt-2">
              {{ $t('landing.movie_3.name') }},{{ $t('landing.movie_3.released') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.container {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
