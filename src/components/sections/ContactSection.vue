<template>
  <section id="contact" class="min-h-screen bg-[#f4f4f2] dark:bg-[#1a1c20] relative overflow-hidden py-16 px-1 flex items-center justify-center transition-colors duration-500" dir="rtl">
    <!-- Background Decorations -->
    <div class="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div class="absolute inset-0 opacity-[0.1] dark:opacity-[0.07] bg-pattern"></div>
      <div class="absolute inset-0">
        <div class="absolute top-[15%] left-[10%] w-32 h-32 border-2 border-[#FF8C00]/20 rounded-full blur-[1px] decoration-shape-1"></div>
        <div class="absolute bottom-[20%] right-[15%] w-48 h-48 border-2 border-[#FF8C00]/10 rounded-xl decoration-shape-2"></div>
      </div>
      <div class="absolute inset-0 opacity-30 bg-radial-gradient"></div>
    </div>

    <div class="w-full max-w-7xl relative z-10 px-1 md:px-4">
      <!-- Section Header -->
      <div class="text-center mb-16 header-visible">
        <h2 class="text-5xl md:text-6xl font-black text-black dark:text-white mb-4 transition-colors">تواصل معي</h2>
        <div class="flex justify-center items-center gap-2">
          <div class="w-20 h-2 bg-orange-500 rounded-full shadow-orange-500 shadow-lg"></div>
          <div class="w-4 h-4 bg-black dark:bg-white rotate-45 transition-colors"></div>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-12 gap-6 items-stretch">
        <!-- Contact Form -->
        <div class="lg:col-span-7 bg-white dark:bg-[#24262b] p-5 md:p-12 rounded-[40px] shadow-2xl dark:shadow-none border-t-4 border-[#FF8C00] relative overflow-hidden transition-all" style="opacity: 1; transform: none;">
          <h3 class="text-3xl font-black text-black dark:text-white mb-8 relative z-10 flex items-center gap-4 transition-colors">
            <div class="p-3 bg-[#FF8C00] rounded-2xl text-white">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"></path>
              </svg>
            </div>
            أرسل لي رسالة
          </h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6 relative z-10">
            <div class="grid md:grid-cols-2 gap-5">
              <div class="flex flex-col gap-2 w-full">
                <label class="sr-only">الاسم</label>
                <input 
                  v-model="form.name" 
                  name="name" 
                  type="text" 
                  required="" 
                  placeholder="إسمك الكريم" 
                  class="w-full h-14 bg-gray-50 dark:bg-[#111214] rounded-xl px-6 text-black dark:text-white font-bold outline-none border-2 border-transparent focus:border-[#FF8C00] transition-all shadow-inner"
                >
              </div>
              <div class="flex flex-col gap-2 w-full">
                <label class="sr-only">البريد</label>
                <input 
                  v-model="form.email" 
                  name="email" 
                  type="email" 
                  required="" 
                  placeholder="بريدك الإلكتروني" 
                  class="w-full h-14 bg-gray-50 dark:bg-[#111214] rounded-xl px-6 text-black dark:text-white font-bold outline-none border-2 border-transparent focus:border-[#FF8C00] transition-all shadow-inner"
                >
              </div>
            </div>
            
            <div class="flex flex-col gap-2 w-full">
              <label class="sr-only">الموضوع</label>
              <input 
                v-model="form.subject" 
                name="subject" 
                type="text" 
                required="" 
                placeholder="عنوان الرسالة" 
                class="w-full h-14 bg-gray-50 dark:bg-[#111214] rounded-xl px-6 text-black dark:text-white font-bold outline-none border-2 border-transparent focus:border-[#FF8C00] transition-all shadow-inner"
              >
            </div>
            
            <div class="flex flex-col gap-2 w-full">
              <label class="sr-only">الرسالة</label>
              <textarea 
                v-model="form.message" 
                name="message" 
                required="" 
                placeholder="أخبرني كيف يمكنني مساعدتك" 
                class="w-full h-40 bg-gray-50 dark:bg-[#111214] rounded-2xl p-6 text-black dark:text-white font-bold outline-none border-2 border-transparent focus:border-[#FF8C00] transition-all shadow-inner"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              class="w-full h-16 bg-orange-500 text-white rounded-2xl font-black text-xl flex items-center justify-center gap-4 shadow-orange-500/30 shadow-lg transition-all hover:scale-105"
              tabindex="0"
            >
              إرسال عبر واتساب
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </button>
          </form>
        </div>

        <!-- Contact Info & Social Links -->
        <div class="lg:col-span-5 flex flex-col justify-center bg-white dark:bg-[#24262b] p-6 md:p-10 rounded-[40px] shadow-2xl dark:shadow-none border-b-4 border-[#FF8C00]" style="opacity: 1; transform: none;">
          <div class="text-center lg:text-right mb-10">
            <div class="w-20 h-20 bg-gray-50 dark:bg-[#1a1c20] rounded-3xl shadow-inner flex items-center justify-center mb-6 mx-auto lg:mx-0 border-2 border-[#FF8C00]/20">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(255, 140, 0);">
                <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
              </svg>
            </div>
            <h3 class="text-4xl font-black text-black dark:text-white mb-4">ابقى على تواصل</h3>
            <p class="text-gray-500 dark:text-gray-300 font-bold leading-relaxed text-lg">أنا متاح دائماً لمناقشة المشاريع البرمجية.</p>
          </div>
          
          <nav class="grid grid-cols-2 gap-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="flex items-center gap-3 bg-gray-50 dark:bg-[#111214] p-4 rounded-2xl border-2 border-transparent shadow-sm cursor-pointer transition-all group no-underline hover:border-[#FF8C00] hover:scale-105"
            >
              <span class="text-2xl group-hover:scale-125 transition-transform" v-html="social.icon"></span>
              <span class="font-black text-gray-800 dark:text-gray-200 text-sm">{{ social.name }}</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const socialLinks = [
  {
    name: 'فيسبوك',
    url: 'https://www.facebook.com/profile.php?id=100004389496616',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" color="#1877F2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(24, 119, 242);"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>'
  },
  {
    name: 'لينكد',
    url: 'https://www.linkedin.com/in/karim-gamal-482097248',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#0A66C2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(10, 102, 194);"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>'
  },
  {
    name: 'واتساب',
    url: 'https://api.whatsapp.com/send/?phone=201021891641',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#25D366" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(37, 211, 102);"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg>'
  },
  {
    name: 'تليجرام',
    url: 'https://t.me/+201021891641',
    icon: '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" color="#0088cc" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="color: rgb(0, 136, 204);"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path></svg>'
  }
]

const handleSubmit = () => {
  // Create WhatsApp message
  const message = encodeURIComponent(
    `*رسالة جديدة من الموقع*\n\n` +
    `*الاسم:* ${form.value.name}\n` +
    `*البريد:* ${form.value.email}\n` +
    `*الموضوع:* ${form.value.subject}\n\n` +
    `*الرسالة:*\n${form.value.message}`
  )
  
  const whatsappUrl = `https://api.whatsapp.com/send/?phone=201021891641&text=${message}`
  window.open(whatsappUrl, '_blank')
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

// Add structured data for SEO
const addStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "تواصل معي",
    "description": "تواصل معي لمناقشة المشاريع البرمجية",
    "url": "https://karim-gamal.vercel.app/#contact"
  }
  
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

onMounted(() => {
  addStructuredData()
})
</script>

<style scoped>
/* Background patterns */
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0' fill='none' stroke='%23FF8C00' stroke-width='1'/%3E%3C/svg%3E");
  background-size: 80px 80px;
}

.bg-radial-gradient {
  background: radial-gradient(circle at 20% 30%, rgba(255, 140, 0, 0.067) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(255, 140, 0, 0.067) 0%, transparent 50%);
}

/* Header visibility */
.header-visible {
  opacity: 1;
  transform: none;
}

/* Decoration shapes */
.decoration-shape-1 {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  transform: translateX(9.35px) translateY(18.7px) rotate(275.85deg) translateZ(0px);
}

.decoration-shape-2 {
  transform: translateY(-38.7px) rotate(-220.68deg) translateZ(0px);
}
</style>
