<script setup lang="ts">
import { Blocks, Database, Network } from 'lucide-vue-next'

const pillars = [
  {
    icon: Blocks,
    title: 'Enterprise Solutions',
    description: 'Expert architecture, system design, and scaling solutions for businesses tackling hard technical challenges across the continent.',
    cta: 'Work With Us',
    ctaLink: '#contact'
  },
  {
    icon: Database,
    title: 'Open Data Hub',
    description: 'Access localized datasets built for African markets. Contribute, explore, and leverage high-quality data to power your applications.',
    cta: 'Explore Datasets',
    ctaLink: '#datasets'
  },
  {
    icon: Network,
    title: 'Innovation Platform',
    description: 'Join a community of builders shipping innovative projects. Showcase your work, collaborate, and connect with the ecosystem.',
    cta: 'Join the Platform',
    ctaLink: '#platform'
  }
]

const projects = [
  {
    name: 'Actuneo',
    description: 'AI-powered actuarial analytics platform for insurance markets.',
    tags: ['AI/ML', 'Fintech', 'Analytics'],
    link: '#'
  },
  {
    name: 'DataBridge',
    description: 'Open-source data pipeline framework optimized for low-bandwidth environments.',
    tags: ['Open Source', 'Infrastructure'],
    link: '#'
  },
  {
    name: 'PayFlow',
    description: 'Cross-border payment infrastructure for emerging markets.',
    tags: ['Payments', 'API'],
    link: '#'
  }
]
</script>

<template>
  <div>
    <UiNavBar />
    
    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-black to-black" />
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-slate/5 to-transparent rounded-full blur-3xl" />
      
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <UiAnimateOnScroll animation="fade-up" :duration="800">
          <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            The Infrastructure for<br />
            <span class="text-slate">African Innovation</span>
          </h1>
        </UiAnimateOnScroll>
        
        <UiAnimateOnScroll animation="fade-up" :delay="200" :duration="800">
          <p class="text-lg md:text-xl text-slate max-w-2xl mx-auto mb-10">
            Enterprise consulting. Open data. Community-driven innovation. 
            Three pillars powering the next generation of African technology.
          </p>
        </UiAnimateOnScroll>
        
        <UiAnimateOnScroll animation="fade-up" :delay="400" :duration="800">
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UiPrimaryButton variant="large">
              Work With Us
            </UiPrimaryButton>
            <UiGhostButton variant="large">
              Join the Platform
            </UiGhostButton>
          </div>
        </UiAnimateOnScroll>

        <!-- Scroll indicator -->
        <div class="mt-20 animate-bounce">
          <svg class="w-6 h-6 mx-auto text-slate" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Flywheel Section -->
    <section id="flywheel" class="py-20 bg-charcoal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UiAnimateOnScroll animation="fade-up">
          <UiSectionHeading
            title="The Flywheel Effect"
            subtitle="Each pillar strengthens the others, creating a self-reinforcing cycle of growth and innovation."
            centered
            class="mb-16"
          />
        </UiAnimateOnScroll>
        
        <UiAnimateOnScroll animation="scale" :delay="200">
          <SectionsFlywheel />
        </UiAnimateOnScroll>
        
        <UiAnimateOnScroll animation="fade-up" :delay="400">
          <p class="text-center text-slate text-sm mt-12 max-w-xl mx-auto">
            Enterprise consulting funds data initiatives. Open data powers community projects. 
            Successful projects attract more enterprise clients. The cycle accelerates.
          </p>
        </UiAnimateOnScroll>
      </div>
    </section>

    <!-- Pillars Section -->
    <section id="pillars" class="py-20 bg-black">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UiAnimateOnScroll animation="fade-up">
          <UiSectionHeading
            title="Three Pillars. One Ecosystem."
            subtitle="A unified platform connecting enterprise expertise, open data, and grassroots innovation."
            centered
            class="mb-16"
          />
        </UiAnimateOnScroll>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiAnimateOnScroll
            v-for="(pillar, index) in pillars"
            :key="pillar.title"
            animation="fade-up"
            :delay="index * 150"
          >
            <UiPillarCard
              :icon="pillar.icon"
              :title="pillar.title"
              :description="pillar.description"
              :cta="pillar.cta"
              :cta-link="pillar.ctaLink"
            />
          </UiAnimateOnScroll>
        </div>
      </div>
    </section>

    <!-- Projects Showcase Section -->
    <section id="projects" class="py-20 bg-charcoal">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <UiAnimateOnScroll animation="fade-up">
          <UiSectionHeading
            title="Featured Projects"
            subtitle="Discover what's being built on the platform."
            centered
            class="mb-16"
          />
        </UiAnimateOnScroll>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UiAnimateOnScroll
            v-for="(project, index) in projects"
            :key="project.name"
            animation="fade-up"
            :delay="index * 150"
          >
            <UiProjectCard
              :name="project.name"
              :description="project.description"
              :tags="project.tags"
              :link="project.link"
            />
          </UiAnimateOnScroll>
        </div>
        
        <UiAnimateOnScroll animation="fade-up" :delay="450">
          <div class="text-center mt-12">
            <UiGhostButton>
              View All Projects
            </UiGhostButton>
          </div>
        </UiAnimateOnScroll>
      </div>
    </section>

    <UiFooter />
    <UiBackToTop />
  </div>
</template>
