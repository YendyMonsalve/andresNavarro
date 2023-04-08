<template lang="pug">
.p-lg-5.mx-5
    .content-cards.row.justify-content-center.align-items-end
        .col-xl-5(v-for="(item, index) in items" :key="index")
            .tarjeta-album.text-white.h-100
                img(:src="item.imagen")
                iframe(style="border-radius:12px" 
                :src="item.iframeSrc" 
                width="100%" 
                height="152" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy").mb-3
                .text-center
                    p.mb-1 {{ item.rol }}
                    p.mb-1.fst-italic {{ item.year }}
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          imagen: 'imagenes/elbeso.png',
          name: 'El beso',
          artist: 'Bienmeli ',
          rol: 'Piano y producción (2023)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/2acJQ2exvkghll049hoTkJ?utm_source=generator',
        },
        {
          imagen: 'imagenes/img3.jpg',
          name: 'Si te vas',
          artist: 'Josele',
          rol: 'Piano y producción  (2022)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/3UaDtF2tHgbKfIR9s5ZTUK?utm_source=generator',
        },
        {
          imagen: 'imagenes/img2.jpg',
          name: 'Girl',
          artist: 'El Rila ft El Ruido ',
          rol: 'Piano y producción (2022)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/3PxuQKMxyHkhCi741aQghV?utm_source=generator',
          link: '',
        },
        {
          imagen: 'imagenes/d.jpeg',
          name: 'Cantando nuestras músicas',
          artist: 'Idanis Rueda',
          rol: 'Piano y producción (2022)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/5l2TgiVWff74KKHyi1V7TA?utm_source=generator',
          link: '',
        },
        {
          imagen: 'imagenes/img5.jpg',
          name: 'Somos y nos tenemos',
          artist: 'El Rila ',
          rol: 'Piano y co-producción (2022)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/6gD4ygcw8YRPjjH85fEFS5?utm_source=generator',
        },
        {
          imagen: 'imagenes/img4.png',
          name: 'Adictivo',
          artist: 'Bienmeli ',
          rol: 'Piano y co-producción (2022)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/2lsSDUOlSVOvhYw3xpYW5T?utm_source=generator',
        },
        {
          imagen: 'imagenes/img1.jpg',
          name: 'Entre montaña y cemento',
          artist: 'Ricardo Andres ',
          rol: 'Piano (2022)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/4UhCRZoFG3CMbiX6QgQIsm?utm_source=generator',
        },
        {
          imagen: 'imagenes/img6.jpg',
          name: 'So High',
          artist: 'Garca ',
          rol: 'Piano y producción (2018)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/0z4OkZ8TDNwXwqJnKSalae?utm_source=generator',
        },
        {
          imagen: 'imagenes/kuisi.jpg',
          name: 'Tradicion Viva',
          artist: 'Kuisitambo ',
          rol: 'Piano | Nominado Grammy Latino 2016',
          year: ' ',
          iframeSrc:
            'https://open.spotify.com/embed/track/3AW3MTth8mZcmPH7c4NvRe?utm_source=generator',
        },
        {
          imagen: 'imagenes/forero.jpg',
          name: 'Raices de un corazón',
          artist: 'Andres forero',
          rol: 'Piano (2015)',
          year: '',
          iframeSrc:
            'https://open.spotify.com/embed/track/54ncml9hCscya9x450D5tH?utm_source=generator',
        },
        {
          imagen: 'imagenes/neyra.jpg',
          name: 'Cerquita a ti',
          artist: 'Neyra',
          rol: 'Piano (2015)',
          year: '',
          iframeSrc: '',
        },
      ],
    }
  },
}
</script>

<style lang="sass"></style>
