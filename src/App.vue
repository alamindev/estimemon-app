<template>
  <div id="app">
    <router-view/>
    <footer-prismic/>
  </div>
</template>

<script>
import FooterPrismic from './components/FooterPrismic.vue';
import ContactComponent from './components/ContactComponent.vue';



export default {
  name: 'App',
     components: {
      FooterPrismic,
      ContactComponent,

     }
};
</script>

<style>
@import "./assets/css/resetr.css";
@import "./assets/css/prismic-edit-button.css";
</style>
