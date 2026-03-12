<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading :title="t('navbar.projects')" subtitle="Featured projects and work" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white dark:bg-[#24262b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10 group"
        >
          <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              {{ project.description }}
            </p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'Modern online shopping platform with payment integration',
    image: 'https://picsum.photos/seed/ecommerce/400/300',
    technologies: ['Vue.js', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates',
    image: 'https://picsum.photos/seed/taskapp/400/300',
    technologies: ['React', 'Firebase', 'Tailwind']
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring with detailed analytics',
    image: 'https://picsum.photos/seed/weather/400/300',
    technologies: ['JavaScript', 'API', 'Charts.js']
  }
]
</script>
