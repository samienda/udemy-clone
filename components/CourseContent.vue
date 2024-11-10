<template>
  <div class="lg:ml-10 p-6 w-full  lg:w-3/5 flex text-black">
    <div class="bg-white w-full rounded-lg shadow">
      <div class="p-4 border-b">
        <h2 class="text-xl font-semibold ">Course content</h2>
        <p class="text-sm text-gray-600 mt-1">24 sections • 163 lectures • 12h 53m total length</p>
      </div>

      <div class="divide-y">
        <UAccordion variant="outline" color="white" v-model="expanded" :items="sections">
          <template v-for="section in sections" v-slot:[section.slot]>
            <div :key="section.slot">
              <p>{{ section.content }}</p>
              <ul class="mt-2 space-y-1 text-gray-700">
                <li v-for="lecture in section.lectures" :key="lecture.id" class="flex justify-between">
                  <span>{{ lecture.title }}</span>
                  <span class="text-sm text-gray-500">{{ lecture.duration }}</span>
                </li>
              </ul>
            </div>
          </template>
        </UAccordion>
      </div>

      <div class="p-4 border-t text-center text-black">
        <UButton class="text-black" variant="ghost" color="black" @click="expandAll">
          {{ allExpanded ? 'Collapse all sections' : 'Expand all sections' }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const expanded = ref([])
const allExpanded = computed(() => expanded.value.length === sections.length)

const sections = [
  {
    label: 'Introduction',
    icon: 'i-heroicons-book-open',
    content: '5 lectures • 18min',
    slot: 'introduction',
    lectures: [
      { id: 1, title: 'Introduction and How To', duration: '03:02' },
      { id: 2, title: 'Increase the speed of learning', duration: '00:41' },
      { id: 3, title: 'SAA-C03 Exam Overview and Preparation Strategies', duration: '03:46' },
      { id: 4, title: 'Udemy Interview - A Deep Dive Into AWS Certifications', duration: '00:07' },
      { id: 5, title: 'Concepts First or Test First', duration: '00:19' }
    ]
  },
  {
    label: 'Timed Practice Test',
    icon: 'i-heroicons-clock',
    content: '3 lectures • 15min',
    slot: 'practice-test',
    lectures: [
      { id: 1, title: 'Practice Test 1', duration: '05:00' },
      { id: 2, title: 'Practice Test 2', duration: '05:00' },
      { id: 3, title: 'Practice Test 3', duration: '05:00' }
    ]
  },

  // Add more sections here with `lectures` arrays...
]

function expandAll() {
  if (allExpanded.value) {
    expanded.value = []
  } else {
    expanded.value = sections.map((_, index) => index)
  }
}
</script>
