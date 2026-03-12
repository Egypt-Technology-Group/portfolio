<template>
  <div class="min-h-screen pt-20 bg-gray-50 dark:bg-[#1a1c20]">
    <div class="container mx-auto px-4 md:px-6 lg:px-8 py-16">
      <SectionHeading :title="t('navbar.contact')" subtitle="Get in touch and let's work together" />
      
      <div class="max-w-4xl mx-auto mt-12">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg border border-gray-100 dark:border-white/10">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send a Message</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  placeholder="Your message..."
                />
              </div>
              
              <BaseButton variant="primary" size="large" type="submit" class="w-full">
                Send Message
              </BaseButton>
            </form>
          </div>
          
          <!-- Contact Info -->
          <div class="space-y-8">
            <div class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg border border-gray-100 dark:border-white/10">
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Contact Information</h3>
              
              <div class="space-y-4">
                <div class="flex items-center space-x-4 space-x-reverse">
                  <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Email</p>
                    <p class="text-gray-900 dark:text-white">contact@example.com</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4 space-x-reverse">
                  <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Phone</p>
                    <p class="text-gray-900 dark:text-white">+20 123 456 789</p>
                  </div>
                </div>
                
                <div class="flex items-center space-x-4 space-x-reverse">
                  <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center">
                    <svg class="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p class="text-sm text-gray-600 dark:text-gray-400">Location</p>
                    <p class="text-gray-900 dark:text-white">Cairo, Egypt</p>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Social Links -->
            <div class="bg-white dark:bg-[#24262b] rounded-xl p-8 shadow-lg border border-gray-100 dark:border-white/10">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-6">Follow Me</h3>
              <div class="flex space-x-4 space-x-reverse">
                <SocialIconLink
                  href="https://github.com"
                  :icon="IconGithub"
                  label="GitHub"
                  size="large"
                  variant="orange"
                />
                <SocialIconLink
                  href="https://linkedin.com"
                  :icon="IconLinkedin"
                  label="LinkedIn"
                  size="large"
                  variant="orange"
                />
                <SocialIconLink
                  href="https://twitter.com"
                  :icon="IconTwitter"
                  label="Twitter"
                  size="large"
                  variant="orange"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseButton from '@/components/ui/BaseButton.vue'
import SocialIconLink from '@/components/ui/SocialIconLink.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import IconGithub from '@/components/ui/IconGithub.vue'
import IconLinkedin from '@/components/ui/IconLinkedin.vue'
import IconTwitter from '@/components/ui/IconTwitter.vue'

const { t } = useI18n()

const form = ref({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // Handle form submission here
  alert('Thank you for your message! I will get back to you soon.')
  form.value = { name: '', email: '', message: '' }
}
</script>
