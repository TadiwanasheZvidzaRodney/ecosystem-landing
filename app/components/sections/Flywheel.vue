<script setup lang="ts">
import { Blocks, Database, Network } from 'lucide-vue-next'

const activeSection = ref<string | null>(null)

const sections = [
  {
    id: 'enterprise',
    title: 'Enterprise',
    subtitle: 'Consulting',
    icon: Blocks,
    angle: 270, // Top
    color: '#FAFAFA',
  },
  {
    id: 'data',
    title: 'Data Hub',
    subtitle: 'Open Data',
    icon: Database,
    angle: 30, // Bottom right
    color: '#FAFAFA',
  },
  {
    id: 'innovation',
    title: 'Innovation',
    subtitle: 'Community',
    icon: Network,
    angle: 150, // Bottom left
    color: '#FAFAFA',
  },
]

const connections = [
  { from: 'enterprise', to: 'data', label: 'Funds & Expertise' },
  { from: 'data', to: 'innovation', label: 'Powers Projects' },
  { from: 'innovation', to: 'enterprise', label: 'Drives Growth' },
]

const getPosition = (angle: number, radius: number) => {
  const rad = (angle * Math.PI) / 180
  return {
    x: 200 + radius * Math.cos(rad),
    y: 200 + radius * Math.sin(rad),
  }
}

const setActive = (id: string | null) => {
  activeSection.value = id
}
</script>

<template>
  <div class="relative w-full max-w-xl mx-auto">
    <svg viewBox="0 0 400 400" class="w-full h-auto">
      <!-- Outer ring -->
      <circle
        cx="200"
        cy="200"
        r="160"
        fill="none"
        stroke="#121212"
        stroke-width="2"
        class="transition-all duration-500"
      />
      
      <!-- Animated flow ring -->
      <circle
        cx="200"
        cy="200"
        r="160"
        fill="none"
        stroke="#A1A1AA"
        stroke-width="2"
        stroke-dasharray="20 10"
        class="animate-spin-slow"
      />

      <!-- Connection arrows -->
      <g v-for="(conn, index) in connections" :key="conn.from + conn.to">
        <defs>
          <marker
            :id="`arrow-${index}`"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
            markerUnits="strokeWidth"
          >
            <path d="M0,0 L0,6 L9,3 z" fill="#A1A1AA" />
          </marker>
        </defs>
        
        <!-- Curved connection paths -->
        <path
          :d="`M ${getPosition(sections.find(s => s.id === conn.from)!.angle, 120).x} ${getPosition(sections.find(s => s.id === conn.from)!.angle, 120).y} 
              Q 200 200 
              ${getPosition(sections.find(s => s.id === conn.to)!.angle, 120).x} ${getPosition(sections.find(s => s.id === conn.to)!.angle, 120).y}`"
          fill="none"
          stroke="#A1A1AA"
          stroke-width="1"
          stroke-dasharray="4 4"
          :marker-end="`url(#arrow-${index})`"
          class="transition-all duration-300"
          :class="{ 'stroke-white stroke-2': activeSection === conn.from || activeSection === conn.to }"
        />
      </g>

      <!-- Center circle -->
      <circle
        cx="200"
        cy="200"
        r="50"
        fill="#121212"
        stroke="#A1A1AA"
        stroke-width="1"
        class="transition-all duration-300"
      />
      <text
        x="200"
        y="195"
        text-anchor="middle"
        fill="#FAFAFA"
        font-size="12"
        font-weight="bold"
      >
        STRATUS
      </text>
      <text
        x="200"
        y="212"
        text-anchor="middle"
        fill="#A1A1AA"
        font-size="10"
      >
        Flywheel
      </text>

      <!-- Pillar nodes -->
      <g
        v-for="section in sections"
        :key="section.id"
        class="cursor-pointer transition-all duration-300"
        :transform="`translate(${getPosition(section.angle, 130).x}, ${getPosition(section.angle, 130).y})`"
        @mouseenter="setActive(section.id)"
        @mouseleave="setActive(null)"
      >
        <!-- Node background -->
        <circle
          r="45"
          fill="#121212"
          stroke="#A1A1AA"
          stroke-width="1"
          class="transition-all duration-300"
          :class="{ 'fill-charcoal stroke-white stroke-2': activeSection === section.id }"
        />
        
        <!-- Node content positioned at origin (already translated) -->
        <foreignObject x="-35" y="-35" width="70" height="70">
          <div class="w-full h-full flex flex-col items-center justify-center text-center">
            <component
              :is="section.icon"
              :size="24"
              class="text-white mb-1 transition-transform duration-300"
              :class="{ 'scale-110': activeSection === section.id }"
            />
            <span class="text-white text-xs font-bold leading-tight">{{ section.title }}</span>
            <span class="text-slate text-[10px] leading-tight">{{ section.subtitle }}</span>
          </div>
        </foreignObject>
      </g>
    </svg>

    <!-- Connection labels (shown on hover) -->
    <div
      v-for="conn in connections"
      :key="`label-${conn.from}-${conn.to}`"
      class="absolute text-xs text-slate text-center transition-opacity duration-300 pointer-events-none"
      :class="{
        'opacity-100': activeSection === conn.from || activeSection === conn.to,
        'opacity-0': activeSection !== conn.from && activeSection !== conn.to && activeSection !== null,
        'opacity-50': activeSection === null
      }"
      :style="{
        left: '50%',
        top: conn.from === 'enterprise' ? '35%' : conn.from === 'data' ? '70%' : '70%',
        transform: `translateX(${conn.from === 'enterprise' ? '20%' : conn.from === 'data' ? '-120%' : '20%'}) translateY(-50%)`
      }"
    >
      {{ conn.label }}
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.animate-spin-slow {
  transform-origin: center;
  transform-box: fill-box;
  animation: spin 30s linear infinite;
}
</style>
