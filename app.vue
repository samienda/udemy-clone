<script setup lang="ts">
import UdemyFooter from './components/UdemyFooter.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    
    <CourseHeader />
    <main>
      <CourseHero />
      <CourseCertificate />
      <WhatYouLearn />
      <CourseTopics />
      <CourseIncludes />
      <CourseContent />
      <UdemyFooter />

    </main>
  </div>
</template>