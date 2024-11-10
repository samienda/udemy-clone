<template>
    <div class="bg-white lg:ml-10 m-2 p-6  lg:w-3/5 border-0">
      <h2 class="text-lg font-semibold mb-4 text-black">This course includes:</h2>
      
      <div class="grid gap-4 md:grid-cols-2 text-black">
        <ul class="space-y-3">
          <li v-for="item in courseItems.slice(0, Math.ceil(courseItems.length / 2))" 
              :key="item.text" 
              class="flex items-start gap-3">
            <UIcon 
              :name="item.icon" 
              class="flex-shrink-0 w-5 h-5 text-gray-600 mt-0.5"
            />
            <span class="text-gray-700">{{ item.text }}</span>
          </li>
        </ul>
        
        <ul class="space-y-3">
          <li v-for="item in courseItems.slice(Math.ceil(courseItems.length / 2))" 
              :key="item.text" 
              class="flex items-start gap-3">
            <UIcon 
              :name="item.icon" 
              class="flex-shrink-0 w-5 h-5 text-gray-600 mt-0.5"
            />
            <span class="text-gray-700">{{ item.text }}</span>
          </li>
        </ul>
      </div>
  
     
    </div>
  </template>
  
  <script setup>
  const courseItems = [
    { icon: 'i-heroicons-play-circle', text: '12.5 hours on-demand video' },
    { icon: 'i-heroicons-document-text', text: '2 practice tests' },
    { icon: 'i-heroicons-document', text: '52 articles' },
    { icon: 'i-heroicons-arrow-down-circle', text: '27 downloadable resources' },
    { icon: 'i-heroicons-device-phone-mobile', text: 'Access on mobile and TV' },
    { icon: 'i-heroicons-infinity', text: 'Full lifetime access' },
    { icon: 'i-heroicons-trophy', text: 'Certificate of completion' }
  ]
  
  </script>


<!--  const companies = ['Nasdaq', 'Volkswagen', 'Box', 'NetApp', 'Eventbrite'] -->
<!-- 
<div class="mt-8">
  <p class="text-sm text-gray-600 mb-2">
    Top companies offer this course to their employees
  </p>
  <p class="text-xs text-gray-500 mb-4">
    This course was selected for our collection of top-rated courses trusted by businesses worldwide. 
    <ULink class="text-primary-600">Learn more</ULink>
  </p>
  
  <div class="flex flex-wrap gap-6 items-center">
    <img v-for="company in companies" 
         :key="company"
         :src="`/${company.toLowerCase()}.svg`"
         :alt="company"
         class="h-6 object-contain grayscale opacity-70"
    />
  </div>
</div> -->