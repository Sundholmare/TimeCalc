<template>
  <section class="hero">
    <div class="hero-body"></div>
    <Time-Form />
  </section>
</template>

<script>
import TimeForm from '../components/TimeForm.vue'

  export default {
    name: 'Hero-component',
    components: {
      TimeForm
    }
  }
</script>

<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 700px;
  margin: 3rem auto;
  width: 80%;
  background-image: url('../assets/images/P7183562.JPG');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-shadow: 29px -30px 99px 100px rgba(0, 0, 0, 0.65) inset;
  border-radius: 2rem;
}

.hero-body {
  display: flex;
  flex-direction: column;
}
</style>
