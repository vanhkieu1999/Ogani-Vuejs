<template>
    <div id="App">
      <Header />
      <Content />
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Content from './components/content.vue';

  // import SwiperSlider from './components/SwiperSlider';
  export default {
      name: "TheApp",
      components: {
    Header,
    Footer,
    Content
}
  }
  </script>

  <style>

  </style>
  