<template>

  <header class="site-header">

    <div class="header-container">

      <RouterLink
        to="/"
        class="brand"
      >

        <span class="brand-name">
          Festify
        </span>

        <span class="brand-tagline">
          Celebrate more. Plan less.
        </span>

      </RouterLink>


      <nav
        class="main-navigation"
        aria-label="Main navigation"
      >

        <RouterLink
          to="/"
          class="nav-link"
          exact-active-class="active"
        >
          Home
        </RouterLink>


        <RouterLink
          to="/packages"
          class="nav-link"
          active-class="active"
        >
          Packages
        </RouterLink>


        <RouterLink
          to="/about"
          class="nav-link"
          active-class="active"
        >
          Our Story
        </RouterLink>


        <RouterLink
          to="/planner"
          class="nav-cta"
        >
          Plan My Celebration
        </RouterLink>


        <button
          type="button"
          class="theme-toggle"
          :aria-label="
            themeStore.isDarkMode
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          "
          :title="
            themeStore.isDarkMode
              ? 'Switch to light mode'
              : 'Switch to dark mode'
          "
          @click="themeStore.toggleDarkMode"
        >

          <span v-if="themeStore.isDarkMode">
            ☀
          </span>

          <span v-else>
            ☾
          </span>

        </button>

      </nav>

    </div>

  </header>

</template>


<script setup>
import { useThemeStore } from '../stores/theme'


const themeStore = useThemeStore()
</script>