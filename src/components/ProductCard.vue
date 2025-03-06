<template>
    <div class="product-card">
      <!-- Product Image & Hover Content -->
      <div 
        class="product-image" 
        :style="{ backgroundImage: `url(${product.image})` }"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <div class="hover-content" v-if="isHovered">
          <div class="hover-buttons">
            <button class="icon-btn"><i class="pi pi-heart"></i></button>
            <button class="icon-btn"><i class="pi pi-clone"></i></button>
            <button class="icon-btn"><i class="pi pi-eye"></i></button>
          </div>
          <button class="add-to-cart-btn">Add To Cart</button>
        </div>
      </div>
  
      <!-- Product Details (Always Visible) -->
      <div class="product-info">
        <h4 class="product-name">{{ product.name }}</h4>
        <div class="rating">
          <i class="pi pi-star-fill" v-for="n in 5" :key="n"></i>
        </div>
        <div class="price">₹{{ product.price }}</div>
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
        isHovered: false
      };
    }
  };
  </script>
  
  <style scoped>
  .product-card {
    background: #fff;
    border: 1px solid #eee;
    border-radius: 15px;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }
  
  .product-image {
    width: 100%;
    padding-top: 135%; /* Maintain aspect ratio */
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    transition: transform 0.5s ease;
  }
  
  .product-image:hover {
    transform: scale(1.05);
  }
  
  .product-info {
    padding: 10px;
    text-align: center;
  }
  
  .product-name {
    font-size: 16px;
    font-weight: bold;
    margin: 5px 0;
  }
  
  .rating {
    color: #f7b500;
    margin: 5px 0;
  }
  
  .price {
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }
  
  /* Hover content */
  .hover-content {
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.95);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    padding: 15px;
  }
  
  .product-image:hover .hover-content {
    opacity: 1;
  }
  
  .hover-buttons {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    flex-direction: column;
    gap: 8px;
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
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }
  
  .add-to-cart-btn {
    background: black;
    color: white;
    border: none;
    padding: 12px 0;
    font-weight: bold;
    font-size: 14px;
    width: 100%;
    border-radius: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }
  
  .product-image:hover .add-to-cart-btn {
    transform: translateY(0);
  }
  </style>
  