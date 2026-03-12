<template>
  <div class="text-center max-w-3xl mx-auto mb-12">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg md:text-xl text-gray-600 dark:text-gray-400">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>
