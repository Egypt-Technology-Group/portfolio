<script setup>
import { watchEffect, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import AppNavbar from './components/layout/AppNavbar.vue'
import AppFooter from './components/layout/AppFooter.vue'
import { themeStore } from './stores/theme'

const { locale } = useI18n()

// Initialize theme on app mount
onMounted(() => {
  themeStore.initTheme()
  
  // Load saved locale from localStorage
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && (savedLocale === 'ar' || savedLocale === 'en')) {
    locale.value = savedLocale
  }
  
  // Set initial HTML attributes
  updateHtmlAttributes()
})

// Watch for language changes and update the HTML attributes automatically
watchEffect(() => {
  updateHtmlAttributes()
})

function updateHtmlAttributes() {
  const dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.dir = dir
  document.documentElement.lang = locale.value
  localStorage.setItem('locale', locale.value)
}
</script>

<template>
  <div class="min-h-screen flex flex-col transition-colors duration-500 bg-[#FAF9F6] dark:bg-[#1a1c20]">
    <AppNavbar />
    <main class="flex-grow relative">
      <RouterView />
    </main>
    <AppFooter />
  </div>
</template>

<style>
/* Smooth transitions for theme toggle */
.transition-colors {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
}
</style>
