<script setup>
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()
</script>

<template>
  <section id="services" class="w-full bg-[#fafafa] dark:bg-darkBg py-20 px-4 scroll-mt-20">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-black text-black dark:text-white mb-2 relative inline-block">
        {{ t('services.title') }}
        <div class="w-full h-[5px] absolute -bottom-2 right-0 rounded-full bg-primary shadow-[0_2px_10px_rgba(255,140,0,0.3)]"></div>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 font-bold text-sm mt-8">
        {{ t('services.subtitle') }}
      </p>
    </div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      <article 
        v-for="service in tm('services.list')" 
        :key="service.id"
        class="bg-white dark:bg-darkCard p-8 rounded-[40px] shadow-xl border border-gray-50 dark:border-white/5 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
      >
        <div class="text-6xl mb-6 text-primary">
          ⚙️
        </div>
        <h3 class="text-xl font-black text-black dark:text-white mb-3 group-hover:text-primary transition-colors">
          {{ service.title }}
        </h3>
        <p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
          {{ service.description }}
        </p>
      </article>
    </div>
  </section>
</template>