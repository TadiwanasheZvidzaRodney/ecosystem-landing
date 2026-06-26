<script setup lang="ts">
defineProps<{
  size?: number
  showText?: boolean
}>()
</script>

<template>
  <div class="flex items-center gap-3">
    <!-- Logo Mark -->
    <svg
      :width="size || 40"
      :height="size || 40"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Bottom layer (darkest) -->
      <path
        d="M50 85 L15 65 L15 60 L50 80 L85 60 L85 65 Z"
        fill="#6B7280"
      />
      
      <!-- Middle layer -->
      <path
        d="M50 70 L15 50 L15 45 L50 65 L85 45 L85 50 Z"
        fill="#9CA3AF"
      />
      
      <!-- Top layer with S pattern -->
      <g fill="none" stroke="#D1D5DB" stroke-width="2">
        <!-- Outer frame -->
        <path d="M50 55 L20 38 L20 25 L50 42 L80 25 L80 38 Z" />
        
        <!-- S pattern - top part -->
        <path d="M35 32 L50 40 L65 32" />
        <path d="M40 28 L50 34 L60 28" />
        
        <!-- S pattern - bottom connectors -->
        <path d="M45 25 L50 28 L55 25" />
      </g>
      
      <!-- Glow effect for top layer -->
      <path
        d="M50 55 L20 38 L20 25 L50 42 L80 25 L80 38 Z"
        fill="none"
        stroke="#FAFAFA"
        stroke-width="1"
        opacity="0.3"
      />
    </svg>
    
    <!-- Text -->
    <span v-if="showText" class="text-white font-bold text-xl tracking-tight">
      Stratus
    </span>
  </div>
</template>
