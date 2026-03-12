<template>
  <nav dir="rtl" class="fixed top-0 w-full z-[200] h-[69px] flex items-center px-2 md:px-4 transition-all duration-300 bg-white/95 dark:bg-[#1a1c20]/95 shadow-md backdrop-blur-sm">
    <div class="w-full flex items-center justify-between relative z-[210]">
      <!-- Logo -->
      <router-link 
        to="/" 
        aria-label="الرئيسية"
        class="relative block h-[65px] w-[140px] md:w-[170px] xl:w-[200px] -mt-1"
      >
        <img
          src="@/assets/karim.avif"
          alt="كريم جمال - مطور ويب"
          class="object-contain"
          style="position: absolute; height: 100%; width: 100%; inset: 0px; object-position: right center; color: transparent; transform: scale(1.5); transform-origin: right center;"
        />
      </router-link>

      <!-- Desktop Navigation -->
      <ul class="hidden lg:flex items-center gap-x-10 h-full list-none p-0">
        <li class="relative h-[69px] flex items-center">
          <a 
            href="#home" 
            aria-label="الرئيسية"
            class="text-[17px] font-black transition-colors duration-300 no-underline text-[#FF8C00]"
          >
            الرئيسية
          </a>
          <div class="absolute bottom-0 left-0 right-0 h-[4px] bg-[#FF8C00] rounded-t-full" style="opacity: 1;"></div>
        </li>
        <li class="relative h-[69px] flex items-center">
          <a 
            href="#services" 
            aria-label="خدماتي"
            class="text-[17px] font-black transition-colors duration-300 no-underline text-gray-700 dark:text-white/80 hover:text-[#FF8C00]"
          >
            خدماتي
          </a>
        </li>
        <li class="relative h-[69px] flex items-center">
          <a 
            href="#about" 
            aria-label="معلومات عني"
            class="text-[17px] font-black transition-colors duration-300 no-underline text-gray-700 dark:text-white/80 hover:text-[#FF8C00]"
          >
            معلومات عني
          </a>
        </li>
        <li class="relative h-[69px] flex items-center">
          <a 
            href="#projects" 
            aria-label="معرض أعمالي"
            class="text-[17px] font-black transition-colors duration-300 no-underline text-gray-700 dark:text-white/80 hover:text-[#FF8C00]"
          >
            معرض أعمالي
          </a>
        </li>
        <li class="relative h-[69px] flex items-center">
          <a 
            href="#articles" 
            aria-label="المقالات"
            class="text-[17px] font-black transition-colors duration-300 no-underline text-gray-700 dark:text-white/80 hover:text-[#FF8C00]"
          >
            المقالات
          </a>
        </li>
        <li class="relative h-[69px] flex items-center">
          <a 
            href="#testimonials" 
            aria-label="آراء العملاء"
            class="text-[17px] font-black transition-colors duration-300 no-underline text-gray-700 dark:text-white/80 hover:text-[#FF8C00]"
          >
            آراء العملاء
          </a>
        </li>
      </ul>

      <!-- Right Side Actions -->
      <div class="flex items-center gap-3 relative z-[220]">
        <!-- Contact Button -->
        <a 
          href="#contact" 
          aria-label="تواصل معي"
          class="hidden md:block px-5 py-1.5 rounded-full font-bold text-sm bg-[#FF8C00] text-white no-underline"
        >
          تواصل معي
        </a>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          aria-label="تفعيل الوضع المضيء"
          class="text-[#FF8C00] p-2 rounded-full border-none bg-transparent cursor-pointer"
        >
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </button>

        <!-- Language Toggle -->
        <button
          @click="toggleLanguage"
          aria-label="Switch to English"
          class="w-9 h-9 rounded-full border border-[#FF8C00]/30 text-[#FF8C00] font-bold text-[12px] bg-transparent cursor-pointer"
        >
          EN
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="toggleMobileMenu"
          aria-label="فتح القائمة"
          class="lg:hidden text-2xl text-[#FF8C00] border-none bg-transparent cursor-pointer"
        >
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="28" width="28" xmlns="http://www.w3.org/2000/svg">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="lg:hidden bg-white dark:bg-[#1a1c20] border-t border-gray-200 dark:border-gray-700">
      <div class="px-4 py-6 space-y-4">
        <a
          v-for="item in navItems"
          :key="item.key"
          :href="item.to"
          class="block py-2 text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-[#FF8C00] no-underline"
          @click="closeMobileMenu"
        >
          {{ item.label }}
        </a>
        <a 
          href="#contact" 
          class="hidden md:block px-5 py-1.5 rounded-full font-bold text-sm bg-[#FF8C00] text-white no-underline w-full text-center"
          @click="closeMobileMenu"
        >
          تواصل معي
        </a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const mobileMenuOpen = ref(false)

const navItems = [
  { key: 'home', label: 'الرئيسية', to: '#home' },
  { key: 'services', label: 'خدماتي', to: '#services' },
  { key: 'about', label: 'معلومات عني', to: '#about' },
  { key: 'work', label: 'معرض أعمالي', to: '#projects' },
  { key: 'articles', label: 'المقالات', to: '#articles' },
  { key: 'testimonials', label: 'آراء العملاء', to: '#testimonials' }
]

const toggleLanguage = () => {
  // Language toggle logic would go here
  console.log('Toggle language')
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
