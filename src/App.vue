<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <div class="font-helventica_eng">
    <TheHeader />
    <RouterView />
  </div>
</template>
