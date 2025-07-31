<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const links = [
  { label: "Home", to: "/" },
  { label: "Active investment", to: "/active-investment" },
  { label: "Fundraising", to: "/fundraising" },
  { label: "Smart Club", to: "/smart-club" },
  { label: "How It works", to: "/how-it-works" },
  { label: "Contact", to: "/contact" },
];

const menuOpen = ref(false);
const isMobile = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 850;
}

function closeMenu() {
  menuOpen.value = false;
}

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});
onUnmounted(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<template>
  <div>
    <header class="navbar">
      <div class="navbar-container">
        <nav class="nav-links" v-if="!isMobile">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="nav-link"
            exact-active-class="active"
            @click="closeMenu"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <div v-else class="mobile-nav">
          <button class="burger" @click="menuOpen = !menuOpen">
            <img src="/burger.png" alt="burger" />
          </button>
          <div v-if="menuOpen" class="mobile-menu">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="nav-link"
              exact-active-class="active"
              @click="closeMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
        <NuxtLink to="/" class="logo">
          <img src="/logo.png" alt="Smart Bundles" />
        </NuxtLink>
      </div>
    </header>

    <div class="navbar-line"></div>

    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/_variables.scss" as *;

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 20px;
}

.logo img {
  height: 60px;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-link {
  font-weight: 400;
  font-size: 24px;
  color: $primary-color;
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: #111827;
}

.active {
  color: #111827;
  border-bottom: 2px solid #111827;
}

.navbar-line {
  width: 100vw;
  height: 1px;
  margin-block: 30px;

  background: $light_grey_stroke;
  margin-left: calc(-50vw + 50%);
}

.mobile-nav {
  position: relative;
}

.burger {
  background: none;
  width: 17px;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  position: absolute;
  top: 50px;
  width: 50vw;
  left: 0;
  background: white;
  border: 1px solid $light_grey_stroke;
  padding: 16px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
@media (max-width: 1200px) {
  .nav-links {
    gap: 15px;
  }
  .nav-link {
    font-size: 18px;
  }

  .logo img {
    height: 45px;
  }
}

@media (max-width: 850px) {
  .navbar-container {
    flex-direction: row-reverse;
  }

  .nav-links {
    display: none;
  }
  .mobile-nav {
    display: block;
  }

  .logo img {
    height: 35px;
  }
}

@media (min-width: 851px) {
  .mobile-nav {
    display: none;
  }
}
</style>
