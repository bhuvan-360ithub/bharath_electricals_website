<template>
  <div class="category-card">
    <!-- Image Container -->
    <div class="image-wrapper">
      <img :src="category.image" :alt="category.name" class="category-image" />
    </div>

    <!-- Category Label -->
    <div class="category-label">
      {{ category.name }}
    </div>
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
/* Card Container */
.category-card {
  width: 260px;
  height: 180px; /* Adjust height for proportions */
  border-radius: 12px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  position: relative;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Image Wrapper */
.image-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Image Styling */
.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
}

/* Image Hover Effect */
.category-card:hover .category-image {
  transform: scale(1.1);
}

/* Category Label */
.category-label {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  color: black;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
