<template>
  <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="image-wrapper">
      <img :src="product.image" alt="Product Image" class="product-image" />
      <span v-if="product.offer" class="offer-pill">{{ product.offer }}</span>

      <button class="eye-button" :class="{ 'visible': hover || isMobile }" @click="viewProduct">
        <i class="pi pi-eye"></i>
      </button>


      <button class="add-to-cart" :class="{ 'visible': hover || isMobile }" @click="addToCart">
        Add to Cart
      </button>
    </div>
    <p class="product-name">{{ product.name }}</p>

    <!-- Fullscreen Modal -->
    <div v-if="isModalOpen" class="modal">
      <div class="modal-content">
        <button class="close-btn" @click="isModalOpen = false">✕</button>
        <img :src="product.image" alt="Product Image" class="full-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object // Expecting an object with { image, name, offer }
  },
  data() {
    return {
      hover: false,
      isMobile: false,
      isModalOpen: false
    };
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkMobile);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
    addToCart() {
      alert(`Added ${this.product.name} to cart!`);
    },
    viewProduct() {
      this.isModalOpen = true;
    }
  }
};
</script>

<style scoped>
.card {
  position: relative;
  width: 260px; /* Increased width */
  background: transparent;
  cursor: pointer;
}
@media (max-width: 768px) {
  .card {
    width: 100%; /* Full width on mobile */
  }
}
.image-wrapper {
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%; /* Adjusted to fit container */
  aspect-ratio: 1 / 1;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 12px;
}

.card:hover .product-image {
  transform: scale(1.05);
}

.offer-pill {
  position: absolute;
  top: 10px;
  left: 10px;
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 12px;
}

.eye-button,
.add-to-cart {
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.eye-button {
  top: 10px;
  right: -50px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  
}

.card:hover .eye-button,
.eye-button.visible {
  right: 10px;
  opacity: 1;
}

.add-to-cart {
  bottom: -50px;
  left: 5%;
  width: 90%;
  background: blue;
  border-radius: 8px;
}

.card:hover .add-to-cart,
.add-to-cart.visible {
  bottom: 10px;
  opacity: 1;
}

.product-name {
  text-align: left;
  margin-top: 8px;
  font-size: 18px;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-image {
  width: 80vw;  /* Make it take 90% of the viewport width */
  height: auto; /* Maintain aspect ratio */
  max-height: 90vh; /* Limit height to 90% of the viewport height */
  object-fit: contain;
  border-radius: 12px;
}


.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 50%;
}
</style>
