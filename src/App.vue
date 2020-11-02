<template>
  <div>
    <router-view/>
    <Footer/>
  </div>
</template>

<style>



</style>
<script>
import Footer from "@/components/Footer";

export default {
  name:"App",
  components: {
    Footer
  }
}
</script>