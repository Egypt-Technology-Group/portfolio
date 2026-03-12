<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <section id="home" class="min-h-screen relative flex flex-col-reverse xl:flex-row items-center justify-center pt-20 px-4 overflow-hidden">
    <div class="container mx-auto z-20 relative flex flex-col items-center xl:items-start text-center xl:text-start flex-1">
      <div class="mb-2">
        <h2 class="text-lg xl:text-2xl text-gray-600 dark:text-gray-400 mb-1 font-bold">
          {{ t('hero.greeting') }}
        </h2>
        <h1 class="text-4xl xl:text-6xl font-black text-gray-800 dark:text-white leading-tight">
          {{ t('hero.namePrefix') }} <span class="text-primary">{{ t('hero.name') }}</span>
        </h1>
      </div>
      
      <h3 class="text-xl xl:text-3xl font-bold text-primary mb-4">
        {{ t('hero.subtitle') }}
      </h3>
      
      <p class="max-w-xl mb-10 text-gray-600 dark:text-gray-400 font-bold text-sm xl:text-lg leading-relaxed">
        {{ t('hero.description') }}
      </p>

      <div class="flex gap-4">
        <a href="#contact" class="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:-translate-y-1 transition-transform">
          {{ t('hero.ctaWork') }}
        </a>
        <a href="#" class="px-6 py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-colors">
          {{ t('hero.ctaResume') }}
        </a>
      </div>
    </div>

    <div class="relative z-10 w-[240px] h-[240px] md:w-[400px] md:h-[400px] flex justify-center items-center mt-10 xl:mt-0">
      <div class="absolute inset-0 bg-primary/20 blur-[80px] rounded-full z-0"></div>
      <div class="relative w-full h-full bg-gray-200 dark:bg-darkCard rounded-full border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
         <span class="text-gray-400">Image Here</span>
      </div>
    </div>
  </section>
</template>