<template>
  <div class="bg-white lg:bg-gray-900 text-black lg:text-white relative">

    <CourseBreadcrumb class="lg:hidden text-blue-700"/>
    <!-- Mobile Video Card -->
    <div class="lg:hidden">
      <div class="relative">
        <img 
          src="../public/aws-cert-preview.png" 
          alt="Course Preview"
          class="w-full h-48 object-cover"
        />
      </div>

      <div>
        <CoursePricingTab v-model="activeTab" />
          <ClientOnly>
            <CourseSubscriptionTab  v-if="activeTab === 'personal'" />
            <TeamsCard v-else />
          </ClientOnly>
      </div>

    </div>

    <!-- Desktop Floating Video Card -->
    <div class="hidden lg:block absolute right-0 top-20  w-[400px] mr-4 z-10">
      <CoursePricing />

    </div>

    <!-- Course Info -->
    <div class="container mx-auto px-4 lg:px-16 py-8 ">
      <CourseBreadcrumb class="hidden lg:block pb-8"/>
      <div class="max-w-2xl">
        <h1 class="text-2xl lg:text-4xl font-bold mb-4">
          Practice Tests | AWS Certified Solutions Architect Associate
        </h1>
        <p class="text-lg lg:text-xl mb-6">
          2024 NEW SAA C03 Questions: Gain Substantial Insight to Pass the Certification Exam with Confidence!
        </p>
        <div class="text-gray-700 text-sm mt-4">
    <!-- Rating and Student Count Section -->
    <div class="flex space-x-1  mb-2">
      <!-- Rating -->
      <p class="font-semibold text-yellow-500">4.5</p>
      <div class="flex items-center space-x-1">
        <UIcon name="i-heroicons-star-solid" class="text-yellow-500"/>
        <UIcon name="i-heroicons-star-solid" class="text-yellow-500"/>
        <UIcon name="i-heroicons-star-solid" class="text-yellow-500"/>
        <UIcon name="i-heroicons-star-solid" class="text-yellow-500"/>
        <UIcon name="i-heroicons-star-half" class="text-yellow-500"/>
      </div>
      <ULink class="text-blue-600" href="#">(3,427 ratings)</ULink>
      <!-- Student Count -->
      <span class="text-gray-500">52,059 students</span>
    </div>

    <!-- Creator Section -->
    <div class="flex space-x-3 mb-2">
      <span>Created by</span>
      <ULink class="text-blue-600" href="#">Chandra Lingam</ULink>
    </div>

    <!-- Last Updated, Language, and Subtitles -->
    <div class="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-4 text-gray-500">
      <!-- Last Updated -->
      <div class="flex items-center space-x-1 text-black lg:text-white">
        <UIcon  name="i-heroicons-cog"  class="text-gray-900 bg-black lg:text-white"/>
        <span>Last updated 04/2024</span>
      </div>
      
      <!-- Language -->
      <div class="flex items-center space-x-1">
        <UIcon name="i-heroicons-globe" class="text-gray-900 bg-black"/>
        <span class="text-black lg:text-white">English</span>
      </div>

      <!-- Subtitles -->
      <div class="flex items-center space-x-1 lg:text-white">
        <UIcon name="i-heroicons-translate" class="text-gray-500 lg:text-white"/>
        <span class="text-black lg:text-white">English, Japanese [Auto]</span>
        <ULink class="text-blue-600" href="#">, 1 more</ULink>
      </div>
    </div>
  </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.text-yellow-500 {
  color: #fbbf24;
}
.text-blue-600 {
  color: #2563eb;
}
.text-gray-500 {
  color: #6b7280;
}
</style>

<script setup>
const activeTab = useState('activeTab', () => 'personal')</script>