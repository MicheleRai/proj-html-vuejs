<template>
  <body>
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
  </body>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },

};
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .container{
  max-width: 1200px;
  margin: auto;
  }
}
</style>
