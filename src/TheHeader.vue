<template>
  <div id="TheHeader">
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';

// import SwiperSlider from './components/SwiperSlider';
export default {
    name: "TheHeader",
    components: { 
      Header,
      // SwiperSlider
    }
  }
</script>

<style>
#TheHeader {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
