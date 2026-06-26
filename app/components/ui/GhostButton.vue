<script setup lang="ts">
defineProps<{
  variant?: 'default' | 'large'
}>()
</script>

<template>
  <button
    class="inline-flex items-center justify-center border border-white bg-transparent text-white font-medium transition-all duration-200 hover:bg-white hover:text-black"
    :class="{
      'px-6 py-3 text-sm': variant !== 'large',
      'px-8 py-4 text-base': variant === 'large'
    }"
  >
    <slot />
  </button>
</template>
