<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading :title="t('services.title')" :subtitle="t('services.subtitle')" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div 
          v-for="service in services" 
          :key="service.id"
          class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10"
        >
          <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()

const services = computed(() => t('services.list', { returnObjects: true }))
</script>
