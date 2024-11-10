<template>
    <div class="bg-white lg:ml-10 m-2 p-6  rounded-lg shadow-sm border border-gray-100 lg:w-3/5 ">
      <h2 class="text-xl font-semibold mb-4 text-black ">What you'll learn</h2>
      
      <ul class="space-y-3">
        <li v-for="(item, index) in learningPoints" :key="index" class="flex gap-3">
          <UIcon 
            name="i-heroicons-check" 
            class="flex-shrink-0 w-5 h-5 text-gray-500 mt-1"
          />
          <span class="text-gray-700">{{ item }}</span>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const learningPoints = [
    'Realistic experience on type of questions that you would face in the certification exam',
    'Gain Insight into AWS Services From Certification Perspective',
    'Evaluate Different Architectural Choices'
  ]
  </script>