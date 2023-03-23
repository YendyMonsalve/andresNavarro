<script setup>
import banner from './components/principal-banner.vue'
import navbar from './components/barra-navegacion.vue'
import cards from './components/cards-projects.vue'
</script>

<template lang="pug">
navbar
banner
cards
.px-lg-5.mx-5
  .row.justify-content-center.mb-2
    .col-xl-3
      .tarjeta-album.text-white.h-100
        img(src='/imagenes/gradual.jpg', alt='')
        .text-center
          h3.mb-1 Gradualmente (Cortometraje)
          h5.mb-1 Camilo Perdomo (2022)
          p.mb-1 Producción musical
    .col-xl-7
      figure
        <iframe width="860" height="615" src="https://www.youtube.com/embed/KvoLOad7S6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
.p-lg-5.mx-5
  .row.justify-content-center.align-items-center.mb-1
    .col-lg-4.mb-lg-0.mb-4
      img(src='@/assets/imgs/navarrolive.jpg', alt='' ).w-100
    .col-lg-4
      h2.text-white.mb-4 Interpretes
      p.text-white Proyecto Musical con énfasis en Música Andina Colombiana. Este formato reúne diferentes Músicos con el fin de interpretar canciones compuestas por Andrés Navarro, acompañado por la producción de una serie de videos publicados en el canal de Youtube Interpretes Andrés Navarro.
.p-lg-5.mx-5
  .row.justify-content-center.align-items-center.mb-5
    .col-lg-4
      h2.text-white.mb-4 D'lima
      p.text-white Banda colombiana inspirada en el maestro Carlos Acosta D´lima, contrabajista, compositor y docente de la Universidad Autónoma de Bucaramanga, UNAB. El ensamble desarrolla un sonido nuevo y basa sus composiciones en el latin jazz, el funk,la salsa, la música tradicional colombiana, entre otros. D´lima es un referente musical deBucaramanga. Participa en conferencias, conciertos y en festivales de importancia en laregión, como  el marco de las ferias de Ulibro y también, en la programación del teatroSantander acompañando a bandas nacionales e internacionales, como la BLAIR BIGBAND de Tennesse.
        br
        br
        |El ensamble ofrece un amplio repertorio trabajado durante cuatro años y plasmado en suprimer trabajo discográfico (EP) con la calidad de músicos profesionales, docentes yestudiantes.
    .col-lg-4.mb-lg-0.mb-4
      img(src='@/assets/imgs/dlima1.jpg', alt='' ).w-100

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
          iframe(width="560" height="315" src="https://www.youtube.com/embed/vzBgwq88n4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100
  .row.justify-content-center.mb-5
    .col-lg-3
      figure
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/g3WBz_UqXT4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen).w-100

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
