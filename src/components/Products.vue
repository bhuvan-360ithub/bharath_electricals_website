<template>
  <div
    class="shop-by-category"
    @mouseenter="showPagination = true"
    @mouseleave="showPagination = false"
  >
    <h2 class="title">Shop By Category</h2>
    <p class="subtitle">The best quality products are waiting for you & choose it now.</p>

    <div class="swiper-container">
      <swiper
        ref="categorySwiper"
        :modules="[Autoplay]"
        :slidesPerView="5"
        :spaceBetween="20"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 5, spaceBetween: 20 }
        }"
        class="category-swiper"
      >
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <ProductCard :product="category" />
        </swiper-slide>
      </swiper>

      <!-- Pagination Buttons (appear on hover) -->
      <transition name="pagination-slide">
        <div v-if="showPagination" class="pagination-buttons">
          <button class="nav-button" @click="prevSlide"><i class="pi pi-chevron-left"></i></button>
          <button class="nav-button" @click="nextSlide"><i class="pi pi-chevron-right"></i></button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import ProductCard from './ProductCard.vue';
import 'swiper/swiper-bundle.css';
import 'primeicons/primeicons.css';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ProductCard
  },
  data() {
    return {
      showPagination: false,
      categories: [
        { name: 'Water Heater', price: '1999', image: '/src/assets/Water-heater.png' },
        { name: 'Cooler', price: '2499', image: '/src/assets/cooler.png' },
        { name: 'Coupler', price: '599', image: '/src/assets/coupler.png' },
        { name: 'Isolator', price: '899', image: '/src/assets/isolator.png' },
        { name: 'Ldc wire', price: '1499', image: '/src/assets/ldc-wire.png' },
      ]
    };
  },
  methods: {
    nextSlide() {
      this.$refs.categorySwiper.swiper.slideNext();
    },
    prevSlide() {
      this.$refs.categorySwiper.swiper.slidePrev();
    }
  },
  setup() {
    return { Autoplay };
  }
};
</script>

<style scoped>
.shop-by-category {
  text-align: center;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

.title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 5px;
}

.subtitle {
  font-size: 16px;
  color: #666;
  margin-bottom: 20px;
}

.pagination-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.shop-by-category:hover .pagination-buttons {
  transform: translateY(-20px);
  opacity: 1;
}

.nav-button {
  background: black;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
