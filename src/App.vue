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
import getUser from '@/services/getUser'
import { userStore } from '@/stores/user.js'

const userData = userStore()
const route = useRoute()
const router = useRouter()
</script>
