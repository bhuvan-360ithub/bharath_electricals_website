<template>
  <div
    class="relative flex-shrink-0 p-2 transition-all duration-300 group"
    :style="{ width: `${cardWidth}px`, height: `${cardWidth}px` }"
  >
    <div class="relative overflow-hidden rounded-lg w-full h-full">
      <!-- Product Image (Full Size) -->
      <img
        :src="product.image"
        class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
      />

      <!-- Product Name Button -->
      <button
        class="absolute bottom-2 left-2 right-2 bg-gray-600 text-white py-2 rounded-md transition-all duration-300 hover:bg-blue-700"
      >
        {{ product.name }}
      </button>
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
@import "primeicons/primeicons.css";
</style>
