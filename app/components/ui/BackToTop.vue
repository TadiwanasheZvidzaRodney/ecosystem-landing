<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'

const isVisible = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const handleScroll = () => {
  isVisible.value = window.scrollY > 500
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    leave-active-class="transition-all duration-300 ease-in"
    enter-from-class="opacity-0 translate-y-4"
    leave-to-class="opacity-0 translate-y-4"
  >
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="fixed bottom-8 right-8 z-40 p-3 bg-charcoal border border-slate/20 text-white rounded-full shadow-lg hover:bg-slate/20 transition-all duration-200 hover:scale-110"
      aria-label="Back to top"
    >
      <ArrowUp :size="20" />
    </button>
  </Transition>
</template>
