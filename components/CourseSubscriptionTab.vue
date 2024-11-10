<template>
    <div class="bg-white p-6">
      <div class="space-y-6">
        <div class="space-y-2">
          <h2 class="text-xl font-semibold text-gray-900">Subscribe to Udemy's top courses</h2>
          <p class="text-gray-700">
            Get this course, plus 12,000+ of our top-rated courses, with Personal Plan.
            <ULink class="text-udemy-purple hover:text-udemy-purple/90" to="#">Learn more</ULink>
          </p>
        </div>
  
        <div class="space-y-2">
          <UButton
            class="w-full bg-udemy-purple hover:bg-udemy-purple/90"
            size="lg"
          >
            Try Personal Plan for free
          </UButton>
          <p class="text-center text-sm text-gray-600">Starting at $10.00 per month after trial</p>
          <p class="text-center text-sm text-gray-600">Cancel anytime</p>
        </div>
  
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <div class="w-full border-t border-gray-200"></div>
          </div>
          <div class="relative flex justify-center">
            <span class="bg-white px-4 text-sm text-gray-500">or</span>
          </div>
        </div>
  
        <div class="space-y-3">
          <p class="text-2xl font-bold text-gray-900">$84.99</p>
          <UButton
            class="w-full"
            variant="outline"
            size="lg"
          >
            Add to cart
          </UButton>
        </div>
  
        <div class="space-y-1">
          <p class="text-gray-600 text-center text-sm">30-Day Money-Back Guarantee</p>
          <p class="text-gray-600 text-center text-sm">Full Lifetime Access</p>
        </div>
  
        <div class="flex justify-between text-sm">
          <button class="text-gray-600 hover:text-gray-900">Share</button>
          <button class="text-gray-600 hover:text-gray-900">Gift this course</button>
          <button class="text-gray-600 hover:text-gray-900" @click="showCoupon = !showCoupon">
            Apply Coupon
          </button>
        </div>
  
        <UCollapse v-model="showCoupon">
          <div class="mt-2 border rounded-lg p-4 bg-gray-50">
            <div class="flex justify-between items-center mb-3">
              <p class="text-sm text-gray-700">
                <span class="font-medium">LETSLEARNNOW</span> is applied
              </p>
              <button
                class="text-gray-400 hover:text-gray-600"
                @click="showCoupon = false"
              >
                <UIcon name="i-heroicons-x-mark" class="w-5 h-5" />
              </button>
            </div>
            <div class="flex gap-2">
              <UInput
                v-model="couponCode"
                placeholder="Enter Coupon"
                class="flex-grow"
                size="sm"
              />
              <UButton color="gray" size="sm">Apply</UButton>
            </div>
          </div>
        </UCollapse>
      </div>
    </div>
  </template>
  
  <script setup>
  const showCoupon = ref(false)
  const couponCode = ref('')
  </script>
  