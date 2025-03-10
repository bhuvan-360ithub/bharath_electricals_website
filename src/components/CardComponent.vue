<template>
    <div
      class="relative flex-shrink-0 p-2 transition-all duration-300 group"
      :style="{ width: `${cardWidth}px` }"
    >
      <div class="bg-secondary-light rounded-lg p-4 overflow-hidden relative flex flex-col">
        <!-- Product Image -->
        <div class="relative overflow-hidden rounded-md">
          <img
            :src="product.image"
            class="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
  
        <div class="flex items-center justify-between mt-2 relative">
          <div>
            <h3 class="text-xl font-bold">{{ product.name }}</h3>
            <span class="text-gray-500 font-regural text-sm">{{ product.price }} Products</span>
          </div>
  
          <button
            class="bg-blue-600 text-white w-10 h-10 rounded-md flex items-center justify-center absolute right-0 opacity-0 transform translate-x-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
          >
            <i class="pi pi-arrow-right text-md"></i>
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
      cardWidth: Number,
    },
  };
  </script>
  
  <style scoped>
  /* Import PrimeIcons if not already included in your project */
  @import "primeicons/primeicons.css";
  </style>
  