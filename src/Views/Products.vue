<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import ProductCard from '../components/ProductCard.vue';
import SidebarFilter from '../components/SidebarFilter.vue';

const products = ref([
  { image: '/src/assets/Fan-1.png', name: 'Fan 1', offer: '20% Off' },
  { image: '/src/assets/Fan-2.png', name: 'Fan 2', offer: '' },
  { image: '/src/assets/Fan-3.png', name: 'Fan 3', offer: '10% Off' },
  { image: '/src/assets/Fan-4.png', name: 'Fan 4', offer: '15% Off' },
  { image: '/src/assets/Fan-3.png', name: 'Fan 5', offer: '' },
  { image: '/src/assets/Fan-6.png', name: 'Fan 6', offer: '5% Off' },
  { image: '/src/assets/Fan-1.png', name: 'Fan 1', offer: '20% Off' },
  { image: '/src/assets/Fan-2.png', name: 'Fan 2', offer: '' },
  { image: '/src/assets/Fan-3.png', name: 'Fan 3', offer: '10% Off' },
  { image: '/src/assets/Fan-4.png', name: 'Fan 4', offer: '15% Off' },
]);

const isSidebarOpen = ref(false);
</script>

<template>
  <div class="min-h-screen flex flex-col relative" :class="{ 'overlay-active': isSidebarOpen }">
    <NavBar />
    
    <div class="w-full pt-14">
      <img src="/src/assets/Banner-1.png" alt="Banner" class="w-full h-auto object-cover" />
    </div>

    <!-- Horizontal Bar -->
    <div class="flex justify-between items-center rounded-lg border p-4 m-4">
      <span class="font-medium text-md">{{ products.length }} Products Found</span>
      <button @click="isSidebarOpen = true" class="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg">
        <i class="pi pi-filter"></i>
        <span>Filter</span>
      </button>
    </div>

    <!-- Responsive Grid Layout -->
    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 p-4 pt-6 justify-items-center">
      <div v-for="(product, index) in products" :key="index" class="mb-6">
        <ProductCard :product="product">
          <template #name>
            <router-link 
              :to="'/product/' + index" 
              class="text-blue-500 font-semibold underline sm:block md:block hidden">
              {{ product.name }}
            </router-link>
          </template>
        </ProductCard>
      </div>
    </div>

    <!-- Sidebar Filter -->
    <div v-if="isSidebarOpen" class="overlay" @click="isSidebarOpen = false"></div>
    <SidebarFilter v-if="isSidebarOpen" @close="isSidebarOpen = false" />
    
    <Footer />
  </div>
</template>

<style scoped>
.grid {
  gap: 1rem;
}

@media (max-width: 640px) {
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

/* Overlay Effect */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
}
</style>