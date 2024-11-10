<template>
  <!-- Desktop Pricing Card -->
  <div class="hidden lg:block pr-16">
    <div class="bg-white rounded-lg shadow-xl transition-opacity duration-300">
      <!-- Video Preview -->
      <div class="relative">
        <img 
          src="../public/aws-cert-preview.png" 
          alt="Course Preview"
          class="w-full h-64 object-cover rounded-t-lg p-0.5"
        />
        
      </div>

      <!-- <PricingTabs /> -->
      <div>
        <CoursePricingTab v-model="activeTab" />
          <ClientOnly>
            <CourseSubscriptionTab  v-if="activeTab === 'personal'" />
            <TeamsCard v-else />
          </ClientOnly>
      </div>

 
    </div>
  </div>
</template>

<script setup>
import { useScroll } from '@vueuse/core'

const { y } = useScroll(window)

const activeTab = useState('activeTab', () => 'personal')

// Add scroll-based opacity transition if needed
</script>