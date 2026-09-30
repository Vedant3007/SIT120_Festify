<template>
  <div
    class="app"
    :class="themeStore.currentThemeClass"
  >
    <AppHeader />

    <RouterView />

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { useThemeStore } from './stores/theme'

const themeStore = useThemeStore()
</script>