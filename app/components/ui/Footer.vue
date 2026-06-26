<script setup lang="ts">
import { Github, Twitter, Linkedin } from 'lucide-vue-next'

const footerLinks = {
  platform: [
    { name: 'Enterprise Solutions', href: '#enterprise' },
    { name: 'Open Data Hub', href: '#data-hub' },
    { name: 'Innovation Platform', href: '#innovation' },
  ],
  resources: [
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Contribute', href: '#' },
  ],
}

const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
]
</script>

<template>
  <footer class="bg-charcoal border-t border-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div class="col-span-1">
          <h3 class="text-white font-bold text-xl mb-4">Ecosystem</h3>
          <p class="text-slate text-sm leading-relaxed mb-4">
            The infrastructure for African innovation.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="social in socialLinks"
              :key="social.name"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              class="text-slate hover:text-white transition-colors"
              :aria-label="social.name"
            >
              <component :is="social.icon" :size="20" />
            </a>
          </div>
        </div>

        <!-- Platform Links -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Platform</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.platform" :key="link.name">
              <a :href="link.href" class="text-slate text-sm hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Resources Links -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Resources</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.resources" :key="link.name">
              <a :href="link.href" class="text-slate text-sm hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company Links -->
        <div>
          <h4 class="text-white font-semibold text-sm mb-4">Company</h4>
          <ul class="space-y-2">
            <li v-for="link in footerLinks.company" :key="link.name">
              <a :href="link.href" class="text-slate text-sm hover:text-white transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-black flex flex-col md:flex-row justify-between items-center">
        <p class="text-slate text-sm">
          &copy; {{ new Date().getFullYear() }} Ecosystem. All rights reserved.
        </p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="text-slate text-sm hover:text-white transition-colors">Privacy</a>
          <a href="#" class="text-slate text-sm hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
