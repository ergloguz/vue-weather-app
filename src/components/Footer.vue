<template>
  <div class="fixed-bottom pb-2">
    <nav class="nav justify-content-center navbar-custom ">
      <a class="navbar-brand navbar-custom-text">Made with 💖 in Çanakkale</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
.navbar-custom {
  display: flex;
  background-color: rgb(var(--darker));

  &-text {
    font-size: 22px;


  }
}
</style>