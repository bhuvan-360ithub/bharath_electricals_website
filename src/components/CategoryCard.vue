<template>
  <div class="category-card">
    <img :src="category.image" :alt="category.name" class="category-image" />
    <h3 class="category-name">{{ category.name }}</h3>
    <p class="category-products">{{ category.products }} Products</p>
  </div>
</template>

<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.category-card {
  flex: 0 0 auto;
  width: 100%;
  max-width: 260px;
  height: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 16px;
  box-sizing: border-box;
}

.category-image {
  width: 120px;
  height: 120px;
  object-fit: contain;
}

.category-name {
  font-weight: 600;
  margin-top: 12px;
}

.category-products {
  color: gray;
  font-size: 14px;
}
</style>
