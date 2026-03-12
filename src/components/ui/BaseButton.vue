<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])

const buttonClasses = computed(() => {
  const baseClasses = 'inline-flex items-center justify-center font-bold transition-all duration-300 rounded-xl border shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg'
  }
  
  const variantClasses = {
    primary: 'bg-[#FF8C00] text-white border-[#FF8C00] hover:bg-[#FF7700] hover:border-[#FF7700] hover:shadow-lg hover:shadow-orange-500/20 focus:ring-orange-500',
    secondary: 'bg-white dark:bg-[#24262b] text-gray-800 dark:text-gray-300 border-gray-200 dark:border-white/10 hover:border-orange-500/50 hover:shadow-md focus:ring-orange-500',
    outline: 'bg-transparent text-[#FF8C00] border-[#FF8C00] hover:bg-[#FF8C00] hover:text-white focus:ring-orange-500'
  }
  
  return [
    baseClasses,
    sizeClasses[props.size],
    variantClasses[props.variant],
    props.fullWidth ? 'w-full' : '',
    props.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
  ].filter(Boolean).join(' ')
})
</script>
