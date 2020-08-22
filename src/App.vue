<template>
  <div id="app">

    <router-view/>
    <Footer/>
  </div>
</template>

<style>



</style>
<script>
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default {
  name:"App",
  components: {
    Navigation,
    Footer
  }
}
</script>