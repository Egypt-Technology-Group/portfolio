<template>
  <section id="about" class="min-h-screen bg-gray-50 dark:bg-[#1a1c20] py-16 xl:py-28 overflow-hidden transition-all" dir="rtl">
    <div class="w-full max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col xl:flex-row items-start gap-12 relative z-10">
      <div class="flex-1 w-full xl:sticky xl:top-28 text-center xl:text-right" style="opacity: 1; transform: none;">
        <h2 class="text-3xl xl:text-5xl font-black text-slate-900 dark:text-white mb-8">
          معلومات <span class="keep-orange" style="color: rgb(255, 140, 0);">عني</span>
        </h2>
        <div class="relative w-full max-w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-white dark:bg-[#1c1d25] shadow-2xl mx-auto xl:mx-0 group">
          <img alt="كريم جمال" decoding="async" class="object-contain p-2 transition-transform duration-500 group-hover:scale-105" src="@/assets/karimgamal.avif" style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
        </div>
      </div>
      <div class="flex-[1.5] w-full mt-10 xl:mt-0" style="opacity: 1; transform: none;">
        <div class="relative flex p-1 bg-slate-200/50 dark:bg-white/5 rounded-[1.5rem] mb-10 w-full justify-between items-center border border-gray-100 dark:border-white/5 shadow-inner">
          <button v-for="tab in tabs" :key="tab.id" @click="setActiveTab(tab.id)" :class="['tab-button relative px-8 py-3 font-bold text-gray-600 dark:text-gray-300 transition-all duration-300 hover:text-[#FF8C00]', { 'text-white': activeTab === tab.id }]" class="relative z-20">
            <div v-if="activeTab === tab.id" class="absolute inset-0 bg-[#FF8C00] rounded-2xl shadow-lg shadow-orange-500/30" style="transform: none; transform-origin: 50% 50% 0px; opacity: 1;"></div>
            <span class="relative z-20">{{ tab.label }}</span>
          </button>
        </div>
        <div class="min-h-[500px]">
          <!-- Info Tab Content -->
          <div v-if="activeTab === 'info'" style="opacity: 1; transform: none;">
            <div class="space-y-6">
              <p class="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 font-medium bg-white dark:bg-[#1c1d25] p-6 rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5">
                أنا <span class="text-[#FF8C00] font-black">كريم جمال عبد الناصر</span>مطور ويب متكامل (Full-Stack Developer) خبير في بناء تطبيقات الويب المتقدمة باستخدام Next.js و Angular. متخصص في تطوير متاجر إلكترونية ومنصات رقمية فائقة السرعة تعتمد على تقنيات Server-Side Rendering (SSR) لضمان أفضل أداء وتصدر نتائج محركات البحث (SEO). متمكن من الربط بين واجهات الـ React/Next القوية وبين أنظمة الـ Backend باستخدام PHP و MySQL. أركز على تقديم تجربة مستخدم (UX) استثنائية، أكواد نظيفة (Clean Code)، وتصاميم متجاوبة بالكامل تضمن نمو الأعمال وتفوقها الرقمي
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div v-for="info in personalInfo" :key="info.label" class="info-card flex items-center gap-4 p-4 bg-white dark:bg-[#1c1d25] rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-black/40">
                  <div class="p-2 bg-orange-100 dark:bg-orange-500/10 rounded-lg" v-html="iconMap[info.icon]"></div>
                  <div>
                    <span class="block text-xs text-gray-500 dark:text-slate-400 font-bold mb-0.5">{{ info.label }}</span>
                    <span class="text-sm font-black text-gray-900 dark:text-white">{{ info.value }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Skills Tab Content -->
          <transition name="fade" mode="out-in">
            <div v-if="activeTab === 'skills'" key="skills" class="tab-content">
              <div class="space-y-10">
                <div v-for="section in skillSections" :key="section.id">
                  <h4 class="text-[#FF8C00] font-black mb-6 flex items-center gap-2 text-xl">
                    <div v-html="iconMap[section.icon]"></div>
                    {{ section.title }}
                  </h4>
                  <div :class="section.id === 'web' ? 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4' : 'grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4'">
                    <div v-for="skill in section.items" :key="skill.name" class="skill-item skill-card flex flex-col items-center justify-center p-5 bg-white dark:bg-[#1c1d25] rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/5 group transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-black/40">
                    <div v-html="iconMap[skill.icon]" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]"></div>
                    <span class="text-[11px] font-black dark:text-slate-300 text-slate-600 uppercase tracking-wider">{{ skill.name }}</span>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </transition>
          <!-- Experience Tab Content -->
          <transition name="fade" mode="out-in">
            <div v-if="activeTab === 'experience'" key="experience" class="tab-content">
              <div class="space-y-6">
                <div v-for="exp in experiences" :key="exp.title" class="exp-card bg-white dark:bg-[#1c1d25] p-6 rounded-[2rem] border-r-4 border-l-4 border-l-transparent border-r-[#FF8C00] shadow-sm transition-all duration-300 hover:shadow-xl hover:shadow-slate-200 dark:hover:shadow-black/40">
                  <h4 class="font-black text-xl mb-2 dark:text-white text-slate-800">{{ exp.title }}</h4>
                  <p class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-medium transition-colors">{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </transition>

          <!-- Education Tab Content -->
          <transition name="fade" mode="out-in">
            <div v-if="activeTab === 'education'" key="education" class="tab-content">
              <div class="bg-white dark:bg-[#1c1d25] p-8 rounded-[2.5rem] shadow-xl border border-gray-100 dark:border-white/5">
                <div class="flex items-center gap-4 mb-4 text-[#FF8C00]">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"></path>
                  </svg>
                  <h4 class="text-xl md:text-2xl font-black">{{ education.title }}</h4>
                </div>
                <p class="text-slate-600 dark:text-slate-300 leading-loose font-medium text-base md:text-lg">{{ education.description }}</p>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('info')
