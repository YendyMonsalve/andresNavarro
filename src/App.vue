<script setup>
import banner from "./components/principal-banner.vue";
import navbar from "./components/barra-navegacion.vue";
import cards from "./components/cards-projects.vue";
</script>

<template lang="pug">
navbar
banner
cards.mb-5
.footer(style="background-color: black; width: 100% ").p-4
  .row.justify-content-center
    .col-lg-3
      .text-white 
        h3 Contact
        p.mb-0 Addres
          br 
          | Number
          br 
          | City
    .col-lg-3
      .text-white 
        p.mb-0.fst-italic Mollit commodo sit aliquip ex nostrud cillum incididunt exercitation in aliquip enim ipsum do amet. Id elit est Lorem reprehenderit commodo quis velit veniam commodo ad occaecat proident 

</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
