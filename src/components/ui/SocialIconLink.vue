<template>
  <a
    :href="href"
    :aria-label="label"
    target="_blank"
    rel="noopener noreferrer"
    :class="linkClasses"
  >
    <component :is="icon" :class="iconClasses" />
  </a>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  href: {
    type: String,
    required: true
  },
  icon: {
    type: [Object, Function],
    required: true
  },
  label: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'orange', 'dark'].includes(value)
  }
})

const linkClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500'
  
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-10 h-10',
    large: 'w-12 h-12'
  }
  
  const variantClasses = {
    default: 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-[#FF8C00] hover:text-white hover:shadow-lg hover:shadow-orange-500/20',
    orange: 'bg-[#FF8C00] text-white hover:bg-[#FF7700] hover:shadow-lg hover:shadow-orange-500/20',
    dark: 'bg-gray-800 dark:bg-white/20 text-white hover:bg-gray-700 dark:hover:bg-white/30'
  }
  
  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant]
  ].join(' ')
})

const iconClasses = computed(() => {
  const sizeClasses = {
    small: 'w-4 h-4',
    medium: 'w-5 h-5',
    large: 'w-6 h-6'
  }
  
  return sizeClasses[props.size]
})
</script>
