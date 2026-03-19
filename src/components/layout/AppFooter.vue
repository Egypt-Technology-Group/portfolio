<script setup>
import { useI18n } from 'vue-i18n'
import siteConfig from '@/config/site'

const { t } = useI18n()
const currentYear = new Date().getFullYear()

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <footer class="relative pt-12 pb-6 overflow-hidden transition-all duration-500 border-t border-[#FF8C00]/20 bg-[#f4f4f2] dark:bg-[#0a0a0b]">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 pointer-events-none opacity-10">
      <div class="absolute top-10 left-10 text-primary text-6xl">
        <i class="fas fa-code"></i>
      </div>
      <div class="absolute bottom-10 right-10 text-primary text-6xl">
        <i class="fas fa-bolt"></i>
      </div>
    </div>
    
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
        <!-- About Section -->
        <div class="lg:col-span-4 space-y-6">
          <router-link to="/" class="text-3xl font-black text-gray-900 dark:text-white tracking-tighter no-underline group">
            {{ siteConfig.name }}<span class="text-primary group-hover:drop-shadow-[0_0_8px_#FF8C00] transition-all">.</span>
          </router-link>
          <p class="text-gray-500 dark:text-gray-400 font-medium text-sm leading-relaxed max-w-sm">
            {{ t('footer.description') }}
          </p>
          <div class="flex gap-3">
            <a :href="siteConfig.social.facebook" target="_blank" rel="noopener noreferrer" class="social-link" :title="t('accessibility.visitFacebook')">
              <i class="fab fa-facebook-f text-[#1877F2]"></i>
            </a>
            <a :href="siteConfig.social.linkedin" target="_blank" rel="noopener noreferrer" class="social-link" :title="t('accessibility.visitLinkedin')">
              <i class="fab fa-linkedin-in text-[#0A66C2]"></i>
            </a>
            <a :href="`https://wa.me/${siteConfig.whatsapp}`" target="_blank" rel="noopener noreferrer" class="social-link" :title="t('accessibility.visitWhatsapp')">
              <i class="fab fa-whatsapp text-[#25D366]"></i>
            </a>
            <a :href="siteConfig.social.github" target="_blank" rel="noopener noreferrer" class="social-link" :title="t('accessibility.visitGithub')">
              <i class="fab fa-github text-gray-800 dark:text-white"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-3">
          <h4 class="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-2">
            <i class="fas fa-link text-primary text-sm"></i>
            {{ t('footer.quickLinks') }}
          </h4>
          <ul class="space-y-3 font-medium text-gray-500 dark:text-gray-400 p-0 list-none">
            <li><a href="#services" class="hover:text-primary transition-colors">{{ t('navbar.services') }}</a></li>
            <li><a href="#about" class="hover:text-primary transition-colors">{{ t('navbar.about') }}</a></li>
            <li><a href="#projects" class="hover:text-primary transition-colors">{{ t('navbar.projects') }}</a></li>
            <li><a href="#articles" class="hover:text-primary transition-colors">{{ t('navbar.articles') }}</a></li>
            <li><a href="#testimonials" class="hover:text-primary transition-colors">{{ t('navbar.testimonials') }}</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="lg:col-span-5">
          <div class="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-[#FF8C00]/10 shadow-sm">
            <h4 class="text-gray-900 dark:text-white font-bold text-lg mb-6 flex items-center gap-2">
              <i class="fas fa-envelope text-primary text-sm"></i>
              {{ t('footer.directContact') }}
            </h4>
            <div class="space-y-4">
              <a :href="`mailto:${siteConfig.email}`" class="flex items-center gap-4 group no-underline text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <div class="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <i class="fas fa-at"></i>
                </div>
                <span class="font-bold text-sm">{{ siteConfig.email }}</span>
              </a>
              <a :href="`tel:${siteConfig.phone}`" class="flex items-center gap-4 group no-underline text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                <div class="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                  <i class="fas fa-phone-alt"></i>
                </div>
                <span class="font-bold text-sm">{{ siteConfig.phone }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="text-sm font-bold text-gray-500 dark:text-gray-400">
          {{ t('footer.copyright', { name: siteConfig.name, year: currentYear }) }}
        </div>
        <button 
          @click="scrollToTop"
          class="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
          :title="t('footer.goTop')"
        >
          <i class="fas fa-chevron-up"></i>
        </button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
@reference "../../style.css";

.text-primary { color: #FF8C00; }
.bg-primary { background-color: #FF8C00; }
.social-link {
  @apply w-10 h-10 bg-white dark:bg-white/5 rounded-xl flex items-center justify-center text-lg shadow-sm hover:-translate-y-1 transition-all;
}
</style>
