import { reactive, watchEffect } from 'vue'

export const themeStore = reactive({
  isDark: false,

  toggleTheme() {
    this.isDark = !this.isDark
    this.applyTheme()
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
  },

  initTheme() {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    this.isDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    this.applyTheme()
  },

  applyTheme() {
    if (this.isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
})

export default themeStore
