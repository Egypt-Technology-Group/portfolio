<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading title="المقالات" subtitle="أحدث المقالات والمقالات التقنية" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div 
          v-for="article in articles" 
          :key="article.id"
          class="bg-white dark:bg-[#24262b] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10 group"
        >
          <div class="h-48 bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <img 
              :src="article.image" 
              :alt="article.title"
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div class="p-6">
            <div class="flex items-center gap-2 mb-3">
              <span class="text-sm text-[#FF8C00] font-medium">{{ article.category }}</span>
              <span class="text-gray-400">•</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ article.date }}</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ article.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ article.excerpt }}
            </p>
            <button class="text-[#FF8C00] font-medium hover:text-[#e67e00] transition-colors">
              اقرأ المزيد →
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const articles = [
  {
    id: 1,
    title: 'مقدمة إلى Vue.js 3',
    excerpt: 'تعرف على أحدث ميزات Vue.js 3 وكيفية بناء تطبيقات ويب حديثة باستخدام Composition API',
    category: 'Vue.js',
    date: '15 مارس 2026',
    image: 'https://picsum.photos/seed/vue3/400/300'
  },
  {
    id: 2,
    title: 'أفضل ممارسات CSS في 2026',
    excerpt: 'استكشف أحدث التقنيات والأدوات لتحسين تصميمات CSS وأداء المواقع',
    category: 'CSS',
    date: '10 مارس 2026',
    image: 'https://picsum.photos/seed/css/400/300'
  },
  {
    id: 3,
    title: 'بناء REST APIs مع Node.js',
    excerpt: 'دليل شامل لإنشاء واجهات برمجة تطبيقات RESTful قابلة للتوسع باستخدام Node.js',
    category: 'Node.js',
    date: '5 مارس 2026',
    image: 'https://picsum.photos/seed/nodejs/400/300'
  },
  {
    id: 4,
    title: 'تطبيقات PWA الحديثة',
    excerpt: 'كيفية بناء تطبيقات ويب تدية تعمل بدون اتصال وتوفر تجربة مستخدم ممتازة',
    category: 'PWA',
    date: '28 فبراير 2026',
    image: 'https://picsum.photos/seed/pwa/400/300'
  },
  {
    id: 5,
    title: 'أمان تطبيقات الويب',
    excerpt: 'أهم الإجراءات الأمنية لحماية تطبيقات الويب من الهجمات الشائعة',
    category: 'Security',
    date: '20 فبراير 2026',
    image: 'https://picsum.photos/seed/security/400/300'
  },
  {
    id: 6,
    title: 'تحسين أداء JavaScript',
    excerpt: 'نصائح وحيل لتحسين أداء أكواد JavaScript وتسريع تطبيقات الويب',
    category: 'JavaScript',
    date: '15 فبراير 2026',
    image: 'https://picsum.photos/seed/javascript/400/300'
  }
]
</script>
