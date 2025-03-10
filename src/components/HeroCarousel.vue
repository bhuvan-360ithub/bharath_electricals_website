<template>
  <div class="hero-carousel">
    <swiper
      :modules="[Pagination, Autoplay]"
      :slides-per-view="1"
      :loop="true"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: false
      }"
      :pagination="{
        clickable: true,
        el: '.custom-pagination',
        renderBullet: customPagination
      }"
      class="hero-swiper"
    >
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img :src="image" class="carousel-image" />
      </swiper-slide>
    </swiper>

    <div class="custom-pagination"></div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'

import banner1 from '/src/assets/Banner-1.png'
import banner2 from '/src/assets/Banner-2.png'
import banner3 from '/src/assets/Banner-3.png'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    return {
      Pagination,
      Autoplay
    }
  },
  data() {
    return {
      images: [banner1, banner2, banner3]
    }
  },
  methods: {
    customPagination(index, className) {
      return `<span class="${className} custom-bullet"></span>`
    }
  }
}
</script>

<style scoped>
.hero-carousel {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.carousel-image {
  width: 100%;
  height: auto;
  display: block;
}

.custom-pagination {
  position: absolute;
  bottom: 15px; 
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 6px; 
  z-index: 10;
}

.custom-bullet {
  width: 10px;
  height: 10px;
  background-color: transparent; 
  border: 2px solid #c80000; 
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
}

.swiper-pagination-bullet-active {
  background-color: #000; 
  border-color: #000; 
  width: 12px; 
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.swiper-pagination-bullet-active::after {
  content: "";
  width: 6px;
  height: 6px;
  background-color: #000;
  border-radius: 50%;
  display: block;
}
</style>
