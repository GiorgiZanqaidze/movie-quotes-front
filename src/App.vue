<template>
  <div class="font-helventica_bold relavive">
    <RouterView name="header" />
    <RouterView name="navigation" />
    <RouterView />
  </div>
</template>

<script setup>
import { useModalStore } from '@/stores/modal.js'

const modal = useModalStore()
</script>
