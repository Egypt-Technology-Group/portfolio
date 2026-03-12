<template>
  <section id="Articles" class="relative min-h-screen bg-gray-50 dark:bg-[#1a1c20] py-24 flex flex-col justify-center transition-colors duration-500" dir="rtl">
    <div class="container px-6 mx-auto relative z-10 transition-all duration-500">
      <div style="opacity: 1;">
        <div class="mb-16 text-center">
          <div class="flex items-center justify-center gap-2 text-[#FF8C00] font-black uppercase text-sm mb-4">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="animate-pulse" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M216 23.86c0-23.8-30.65-32.77-44.15-13.04C48 191.85 224 200 224 288c0 35.63-29.11 64.46-64.85 63.99-35.17-.45-63.15-29.77-63.15-64.94v-85.51c0-21.7-26.47-32.23-41.43-16.5C27.8 213.16 0 261.33 0 320c0 105.87 86.13 192 192 192s192-86.13 192-192c0-170.29-168-193-168-296.14z"></path>
            </svg>
            أكاديمية كريم جمال التقنية
          </div>
          <h1 class="text-4xl md:text-6xl font-black text-gray-800 dark:text-white transition-colors">
            مقالات <span class="keep-orange">تخصصية</span> متعمقة.
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400 font-medium">دروس تقنية تغنيك عن الدورات المدفوعة</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div 
            v-for="article in articles" 
            :key="article.id"
            class="bg-white dark:bg-[#24262b] rounded-[40px] overflow-hidden shadow-2xl border-b-4 border-transparent hover:border-[#FF8C00] transition-all group cursor-pointer"
            style="opacity: 1; transform: none;"
          >
            <div class="relative h-64 overflow-hidden">
              <img 
                :alt="article.title" 
                loading="lazy" 
                decoding="async" 
                class="object-cover group-hover:scale-110 transition-transform duration-700" 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                :srcset="generateSrcSet(article.image)"
                :src="article.image"
                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
              />
              <div class="absolute top-5 right-5 bg-[#FF8C00] text-white text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
                {{ article.category }}
              </div>
            </div>
            <div class="p-8 text-right">
              <h2 class="text-xl font-black text-gray-800 dark:text-white mb-4 line-clamp-2 leading-tight">{{ article.title }}</h2>
              <p class="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-2 font-medium">{{ article.description }}</p>
              <span class="text-[#FF8C00] font-black text-sm border-b-2 border-[#FF8C00]/20 pb-1 group-hover:border-[#FF8C00] transition-all">
                اقرأ المزيد
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const articles = [
  {
    id: 1,
    title: 'دليل أمان المواقع 2026: من التشفير حتى الحماية ضد الهندسة العكسية',
    description: 'دورة مكثفة في حماية كود الـ JavaScript، منع استخراج البيانات، وتأمين ملفاتك ضد المتطفلين.',
    image: 'https://picsum.photos/seed/secure-code/600/400',
    category: 'Security',
    url: '#'
  },
  {
    id: 2,
    title: 'أسرار الـ Technical SEO: كيف تتصدر نتائج البحث في عصر الذكاء الاصطناعي؟',
    description: 'تحليل معمق في بنية المواقع، الـ Schema Markup، وكيفية التعامل مع خوارزميات جوجل الجديدة.',
    image: 'https://picsum.photos/seed/site-seo/600/400',
    category: 'SEO',
    url: '#'
  },
  {
    id: 3,
    title: 'سيكولوجية كتابة المحتوى التقني: كيف تحول الزائر إلى عميل دائم؟',
    description: 'تعلم فن كتابة المقالات التي تحل المشاكل الحقيقية، وتبني سلطة معرفية لموقعك.',
    image: 'https://picsum.photos/seed/seo-content/600/400',
    category: 'Content',
    url: '#'
  }
]

// Add structured data for SEO
const addStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "أكاديمية كريم جمال التقنية",
    "description": "مقالات تخصصية في البرمجة والأمن والـ SEO",
    "url": "https://karim-gamal.vercel.app/#Articles"
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

onMounted(() => {
  addStructuredData()
})

const generateSrcSet = (imagePath) => {
  // Generate srcset for responsive images
  const sizes = [128, 256, 320, 384, 420, 768, 1024, 1200]
  return sizes.map(size => `${imagePath}?w=${size}&q=75 ${size}w`).join(', ')
}
</script>

<style scoped>
.keep-orange {
  color: #FF8C00;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
