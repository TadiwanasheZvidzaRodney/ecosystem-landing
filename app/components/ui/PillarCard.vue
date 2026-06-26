<script setup lang="ts">
import type { Component } from 'vue'

defineProps<{
  icon: Component
  title: string
  description: string
  cta?: string
  ctaLink?: string
}>()
</script>

<template>
  <div class="bg-charcoal p-8 rounded-lg transition-all duration-300 hover:translate-y-[-4px]">
    <div class="w-12 h-12 flex items-center justify-center text-white mb-6">
      <component :is="icon" :size="32" :stroke-width="1.5" />
    </div>
    
    <h3 class="text-xl font-bold text-white mb-4">
      {{ title }}
    </h3>
    
    <p class="text-slate leading-relaxed mb-6">
      {{ description }}
    </p>
    
    <a
      v-if="cta"
      :href="ctaLink || '#'"
      class="inline-flex items-center text-white text-sm font-medium hover:text-slate transition-colors"
    >
      {{ cta }}
      <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</template>
