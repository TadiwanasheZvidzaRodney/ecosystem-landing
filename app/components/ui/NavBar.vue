<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const navLinks = [
  { name: 'How It Works', href: '#flywheel' },
  { name: 'Solutions', href: '#pillars' },
  { name: 'Projects', href: '#projects' },
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-charcoal' 
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <a href="/" class="text-white font-bold text-xl">
          Ecosystem
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate text-sm hover:text-white transition-colors"
          >
            {{ link.name }}
          </a>
          <UiGhostButton>Contact</UiGhostButton>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden text-white"
          @click="toggleMenu"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
        >
          <Menu v-if="!isMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Navigation -->
      <div
        v-if="isMenuOpen"
        class="md:hidden py-4 border-t border-charcoal"
      >
        <div class="flex flex-col space-y-4">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            class="text-slate text-sm hover:text-white transition-colors"
            @click="isMenuOpen = false"
          >
            {{ link.name }}
          </a>
          <UiGhostButton class="w-full">Contact</UiGhostButton>
        </div>
      </div>
    </div>
  </nav>
</template>
