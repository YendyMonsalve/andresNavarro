<script setup></script>

<template lang="pug">
.Banner
  .d-flex.flex-column.justify-content-center
    img(src="@/assets/imgs/logo3.svg" alt="" style="width: 600px"  ).mb-2.m-auto.d-lg-block.d-none
    img(src="@/assets/imgs/logo3.svg" alt="" style="width: 300px"  ).mb-2.m-auto.d-block.d-lg-none
    p.text-white.text-center Productor, compositor y pianista.

</template>

<style scoped lang="sass">
.Banner
  background-image: url(@/assets/imgs/fondo.png)
  background-position: bottom
  background-repeat: no-repeat
  background-size: cover
  img
    @media screen
</style>
