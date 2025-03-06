<script setup lang="ts">
import { ref } from 'vue'
import MegaMenu from './MegaMenu.vue'

const isMegaMenuOpen = ref(false)
const isMobileMenuOpen = ref(false)
const isMobileFeaturesOpen = ref(false)

let megaMenuTimer: any = null

function openMegaMenu() {
  clearTimeout(megaMenuTimer)
  isMegaMenuOpen.value = true
}

function closeMegaMenu() {
  megaMenuTimer = setTimeout(() => {
    isMegaMenuOpen.value = false
  }, 150)
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function toggleMobileFeatures() {
  isMobileFeaturesOpen.value = !isMobileFeaturesOpen.value
}
</script>

<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50">
    <div class="container mx-auto px-4 lg:px-6 flex justify-between items-center py-4">
      <div class="flex items-center">
        <img src="/src/assets/logo-img.png" alt="Logo" class="h-12" />
        <!-- <span class="ml-2 text-xl font-semibold">Pagedone</span> -->
      </div>

      <!-- Desktop Nav -->
      <nav class="hidden lg:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <a href="#" class="text-gray-700 text-md font-semibold hover:text-blue-600">Home</a>
        <a href="#" class="text-gray-700 text-md font-semibold hover:text-blue-600">About</a>

        <!-- Desktop Mega Menu Trigger -->
        <div
          class="relative"
          @mouseenter="openMegaMenu"
          @mouseleave="closeMegaMenu"
        >
          <button class="text-gray-700 text-md font-semibold hover:text-blue-600 flex items-center">
            Categories
            <i class="pi pi-chevron-down ml-1"></i>
          </button>
          <div
            v-if="isMegaMenuOpen"
            class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-[800px] bg-white shadow-xl border rounded-xl z-50"
            @mouseenter="openMegaMenu"
            @mouseleave="closeMegaMenu"
          >
            <MegaMenu />
          </div>
        </div>

        <a href="#" class="text-gray-700 text-md font-semibold hover:text-blue-600">Contact</a>
      </nav>

      <!-- Desktop Buttons -->
      <div class="hidden lg:flex space-x-3">
        <!-- <button class="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">Login</button> -->
        <button class="px-4 py-2 bg-blue-600 text-white text-md font-semibold rounded-lg">Login</button>
      </div>

      <!-- Mobile Menu Trigger -->
      <button class="lg:hidden" @click="toggleMobileMenu">
        <i class="pi pi-bars text-2xl"></i>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMobileMenuOpen" class="lg:hidden bg-white border-t">
      <a href="#" class="block py-3 px-4 border-b">Home</a>
      <a href="#" class="block py-3 px-4 border-b">About us</a>

      <!-- Features Dropdown in Mobile -->
      <div class="border-b">
        <button class="w-full flex justify-between items-center py-3 px-4" @click="toggleMobileFeatures">
          Features
          <i :class="isMobileFeaturesOpen ? 'pi pi-chevron-up' : 'pi pi-chevron-down'"></i>
        </button>
        <div v-if="isMobileFeaturesOpen" class="border-t bg-gray-50">
          <MegaMenu mobile />
        </div>
      </div>

      <a href="#" class="block py-3 px-4 border-b">Contact</a>

      <!-- Centered Mobile Buttons -->
      <div class="py-4">
        <button class="w-3/4 mx-auto block py-2 border border-blue-600 text-blue-600 rounded-lg">Login</button>
        <button class="w-3/4 mx-auto mt-2 block py-2 bg-blue-600 text-white rounded-lg">Sign Up</button>
      </div>
    </div>
  </header>
</template>
