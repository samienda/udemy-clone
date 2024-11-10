<template>
    <div class="bg-white lg:ml-10 m-2 p-6 rounded-lg shadow-sm border border-gray-100 lg:w-3/5">
      <h2 class="text-lg font-semibold mb-4 text-black">Explore related topics</h2>
      
      <div class="flex flex-wrap gap-2 outline-black">
        <UBadge
          v-for="topic in topics"
          :key="topic"
          :label="topic"
          style="border-color: black;"
          variant="outline"
          color="white"
          class="rounded-full px-4 py-1 outline-black border-black cursor-pointer text-black bg-white hover:bg-gray-200 transition-colors"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  const topics = [
    'AWS Certified Solutions Architect - Associate',
    'IT Certifications',
    'IT & Software'
  ]
  </script>