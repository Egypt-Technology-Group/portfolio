import { reactive } from 'vue'

export const themeStore = reactive({
  isDark: false,

  initTheme() {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    this.isDark = savedTheme === 'dark' || (!savedTheme && prefersDark)
    this.applyTheme()
  },

  toggleTheme() {
    this.isDark = !this.isDark
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light')
    this.applyTheme()
  },

  applyTheme() {
    const html = document.documentElement
    if (this.isDark) {
      html.classList.add('dark')
      html.style.colorScheme = 'dark'
    } else {
      html.classList.remove('dark')
      html.style.colorScheme = 'light'
    }
  }
})

export default themeStore
