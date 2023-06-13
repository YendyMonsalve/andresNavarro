<template lang="pug">
.mb-5
  .nav-bar.p-3
    ul
      li(data-section="section1" @click="scrollToSection") Proyectos
      li(data-section="section1-2" @click="scrollToSection") Publicidad
      li(data-section="section2" @click="scrollToSection") Acerca de
      li(data-section="section3" @click="scrollToSection") Videos
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    scrollToSection(event) {
      const sectionId = event.target.getAttribute('data-section')
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: 'smooth' })
      }
    },
  },
}
</script>

<style lang="sass">
.nav-bar
  top: 0
  position: fixed
  z-index: 1
  //margin-bottom: 30px
  background-color: #1b1b1b
  width: 100%
  // box-shadow: 10px 1px 100px #8f8f8f
  $primary-color: #007bff
  $button-padding: 0.5rem 1rem
  $button-font-size: 1rem
  ul
    display: flex
    list-style: none
    padding: 0
    justify-content: center

    li
      color: white
      margin-right: 1rem
      cursor: pointer
      font-weight: 700
      margin-bottom: 0

      &:last-child
        margin-right: 0

      &:hover,
      &:focus
        text-decoration: underline
</style>
