<template>
  <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
    <nav class="container mx-auto px-6 lg:px-8 h-20 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <img class="h-10" src="/src/assets/logo-img.png" alt="Logo" />
      </div>

      <div class="hidden lg:flex space-x-8 items-center">
        <div
          v-for="item in navItems"
          :key="item.name"
          class="relative group nav-item"
          @mouseenter="showMegaMenu(item.name)"
          @mouseleave="hideMegaMenu"
        >
          <router-link
            :to="item.path"
            class="cursor-pointer flex items-center space-x-1"
            :class="{ 'active': $route.path === item.path }"
          >
            <span>{{ item.name }}</span>
            <!-- <i
              v-if="item.name === 'Categories'"
              :class="megaMenuOpen ? 'pi pi-angle-up' : 'pi pi-angle-down'"
            ></i> -->
          </router-link>
          <div class="underline"></div>

          <!-- Mega Menu -->
          <!-- <div
            v-if="item.name === 'Categories' && megaMenuOpen"
            class="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[900px] bg-white shadow-lg mega-menu"
            @mouseenter="cancelCloseMegaMenu"
            @mouseleave="hideMegaMenu"
          >
            <div class="grid grid-cols-3 gap-6 p-6">
              <div v-for="section in megaMenuSections" :key="section.title">
                <h3 class="font-bold text-gray-600 mb-3">{{ section.title }}</h3>
                <div class="space-y-4">
                  <div
                    v-for="link in section.links"
                    :key="link.name"
                    class="flex items-center space-x-3 hover:bg-gray-100 p-3 rounded-lg cursor-pointer"
                  >
                    <div
                      class="w-12 h-12 flex items-center justify-center rounded-lg"
                      :style="{ backgroundColor: link.bgColor }"
                    >
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
          </div> -->
        </div>
      </div>

      <!-- Contact and Login Buttons -->
      <div class="hidden lg:flex space-x-4">
        <a href="#" class="btn contact-btn">
          <i class="pi pi-phone mr-2"></i>
          <span>+91 95137 77001</span>
        </a>
        <a href="#" class="btn cta-btn">
          <i class="pi pi-user mr-2"></i>
          <span>Customer Login</span>
        </a>
      </div>

      <button class="lg:hidden text-2xl" @click="toggleMobileNav">
        <i :class="mobileOpen ? 'pi pi-times' : 'pi pi-bars'"></i>
      </button>
    </nav>

    <!-- Mobile Navigation -->
    <div v-if="mobileOpen" class="lg:hidden bg-white shadow-md absolute w-full top-20 left-0 overflow-y-auto max-h-[90vh]">
  <div v-for="item in navItems" :key="item.name" class="relative">
    <router-link
      :to="item.path"
      class="p-4 border-b cursor-pointer hover:bg-gray-100 flex justify-between items-center"
      @click="navigateTo(item.path)"
      :class="{ 'text-blue-600 font-bold': $route.path === item.path }"
    >
      <span>{{ item.name }}</span>
    </router-link>
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
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        // { name: "Categories", path: "/Categories" },
        { name: "Products", path: "/Products" },
        { name: "Contact", path: "/contact" }
      ],
      // megaMenuSections: [
      //   {
      //     links: [
      //       { name: "Notification", description: "Real-time alerts", icon: "pi pi-bell", bgColor: "#FDE68A" },
      //       { name: "Analytics", description: "In-depth analysis", icon: "pi pi-chart-line", bgColor: "#A7F3D0" },
      //       { name: "Integrations", description: "Seamless connections", icon: "pi pi-link", bgColor: "#BFDBFE" }
      //     ]
      //   }
      // ]
    };
  },
  methods: {
    toggleMobileNav() {
      this.mobileOpen = !this.mobileOpen;
      if (!this.mobileOpen) {
        this.mobileMegaOpen = false;
      }
    },
    showMegaMenu(item) {
      if (item === "Categories") this.megaMenuOpen = true;
      clearTimeout(this.closeTimer);
    },
    hideMegaMenu() {
      this.closeTimer = setTimeout(() => (this.megaMenuOpen = false), 300);
    },
    cancelCloseMegaMenu() {
      clearTimeout(this.closeTimer);
    },
    toggleMobileMegaMenu(item) {
      if (item === "Categories") {
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
  padding-bottom: 4px;
}
.nav-item a {
  position: relative;
  display: inline-block;
  padding-bottom: 4px;
}
.nav-item .underline {
  position: absolute;
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0;
  background: blue;
  transition: width 0.3s ease-in-out;
}

.nav-item:hover .underline,
.nav-item .active + .underline {
  width: 100%;
}

.nav-item:hover,
.nav-item .active {
  color: blue;
}

.nav-item .active .underline,
.nav-item:hover .underline {
  width: 100%;
}

.underline {
  height: 2px;
  background: blue;
  width: 0;
  transition: width 0.3s ease;
  position: absolute;
  bottom: -4px;
  left: 0;
}

.btn {
  padding: 12px 20px;
  border-radius: 30px;
  transition: all 0.3s ease;
  background-color: #f0f0f0;
}

.contact-btn {
  background: white;
  border: 2px solid #4e5b6b;
  color: #4e5b6b;
}

.contact-btn:hover {
  background: #1065c7;
  color: #fff;
}

.cta-btn {
  background: #1065c7;
  color: #fff;
}

.mega-menu-mobile {
  background: #f9f9f9;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
