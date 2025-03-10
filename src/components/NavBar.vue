<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <nav class="container mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img class="h-10" src="/src/assets/logo-img.png" alt="Logo" />
        <!-- <span class="font-bold text-2xl">Bharath Electricals</span> -->
      </div>

      <div class="hidden lg:flex space-x-8 items-center">
        <div v-for="item in navItems" :key="item.name" class="relative group nav-item"
             @mouseenter="showMegaMenu(item.name)"
             @mouseleave="hideMegaMenu">
          <span class="cursor-pointer flex items-center space-x-1">
            <span>{{ item.name }}</span>
            <i v-if="item.name === 'Products'" :class="megaMenuOpen ? 'pi pi-angle-up' : 'pi pi-angle-down'"></i>
          </span>
          <div class="underline"></div>

          <div v-if="item.name === 'Products' && megaMenuOpen"
               class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white shadow-lg mega-menu"
               @mouseenter="cancelCloseMegaMenu"
               @mouseleave="hideMegaMenu">
            <div class="grid grid-cols-3 gap-6 p-6">
              <div v-for="section in megaMenuSections" :key="section.title">
                <h3 class="font-bold text-gray-600 mb-3">{{ section.title }}</h3>
                <div class="space-y-4">
                  <div v-for="link in section.links" :key="link.name"
                       class="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer">
                    <div class="w-12 h-12 flex items-center justify-center rounded-lg" 
                         :style="{ backgroundColor: link.bgColor }">
                      <i :class="link.icon" class="text-white text-lg"></i>
                    </div>
                    <div>
                      <p class="font-semibold">{{ link.name }}</p>
                      <p class="text-sm text-gray-500">{{ link.description }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex space-x-4">
        <a href="#" class="btn contact-btn">
          <i class="pi pi-phone"></i>
          <span>+91 95137 77001</span>
        </a>
        <a href="#" class="btn cta-btn">
          <i class="pi pi-user"></i>
          <span>Customer Login</span>
        </a>
      </div>

      <button class="lg:hidden text-2xl" @click="toggleMobileNav">
        <i :class="mobileOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
    </nav>

    <div v-if="mobileOpen" class="lg:hidden bg-white shadow-md absolute w-full top-20 left-0 overflow-y-auto max-h-[90vh]">
  <div v-for="item in navItems" :key="item.name" class="relative">
    <div class="p-4 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
         @click="toggleMobileMegaMenu(item.name)">
      <span>{{ item.name }}</span>
      <i v-if="item.name === 'Products'" :class="mobileMegaOpen ? 'pi pi-angle-up' : 'pi pi-angle-down'"></i>
    </div>

    <!-- Nested Mega Menu directly inside Products -->
    <div v-if="item.name === 'Products' && mobileMegaOpen" class="mega-menu-mobile">
      <div v-for="section in megaMenuSections" :key="section.title">
        <h3 class="font-bold text-gray-600 mb-3">{{ section.title }}</h3>
        <div class="space-y-3">
          <div v-for="link in section.links" :key="link.name"
               class="flex items-center space-x-3 p-3 rounded-lg cursor-pointer hover:bg-gray-200">
            <div class="w-12 h-12 flex items-center justify-center rounded-lg"
                 :style="{ backgroundColor: link.bgColor }">
              <i :class="link.icon" class="text-white text-lg"></i>
            </div>
            <div>
              <p class="font-semibold">{{ link.name }}</p>
              <p class="text-sm text-gray-500">{{ link.description }}</p>
            </div>
          </div>
          <hr class="border-gray-300">
        </div>
      </div>
    </div>
  </div>

  <div class="p-4 space-y-4">
    <a href="#" class="btn mobile-btn">
      <i class="pi pi-phone"></i>
      <span>+91 95137 77001</span>
    </a>
    <a href="#" class="btn cta-btn">
      <i class="pi pi-user"></i>
      <span>Customer Login</span>
    </a>
  </div>
</div>

  </header>
</template>

<script>
export default {
  data() {
    return {
      mobileOpen: false,
      mobileMegaOpen: false,
      megaMenuOpen: false,
      closeTimer: null,
      navItems: [
        { name: 'Home' },
        { name: 'About Us' },
        { name: 'Products' },
        { name: 'Contact' }
      ],
      megaMenuSections: [
        {
          // title: "Features",
          links: [
            { name: "Notification", description: "Real time alerts", icon: "pi pi-bell", bgColor: "#FDE68A" },
            { name: "Analytics", description: "In-depth analysis", icon: "pi pi-chart-line", bgColor: "#A7F3D0" },
            { name: "Integrations", description: "Seamless connections", icon: "pi pi-link", bgColor: "#BFDBFE" }
          ]
        },
        {
          // title: "Features",
          links: [
            { name: "Notification", description: "Real time alerts", icon: "pi pi-bell", bgColor: "#FDE68A" },
            { name: "Analytics", description: "In-depth analysis", icon: "pi pi-chart-line", bgColor: "#A7F3D0" },
            { name: "Integrations", description: "Seamless connections", icon: "pi pi-link", bgColor: "#BFDBFE" }
          ]
        },
        {
          // title: "Features",
          links: [
            { name: "Notification", description: "Real time alerts", icon: "pi pi-bell", bgColor: "#FDE68A" },
            { name: "Analytics", description: "In-depth analysis", icon: "pi pi-chart-line", bgColor: "#A7F3D0" },
            { name: "Integrations", description: "Seamless connections", icon: "pi pi-link", bgColor: "#BFDBFE" }
          ]
        }
      ]
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileOpen = !this.mobileOpen;
      if (!this.mobileOpen) {
        this.mobileMegaOpen = false;  // Close mega menu when closing mobile nav
      }
    },
    showMegaMenu(item) {
      if (item === 'Products') this.megaMenuOpen = true;
      clearTimeout(this.closeTimer);
    },
    hideMegaMenu() {
      this.closeTimer = setTimeout(() => this.megaMenuOpen = false, 300);
    },
    cancelCloseMegaMenu() {
      clearTimeout(this.closeTimer);
    },
    toggleMobileMegaMenu(item) {
      if (item === 'Products') {
        this.mobileMegaOpen = !this.mobileMegaOpen;
      }
    }
  }
};
</script>

<style scoped>
.nav-item {
  position: relative;
  cursor: pointer;
}
.underline {
  height: 2px;
  background: green;
  width: 0;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}
.nav-item:hover .underline {
  width: 100%;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 20px;
  font-weight: 500;
  border-radius: 30px;
  gap: 8px;
  position: relative;
  overflow: hidden;
  text-align: center;
  transition: all 0.3s ease;
  background-color: #f0f0f0;
}
.btn span {
  transition: transform 0.3s ease;
}
/* .btn:hover span {
  transform: translateY(-100%);
} */
.btn::after {
  content: attr(data-text);
  position: absolute;
  left: 50%;
  transform: translate(-50%, 100%);
  transition: transform 0.3s ease;
}
.btn:hover::after {
  transform: translate(-50%, 0);
}
.contact-btn {
  background: white;
  border: 2px solid #4e5b6b;
  color: #4e5b6b !important;
}
.contact-btn:hover {
  background: #1065c7;
  border: none !important;
  color: #fff !important;
}
.cta-btn {
  background: #1065c7;
  color: #fff;
}
.cta-btn:hover {
  background: #034591;
  color: #fff;
}
.mobile-btn {
  justify-content: center;
  width: 100%;
}
.mega-menu .w-12 {
  aspect-ratio: 1;
}
.mega-menu-mobile {
  background: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
}

</style>
