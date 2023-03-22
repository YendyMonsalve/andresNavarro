<template lang="pug">
.p-lg-5.mx-5
  .content-cards.row.justify-content-center.align-items-end
    .col-xl-3(v-for="(item, index) in items" :key="index")
      .tarjeta-album.text-white.h-100
        img(:src="item.imagen")
        //- <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/3PxuQKMxyHkhCi741aQghV?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        .text-center
          h3.mb-1 {{ item.name }}
          h5.mb-1 {{ item.artist }}
          p.mb-1 {{ item.rol }}
          p.mb-1.fst-italic {{ item.year }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imagen: "imagenes/elbeso.png",
          name: "El beso",
          artist: "Bienmeli (2023)",
          rol: "Piano y producción",
          year: "",
        },
        {
          imagen: "imagenes/img3.jpg",
          name: "Si te vas",
          artist: "Josele (2022)",
          rol: "Piano y producción",
          year: "",
        },
        {
          imagen: "imagenes/img2.jpg",
          name: "Girl",
          artist: "El Rila ft El Ruido (2022)",
          rol: "Piano y producción",
          year: "",
          link: "",
        },
        {
          imagen: "imagenes/img5.jpg",
          name: "Somos y nos tenemos",
          artist: "El Rila (2022)",
          rol: "Piano y co-producción",
          year: "",
        },
        {
          imagen: "imagenes/img4.png",
          name: "Adictivo",
          artist: "Bienmeli (2022)",
          rol: "Piano y co-producción",
          year: "",
        },
        {
          imagen: "imagenes/img1.jpg",
          name: "Entre montaña y cemento",
          artist: "Ricardo Andres (2022)",
          rol: "Piano",
          year: "",
        },
        {
          imagen: "imagenes/img6.jpg",
          name: "So High",
          artist: "Garca (2018)",
          rol: "Piano y producción",
          year: "",
        },
        {
          imagen: "imagenes/kuisi.jpg",
          name: "Tradicion Viva",
          artist: "Kuisitambo (2016)",
          rol: "Piano",
          year: "Nominado Grammy Latino 2016 ",
        },
        {
          imagen: "imagenes/forero.jpg",
          name: "Raices de un corazón",
          artist: "Andres forero",
          rol: "Piano",
          year: "",
        },
      ],
    };
  },
};
</script>

<style lang="sass"></style>
