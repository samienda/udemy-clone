<template>
  <nav class="bg-gray-100 lg:bg-gray-900 pb-3">
    <div class="container mx-auto px-4">
      <UBreadcrumb :links="links" />
    </div>
  </nav>
</template>

<script setup>
const links = [
  { label: 'IT & Software', to: '#' },
  { label: 'IT Certifications', to: '#' },
  { label: 'AWS Certified Solutions Architect - Associate', to: '#' }
]
</script>