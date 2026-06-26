<script setup lang="ts">
defineProps<{
  name: string
  description: string
  tags?: string[]
  link?: string
}>()
</script>

<template>
  <a
    :href="link || '#'"
    class="block bg-charcoal p-6 rounded-lg transition-all duration-300 hover:translate-y-[-4px] group"
  >
    <h4 class="text-lg font-bold text-white mb-2 group-hover:text-slate transition-colors">
      {{ name }}
    </h4>
    
    <p class="text-slate text-sm leading-relaxed mb-4">
      {{ description }}
    </p>
    
    <div v-if="tags && tags.length" class="flex flex-wrap gap-2">
      <span
        v-for="tag in tags"
        :key="tag"
        class="text-xs px-2 py-1 bg-black text-slate rounded"
      >
        {{ tag }}
      </span>
    </div>
  </a>
</template>
