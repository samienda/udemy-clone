<template>
    <div class="bg-white p-6">
      <div class="space-y-6">
        <div class="space-y-3">
          <div class="flex items-center gap-1">
            <img src="../public/logo-ub.svg" alt="">
            <span class="text-udemy-purple text-xl">business</span>
          </div>
          <p class="text-gray-800 text-base">
            Subscribe to this course and 27,000+ top-rated Udemy courses for your organization.
          </p>
        </div>
  
        <UButton
          class="w-full bg-udemy-purple hover:bg-udemy-purple/90"
          size="lg"
        >
          Try Udemy Business
        </UButton>
  
        <ul class="space-y-3">
          <li v-for="feature in features" :key="feature" class="flex items-center gap-2">
            <UIcon name="i-heroicons-check" class="text-gray-700 flex-shrink-0 w-5 h-5" />
            <span class="text-gray-800">{{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  const features = [
    'For teams of 2 or more users',
    '27,000+ fresh & in-demand courses',
    'Learning Engagement tools',
    'SSO and LMS Integrations'
  ]
  </script>
  