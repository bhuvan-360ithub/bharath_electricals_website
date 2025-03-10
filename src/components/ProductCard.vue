<template>
  <div 
    class="product-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="product-image-wrapper">
      <div 
        class="product-image"
        :style="{ backgroundImage: `url(${currentImage})`, transform: isHovered && product.images?.length === 1 ? 'scale(1.1)' : 'scale(1)' }"
      ></div>
    </div>

    <!-- Product Info (outside image) -->
    <div class="product-info">
      <h4 class="product-name">{{ product.name }}</h4>
      <div class="rating">
        <i class="pi pi-star-fill" v-for="n in 5" :key="n"></i>
      </div>
      <div class="price">₹{{ product.price }}</div>
    </div>

    <!-- Hover buttons (top-right) & Add to Cart (slide-up) -->
    <div class="hover-content" v-if="isHovered">
      <div class="hover-buttons">
        <button class="icon-btn"><i class="pi pi-heart"></i></button>
        <button class="icon-btn"><i class="pi pi-clone"></i></button>
        <button class="icon-btn"><i class="pi pi-eye"></i></button>
      </div>

      <button class="add-to-cart-btn">Add To Cart</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isHovered: false,
      imageIndex: 0
    };
  },
  computed: {
    currentImage() {
      if (this.isHovered && this.product.images?.length > 1) {
        return this.product.images[1];
      }
      return this.product.images[0];
    }
  }
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: none;
}

/* Image Wrapper */
.product-image-wrapper {
  width: 100%;
  padding-top: 135%;
  overflow: hidden;
  position: relative;
}

.product-image {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease, opacity 0.3s ease;
}

/* Info Section (outside image) */
.product-info {
  text-align: left;
  padding: 10px;
}

.product-name {
  font-size: 16px;
  font-weight: bold;
  margin: 5px 0;
  color: #333;
}

.rating {
  color: #f7b500;
  margin: 5px 0;
}

.price {
  font-size: 16px;
  color: #000;
  font-weight: bold;
}

/* Hover Buttons (top-right corner) */
.hover-content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  pointer-events: none;
}

.hover-buttons {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  pointer-events: all;
}

.icon-btn {
  background: white;
  border: 1px solid #ddd;
  border-radius: 50%;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  cursor: pointer;
}

.icon-btn:hover {
  background: #f0f0f0;
}

/* Add To Cart Button (slides up on hover) */
.add-to-cart-btn {
  background: black;
  color: white;
  border: none;
  padding: 12px 0;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  border-radius: 0;
  transform: translateY(100%);
  transition: transform 0.3s ease;
  pointer-events: all;
}

.product-card:hover .add-to-cart-btn {
  transform: translateY(0);
}
</style>
