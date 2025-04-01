<template>
  <div class="categories-section">
    <!-- Header Section -->
    <div class="header">
      <div class="about-us">
        <div class="line"></div>
        <h2 class="about-title">ABOUT US</h2>
      </div>
      <button class="view-all-btn">View All</button>
    </div>

    <!-- Headline -->
    <h2 class="headline">Explore our Categories: Your Path to Success</h2>

    <!-- Carousel -->
    <div class="carousel-wrapper">
      <div class="carousel-track" ref="carousel">
        <CategoryCard v-for="category in categories" :key="category.name" :category="category" />
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="nav-buttons">
      <button @click="scrollLeft" class="nav-btn left-btn">
        <i class="pi pi-angle-left"></i>
      </button>
      <button @click="scrollRight" class="nav-btn right-btn">
        <i class="pi pi-angle-right"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoryCard from './CategoryCard.vue';
import 'primeicons/primeicons.css'; // Import PrimeIcons

const categories = ref([
  { name: 'Appliances', products: 4, image: '/images/fan.png' },
  { name: 'Audio', products: 4, image: '/images/camera.png' },
  { name: 'Cameras', products: 2, image: '/images/instax.png' },
  { name: 'Computers', products: 4, image: '/images/monitor.png' },
  { name: 'Mobiles', products: 5, image: '/images/mobile.png' },
  { name: 'Accessories', products: 3, image: '/images/accessories.png' },
]);

const carousel = ref(null);
const screenWidth = ref(window.innerWidth);

onMounted(() => {
  window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
  });
});

const visibleCards = computed(() => {
  if (screenWidth.value <= 640) return 1;
  if (screenWidth.value <= 1024) return 2;
  return 4;
});

const cardWidth = computed(() => {
  return carousel.value?.children[0]?.offsetWidth || 260;
});

function scrollLeft() {
  carousel.value.scrollBy({
    left: -cardWidth.value * visibleCards.value,
    behavior: 'smooth',
  });
}

function scrollRight() {
  carousel.value.scrollBy({
    left: cardWidth.value * visibleCards.value,
    behavior: 'smooth',
  });
}
</script>

<style scoped>
.categories-section {
  padding: 20px;
  background-color: #1e3a8a; /* Blue-900 */
  color: white;
  border-radius: 10px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.about-us {
  display: flex;
  align-items: center;
  gap: 8px;
}

.line {
  width: 48px;
  height: 2px;
  background-color: #3b82f6; /* Blue-500 */
}

.about-title {
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.view-all-btn {
  background: white;
  color: #1e3a8a;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.3s;
}

.view-all-btn:hover {
  background: #3b82f6;
  color: white;
}

.headline {
  font-size: 22px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 16px;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
}

.carousel-track {
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  scrollbar-width: none;
  flex-shrink: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.nav-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
}

.nav-btn {
  background: white;
  color: #1e3a8a;
  border: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.nav-btn:hover {
  background: #3b82f6;
  color: white;
}

.nav-btn i {
  font-size: 20px;
}
</style>
