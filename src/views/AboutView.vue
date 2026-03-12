<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading title="معلومات عني" subtitle="تعرف على قصتي وخبراتي" />
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div class="space-y-6">
          <div class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              من أنا؟
            </h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              أنا كريم جمال، مطور واجهات مستخدم محترف متخصص في بناء تجارب ويب تفاعلية وجذابة. أؤمن بقوة التصميم الجيد والأكواد النظيفة في خلق منتجات رقمية متميزة.
            </p>
          </div>
          
          <div class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              رحلتي
            </h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              بدأت رحلتي في عالم تطوير الويب منذ عدة سنوات، ومنذ ذلك الحين وأنا أسعى لتعلم أحدث التقنيات وأفضل الممارسات في هذا المجال.
            </p>
          </div>
        </div>
        
        <div class="space-y-6">
          <div class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              مهاراتي
            </h2>
            <div class="space-y-4">
              <div v-for="skill in skills" :key="skill.name" class="space-y-2">
                <div class="flex justify-between items-center">
                  <span class="text-gray-700 dark:text-gray-300 font-medium">{{ skill.name }}</span>
                  <span class="text-gray-500 dark:text-gray-400 text-sm">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-[#FF8C00] h-2 rounded-full transition-all duration-500"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const skills = [
  { name: 'Vue.js', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'CSS/Tailwind', level: 80 },
  { name: 'React', level: 75 },
  { name: 'Node.js', level: 70 }
]
</script>