const tabs = [
  { id: 'info', label: 'معلومات' },
  { id: 'skills', label: 'المهارات' },
  { id: 'experience', label: 'الخبرة' },
  { id: 'education', label: 'التعليم' }
]

// Personal info cards data
const personalInfo = [
  {
    label: 'تاريخ الميلاد',
    value: '20/4/1999',
    icon: 'calendar'
  },
  {
    label: 'العمر',
    value: '26 سنة',
    icon: 'user'
  },
  {
    label: 'الوظيفة',
    value: 'مطور ويب',
    icon: 'briefcase'
  },
  {
    label: 'الهاتف',
    value: '01021891641',
    icon: 'phone'
  },
  {
    label: 'البريد',
    value: 'karimgamal.wd@gmail.com',
    icon: 'email'
  },
  {
    label: 'العنوان',
    value: 'المنيا - ملوي',
    icon: 'location'
  }
]

// Skills sections data
const skillSections = [
  {
    id: 'web',
    title: 'تطوير الويب',
    icon: 'briefcase',
    items: [
      { name: 'HTML', icon: 'html5', color: '#E34F26' },
      { name: 'CSS', icon: 'css3', color: '#1572B6' },
      { name: 'Bootstrap', icon: 'bootstrap', color: '#7952B3' },
      { name: 'JavaScript', icon: 'javascript', color: '#F7DF1E' },
      { name: 'Angular', icon: 'angular', color: '#DD0031' },
      { name: 'PHP', icon: 'php', color: '#777BB4' },
      { name: 'SQL Server', icon: 'sqlserver', color: '#CC2927' },
      { name: 'MySQL', icon: 'mysql', color: '#4479A1' }
    ]
  },
  {
    id: 'design',
    title: 'التصميم',
    icon: 'code',
    items: [
      { name: 'Figma', icon: 'figma', color: '#F24E1E' },
      { name: 'Adobe XD', icon: 'adobexd', color: '#FF61F6' },
      { name: 'Photoshop', icon: 'photoshop', color: '#31A8FF' }
    ]
  }
]

