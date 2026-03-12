<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading title="آراء العملاء" subtitle="ماذا يقول عملائي عن عملي" />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <div 
          v-for="testimonial in testimonials" 
          :key="testimonial.id"
          class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-white/10"
        >
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg v-for="star in 5" :key="star" class="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            </div>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-6 italic">
            "{{ testimonial.content }}"
          </p>
          <div class="flex items-center">
            <div class="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="ml-4">
              <h4 class="font-semibold text-gray-900 dark:text-white">{{ testimonial.name }}</h4>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ testimonial.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SectionHeading from '@/components/ui/SectionHeading.vue'

const testimonials = [
  {
    id: 1,
    name: 'أحمد محمد',
    position: 'مدير مشروع في شركة التقنية',
    content: 'عمل مع كريم على مشروع تطوير موقع الشركة وكانت النتائج ممتازة. التزامه بالجودة والمواعيد كان مثالياً.'
  },
  {
    id: 2,
    name: 'سارة أحمد',
    position: 'مصممة UI/UX',
    content: 'كريم مطور محترف ومبدع. يحول الأفكار إلى واقع بطريقة سلسة وإبداعية. أوصي به بشدة.'
  },
  {
    id: 3,
    name: 'محمد علي',
    position: 'رائد أعمال',
    content: 'ساعدني كريم في بناء منصة إلكترونية متكاملة. الأداء والتصميم كانا فوق التوقعات.'
  },
  {
    id: 4,
    name: 'فاطمة حسن',
    position: 'مديرة التسويق',
    content: 'تعاوننا مع كريم كان تجربة رائعة. فهم احتياجاتنا بسرعة并提供 حلولاً مبتكرة.'
  },
  {
    id: 5,
    name: 'عمر خالد',
    position: 'مطور خلفية',
    content: 'كريم زميل ممتاز في العمل. خبرته في تطوير الواجهات واسعة ومهاراته التقنية قوية.'
  },
  {
    id: 6,
    name: 'نورا سعيد',
    position: 'صاحبة متجر إلكتروني',
    content: 'أنشأ كريم متجري الإلكتروني من الصفر. النتائج كانت مذهلة وزيادة المبيعات واضحة.'
  }
]
</script>
