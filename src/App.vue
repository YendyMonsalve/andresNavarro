<script setup>
import banner from "./components/principal-banner.vue";
import navbar from "./components/barra-navegacion.vue";
import cards from "./components/cards-projects.vue";
</script>

<template lang="pug">
navbar
banner
cards
.p-lg-5.mx-5
  .row.justify-content-center.align-items-center.mb-5
    .col-lg-4.mb-lg-0.mb-4
      img(src='@/assets/imgs/navarrolive.jpg', alt='' ).w-100
    .col-lg-4: p.text-white Cillum in ad veniam reprehenderit nulla anim. Irure eu aute sunt non est et ipsum anim magna. Amet non elit cupidatat do ut dolore occaecat velit Lorem enim consequat tempor officia. Reprehenderit amet eu cupidatat tempor ad duis minim consectetur proident sint. Tempor excepteur nulla qui sint.
h3.text-center.text-white.mb-4 Videos
.p-lg-5.mx-5
  .row.justify-content-center.mb-3
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/_AARD7ZWTMY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/FVD4BznVyy0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/1EaR27Cs_Bk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100
  .row.justify-content-center.mb-5
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/McqVawkzLa0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/zJxuBHUzjc4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/KvoLOad7S6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100

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
