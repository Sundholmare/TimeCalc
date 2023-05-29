<template>
  <main>
    <Hero />
  </main>
</template>

<script>
import Hero from '../components/Hero.vue';

  export default {
    name: 'Home-view',
    components: {
      Hero
    },
    data() {
      return {
        name: 'Hercules'
      }
    }
  }
</script>

<style lang="scss" scoped>
  main {
    display: flex;
    flex-direction: column;
  }
</style>