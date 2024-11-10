<template>
    <footer class="bg-[#1c1d1f] text-white py-8">
      <!-- Desktop View -->
      <div class="container mx-auto px-4">
        <div class="hidden lg:block">
          <div class="flex justify-between items-center mb-8">
            <div class="text-lg">
              Top companies choose <span class="text-[#cec0fc]">Udemy Business</span> to build in-demand career skills.
            </div>
            <div class="flex items-center gap-8">
              <img src="/public/nadsaq.png" alt="Nasdaq" class="h-8" />
              <img src="/public/volkswagen.png" alt="Volkswagen" class="h-8" />
              <img src="/public/box.png" alt="Box" class="h-8" />
              <img src="/public/netapp.png" alt="NetApp" class="h-8" />
              <img src="/public/evenbrite.png" alt="Eventbrite" class="h-8" />
            </div>
          </div>
          
          <UDivider class="border-gray-600" />
          
          <div class="grid grid-cols-4 gap-8 py-8">
            <div>
              <nav>
                <ul class="space-y-3">
                  <li><NuxtLink to="/business" class="hover:underline">Udemy Business</NuxtLink></li>
                  <li><NuxtLink to="/teach" class="hover:underline">Teach on Udemy</NuxtLink></li>
                  <li><NuxtLink to="/app" class="hover:underline">Get the app</NuxtLink></li>
                  <li><NuxtLink to="/about" class="hover:underline">About us</NuxtLink></li>
                  <li><NuxtLink to="/contact" class="hover:underline">Contact us</NuxtLink></li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul class="space-y-3">
                  <li><NuxtLink to="/careers" class="hover:underline">Careers</NuxtLink></li>
                  <li><NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink></li>
                  <li><NuxtLink to="/help" class="hover:underline">Help and Support</NuxtLink></li>
                  <li><NuxtLink to="/affiliate" class="hover:underline">Affiliate</NuxtLink></li>
                  <li><NuxtLink to="/investors" class="hover:underline">Investors</NuxtLink></li>
                </ul>
              </nav>
            </div>
            <div>
              <nav>
                <ul class="space-y-3">
                  <li><NuxtLink to="/terms" class="hover:underline">Terms</NuxtLink></li>
                  <li><NuxtLink to="/privacy" class="hover:underline">Privacy policy</NuxtLink></li>
                  <li><NuxtLink to="/sitemap" class="hover:underline">Sitemap</NuxtLink></li>
                  <li><NuxtLink to="/accessibility" class="hover:underline">Accessibility statement</NuxtLink></li>
                </ul>
              </nav>
            </div>
            <div class="text-right">
              <UButton
                variant="outline"
                color="white"
                class="border-white"
                icon="i-heroicons-globe-alt"
              >
                English
              </UButton>
            </div>
          </div>
          
          <div class="flex justify-between items-center pt-4">
            <NuxtLink to="/" class="text-2xl font-bold">
              <UIcon name="i-simple-icons-udemy" class="w-24 h-8" />
            </NuxtLink>
            <div>© 2024 Udemy, Inc.</div>
          </div>
        </div>
  
        <!-- Mobile View -->
        <div class="lg:hidden space-y-6">
          <div class="text-lg mb-6">
            Top companies choose <span class="text-[#cec0fc]">Udemy Business</span> to build in-demand career skills.
          </div>
          
          <div class="flex flex-wrap gap-6 justify-center mb-6">
            <img src="/public/nadsaq.png" alt="Nasdaq" class="h-6" />
            <img src="/public/volkswagen.png" alt="Volkswagen" class="h-6" />
            <img src="/public/box.png" alt="Box" class="h-6" />
            <img src="/public/netapp.png" alt="NetApp" class="h-6" />
            <img src="/public/evenbrite.png" alt="Eventbrite" class="h-6" />
          </div>
  
          <UButton
            variant="outline"
            color="white"
            class="w-full border-white mb-6"
            icon="i-heroicons-globe-alt"
          >
            English
          </UButton>
  
          <nav>
            <ul class="space-y-4">
              <li><NuxtLink to="/about" class="block hover:underline">About us</NuxtLink></li>
              <li><NuxtLink to="/contact" class="block hover:underline">Contact us</NuxtLink></li>
              <li><NuxtLink to="/careers" class="block hover:underline">Careers</NuxtLink></li>
              <li><NuxtLink to="/investors" class="block hover:underline">Investors</NuxtLink></li>
              <li><NuxtLink to="/terms" class="block hover:underline">Terms</NuxtLink></li>
              <li><NuxtLink to="/privacy" class="block hover:underline">Privacy policy</NuxtLink></li>
              <li><NuxtLink to="/cookie" class="block hover:underline">Cookie settings</NuxtLink></li>
              <li><NuxtLink to="/blog" class="block hover:underline">Blog</NuxtLink></li>
              <li><NuxtLink to="/sitemap" class="block hover:underline">Sitemap</NuxtLink></li>
              <li><NuxtLink to="/app" class="block hover:underline">Get the app</NuxtLink></li>
              <li><NuxtLink to="/accessibility" class="block hover:underline">Accessibility statement</NuxtLink></li>
            </ul>
          </nav>
  
          <div class="pt-6">
            <NuxtLink to="/" class="block text-2xl font-bold mb-4">
              <UIcon name="i-simple-icons-udemy" class="w-24 h-8" />
            </NuxtLink>
            <div>© 2024 Udemy, Inc.</div>
          </div>
        </div>
      </div>
    </footer>
  </template>