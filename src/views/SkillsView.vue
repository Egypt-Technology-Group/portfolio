<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading :title="t('skills.title')" :subtitle="t('skills.subtitle')" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        <div 
          v-for="skill in skills" 
          :key="skill.name"
          class="bg-white dark:bg-[#24262b] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10 text-center group"
        >
          <div class="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {{ skill.icon }}
          </div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            {{ skill.name }}
          </h3>
          <span class="inline-block mt-2 px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm">
            {{ skill.category }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { skills } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()
</script>
