<template>
  <section id="testimonials" class="min-h-screen bg-gray-50 dark:bg-[#1a1c20] py-32 text-center flex flex-col justify-center overflow-hidden transition-colors duration-500" dir="rtl">
    <div class="w-full mx-auto">
      <!-- Section Header -->
      <div class="mb-16 px-4">
        <h2 class="text-4xl xl:text-5xl font-black text-gray-800 dark:text-white transition-colors">آراء <span class="keep-orange">العملاء</span> والشركاء</h2>
        <p class="keep-orange font-black uppercase tracking-[3px] mt-4 text-sm md:text-base opacity-90">ثقة عملائي هي رأس مالي وسر نجاحي</p>
        <div class="w-24 h-1 bg-[#FF8C00]/30 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="w-full relative">
        <div aria-label="آراء العملاء" role="region">
          <!-- Background Decorations -->
          <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <div class="absolute top-0 -left-20 w-80 h-80 bg-[#FF8C00]/10 dark:bg-[#FF8C00]/5 blur-[80px] rounded-full"></div>
            <div class="absolute bottom-20 right-10 w-64 h-64 border border-[#FF8C00]/20 dark:border-[#FF8C00]/10 rounded-[40px] hidden lg:block"></div>
            <svg class="absolute inset-0 w-full h-full opacity-20">
              <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.5" fill="#FF8C00"></circle>
              </pattern>
              <rect width="100%" height="100%" fill="url(#dots)"></rect>
            </svg>
            <svg class="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 opacity-30 dark:opacity-20" viewBox="0 0 1000 1000">
              <path d="M0,500 C200,400 400,600 600,500 S800,400 1000,500" fill="none" stroke="#FF8C00" stroke-width="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.54936687022564px 1px"></path>
            </svg>
          </div>

          <!-- Testimonials Carousel -->
          <div class="relative z-10 !overflow-visible !pb-24 !pt-20">
            <div 
              class="relative overflow-hidden mx-auto !pt-20 select-none cursor-grab" 
              style="max-width: 1350px;"
              ref="viewport"
              @mousedown="handleDragStart"
              @mousemove="handleDragMove"
              @mouseup="handleDragEnd"
              @mouseleave="handleDragEnd"
              @touchstart="handleDragStart"
              @touchmove="handleDragMove"
              @touchend="handleDragEnd"
            >
              <div 
                class="flex transition-transform duration-700 ease-out"
                :class="{ 'transition-none': isDragging }"
                dir="ltr"
                :style="{ transform: `translateX(${translateX}px)` }"
                ref="carousel"
              >
                <!-- Duplicated testimonials for infinite scroll -->
                <div 
                  v-for="(testimonial, index) in displayTestimonials" 
                  :key="`${testimonial.id}-${index}`"
                  class="flex-shrink-0 transition-all duration-700 ease-out"
                  :class="getCardClass(index)"
                  :style="{ width: '450px', marginLeft: index === 0 ? '0' : '50px' }"
                >
                  <div class="relative bg-white dark:bg-[#1c1d33] rounded-3xl p-8 shadow-xl w-full max-w-[360px] border-b-[8px] border-[#FF8C00] flex flex-col items-center text-center transition-all duration-700"
                    :class="isFocusedCard(index) ? 'shadow-[#FF8C00]/20 dark:shadow-orange-900/10 shadow-2xl' : ''"
                  >
                    <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full border-4 border-white dark:border-[#131424] overflow-hidden bg-[#FF8C00] shadow-md transition-colors">
                      <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" draggable="false">
                    </div>
                    <div class="mt-12 w-full">
                      <h3 class="text-xl font-black text-slate-800 dark:text-white transition-colors">{{ testimonial.name }}</h3>
                      <p class="text-[#FF8C00] font-bold text-sm mb-4">{{ testimonial.role }}</p>
                      <div class="flex justify-center gap-1 text-[#FF8C00] mb-6">
                        <svg v-for="star in 5" :key="star" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                        </svg>
                      </div>
                      <div class="relative px-2 min-h-[100px] flex items-center justify-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="absolute -top-2 right-0 text-[#FF8C00] opacity-10 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
                        </svg>
                        <p class="text-slate-600 dark:text-gray-300 font-bold text-[15px] leading-relaxed transition-colors">{{ testimonial.content }}</p>
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="absolute -bottom-2 left-0 text-[#FF8C00] opacity-10 text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                          <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <button @click="prevTestimonial" class="absolute top-1/2 -left-4 xl:-left-16 z-[60] -translate-y-1/2 text-[#FF8C00] text-5xl hover:scale-110 transition-all opacity-80 dark:opacity-60 dark:hover:opacity-100">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path>
              </svg>
            </button>
            <button @click="nextTestimonial" class="absolute top-1/2 -right-4 xl:-right-16 z-[60] -translate-y-1/2 text-[#FF8C00] text-5xl hover:scale-110 transition-all opacity-80 dark:opacity-60 dark:hover:opacity-100">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
              </svg>
            </button>
          </div>

          <!-- Progress Bar -->
          <div class="mt-10 w-full flex justify-center px-10 relative z-10">
            <div class="w-full max-w-[600px] h-1.5 bg-gray-200/20 dark:bg-white/10 rounded-full overflow-hidden relative shadow-inner transition-colors">
              <div class="absolute top-0 left-0 h-full bg-[#FF8C00] transition-all duration-500" :style="{ width: progressWidth + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const carousel = ref(null)
const viewport = ref(null)
const autoPlayInterval = ref(null)

// Drag state
const isDragging = ref(false)
const dragStartX = ref(0)
const dragDeltaX = ref(0)
const dragStartTranslate = ref(0)
const dragThreshold = 5 // Minimum movement to count as drag

const testimonials = [
  {
    id: 1,
    name: 'احمد الشناوى',
    role: 'عميل - منصة خمسات',
    content: 'تشرفت جداً بالتعاون مع البشمهندس كريم. بجد إنسان متمكن، فاهم شغله جداً، والتزامه بالمواعيد حاجة تشرف. الكود طالع محترم ومنظم، وأكيد مش هيكون آخر تعامل ما بيننا.',
    avatar: '/customer1.webp'
  },
  {
    id: 2,
    name: 'احمد رزق',
    role: 'مؤسس متجر إلكتروني',
    content: 'تجربة ممتازة مع مهندس كريم، الحقيقة من أفضل الناس اللي اشتغلت معاهم في تطوير المتاجر. سرعة الموقع فرقت جداً في التحويلات، والـ Backend معمول باحترافية وسهولة في التعامل مكنتش متوقعها.',
    avatar: '/customer2.webp'
  },
  {
    id: 3,
    name: 'د. هاني يوسف',
    role: 'عميل - منصة خمسات',
    content: 'حول الفكرة اللي كانت في خيالي لمشروع حقيقي أحسن مما كنت متخيل. احترافية كبيرة في استخدام أحدث التقنيات، والأداء بتاع الموقع سريع جداً ومستقر، فعلاً إضافة قوية لأي حد يشتغل معاه.',
    avatar: '/customer3.webp'
  },
  {
    id: 4,
    name: 'فهد القحطاني',
    role: 'رائد أعمال',
    content: 'بكل أمانة، الشغل جبار ومنظم لأبعد حد. المطور فنان وسريع في التنفيذ، والأهم من ذلك إنه فاهم وش جالس يسوي، سلمني المشروع بجودة عالية وكود نظيف جداً.. بيض الله وجهه وما قصر.',
    avatar: '/customer4.webp'
  },
  {
    id: 5,
    name: 'قاسم فايز',
    role: 'عميل - منصة خمسات',
    content: 'بصراحة، الشغل في الـ SEO والأرشفة ملوش حل! الموقع مكنش بيظهر خالص، ودلوقتي بقى في النتائج الأولى بفضل الكود النضيف والتقنيات اللي اشتغل بيها. بجد خبير ومتمكن جداً في حتة الـ Performance، وتسلم إيده على النتيجة المبهرة دي.',
    avatar: '/customer5.webp'
  }
]

// Create duplicated testimonials for infinite scroll
const displayTestimonials = computed(() => {
  return [...testimonials, ...testimonials]
})

// Current index based on scroll position
const currentIndex = ref(testimonials.length) // Start with second set (centered)

// Reactive drag translate value
const dragTranslateX = ref(0)

// Calculate translateX for smooth sliding with proper centering
const currentTranslateX = computed(() => {
  const SLIDE_WIDTH = 450
  const SLIDE_GAP = 50
  const CONTAINER_WIDTH = 1350
  
  const step = SLIDE_WIDTH + SLIDE_GAP
  const centerOffset = (CONTAINER_WIDTH - SLIDE_WIDTH) / 2
  
  // Calculate the position of the active slide
  const activeSlidePosition = currentIndex.value * step
  
  // Transform needed to center the active slide
  return centerOffset - activeSlidePosition
})

// Combined translate value for dragging
const translateX = computed(() => {
  if (isDragging.value) {
    return dragStartTranslate.value + dragDeltaX.value
  }
  return currentTranslateX.value
})

// Determine card class based on position
const getCardClass = (index) => {
  const distance = Math.abs(index - currentIndex.value)
  
  if (distance === 0) {
    return 'scale-110 opacity-100 z-50'
  } else if (distance === 1) {
    return 'scale-90 opacity-40 dark:opacity-20'
  } else {
    return 'scale-90 opacity-40 dark:opacity-20'
  }
}

// Check if card is the focused one
const isFocusedCard = (index) => {
  return index === currentIndex.value
}

// Progress bar width
const progressWidth = computed(() => {
  const realIndex = currentIndex.value % testimonials.length
  return ((realIndex + 1) / testimonials.length) * 100
})

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % displayTestimonials.value.length
  
  // Handle infinite loop
  if (currentIndex.value >= testimonials.length * 2 - 2) {
    setTimeout(() => {
      currentIndex.value = testimonials.length
    }, 700)
  }
}

const prevTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? displayTestimonials.value.length - 1 : currentIndex.value - 1
  
  // Handle infinite loop
  if (currentIndex.value <= testimonials.length + 1) {
    setTimeout(() => {
      currentIndex.value = testimonials.length * 2 - 2
    }, 700)
  }
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval.value = setInterval(() => {
    nextTestimonial()
  }, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) {
    clearInterval(autoPlayInterval.value)
    autoPlayInterval.value = null
  }
}

// Drag handlers
const handleDragStart = (e) => {
  isDragging.value = true
  dragStartX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  dragStartTranslate.value = currentTranslateX.value
  dragDeltaX.value = 0
  
  // Update cursor
  if (viewport.value) {
    viewport.value.style.cursor = 'grabbing'
  }
  
  // Pause autoplay
  stopAutoPlay()
  
  // Prevent text selection
  e.preventDefault()
}

const handleDragMove = (e) => {
  if (!isDragging.value) return
  
  const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  const deltaX = currentX - dragStartX.value
  
  // Check if movement exceeds threshold
  if (Math.abs(deltaX) > dragThreshold) {
    dragDeltaX.value = deltaX
    e.preventDefault()
  }
}

const handleDragEnd = () => {
  if (!isDragging.value) return
  
  isDragging.value = false
  
  // Restore cursor
  if (viewport.value) {
    viewport.value.style.cursor = 'grab'
  }
  
  // Calculate nearest slide based on drag distance
  const SLIDE_WIDTH = 450
  const SLIDE_GAP = 50
  const step = SLIDE_WIDTH + SLIDE_GAP
  
  const totalDrag = dragStartTranslate.value + dragDeltaX.value
  const centerOffset = (1350 - SLIDE_WIDTH) / 2
  const slidePosition = centerOffset - totalDrag
  
  // Find nearest slide index
  const nearestIndex = Math.round(slidePosition / step)
  const clampedIndex = Math.max(0, Math.min(nearestIndex, displayTestimonials.value.length - 1))
  
  // Update current index
  currentIndex.value = clampedIndex
  
  // Reset drag values
  dragDeltaX.value = 0
  
  // Resume autoplay after delay
  setTimeout(startAutoPlay, 3000)
}

// Add structured data for SEO
const addStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "آراء عملاء كريم جمال",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "25",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

onMounted(() => {
  // Add structured data
  addStructuredData()
  
  // Start auto-play
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<style scoped>
/* Custom animations for orange text */
.keep-orange {
  color: #FF8C00;
}

.dark .keep-orange {
  color: #FF8C00;
}

/* Prevent text selection and user drag */
.select-none {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: grabbing;
}

/* Prevent image dragging */
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  user-drag: none;
}
</style>
