<template>
  <div class="categories-section">
    <h2 class="title">Browsing Top Categories</h2>
    <p class="description">
      Electronics stores are renowned for being the first to showcase new gadgets and devices.
    </p>

    <div class="carousel-wrapper">
      <button @click="scrollLeft" class="nav-btn left-btn">⬅️</button>

      <div class="carousel-track" ref="carousel">
        <CategoryCard v-for="category in categories" :key="category.name" :category="category" />
      </div>

      <button @click="scrollRight" class="nav-btn right-btn">➡️</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import CategoryCard from './CategoryCard.vue';

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
  return carousel.value?.children[0]?.offsetWidth || 260; // Fallback to default card width
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
}

.title {
  font-size: 28px;
  font-weight: bold;
}

.description {
  color: gray;
  margin-bottom: 20px;
}

.carousel-wrapper {
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
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
  padding: 0 40px;
  box-sizing: border-box;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
  z-index: 10;
  padding: 8px;
  border-radius: 50%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.left-btn {
  left: 0;
}

.right-btn {
  right: 0;
}

@media (max-width: 640px) {
  .carousel-track {
    padding: 0 20px;
  }
}
</style>
