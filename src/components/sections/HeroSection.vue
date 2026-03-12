<template>
  <section id="home" class="min-h-screen relative flex flex-col-reverse xl:flex-row items-center justify-start xl:justify-center pt-12 xl:pt-0 overflow-hidden">
    <div class="absolute inset-0 z-0 pointer-events-none ">
      <svg viewBox="0 0 1440 800" fill="none" class="absolute w-full h-full">
        <path d="M1440 0 C1200 100, 800 200, 0 250" stroke="#FF8C00" stroke-width="4" stroke-opacity="0.15" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
        <path d="M1440 50 C1100 150, 700 300, 0 400" stroke="#FF8C00" stroke-width="4" stroke-opacity="0.15" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
        <path d="M1440 100 C1000 200, 600 400, 0 550" stroke="#FF8C00" stroke-width="4" stroke-opacity="0.15" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
        <path d="M1440 150 C900 250, 500 500, 0 700" stroke="#FF8C00" stroke-width="4" stroke-opacity="0.15" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
        <path d="M1440 200 C800 300, 400 600, 0 850" stroke="#FF8C00" stroke-width="4" stroke-opacity="0.15" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path>
      </svg>
    </div>
    <div class="container mx-auto px-4 z-20 relative flex flex-col items-center xl:items-start text-center xl:text-right justify-center flex-1">
      <div class="mb-2" style="opacity: 1; transform: none;">
        <h2 class="text-lg xl:text-2xl !text-gray-600 dark:!text-gray-400 mb-1 font-bold">
          أهلاً بك في مساحتي الإبداعية
        </h2>
        <h2 class="text-4xl xl:text-6xl font-black text-gray-800 dark:text-white leading-tight">
          مرحبا انا <span class="keep-orange" style="color: rgb(255, 140, 0);">كريم جمال</span>
        </h2>
      </div>
      <div class="mb-4 h-[40px] flex items-center justify-center xl:justify-start w-full">
        <h3 class="text-xl xl:text-3xl font-bold inline-flex items-center text-white">
          {{ currentText }}
          <span class="w-[3px] h-[25px] mx-1 animate-pulse" style="background-color: rgb(255, 140, 0);"></span>
        </h3>
      </div>
      <p class="max-w-sm xl:max-w-xl mb-6 xl:mb-10 text-gray-600 dark:text-gray-400 font-bold text-sm xl:text-lg leading-relaxed" style="opacity: 1; transform: none;">
        أنا مطور ويب متكامل أجمع بين قوة البناء البرمجي واحترافية تحسين محركات البحث (SEO). أركز على كتابة كود نظيف يضمن لمشروعك الصدارة.
      </p>
      <div class="flex gap-2 justify-center xl:justify-start w-full mt-[-20px] md:mt-0 mb-4">
        <a href="https://www.facebook.com/profile.php?id=100004389496616" target="_blank" rel="noopener noreferrer" aria-label="Visit my Facebook profile" class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white rounded-xl hover:scale-110 transition-all shadow-sm bg-[#1877F2]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/karim-gamal-482097248" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white rounded-xl hover:scale-110 transition-all shadow-sm bg-[#0A66C2]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
          </svg>
        </a>
        <a href="https://t.me/+201021891641" target="_blank" rel="noopener noreferrer" aria-label="Visit my Telegram profile" class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white rounded-xl hover:scale-110 transition-all shadow-sm bg-[#24A1DE]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
          </svg>
        </a>
        <a href="https://twitter.com/karimgmal4" target="_blank" rel="noopener noreferrer" aria-label="Visit my Twitter profile" class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white rounded-xl hover:scale-110 transition-all shadow-sm bg-black dark:bg-white/10">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/karim_gamal123/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram profile" class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white rounded-xl hover:scale-110 transition-all shadow-sm bg-gradient-to-tr from-[#fdf497] via-[#fd5949] to-[#d6249f]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
        </a>
        <a href="https://api.whatsapp.com/send/?phone=201021891641" target="_blank" rel="noopener noreferrer" aria-label="Visit my Whatsapp profile" class="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center text-white rounded-xl hover:scale-110 transition-all shadow-sm bg-[#25D366]">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
          </svg>
        </a>
      </div>
      <div class="flex flex-row gap-2 justify-center xl:justify-start items-center mb-6 xl:mb-0 w-full px-2">
        <a href="/contact" aria-label="Contact me" class="group flex items-center justify-center gap-2 w-[145px] md:w-[170px] h-[40px] bg-[#FF8C00] text-white font-bold rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 cursor-pointer">
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="group-hover:rotate-[15deg] transition-transform" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.00488 9.00256C5.55717 9.00256 6.00488 9.45027 6.00488 10.0026C7.63965 10.0026 9.14352 10.5629 10.3349 11.5021L12.5049 11.5026C13.837 11.5026 15.0339 12.0814 15.8579 13.0013L19.0049 13.0026C20.9972 13.0026 22.7173 14.1678 23.521 15.854C21.1562 18.9746 17.3268 21.0026 13.0049 21.0026C10.2142 21.0026 7.85466 20.3993 5.944 19.3446C5.80557 19.7281 5.43727 20.0026 5.00488 20.0026H2.00488C1.4526 20.0026 1.00488 19.5548 1.00488 19.0026V10.0026C1.00488 9.45027 1.4526 9.00256 2.00488 9.00256H5.00488ZM6.00589 12.0026L6.00488 17.0237L6.05024 17.057C7.84406 18.3175 10.183 19.0026 13.0049 19.0026C16.0089 19.0026 18.8035 17.8469 20.84 15.8731L20.9729 15.7396L20.8537 15.6392C20.3897 15.2762 19.8205 15.0509 19.2099 15.0095L19.0049 15.0026L16.8932 15.0016C16.9663 15.3235 17.0049 15.6585 17.0049 16.0026V17.0026H8.00488V15.0026L14.7949 15.0016L14.7605 14.9231C14.38 14.1295 13.593 13.5678 12.6693 13.5079L12.5049 13.5026L9.57547 13.5024C8.66823 12.577 7.40412 12.0028 6.00589 12.0026ZM4.00488 11.0026H3.00488V18.0026H4.00488V11.0026ZM13.6513 3.57794L14.0046 3.9317L14.3584 3.57794C15.3347 2.60163 16.9177 2.60163 17.894 3.57794C18.8703 4.55425 18.8703 6.13716 17.894 7.11347L14.0049 11.0026L10.1158 7.11347C9.13948 6.13716 9.13948 4.55425 10.1158 3.57794C11.0921 2.60163 12.675 2.60163 13.6513 3.57794ZM11.53 4.99215C11.3564 5.16572 11.3372 5.43514 11.4714 5.62926L11.5289 5.69819L14.0039 8.17356L16.4798 5.69926C16.6533 5.52569 16.6726 5.25627 16.5376 5.0614L16.4798 4.99215C16.3062 4.81858 16.0368 4.7993 15.8417 4.93444L15.7724 4.99236L14.0033 6.76098L12.236 4.99108L12.1679 4.93429C11.973 4.7993 11.7036 4.81858 11.53 4.99215Z"></path>
          </svg>
          <span class="text-[12px] md:text-[14px] whitespace-nowrap">دعنا نعمل معًا</span>
        </a>
        <a href="/work/CV.KARIM GAMAL.pdf" download="Karim-Gamal-CV.pdf" aria-label="Download my CV" class="group flex items-center justify-center gap-2 w-[145px] md:w-[170px] h-[40px] border-2 border-[#FF8C00] text-[#FF8C00] font-bold rounded-xl transition-all duration-300 hover:bg-[#FF8C00] hover:text-white active:scale-95">
          <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" class="group-hover:translate-y-1 transition-transform" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
          </svg>
          <span class="text-[12px] md:text-[14px] whitespace-nowrap">السيرة الذاتية</span>
        </a>
      </div>
    </div>

    <div class="relative z-10 w-[240px] h-[240px] md:w-[350px] md:h-[350px] xl:w-[500px] xl:h-[500px] flex justify-center items-center mt-10 mb-6 xl:mt-0 xl:mb-0" style="opacity: 1; transform: none;">
      <div class="absolute inset-0 bg-[#FF8C00]/20 blur-[80px] rounded-full z-0"></div>
      <div class="relative flex justify-center items-center w-full h-full pointer-events-none select-none overflow-hidden">
        <img alt="كريم جمال عبد الناصر - مطور ويب وخبير واجهات مستخدم" fetchpriority="high" width="450" height="450" decoding="async" data-nimg="1" class="object-contain w-full h-full mx-auto" sizes="(max-width: 768px) 240px, (max-width: 1200px) 350px, 450px" src="@/assets/karimgamal.avif" style="color: transparent;">
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentText = ref('')
const currentIndex = ref(0)
const isDeleting = ref(false)
const texts = [
  'مطور واجهات أمامية',
  'مطور تطبيقات ويب',
  'مطور React و Vue',
  'مطور واجهات مستخدم',
  'مطور واجهات أمامية'
]

let typingSpeed = 100
let deletingSpeed = 50
let pauseTime = 2000

const typeWriter = () => {
  const current = texts[currentIndex.value]

  if (isDeleting.value) {
    currentText.value = current.substring(0, currentText.value.length - 1)
  } else {
    currentText.value = current.substring(0, currentText.value.length + 1)
  }

  if (!isDeleting.value && currentText.value === current) {
    // Pause at end of text
    isDeleting.value = true
    setTimeout(typeWriter, pauseTime)
  } else if (isDeleting.value && currentText.value === '') {
    // Move to next text
    isDeleting.value = false
    currentIndex.value = (currentIndex.value + 1) % texts.length
    setTimeout(typeWriter, 500)
  } else {
    setTimeout(typeWriter, isDeleting.value ? deletingSpeed : typingSpeed)
  }
}

onMounted(() => {
  setTimeout(typeWriter, 1000)
})
</script>

<style scoped>
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 2s infinite;
}

.delay-1000 {
  animation-delay: 1s;
}
</style>
