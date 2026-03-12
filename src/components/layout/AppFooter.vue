<template>
  <footer dir="rtl" class="relative pt-12 pb-6 overflow-hidden transition-all duration-500 border-t border-[#FF8C00]/20 bg-[#f4f4f2] dark:bg-[#0a0a0b]">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-5 left-[5%] text-[#FF8C00] opacity-30 text-7xl drop-shadow-[0_0_15px_rgba(255,140,0,0.5)]" style="transform: translateY(-6.90181px) translateZ(0px);">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M32,224H64V416H32A31.96166,31.96166,0,0,1,0,384V256A31.96166,31.96166,0,0,1,32,224Zm512-48V448a64.06328,64.06328,0,0,1-64,64H160a64.06328,64.06328,0,0,1-64-64V176a79.974,79.974,0,0,1,80-80H288V32a32,32,0,0,1,64,0V96H464A79.974,79.974,0,0,1,544,176ZM264,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,264,256Zm-8,128H192v32h64Zm96,0H288v32h64ZM456,256a40,40,0,1,0-40,40A39.997,39.997,0,0,0,456,256Zm-8,128H384v32h64ZM640,256V384a31.96166,31.96166,0,0,1-32,32H576V224h32A31.96166,31.96166,0,0,1,640,256Z"></path>
        </svg>
      </div>
      <div class="absolute bottom-10 right-[5%] text-[#FF8C00] text-5xl opacity-30 drop-shadow-[0_0_10px_#FF8C00]" style="transform: scale(1.00271) translateZ(0px);">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
          <path d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path>
        </svg>
      </div>
    </div>
    
    <div class="container mx-auto px-6 md:px-24 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-8 text-center lg:text-right">
        <!-- About Section -->
        <div class="lg:col-span-4 space-y-4">
          <router-link to="/" aria-label="Home" class="text-4xl font-black text-black dark:text-white tracking-tighter no-underline group">
            كريم جمال<span class="text-[#FF8C00] group-hover:drop-shadow-[0_0_8px_#FF8C00] transition-all">.</span>
          </router-link>
          <p class="text-gray-500 dark:text-gray-400 font-bold text-xs leading-relaxed max-w-sm mx-auto lg:mx-0">
            نصمم المستقبل بروح برمجية وفكر إبداعي. كريم جمال - مطور واجهات مستخدم محترف يوفر حلولاً تقنية متكاملة.
          </p>
          <div class="flex justify-center lg:justify-start gap-2 flex-wrap">
            <a href="https://www.facebook.com/profile.php?id=100004389496616" target="_blank" rel="noopener noreferrer" aria-label="Visit my Facebook profile" class="w-9 h-9 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-lg border-none no-underline cursor-pointer transition-all shadow-sm" style="color: rgb(24, 119, 242);">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/karim-gamal-482097248" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" class="w-9 h-9 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-lg border-none no-underline cursor-pointer transition-all shadow-sm" style="color: rgb(10, 102, 194);">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
              </svg>
            </a>
            <a href="https://wa.me/2001021891641" target="_blank" rel="noopener noreferrer" aria-label="Visit my WhatsApp profile" class="w-9 h-9 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-lg border-none no-underline cursor-pointer transition-all shadow-sm" style="color: rgb(37, 211, 102);">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
              </svg>
            </a>
            <a href="https://github.com/karim-gamal-wd" target="_blank" rel="noopener noreferrer" aria-label="Visit my GitHub profile" class="w-9 h-9 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-lg border-none no-underline cursor-pointer transition-all shadow-sm" style="color: rgb(51, 51, 51);">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
              </svg>
            </a>
            <a href="https://t.me/+201021891641" target="_blank" rel="noopener noreferrer" aria-label="Visit my Telegram profile" class="w-9 h-9 bg-white dark:bg-white/10 rounded-xl flex items-center justify-center text-lg border-none no-underline cursor-pointer transition-all shadow-sm" style="color: rgb(0, 136, 204);">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"></path>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="lg:col-span-3">
          <h4 class="text-black dark:text-white font-black text-lg mb-6 flex items-center justify-center lg:justify-start gap-2">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-[#FF8C00] text-sm" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M225.38 233.37c-12.5 12.5-12.5 32.76 0 45.25 12.49 12.5 32.76 12.5 45.25 0 12.5-12.5 12.5-32.76 0-45.25-12.5-12.49-32.76-12.49-45.25 0zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm126.14 148.05L308.17 300.4a31.938 31.938 0 0 1-15.77 15.77l-144.34 65.97c-16.65 7.61-33.81-9.55-26.2-26.2l65.98-144.35a31.938 31.938 0 0 1 15.77-15.77l144.34-65.97c16.65-7.6 33.8 9.55 26.19 26.2z"></path>
            </svg>
            روابط سريعة
          </h4>
          <ul class="space-y-2 font-bold text-gray-500 dark:text-gray-400 p-0 list-none">
            <li>
              <a href="#services" aria-label="خدماتي" class="relative group hover:text-[#FF8C00] text-sm transition-colors no-underline inline-block">
                خدماتي<span class="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#about" aria-label="معلومات عني" class="relative group hover:text-[#FF8C00] text-sm transition-colors no-underline inline-block">
                معلومات عني<span class="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#projects" aria-label="معرض أعمالي" class="relative group hover:text-[#FF8C00] text-sm transition-colors no-underline inline-block">
                معرض أعمالي<span class="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#articles" aria-label="المقالات" class="relative group hover:text-[#FF8C00] text-sm transition-colors no-underline inline-block">
                المقالات<span class="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
            <li>
              <a href="#testimonials" aria-label="آراء العملاء" class="relative group hover:text-[#FF8C00] text-sm transition-colors no-underline inline-block">
                آراء العملاء<span class="absolute bottom-0 right-0 w-0 h-0.5 bg-[#FF8C00] transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="lg:col-span-5">
          <div class="bg-white/40 dark:bg-white/5 backdrop-blur-xl p-6 rounded-[30px] border border-[#FF8C00]/10 shadow-xl">
            <h4 class="text-black dark:text-white font-black text-lg mb-4 flex items-center justify-center lg:justify-start gap-2">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" class="text-[#FF8C00] text-sm" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
              </svg>
              تواصل مباشر
            </h4>
            <div class="space-y-4 flex flex-col items-center lg:items-start">
              <a href="mailto:karimgamal.wd@gmail.com" aria-label="إيميل: karimgamal.wd@gmail.com" class="flex items-center gap-3 group no-underline">
                <div class="w-10 h-10 bg-[#FF8C00]/10 text-[#FF8C00] rounded-xl flex items-center justify-center text-base group-hover:bg-[#FF8C00] group-hover:text-white transition-all">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"></path>
                  </svg>
                </div>
                <span class="font-bold text-black dark:text-white text-xs tracking-tight">karimgamal.wd@gmail.com</span>
              </a>
              <a href="tel:01021891641" aria-label="هاتف: 01021891641" class="flex items-center gap-3 group no-underline">
                <div class="w-10 h-10 bg-[#FF8C00]/10 text-[#FF8C00] rounded-xl flex items-center justify-center text-base group-hover:bg-[#FF8C00] group-hover:text-white transition-all">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                  </svg>
                </div>
                <span class="font-bold text-black dark:text-white text-xs tracking-tight">01021891641</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Section -->
      <div class="pt-6 border-t border-gray-300 dark:border-white/5 flex flex-col items-center gap-4">
        <div class="text-center font-black text-sm text-gray-600 dark:text-gray-400 tracking-wide">
          تم التصميم والتطوير بواسطة <span class="text-[#FF8C00] drop-shadow-[0_0_5px_rgba(255,140,0,0.3)]">كريم جمال</span> © 2026
        </div>
        <button 
          @click="scrollToTop"
          aria-label="العودة للأعلى" 
          class="w-12 h-12 bg-[#FF8C00] text-white rounded-full flex items-center justify-center shadow-lg cursor-pointer border-none outline-none hover:bg-[#e67e00] transition-all"
        >
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" aria-hidden="true" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
          </svg>
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
