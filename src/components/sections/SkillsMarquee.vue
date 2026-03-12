<template>
  <section class="w-full bg-white dark:bg-[#1a1c20] py-16 overflow-hidden select-none transition-colors duration-500" dir="ltr">
    <div class="text-center mb-12" dir="rtl">
      <h2 class="text-3xl xl:text-4xl font-black text-black dark:text-white mb-2 transition-colors">
        تقنياتي <span class="keep-orange ml-2">&amp; أدواتي</span>
      </h2>
      <p class="text-black/60 dark:text-gray-400 font-bold text-sm">أحدث التقنيات لضمان جودة المشاريع البرمجية</p>
      <div class="w-24 h-[5px] mx-auto mt-4 rounded-full opacity-80" style="background-color: rgb(255, 140, 0);"></div>
    </div>
    
    <!-- Marquee Container -->
    <div class="relative w-full overflow-hidden">
      <div class="flex animate-marquee">
        <!-- First set of skills -->
        <div v-for="skill in duplicatedSkills" :key="`${skill.name}-${skill.id}`" class="mx-4 group flex flex-col items-center">
          <div class="w-20 h-20 bg-gray-50 dark:bg-[#24262b] rounded-full flex items-center justify-center text-4xl border-none dark:border-white/5 shadow-md transition-all duration-300 group-hover:scale-110" :style="{ color: skill.color }">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" :viewBox="skill.viewBox" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path :d="skill.path"></path>
            </svg>
          </div>
          <span class="mt-3 text-[12px] font-black text-black/60 dark:text-white uppercase opacity-0 group-hover:opacity-100 transition-opacity">
            {{ skill.name }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { skills } from '@/data/skills'
import SectionHeading from '@/components/ui/SectionHeading.vue'

const { t } = useI18n()

// Duplicate skills array for seamless infinite scroll
const duplicatedSkills = computed(() => {
  const duplicated = [...skills, ...skills]
  return duplicated.map((skill, index) => ({ ...skill, id: index }))
})
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

/* Pause animation on hover */
.animate-marquee:hover {
  animation-play-state: paused;
}
</style>
