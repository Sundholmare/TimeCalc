<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="wrapper">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  background: var(--black);
  min-height: 100vh;
}

nav {
  background: var(--dark-green);
  height: 5.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: var(--white);
    margin: 0 3rem;
    font-weight: bold;
    text-decoration: none;
    cursor: pointer;
  }

  a:hover {
    text-decoration: underline;
  }
}
</style>
