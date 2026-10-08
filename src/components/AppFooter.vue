<template>
  <footer class="site-footer">
    <div class="footer-container">

      <!-- Footer Brand -->
      <div class="footer-brand">
        <h2>Festify</h2>
        <p>
          Smart celebration planning made simple.
          Celebrate more. Plan less.
        </p>
      </div>

      <!-- Contact Details -->
      <div class="footer-contact">
        <h3>Contact</h3>
        <a href="mailto:hello@festify.com">
  hello@festify.com
</a>
<p></p>
<a href="tel:0400000000">
  0400 000 000
</a>
        <p>Melbourne, Australia</p>
      </div>

      <!-- Secondary Navigation -->
      <div class="footer-links">
        <h3>Explore</h3>

    <RouterLink to="/">
      Home
    </RouterLink>

    <RouterLink to="/packages">
      Packages
    </RouterLink>

    <RouterLink to="/about">
      Our Story
    </RouterLink>

    <RouterLink to="/planner">
      Planner
    </RouterLink>
      </div>

    </div>

    <div class="footer-bottom">
      <p>
        © 2026 Festify. Fictional website created for SIT120.
      </p>
    </div>
  </footer>
</template>

<script setup>
defineEmits(['navigate'])
</script>