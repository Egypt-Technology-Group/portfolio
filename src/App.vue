<script setup>
import { watchEffect, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { RouterView } from 'vue-router'
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import { useTheme } from '@/composables/useTheme'

const { locale } = useI18n()
const { initTheme } = useTheme()

// Initialize theme on app mount
onMounted(() => {
  initTheme()
  
  // Load saved locale from localStorage
  const savedLocale = localStorage.getItem('locale')
  if (savedLocale && (savedLocale === 'ar' || savedLocale === 'en')) {
    locale.value = savedLocale
  }
  
  // Set initial HTML attributes
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = locale.value
})

// Watch for language changes and update the HTML dir attribute automatically
watchEffect(() => {
  document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.lang = locale.value
})
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