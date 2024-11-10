<template>
    <nav class="sticky top-0 z-50 bg-white border-b">
      <div class="flex">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          :class="[
            'flex-1 px-6 py-3 text-base font-medium transition-colors',
            modelValue === tab.id
              ? 'text-black border-b-2 border-black'
              : 'text-gray-600 hover:text-black'
          ]"
          @click="$emit('update:modelValue', tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>
    </nav>
  </template>
  
  <script setup>
  defineProps({
    modelValue: {
      type: String,
      required: true
    }
  })
  
  defineEmits(['update:modelValue'])
  
  const tabs = [
    { id: 'personal', label: 'Personal' },
    { id: 'teams', label: 'Teams' }
  ]
  </script>
  