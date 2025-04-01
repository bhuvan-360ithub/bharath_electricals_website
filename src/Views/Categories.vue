<script setup lang="ts">
import { ref, computed } from 'vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import CardComponent from '../components/card.vue';

// Category data
const categories = [
  { imagePath: '/src/assets/Water-heater.png', categoryName: 'Water Heater', productCount: 12 },
  { imagePath: '/src/assets/cooler.png', categoryName: 'Cooler', productCount: 8 },
  { imagePath: '/src/assets/coupler.png', categoryName: 'Coupler', productCount: 15 },
  { imagePath: '/src/assets/ldc-wire.png', categoryName: 'Ldc wire', productCount: 20 },
  { imagePath: '/src/assets/mcb.png', categoryName: 'MCB', productCount: 12 },
  { imagePath: '/src/assets/pedestral-fan.png', categoryName: 'Pedestral Fan', productCount: 8 },
  { imagePath: '/src/assets/polycab-wires.png', categoryName: 'Polycab Wires', productCount: 15 },
  { imagePath: '/src/assets/pump-v8.png', categoryName: 'Pump-v8', productCount: 20 },
];

const currentPage = ref(1);
const itemsPerPage = 12;

const totalPages = computed(() => Math.ceil(categories.length / itemsPerPage));

const paginatedCategories = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return categories.slice(start, start + itemsPerPage);
});

const goToPage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />

    <div class="w-full pt-14">
      <img src="/src/assets/Banner-1.png" alt="Banner" class="w-full h-auto object-cover" />
    </div>

    <div class="container mx-auto px-14 py-10 mt-10">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <CardComponent
          v-for="(category, index) in paginatedCategories"
          :key="index"
          :imagePath="category.imagePath"
          :categoryName="category.categoryName"
          :productCount="category.productCount"
        />
      </div>

      <div v-if="totalPages > 1" class="flex justify-center mt-6 space-x-2">
        <template v-if="currentPage > 1">
          <button
            @click="goToPage(currentPage - 1)"
            class="px-4 py-2 border rounded-l-md bg-gray-200 hover:bg-gray-300"
          >
            «
          </button>
        </template>

        <button
          v-for="page in totalPages"
          :key="page"
          @click="goToPage(page)"
          class="px-4 py-2 border border-gray-300"
          :class="{ 'bg-blue-500 text-white': currentPage === page, 'bg-white text-gray-700': currentPage !== page }"
        >
          {{ page }}
        </button>

        <template v-if="currentPage < totalPages">
          <button
            @click="goToPage(currentPage + 1)"
            class="px-4 py-2 border rounded-r-md bg-gray-200 hover:bg-gray-300"
          >
            »
          </button>
        </template>
      </div>
    </div>

    <Footer />
  </div>
</template>

<style scoped>
.grid {
  gap: 1rem; 
}
</style>
