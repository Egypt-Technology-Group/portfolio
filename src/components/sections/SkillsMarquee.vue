<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { skills } from '@/data/skills'

const { t, locale } = useI18n()

// Duplicate skills array for seamless infinite scroll
const duplicatedSkills = computed(() => {
  const duplicated = [...skills, ...skills, ...skills] // More duplicates for better coverage
  return duplicated.map((skill, index) => ({ ...skill, id: index }))
})
</script>

<template>
  <section id="skills" class="w-full bg-white dark:bg-[#1a1c20] py-16 overflow-hidden select-none transition-colors duration-500">
    <div class="text-center mb-12 px-4">
      <h2 class="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-2">
        {{ locale === 'ar' ? 'تقنياتي' : 'My Stack' }} <span class="text-primary">& {{ locale === 'ar' ? 'أدواتي' : 'Tools' }}</span>
      </h2>
      <p class="text-gray-500 dark:text-gray-400 font-bold text-sm">
        {{ locale === 'ar' ? 'أحدث التقنيات لضمان جودة المشاريع البرمجية' : 'Modern technologies ensuring the highest quality standards.' }}
      </p>
      <div class="w-24 h-1.5 mx-auto mt-4 rounded-full bg-primary opacity-80 shadow-lg shadow-primary/20"></div>
    </div>
    
    <!-- Marquee Container -->
    <div class="relative w-full overflow-hidden py-10 bg-gray-50/50 dark:bg-white/5 border-y border-gray-100 dark:border-white/5">
      <div class="flex animate-marquee whitespace-nowrap">
        <div 
          v-for="skill in duplicatedSkills" 
          :key="`${skill.name}-${skill.id}`" 
          class="inline-flex flex-col items-center mx-8 group"
        >
          <div 
            class="w-20 h-20 bg-white dark:bg-[#24262b] rounded-3xl flex items-center justify-center text-4xl shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-500 group-hover:scale-110 group-hover:shadow-xl group-hover:-translate-y-2" 
            :style="{ color: skill.color }"
          >
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" :viewBox="skill.viewBox" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path :d="skill.path"></path>
            </svg>
          </div>
          <span class="mt-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.33%); }
}

.animate-marquee {
  display: flex;
  width: max-content;
  animation: marquee 40s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

.text-primary { color: #FF8C00; }
.bg-primary { background-color: #FF8C00; }
</style>
