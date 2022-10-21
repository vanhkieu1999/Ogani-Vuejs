<template>
    <div id="TheFooter">
      <Footer />
    </div>
  </template>
  
  <script>
  import Footer from './components/Footer.vue';
  // import SwiperSlider from './components/SwiperSlider';
  export default {
      name: "TheFooter",
      components: { 
        Footer,
        // SwiperSlider
      }
  }
  </script>
  
  <style>
  #TheFooter {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  </style>
  