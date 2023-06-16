<template>
  <div class="font-helventica_bold relavive">
    <RouterView name="header" />
    <RouterView name="navigation" />
    <RouterView />
    <TheModal />
  </div>
</template>

<script setup>
import TheModal from '@/components/TheModal.vue'
</script>

<style>
body::-webkit-scrollbar {
  width: 10px;
}

body::-webkit-scrollbar-track {
  background: #0d0b14;
}

body::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: #fff;
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(18, 16, 26) 0%,
    rgb(121, 111, 161) 20%,
    white 50%,
    rgb(121, 111, 161) 80%,
    rgb(18, 16, 26) 100%
  );
}
</style>
