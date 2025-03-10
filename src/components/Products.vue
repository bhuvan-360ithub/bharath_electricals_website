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
import 'swiper/swiper-bundle.css';
import 'primeicons/primeicons.css';
import ProductCard from './ProductCard.vue';

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
        { 
          name: 'Water Heater', 
          price: '1999', 
          images: ['/src/assets/Water-heater.png', '/src/assets/Water-heater-hover.png']
        },
        { 
          name: 'Cooler', 
          price: '2499', 
          images: ['/src/assets/cooler.png']
        }
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

.swiper-container {
  position: relative;
}

.pagination-buttons {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
}

.nav-button {
  background: black;
  color: white;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
