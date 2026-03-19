<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import testimonialsData from '@/data/testimonials'

const { t, locale } = useI18n()

const viewport = ref(null)
const autoPlayInterval = ref(null)
const isDragging = ref(false)
const dragStartX = ref(0)
const dragDeltaX = ref(0)
const dragStartTranslate = ref(0)
const dragThreshold = 5

const testimonials = testimonialsData

// Create duplicated testimonials for infinite scroll
const displayTestimonials = computed(() => {
  return [...testimonials, ...testimonials, ...testimonials]
})

// Current index based on scroll position
const currentIndex = ref(testimonials.length)

// Calculate translateX for smooth sliding
const currentTranslateX = computed(() => {
  const SLIDE_WIDTH = 450
  const SLIDE_GAP = 50
  const CONTAINER_WIDTH = 1350
  
  const step = SLIDE_WIDTH + SLIDE_GAP
  const centerOffset = (CONTAINER_WIDTH - SLIDE_WIDTH) / 2
  
  const activeSlidePosition = currentIndex.value * step
  return centerOffset - activeSlidePosition
})

const translateX = computed(() => {
  if (isDragging.value) {
    return dragStartTranslate.value + dragDeltaX.value
  }
  return currentTranslateX.value
})

const getCardClass = (index) => {
  const distance = Math.abs(index - currentIndex.value)
  if (distance === 0) return 'scale-110 opacity-100 z-50'
  return 'scale-90 opacity-40 dark:opacity-20'
}

const progressWidth = computed(() => {
  const realIndex = currentIndex.value % testimonials.length
  return ((realIndex + 1) / testimonials.length) * 100
})

const nextTestimonial = () => {
  currentIndex.value++
  if (currentIndex.value >= testimonials.length * 2) {
    setTimeout(() => {
      currentIndex.value = testimonials.length
    }, 700)
  }
}

const prevTestimonial = () => {
  currentIndex.value--
  if (currentIndex.value < testimonials.length) {
    setTimeout(() => {
      currentIndex.value = testimonials.length * 2 - 1
    }, 700)
  }
}

const startAutoPlay = () => {
  stopAutoPlay()
  autoPlayInterval.value = setInterval(nextTestimonial, 5000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval.value) clearInterval(autoPlayInterval.value)
}

// Drag handlers
const handleDragStart = (e) => {
  isDragging.value = true
  dragStartX.value = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  dragStartTranslate.value = currentTranslateX.value
  dragDeltaX.value = 0
  stopAutoPlay()
}

const handleDragMove = (e) => {
  if (!isDragging.value) return
  const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX
  dragDeltaX.value = currentX - dragStartX.value
}

const handleDragEnd = () => {
  if (!isDragging.value) return
  isDragging.value = false
  
  const SLIDE_WIDTH = 450
  const SLIDE_GAP = 50
  const step = SLIDE_WIDTH + SLIDE_GAP
  const totalDrag = dragStartTranslate.value + dragDeltaX.value
  const centerOffset = (1350 - SLIDE_WIDTH) / 2
  const slidePosition = centerOffset - totalDrag
  
  currentIndex.value = Math.round(slidePosition / step)
  dragDeltaX.value = 0
  setTimeout(startAutoPlay, 3000)
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section id="testimonials" class="min-h-screen bg-gray-50 dark:bg-[#1a1c20] py-24 transition-colors duration-500 overflow-hidden">
    <div class="container mx-auto">
      <!-- Section Header -->
      <div class="mb-16 px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-black text-gray-900 dark:text-white transition-colors">
          {{ t('testimonials.title') }} <span class="text-primary">{{ t('testimonials.subtitle') }}</span>
        </h2>
        <p class="text-primary font-black uppercase tracking-[3px] mt-4 text-sm">
          {{ t('testimonials.quote') }}
        </p>
        <div class="w-24 h-1 bg-primary/30 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="relative w-full">
        <!-- Carousel -->
        <div 
          class="relative overflow-hidden mx-auto py-20 select-none cursor-grab active:cursor-grabbing" 
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
            :style="{ transform: `translateX(${translateX}px)` }"
          >
            <div 
              v-for="(testimonial, index) in displayTestimonials" 
              :key="`${testimonial.id}-${index}`"
              class="flex-shrink-0 transition-all duration-700 ease-out px-6"
              :class="getCardClass(index)"
              style="width: 450px;"
            >
              <div class="relative bg-white dark:bg-[#24262b] rounded-[3rem] p-10 shadow-2xl border-b-8 border-primary flex flex-col items-center text-center">
                <div class="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 rounded-[2rem] border-4 border-white dark:border-[#1a1c20] overflow-hidden bg-primary shadow-xl">
                  <img :src="testimonial.avatar" :alt="testimonial.name" class="w-full h-full object-cover" draggable="false">
                </div>
                <div class="mt-10">
                  <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                    {{ locale === 'ar' ? testimonial.name : testimonial.name_en }}
                  </h3>
                  <p class="text-primary font-bold text-sm mb-6">
                    {{ locale === 'ar' ? testimonial.role : testimonial.role_en }}
                  </p>
                  <div class="flex justify-center gap-1 text-primary mb-8 text-xs">
                    <i v-for="star in 5" :key="star" class="fas fa-star"></i>
                  </div>
                  <div class="relative">
                    <i class="fas fa-quote-right absolute -top-4 -right-2 text-primary/10 text-4xl"></i>
                    <p class="text-gray-600 dark:text-gray-300 font-medium leading-relaxed italic">
                      "{{ locale === 'ar' ? testimonial.content : testimonial.content_en }}"
                    </p>
                    <i class="fas fa-quote-left absolute -bottom-4 -left-2 text-primary/10 text-4xl"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="flex justify-center items-center gap-8 mt-10">
          <button @click="prevTestimonial" class="nav-btn">
            <i :class="['fas', locale === 'ar' ? 'fa-chevron-right' : 'fa-chevron-left']"></i>
          </button>
          
          <div class="w-64 h-1.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div class="h-full bg-primary transition-all duration-500" :style="{ width: progressWidth + '%' }"></div>
          </div>

          <button @click="nextTestimonial" class="nav-btn">
            <i :class="['fas', locale === 'ar' ? 'fa-chevron-left' : 'fa-chevron-right']"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@reference "../../style.css";

.text-primary { color: #FF8C00; }
.bg-primary { background-color: #FF8C00; }
.border-primary { border-color: #FF8C00; }

.nav-btn {
  @apply w-12 h-12 rounded-2xl bg-white dark:bg-[#24262b] text-primary shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95;
}

img {
  user-drag: none;
  -webkit-user-drag: none;
}
</style>
