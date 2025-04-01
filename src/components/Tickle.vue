<template>
  <div class="scroll-wrapper" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
    <div class="scroll-track" ref="scrollTrack">
      <div class="scroll-item" v-for="(item, index) in visibleItems" :key="`scroll-item-${index}`">
        <i class="pi pi-star"></i>
        <span class="text">{{ item.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: 'Optimize' },
        { text: 'Empower' },
        { text: 'Innovate' },
        { text: 'Maximize' },
        { text: 'Streamline' },
        { text: 'Elevate' },
        { text: 'Fortify' },
        { text: 'Accelerate' },
        { text: 'Optimize' },
        { text: 'Empower' },
        { text: 'Innovate' },
        { text: 'Maximize' },
        { text: 'Streamline' },
        { text: 'Elevate' },
        { text: 'Fortify' },
        { text: 'Accelerate' },
        { text: 'Optimize' },
        { text: 'Empower' },
        { text: 'Innovate' },
        { text: 'Maximize' },
        { text: 'Streamline' },
        { text: 'Elevate' },
        { text: 'Fortify' },
        { text: 'Accelerate' },
      ],
      animationPaused: false
    };
  },
  computed: {
    visibleItems() {
      return [...this.items, ...this.items];
    }
  },
  methods: {
    pauseScroll() {
      this.animationPaused = true;
      this.setAnimationState();
    },
    resumeScroll() {
      this.animationPaused = false;
      this.setAnimationState();
    },
    setAnimationState() {
      const track = this.$refs.scrollTrack;
      track.style.animationPlayState = this.animationPaused ? 'paused' : 'running';
    }
  }
};
</script>

<style scoped>
.scroll-wrapper {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  position: relative;
  cursor: pointer;
  background-color: #e8b237;
  padding: 20px 0;
  display: flex;
  justify-content: center;
}

.scroll-track {
  display: flex;
  gap: 30px;
  animation: scroll-left 25s linear infinite;
  width: fit-content;
}

.scroll-item {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 14px;
  color: black;
  font-weight: 500;
  white-space: nowrap;
}

.scroll-item i {
  font-size: 24px;
  color: black;
}

.text {
  font-size: 18px;
  color: black;
  font-weight: 400;
  text-transform: uppercase;
}

@keyframes scroll-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
