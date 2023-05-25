<template>
  <main>
    <TheParalax />
    <!-- <TheSignUp /> -->
    <!-- <TheLogin /> -->
  </main>
</template>

<script setup>
import TheSignUp from '../components/TheSignUp.vue'
import TheLogin from '../components/TheLogin.vue'
import TheParalax from '../components/TheParalax.vue'

components: {
  TheSignUp, TheLogin
}
</script>
