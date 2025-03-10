<template>
    <div class="brands-container">
      <h2 class="text-2xl font-bold text-center mb-6">Brands We Deal With</h2>
      <div class="brands-slider">
        <!-- Gradient overlay -->
        <div class="gradient-overlay left"></div>
        <div class="gradient-overlay right"></div>
  
        <div class="brands-row left-to-right" v-if="!isMobile">
          <div class="brand-track">
            <div class="brand-card" v-for="(brand, index) in loopedBrands1" :key="'row1-' + index">
              <img :src="brand.logo" :alt="brand.name" class="brand-logo"/>
            </div>
          </div>
        </div>
  
        <div class="spacer" v-if="!isMobile"></div> <!-- Space between rows -->
  
        <div class="brands-row right-to-left" v-if="!isMobile">
          <div class="brand-track">
            <div class="brand-card" v-for="(brand, index) in loopedBrands2" :key="'row2-' + index">
              <img :src="brand.logo" :alt="brand.name" class="brand-logo"/>
            </div>
          </div>
        </div>
  
        <div class="brands-row merged" v-if="isMobile">
          <div class="brand-track">
            <div class="brand-card" v-for="(brand, index) in mergedBrands" :key="'merged-' + index">
              <img :src="brand.logo" :alt="brand.name" class="brand-logo"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        brandsRow1: [
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
        ],
        brandsRow2: [
          { name: "Brand 5", logo: "/src/assets/logo-img.png" },
          { name: "Brand 6", logo: "/src/assets/logo-img.png" },
          { name: "Brand 7", logo: "/src/assets/logo-img.png" },
          { name: "Brand 8", logo: "/src/assets/logo-img.png" },
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
          { name: "Brand 1", logo: "/src/assets/logo-img.png" },
          { name: "Brand 2", logo: "/src/assets/logo-img.png" },
          { name: "Brand 3", logo: "/src/assets/logo-img.png" },
          { name: "Brand 4", logo: "/src/assets/logo-img.png" },
        ],
        isMobile: false
      };
    },
    computed: {
      loopedBrands1() {
        return [...this.brandsRow1, ...this.brandsRow1]; // Duplicate logos for smooth looping
      },
      loopedBrands2() {
        return [...this.brandsRow2, ...this.brandsRow2]; // Duplicate logos for smooth looping
      },
      mergedBrands() {
        return [...this.brandsRow1, ...this.brandsRow2, ...this.brandsRow1, ...this.brandsRow2]; // Merged logos for mobile
      }
    },
    mounted() {
      this.checkScreenSize();
      window.addEventListener("resize", this.checkScreenSize);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.checkScreenSize);
    },
    methods: {
      checkScreenSize() {
        this.isMobile = window.innerWidth < 768;
      }
    }
  };
  </script>
  
  <style scoped>
  .brands-container {
    padding: 20px;
    background-color: #f8f8f8;
    overflow: hidden;
    position: relative;
  }
  .brands-slider {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
    width: 100%;
  }
  .brands-row {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  .brand-track {
    display: flex;
    gap: 20px;
    white-space: nowrap;
    width: max-content;
    animation: slide-left 50s linear infinite;
  }
  .right-to-left .brand-track {
    animation: slide-right 50s linear infinite;
  }
  .brand-card {
    width: 160px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    transition: transform 0.3s ease-in-out;
  }
  .brand-card:hover {
    transform: scale(1.05);
  }
  .brand-logo {
    width: 40%;
    height: auto;
    object-fit: contain;
    filter: grayscale(100%);
    transition: filter 0.3s;
  }
  .brand-card:hover .brand-logo {
    filter: grayscale(0%);
  }
  
  /* Gradient Overlay */
  .gradient-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 30%;
    z-index: 2;
    pointer-events: none;
  }
  .left {
    left: 0;
    background: linear-gradient(to right, rgba(248, 248, 248, 1), rgba(248, 248, 248, 0));
  }
  .right {
    right: 0;
    background: linear-gradient(to left, rgba(248, 248, 248, 1), rgba(248, 248, 248, 0));
  }
  
  /* Space Between Rows */
  .spacer {
    height: 20px;
  }
  
  /* Continuous Animation */
  @keyframes slide-left {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @keyframes slide-right {
    from {
      transform: translateX(-50%);
    }
    to {
      transform: translateX(0%);
    }
  }
  </style>
  