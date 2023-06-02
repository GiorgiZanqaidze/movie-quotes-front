<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="font-helventica_bold relavive">
    <the-header></the-header>
    <user-navigation v-if="routePath !== '/'"></user-navigation>
    <RouterView />
  </div>
</template>

<script>
export default {
  computed: {
    routePath() {
      return this.$route.path
    }
  }
}
</script>
