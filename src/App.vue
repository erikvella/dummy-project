<script>
import Header from './components/Header.vue';
import Jumbotron from './components/partials/Jumbotron.vue';
import Section1 from './components/partials/Section1.vue';
import Section2 from './components/partials/Section2.vue';
import Section3 from './components/partials/Section3.vue';
import Footer from './components/Footer.vue';
export default{

  components: {
    Header,
    Jumbotron,
    Section1,
    Section2,
    Section3,
    Footer
  },

  name : 'App',
}
</script>

<template>

 <Header/>
 <Jumbotron />
 <Section1 />
 <Section2 />
 <Section3 />
 <Footer />

</template>

<style lang="scss">

@use './scss/main.scss';

</style>
