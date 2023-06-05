<template>
  <div class="font-helventica_bold relavive">
    <RouterView name="header" />
    <RouterView name="navigation" />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onMounted, inject, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { userStore } from '@/stores/user.js'

const user = userStore()
const route = useRoute()
const router = useRouter()
</script>
