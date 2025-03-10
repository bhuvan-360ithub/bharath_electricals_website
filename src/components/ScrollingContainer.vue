<template>
    <div class="category-section">
      <div class="left-section">
        <h4 class="category-label">CATEGORIES</h4>
        <h2 class="category-title">Browsing Top Categories</h2>
        <p class="category-description">
          Electronics stores are renowned for being the first to showcase new gadgets and devices.
        </p>
        <div class="carousel-controls">
          <button @click="prevSlide"><i class="pi pi-arrow-left"></i></button>
          <button @click="nextSlide"><i class="pi pi-arrow-right"></i></button>
        </div>
      </div>
      <div class="carousel-wrapper">
        <div class="carousel" :style="carouselStyle">
          <CategoryCard
            v-for="(category, index) in categories"
            :key="index"
            :category="category"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CategoryCard from './CategoryCard.vue';
  
  export default {
    components: {
      CategoryCard
    },
    data() {
      return {
        currentIndex: 0,
        windowWidth: window.innerWidth,
        categories: [
          { image: 'https://via.placeholder.com/100', name: 'Laptops', productCount: 14 },
          { image: 'https://via.placeholder.com/100', name: 'Smartphones', productCount: 21 },
          { image: 'https://via.placeholder.com/100', name: 'Watches', productCount: 12 },
          { image: 'https://via.placeholder.com/100', name: 'Headphones', productCount: 9 },
          { image: 'https://via.placeholder.com/100', name: 'Cameras', productCount: 7 },
        ]
      };
    },
    computed: {
      itemsPerPage() {
        if (this.windowWidth < 768) return 1;
        if (this.windowWidth < 1024) return 2;
        return 4;
      },
      carouselStyle() {
        const itemWidth = 100 / this.itemsPerPage;
        const translateX = -(this.currentIndex * itemWidth);
        return {
          transform: `translateX(${translateX}%)`
        };
      }
    },
    methods: {
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        }
      },
      nextSlide() {
        const maxIndex = this.categories.length - this.itemsPerPage;
        if (this.currentIndex < maxIndex) {
          this.currentIndex++;
        }
      },
      updateWindowWidth() {
        this.windowWidth = window.innerWidth;
      }
    },
    mounted() {
      window.addEventListener('resize', this.updateWindowWidth);
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.updateWindowWidth);
    }
  };
  </script>
  
  <style scoped>
  .category-section {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 40px;
    align-items: center;
  }
  
  .left-section {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  
  .category-label {
    color: #6c63ff;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 14px;
  }
  
  .category-title {
    font-size: 32px;
    font-weight: bold;
    margin: 0;
  }
  
  .category-description {
    font-size: 16px;
    color: #555;
  }
  
  .carousel-wrapper {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel {
    display: flex;
    transition: transform 0.5s ease;
    gap: 16px;
  }
  
  .carousel-controls {
    display: flex;
    gap: 12px;
    align-items: center;
  }
  
  .carousel-controls button {
    background: #f1f1f1;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 0.3s ease;
  }
  
  .carousel-controls button:hover {
    background: #6c63ff;
    color: white;
  }
  
  @media (max-width: 768px) {
    .category-section {
      grid-template-columns: 1fr;
    }
  }
  </style>
  