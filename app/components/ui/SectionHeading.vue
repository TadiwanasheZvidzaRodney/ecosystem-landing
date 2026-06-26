<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  centered?: boolean
}>()
</script>

<template>
  <div :class="{ 'text-center': centered }">
    <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="text-lg md:text-xl text-slate max-w-2xl" :class="{ 'mx-auto': centered }">
      {{ subtitle }}
    </p>
  </div>
</template>
