// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  spaLoadingTemplate: true,
  app: {
    head: {
      title: 'Stratus - The Infrastructure for African Innovation',
      meta: [
        { name: 'description', content: 'Enterprise consulting, open data, and community-driven innovation. Three pillars powering the next generation of African technology.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#000000' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://stratuslanding.vercel.app/' },
        { property: 'og:title', content: 'Stratus - The Infrastructure for African Innovation' },
        { property: 'og:description', content: 'Enterprise consulting, open data, and community-driven innovation. Three pillars powering the next generation of African technology.' },
        { property: 'og:image', content: 'https://stratuslanding.vercel.app/stratuslogo.png' },
        { property: 'og:image:width', content: '512' },
        { property: 'og:image:height', content: '512' },
        { property: 'og:site_name', content: 'Stratus' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Stratus - The Infrastructure for African Innovation' },
        { name: 'twitter:description', content: 'Enterprise consulting, open data, and community-driven innovation. Three pillars powering the next generation of African technology.' },
        { name: 'twitter:image', content: 'https://stratuslanding.vercel.app/stratuslogo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/stratuslogo.png' },
        { rel: 'apple-touch-icon', href: '/stratuslogo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap' },
      ],
    },
  },
})
