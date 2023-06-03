<template>
  <div class="font-helventica_bold relavive">
    <RouterView name="header" />
    <RouterView name="navigation" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>
