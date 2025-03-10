<template>
    <div class="scroll-wrapper" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
      <div class="scroll-track" ref="scrollTrack">
        <div class="scroll-item" v-for="(item, index) in visibleItems" :key="`scroll-item-${index}`">
          <div class="icon-container">
            <img :src="item.image" alt="Item Icon" />
          </div>
          <span class="text">{{ item.text }}</span>
        </div>
      </div>
      <!-- Divider Line -->
      <div class="divider"></div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        items: [
          { image: 'path/to/cable.png', text: 'BEYOND INNOVATION' },
          { image: 'path/to/switch.png', text: 'POWER UP' },
          { image: 'path/to/transformer.png', text: 'LIFE ENHANCED' },
          { image: 'path/to/bulb.png', text: 'DESIGN & TECHNOLOGY' },
          { image: 'path/to/cable.png', text: 'BEYOND INNOVATION' },
          { image: 'path/to/switch.png', text: 'POWER UP' },
          { image: 'path/to/transformer.png', text: 'LIFE ENHANCED' },
          { image: 'path/to/bulb.png', text: 'DESIGN & TECHNOLOGY' },
          { image: 'path/to/cable.png', text: 'BEYOND INNOVATION' },
          { image: 'path/to/switch.png', text: 'POWER UP' },
          { image: 'path/to/transformer.png', text: 'LIFE ENHANCED' },
          { image: 'path/to/bulb.png', text: 'DESIGN & TECHNOLOGY' }
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
        if (this.animationPaused) {
          track.style.animationPlayState = 'paused';
        } else {
          track.style.animationPlayState = 'running';
        }
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
    margin-top: 30px;
    cursor: pointer;
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
    font-size: 16px;
    color: #0d0d2a;
    font-weight: 500;
    white-space: nowrap;
  }
  
  .icon-container {
    width: 60px;
    height: 60px;
    background: #f5f5f5;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  
  .icon-container img {
    max-width: 70%;
    max-height: 70%;
    object-fit: contain;
  }
  
  .text {
    font-size: 24px;
    color: #0d0d2a;
    font-weight: 400;
    text-transform: uppercase; 
  }
  
  .divider {
    width: 100%;
    height: 0.8px;
    background-color: #e0e0e0;
    margin-top: 30px;
    padding-left: 50px;
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
  