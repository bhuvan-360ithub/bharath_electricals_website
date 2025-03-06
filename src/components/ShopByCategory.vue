<template>
    <div class="shop-by-category">
      <h2 class="title">Shop By Category</h2>
      <p class="subtitle">The best quality products are waiting for you & choose it now.</p>
  
      <swiper
        :modules="[Autoplay, Pagination]"
        :slidesPerView="5"
        :spaceBetween="20"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :pagination="{
          clickable: true
        }"
        :breakpoints="{
          320: { slidesPerView: 2, spaceBetween: 10 }, 
          768: { slidesPerView: 3, spaceBetween: 15 }, 
          1024: { slidesPerView: 5, spaceBetween: 20 } 
        }"
        class="category-swiper"
      >
        <swiper-slide v-for="(category, index) in categories" :key="index">
          <div class="category-card">
            <div class="category-image" :style="{ backgroundImage: `url(${category.image})` }"></div>
            <button class="category-button">{{ category.name }}</button>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </template>
  
  <script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Autoplay, Pagination } from 'swiper/modules';
  import 'swiper/swiper-bundle.css';
  
  export default {
    components: {
      Swiper,
      SwiperSlide
    },
    data() {
      return {
        categories: [
          { name: 'Water Heater', image: '/src/assets/Water-heater.png' },
          { name: 'Cooler', image: '/src/assets/cooler.png' },
          { name: 'Coupler', image: '/src/assets/coupler.png' },
          { name: 'Isolator', image: '/src/assets/isolator.png' },
          { name: 'Ldc wire', image: '/src/assets/ldc-wire.png' },
          { name: 'MCB', image: '/src/assets/mcb.png' },
          { name: 'Pedestral fan', image: '/src/assets/pedestral-fan.png' },
          { name: 'Polycab Wires', image: '/src/assets/polycab-wires.png' },
          { name: 'Pump V8', image: '/src/assets/pump-v8.png' },
          { name: 'Slip Type Bend', image: '/src/assets/sliptypebend.png' },
          { name: 'Speaker Cables', image: '/src/assets/speakercables.png' },
          { name: 'Round Tee', image: '/src/assets/round-tee.png' }
        ]
      };
    },
    setup() {
      return {
        Autoplay,
        Pagination
      };
    }
  };
  </script>
  
  <style scoped>
  .shop-by-category {
    text-align: center;
    padding: 20px;
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
  
  .category-swiper {
    padding: 20px 0;
  }
  
  .category-image {
    width: 100%;
    padding-top: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.5s ease; 
    border-radius: 20px;
}

.category-card:hover .category-image {
    transform: scale(1.1);
    
}

.category-card {
    position: relative;
    width: 100%;
    padding-top: 100%; 
    overflow: hidden;
    margin-bottom: 20px;
}

  
.category-button {
    position: absolute;
    bottom: 20px;
    left: 10px; 
    right: 10px; 
    width: calc(100% - 20px); 
    padding: 8px 0;
    background: rgb(0, 0, 0);
    color: white;
    border: none;
    border-radius: 10px;
    font-weight: 600;
    font-size: 14px !important;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    text-align: center;
    box-sizing: border-box;
}

  
  .category-card:hover .category-image {
    transform: scale(1.1);
  }
  
  .category-card:hover .category-button {
    background: #007bff;
    color: white;
  }
  
  .swiper-pagination {
    position: absolute;
    margin-top: 5px;
    bottom: -5px;
    text-align: center;
    width: 100%;
  }
  
  .swiper-pagination-bullet {
    background: #ccc;
    opacity: 1;
  }
  
  .swiper-pagination-bullet-active {
    background: #007bff;
  }
  </style>
  