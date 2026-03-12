<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'ar' ? 'en' : 'ar'
}
</script>

<template>
  <nav class="fixed top-0 w-full z-[200] h-[69px] flex items-center px-4 bg-white dark:bg-darkBg shadow-sm transition-all duration-300">
    <div class="container mx-auto flex items-center justify-between w-full">
      <a href="/" class="text-2xl font-black text-gray-900 dark:text-white">
        KARIM<span class="text-primary">.</span>
      </a>

      <ul class="hidden lg:flex items-center gap-x-10 h-full list-none p-0">
        <li><a href="#home" class="text-[17px] font-black text-gray-700 dark:text-white/80 hover:text-primary transition-colors">{{ t('nav.home') }}</a></li>
        <li><a href="#services" class="text-[17px] font-black text-gray-700 dark:text-white/80 hover:text-primary transition-colors">{{ t('nav.services') }}</a></li>
        <li><a href="#about" class="text-[17px] font-black text-gray-700 dark:text-white/80 hover:text-primary transition-colors">{{ t('nav.about') }}</a></li>
        <li><a href="#work" class="text-[17px] font-black text-gray-700 dark:text-white/80 hover:text-primary transition-colors">{{ t('nav.work') }}</a></li>
      </ul>

      <div class="flex items-center gap-3">
        <a href="#contact" class="hidden md:block px-5 py-1.5 rounded-full font-bold text-sm bg-primary text-white">
          {{ t('nav.contact') }}
        </a>
        <button @click="toggleLanguage" class="w-9 h-9 rounded-full border border-primary/30 text-primary font-bold text-[12px] hover:bg-primary/10 transition-colors">
          {{ locale === 'ar' ? 'EN' : 'AR' }}
        </button>
      </div>
    </div>
  </nav>
</template>