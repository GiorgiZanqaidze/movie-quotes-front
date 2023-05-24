<template>
  <main>
    <div
      class="container first bg-black min-w-full flex flex-col items-center justify-center"
      style="min-height: 80vh"
    >
      <h1 class="w-[281px] sm:w-[703px] sm:text-6xl text-lightGrey font-medium text-center">
        Find any quote in millions of movie lines
      </h1>
      <a href="#" class="font-normal text-white rounded mt-4 bg-darkRed px-2 py-1 sm:px-3 sm:py-2">
        Get Started
      </a>
    </div>
    <div
      class="container min-w-full min-h-screen"
      style="
        background-image: url(https://www.theworkprint.com/wp-content/uploads/2014/11/interstellar-new-poster-wallpaper.jpg);
      "
    >
      <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
        <div class="flex">
          <div class="sm:w-[53px] sm:h-[3px] bg-white sm:mt-4 sm:mr-1"></div>
          <div>
            <h1 class="sm:text-4xl w-[317px] sm:w-[761px]">
              “You have to leave somethig behind to go forward”
            </h1>
            <p class="sm:mt-2">Interstellar, 2014</p>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container min-w-full min-h-screen"
      style="
        background-image: url(https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f5b3ff20bccf694037345e0b3e90ea2b8d8a3d1c3cd2619b8b6941ca9beb0c1e._UY500_UX667_RI_TTW_.jpg);
      "
    >
      <div class="flex flex-col items-start justify-center min-h-screen text-white ml-10">
        <div class="flex">
          <div class="sm:w-[53px] sm:h-[3px] bg-white sm:mt-4 sm:mr-1"></div>
          <div>
            <h1 class="sm:text-4xl sm:w-[761px] w-[317px]">
              “I think we’re just gonna have to be secretly in love with earch other and leave it
              that”
            </h1>
            <p class="sm:mt-2">Interstellar, 2014</p>
          </div>
        </div>
      </div>
    </div>
    <!-- <TheSignUp /> -->
  </main>
</template>

<script setup>
import TheSignUp from '../components/TheSignUp.vue'

components: {
  TheSignUp
}
</script>

<style scoped>
.container {
  background-size: cover;
  background-position: center;
  /*  this is where the magic happens:  */
  background-attachment: fixed;
}
</style>