// Icon mapping helper
const iconMap = {
  calendar: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[#FF8C00] text-xl shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-48c-8.8 0-16 7.2-16 16v80h512v-80c0-8.8 7.2-16 16-16h48V16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48h48c8.8 0 16-7.2 16-16zm-144 0H192V96h128V64z"></path></svg>',
  user: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-[#FF8C00] text-xl shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></svg>',
  briefcase: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#FF8C00] text-xl shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"></path></svg>',
  phone: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#FF8C00] text-xl shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>',
  email: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-[#FF8C00] text-xl shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path></svg>',
  location: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-[#FF8C00] text-xl shrink-0" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>',
  code: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path></svg>',
  // Skill icons
  html5: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(227, 79, 38);"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"></path></svg>',
  css3: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(21, 114, 182);"><path d="M480 32l-64 368-223.3 80L0 400l19.6-94.8h82l-8 40.6L210 390.2l134.1-44.4 18.8-97.1H29.5l16-82h333.7l10.5-52.7H56.3l16.3-82H480z"></path></svg>',
  bootstrap: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(121, 82, 179);"><path d="M333.5,201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4,238.2,333.5,225,333.5,201.4z M517,188.6 c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1,0-55.8,28.1-54.7,58.5c1,29.3-0.3,67.2-9.8,98.1 c-9.6,31-25.7,50.6-52.2,53.1v28.5c26.4,2.5,42.6,22.1,52.2,53.1c9.5,30.9,10.9,68.8,9.8,98.1c-1.1,30.5,22.7,58.5,54.7,58.5h328.7 c32.1,0,55.8-28.1,54.7-58.5c-1-29.3,0.3-67.2,9.8-98.1c9.6-31,25.7-50.6,52.1-53.1v-28.5C542.7,239.2,526.5,219.6,517,188.6z M300.2,375.1h-97.9V136.8h97.4c43.3,0,71.7,23.4,71.7,59.4c0,25.3-19.1,47.9-43.5,51.8v1.3c33.2,3.6,55.5,26.6,55.5,58.3 C383.4,349.7,352.1,375.1,300.2,375.1z M290.2,266.4h-50.1v78.4h52.3c34.2,0,52.3-13.7,52.3-39.5 C344.7,279.6,326.1,266.4,290.2,266.4z"></path></svg>',
  javascript: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(247, 223, 30);"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path></svg>',
  angular: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(221, 0, 49);"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"></path></svg>',
  php: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(119, 123, 180);"><path d="M320 104.5c171.4 0 303.2 72.2 303.2 151.5S491.3 407.5 320 407.5c-171.4 0-303.2-72.2-303.2-151.5S148.7 104.5 320 104.5m0-16.8C143.3 87.7 0 163 0 256s143.3 168.3 320 168.3S640 349 640 256 496.7 87.7 320 87.7zM218.2 242.5c-7.9 40.5-35.8 36.3-70.1 36.3l13.7-70.6c38 0 63.8-4.1 56.4 34.3zM97.4 350.3h36.7l8.7-44.8c41.1 0 66.6 3 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7h-70.7L97.4 350.3zm185.7-213.6h36.5l-8.7 44.8c31.5 0 60.7-2.3 74.8 10.7 14.8 13.6 7.7 31-8.3 113.1h-37c15.4-79.4 18.3-86 12.7-92-5.4-5.8-17.7-4.6-47.4-4.6l-18.8 96.6h-36.5l32.7-168.6zM505 242.5c-8 41.1-36.7 36.3-70.1 36.3l13.7-70.6c38.2 0 63.8-4.1 56.4 34.3zM384.2 350.3H421l8.7-44.8c43.2 0 67.1 2.5 90.2-19.1 26.1-24 32.9-66.7 14.3-88.1-9.7-11.2-25.3-16.7-46.5-16.7H417l-32.8 168.7z"></path></svg>',
  sqlserver: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(204, 41, 39);"><path d="M11.99 8C10.89 8 10 8.89 10 7.99V2.01C10 1.46 10.45 1 11 1s1 .46 1 1.01V8c0 .55-.45 1-1.01 1zM16 8V2.01C16 1.46 15.55 1 15 1s-1 .46-1 1.01V8c0 .55.45 1 1.01 1zM20 8V2.01C20 1.46 19.55 1 19 1s-1 .46-1 1.01V8c0 .55.45 1 1.01 1zM7.99 8C6.89 8 6 8.89 6 7.99V2.01C6 1.46 6.45 1 7 1s1 .46 1 1.01V8c0 .55-.45 1-1.01 1zM3 8V2.01C3 1.46 3.45 1 4 1s1 .46 1 1.01V8c0 .55-.45 1-1.01 1z"></path></svg>',
  mysql: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(68, 121, 161);"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>',
  figma: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(242, 78, 30);"><path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"></path></svg>',
  adobexd: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(255, 97, 246);"><path d="M4.25.3C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3Zm14.07 5.13h2.03c.05-.01.09.03.1.07v9.54c0 .18.01.38.02.6.02.21.03.41.04.58 0 .07-.03.13-.1.16-.52.22-1.07.38-1.63.48-.51.09-1.02.14-1.54.14-.74.01-1.48-.14-2.15-.45-.63-.29-1.15-.77-1.51-1.36-.37-.61-.55-1.37-.55-2.28a4.107 4.107 0 0 1 2.14-3.66c.7-.39 1.54-.58 2.53-.58.05 0 .12 0 .21.01s.19.01.31.02V5.54c0-.07.03-.11.1-.11zM3.68 6.3h2.27c.05 0 .1.01.14.02.04.02.07.05.1.09.19.43.41.86.64 1.29.24.43.47.85.72 1.27.24.42.46.84.67 1.27h.02c.21-.44.43-.87.65-1.29.22-.42.45-.84.68-1.26.23-.42.45-.85.67-1.26.01-.04.03-.08.06-.1a.19.19 0 0 1 .13-.02h2.11c.05-.01.1.02.11.07.01.01-.01.05-.03.07l-3 4.95 3.2 5.25c.02.04.03.08.02.12-.01.04-.05.01-.11.02h-2.29c-.16 0-.27-.01-.34-.11-.21-.42-.43-.83-.64-1.25-.21-.41-.44-.83-.68-1.26-.24-.43-.48-.86-.72-1.3h-.02c-.21.43-.44.86-.67 1.29-.23.43-.46.86-.68 1.28-.23.42-.46.85-.69 1.26-.04.1-.12.11-.23.11h-2.2c-.04 0-.07.02-.07-.03a.14.14 0 0 1 .02-.11l3.11-5.1L3.6 6.44c-.03-.04-.04-.08-.02-.1.02-.03.06-.04.1-.04zm13.94 4.23c-.39 0-.78.08-1.13.26-.34.17-.63.42-.85.74-.22.32-.33.75-.33 1.27-.01.35.05.7.17 1.03.1.27.25.51.45.71.19.18.42.32.68.4.27.09.55.13.83.13.15 0 .29-.01.42-.02.13.01.24-.01.36-.05v-4.4c-.09-.02-.18-.04-.27-.05-.11-.01-.22-.02-.33-.02Z"></path></svg>',
  photoshop: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-4xl md:text-5xl mb-3 transition-all duration-300 filter group-hover:drop-shadow-[0_0_10px_rgba(255,140,0,0.3)]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(49, 168, 255);"><path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 18.55c-.799 0-1.54-.246-2.121-.738-.584-.492-.876-1.167-.876-2.023 0-.802.313-1.477.938-2.025.625-.548 1.383-.822 2.274-.822.802 0 1.53.246 2.187.738.656.492.984 1.167.984 2.023 0 .89-.328 1.612-.984 2.168-.656.555-1.45.832-2.402.832zm-6.266-6.301c-.645 0-1.23-.246-1.754-.738-.524-.492-.786-1.167-.786-2.023 0-.855.262-1.53.786-2.023.524-.492 1.109-.738 1.754-.738.645 0 1.23.246 1.754.738.524.493.786 1.168.786 2.023 0 .856-.262 1.531-.786 2.023-.524.492-1.109.738-1.754.738zm12.57 0c-.645 0-1.23-.246-1.754-.738-.524-.492-.786-1.167-.786-2.023 0-.855.262-1.53.786-2.023.524-.492 1.109-.738 1.754-.738.645 0 1.23.246 1.754.738.524.493.786 1.168.786 2.023 0 .856-.262 1.531-.786 2.023-.524.492-1.109.738-1.754.738z"></path></svg>'
}

// Experience entries data
const experiences = [
  {
    title: 'مطور واجهة أمامية',
    description: 'مطور واجهات ويب (Front-End Developer) متخصص في بناء تطبيقات الويب أحادية الصفحة (SPA) باستخدام Angular. خبير في تحويل تصاميم UI/UX إلى واجهات تفاعلية سريعة الأداء باستخدام Bootstrap و CSS3 و TypeScript. أركز على تقديم أكواد نظيفة (Clean Code) وتصاميم متجاوبة بالكامل (Responsive Web Design) لضمان أفضل تجربة مستخدم وتوافق تام مع محركات البحث'
  },
  {
    title: 'مطور نهاية خلفية',
    description: 'متخصص في تصميم وتطوير بنية تحتية قوية (Scalable Architecture) وبناء Restful APIs عالية الأداء. خبير في إدارة وقواعد البيانات (SQL/NoSQL) وتحسين استعلاماتها لضمان أقصى سرعة واستقرار للأنظمة. أركز على الأمان (Security)، وتكامل الأنظمة (System Integration)، وضمان كفاءة التعامل مع البيانات الضخمة تحت ضغط عالي'
  }
]

// Education content data
const education = {
  title: 'بكالوريوس نظم المعلومات',
  description: 'حاصل على بكالوريوس نظم المعلومات (BSc)، بخلفية تقنية ترتكز على الفهم الشامل لإدارة قواعد البيانات، هندسة البرمجيات، وأمن الشبكات. متمكن من تحليل مشاكل الأعمال المعقدة وتحويلها إلى حلول تكنولوجية مبتكرة.'
}

const setActiveTab = (tabId) => {
  activeTab.value = tabId
}
</script>

<style scoped>
/* Normal scrollbar styling */
.tab-content {
  scrollbar-width: 8px;
  scrollbar-color: #e2e8f0 #f1f1f1 #c1c1d1;
  scrollbar-track-color: #f1f1f1;
  scrollbar-thumb-color: #c1c1d1;
  scrollbar-thumb-border-radius: 4px;
  scrollbar-track-border-radius: 4px;
}

.tab-content::-webkit-scrollbar {
  width: 8px;
}

.tab-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.tab-content::-webkit-scrollbar-thumb {
  background: #c1c1d1;
  border-radius: 4px;
  border: 1px solid #a0a0a0;
}

.tab-content::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
  border: 1px solid #888;
}

.tab-content::-webkit-scrollbar-corner {
  background: #f1f1f1;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(30px) scale(0.95);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px) scale(0.95);
}

.tab-content {
  animation: slideInFade 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes slideInFade {
  0% {
    opacity: 0;
    transform: translateX(20px) translateY(10px) scale(0.95);
  }
  50% {
    opacity: 0.7;
    transform: translateX(-5px) translateY(2px) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translateX(0) translateY(0) scale(1);
  }
}

/* Directional animations based on tab index */
.fade-enter-from.right-to-left {
  transform: translateX(30px);
}

.fade-leave-to.right-to-left {
  transform: translateX(-30px);
}

.fade-enter-from.left-to-right {
  transform: translateX(-30px);
}

.fade-leave-to.left-to-right {
  transform: translateX(30px);
}

/* Skill card animations */
.skill-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.05);
  box-shadow: 0 20px 40px rgba(255, 140, 0, 0.15);
}

/* Personal info card animations */
.info-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-card:hover {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 15px 30px rgba(255, 140, 0, 0.1);
}

/* Experience card animations */
.exp-card {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.exp-card:hover {
  transform: translateX(8px) scale(1.02);
  box-shadow: 0 10px 25px rgba(255, 140, 0, 0.1);
}

/* Tab button animations */
.tab-button {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.tab-button::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 140, 0, 0.1), transparent);
  transition: left 0.5s ease;
}

.tab-button:hover::before {
  left: 100%;
}

.tab-button:hover {
  transform: translateY(-2px);
}

/* Stagger animations for skill items */
.skill-item {
  opacity: 0;
  animation: staggerIn 0.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.skill-item:nth-child(1) { animation-delay: 0.05s; }
.skill-item:nth-child(2) { animation-delay: 0.1s; }
.skill-item:nth-child(3) { animation-delay: 0.15s; }
.skill-item:nth-child(4) { animation-delay: 0.2s; }
.skill-item:nth-child(5) { animation-delay: 0.25s; }
.skill-item:nth-child(6) { animation-delay: 0.3s; }
.skill-item:nth-child(7) { animation-delay: 0.35s; }
.skill-item:nth-child(8) { animation-delay: 0.4s; }

@keyframes staggerIn {
  0% {
    opacity: 0;
    transform: translateY(20px) scale(0.8);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
