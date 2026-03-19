<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import articles from '@/data/articles'

const { t, locale } = useI18n({ useScope: 'global' })

// SEO Script Management
let seoScript = null

const addStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": t('articles.academy'),
    "description": t('articles.description'),
    "url": window.location.href
  }
  
  seoScript = document.createElement('script')
  seoScript.type = 'application/ld+json'
  seoScript.id = 'seo-articles-data'
  seoScript.textContent = JSON.stringify(structuredData)
  document.head.appendChild(seoScript)
}

const removeStructuredData = () => {
  if (seoScript && seoScript.parentNode) {
    seoScript.parentNode.removeChild(seoScript)
  }
}

onMounted(() => {
  addStructuredData()
})

onUnmounted(() => {
  removeStructuredData()
})
</script>

<template>
  <section id="articles" class="relative min-h-screen bg-gray-50 dark:bg-[#1a1c20] py-24 px-4 transition-colors duration-500">
    <div class="container mx-auto">
      <div class="mb-16 text-center">
        <div class="flex items-center justify-center gap-2 text-primary font-black uppercase text-xs mb-4 tracking-widest">
          <i class="fas fa-fire animate-pulse"></i>
          {{ t('articles.academy') }}
        </div>
        <h2 class="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
          {{ t('articles.title') }} <span class="text-primary">{{ t('articles.subtitle') }}</span>
        </h2>
        <p class="text-gray-500 dark:text-gray-400 font-bold max-w-lg mx-auto">
          {{ t('articles.description') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article 
          v-for="article in articles" 
          :key="article.id"
          class="bg-white dark:bg-[#24262b] rounded-[3rem] overflow-hidden shadow-xl border-b-4 border-transparent hover:border-primary transition-all group cursor-pointer"
        >
          <div class="relative h-64 overflow-hidden">
            <img 
              :alt="article.title" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              :src="article.image"
            />
            <div class="absolute top-6 right-6 bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg">
              {{ locale === 'ar' ? article.category_ar : article.category }}
            </div>
          </div>
          
          <div class="p-8">
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
              {{ locale === 'ar' ? article.title : article.title_en }}
            </h3>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-8 line-clamp-3 font-medium leading-relaxed">
              {{ locale === 'ar' ? article.description : article.description_en }}
            </p>
            <div class="flex items-center text-primary font-black text-sm group">
              <span class="border-b-2 border-primary/20 pb-1 group-hover:border-primary transition-all mr-2">
                {{ t('articles.readMore') }}
              </span>
              <i :class="['fas', locale === 'ar' ? 'fa-arrow-left' : 'fa-arrow-right', 'transition-transform group-hover:translate-x-1']"></i>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.text-primary { color: #FF8C00; }
.bg-primary { background-color: #FF8C00; }
.border-primary { border-color: #FF8C00; }

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
