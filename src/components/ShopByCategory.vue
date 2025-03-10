<template>
  <div class="relative w-full overflow-hidden p-4 py-8" @mousedown="startDrag" @mousemove="onDrag" @mouseup="endDrag" @mouseleave="endDrag">
    <div class="flex justify-between items-center mb-4">
      <h2 class="text-2xl font-bold">Popular Products</h2>
      <div class="flex space-x-2">
        <button class="p-3 bg-gray-200 rounded-full flex items-center justify-center" @click="prevSlide">
          <i class="pi pi-chevron-left text-md"></i>
        </button>
        <button class="p-3 bg-gray-200 rounded-full flex items-center justify-center" @click="nextSlide">
          <i class="pi pi-chevron-right text-md"></i>
        </button>
      </div>
    </div>
    <div
      class="flex transition-transform duration-500"
      :style="{ transform: `translateX(-${currentIndex * cardWidth}px)` }"
      ref="carousel"
    >
      <ProductCard v-for="(product, index) in duplicatedProducts" :key="index" :product="product" :cardWidth="cardWidth" />
    </div>
    <div class="flex justify-center mt-6">
      <button class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">See All</button>
    </div>
  </div>
</template>

<script>
import ProductCard from "./CardComponent.vue";
import "primeicons/primeicons.css";

export default {
  components: { ProductCard },
  data() {
    return {
      products: [
        { name: 'Water Heater', price: 12, image: '/src/assets/Water-heater.png' },
        { name: 'Cooler', price: 8, image: '/src/assets/cooler.png' },
        { name: 'Coupler', price: 10, image: '/src/assets/coupler.png' },
        { name: 'LDC Wire', price: 16, image: '/src/assets/ldc-wire.png' },
        { name: 'MCB', price: 16, image: '/src/assets/mcb.png' },
        { name: 'Pedestral Fan', price: 16, image: '/src/assets/pedestral-fan.png' },
        { name: 'Polycab Wires', price: 16, image: '/src/assets/polycab-wires.png' },
        { name: 'Pump V8', price: 16, image: '/src/assets/pump-v8.png' },
        { name: 'Round Tee', price: 16, image: '/src/assets/round-tee.png' },
        { name: 'Slip Type Bend', price: 16, image: '/src/assets/sliptypebend.png' },
      ],
      currentIndex: 0,
      cardWidth: 0,
      isDragging: false,
      startX: 0,
      dragOffset: 0,
    };
  },
  computed: {
    duplicatedProducts() {
      return [...this.products, ...this.products];
    }
  },
  mounted() {
    this.updateCardWidth();
    window.addEventListener('resize', this.updateCardWidth);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateCardWidth);
  },
  methods: {
    updateCardWidth() {
      if (window.innerWidth < 640) {
        this.cardWidth = window.innerWidth - 40;
      } else if (window.innerWidth < 1024) {
        this.cardWidth = (window.innerWidth - 80) / 3;
      } else {
        this.cardWidth = (window.innerWidth - 100) / 4;
      }
    },
    nextSlide() {
      if (this.currentIndex >= this.products.length) {
        this.currentIndex = 0;
      }
      this.currentIndex++;
    },
    prevSlide() {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.products.length;
      }
      this.currentIndex--;
    },
    startDrag(event) {
      this.isDragging = true;
      this.startX = event.clientX;
    },
    onDrag(event) {
      if (!this.isDragging) return;
      const moveX = event.clientX - this.startX;
      if (moveX > 50) {
        this.prevSlide();
        this.isDragging = false;
      } else if (moveX < -50) {
        this.nextSlide();
        this.isDragging = false;
      }
    },
    endDrag() {
      this.isDragging = false;
    }
  },
};
</script>

<style>
button {
  transition: background-color 0.3s;
}
button:hover {
  background-color: #d6d6d6;
}
</style>
