<template>
  <header class="bg-white border-b">
    <!-- Mobile Header -->
    <nav class="lg:hidden flex items-center justify-between px-4 py-3">
      <UButton
        icon="i-heroicons-bars-3"
        color="gray"
        variant="outline"
        aria-label="Menu"
      />
      <img src="../public/udemy-logo.png" alt="Udemy" class="h-8" />
      <div class="flex items-center gap-2">
        <UButton
          icon="i-heroicons-shopping-cart"
          color="gray"
          variant="outline"
          aria-label="Cart"
        />
        <UButton
          icon="i-heroicons-magnifying-glass"
          color="black"

          variant="solid"
          aria-label="Search"
        />
      </div>
    </nav>

    <!-- Desktop Header -->
    <nav class="hidden lg:flex container mx-auto px-4 py-4 items-center gap-4">
      <img src="../public/udemy-logo.png" alt="Udemy" class="h-8" />
      <UButton
        variant="solid"
        color="black"
        label="Categories"
      />
      <UInput
        icon="i-heroicons-magnifying-glass"
        placeholder="Search for anything"
        class="flex-1 max-w-2xl"
        variant="outline"
        
      />
      <UButton
        variant="solid"
        color="black"
        label="Teach on Udemy"
      />
      <UButton
        variant="solid"
        color="black"
        label="Udemy Business"
      />
      <UButton
        icon="i-heroicons-shopping-cart"
        color="black"
        variant="solid"
        aria-label="Cart"
      />
      <div class="flex items-center gap-2">
        <UButton
          variant="solid"
          color="black"
          label="Log in"
        />
        <UButton
          color="black"
          label="Sign up"
        />
        <UButton
          icon="i-heroicons-globe-alt"
          color="gray"
          variant="ghost"
          aria-label="Language"
        />
      </div>
    </nav>
  </header>
</template>