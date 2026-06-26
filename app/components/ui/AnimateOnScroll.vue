<script setup lang="ts">
interface Props {
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'fade' | 'scale'
  delay?: number
  duration?: number
}

const props = withDefaults(defineProps<Props>(), {
  animation: 'fade-up',
  delay: 0,
  duration: 600,
})

const { elementRef, isVisible } = useScrollAnimation()

const animationClasses = computed(() => {
  const base = 'transition-all ease-out'
  
  if (!isVisible.value) {
    switch (props.animation) {
      case 'fade-up':
        return `${base} opacity-0 translate-y-8`
      case 'fade-down':
        return `${base} opacity-0 -translate-y-8`
      case 'fade-left':
        return `${base} opacity-0 translate-x-8`
      case 'fade-right':
        return `${base} opacity-0 -translate-x-8`
      case 'scale':
        return `${base} opacity-0 scale-95`
      case 'fade':
      default:
        return `${base} opacity-0`
    }
  }
  
  return `${base} opacity-100 translate-y-0 translate-x-0 scale-100`
})

const style = computed(() => ({
  transitionDuration: `${props.duration}ms`,
  transitionDelay: `${props.delay}ms`,
}))
</script>

<template>
  <div ref="elementRef" :class="animationClasses" :style="style">
    <slot />
  </div>
</template>
