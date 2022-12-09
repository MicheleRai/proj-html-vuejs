<template>
  <body>
    <HeaderComponent />
    <MainComponent />
    <div class="scroll">
      <a
        class="scroll-button-one"
        href="!"
        aria-label="back to top"
      ><font-awesome-icon icon="fa-solid fa-arrow-up" /></a>
    </div>
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
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body {
    font-family: 'Roboto', sans-serif;
    .scroll{
      position: -webkit-sticky;
      position: sticky;
      bottom: 2rem;
      margin-left: 90vw;
      margin-top: 2rem;
      text-align: end;
      .scroll-button-one{
        background-color: #35AE96;
        color: white;
        border-radius: 100%;
        height: 40px;
        width: 40px;
        font-size: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
          background-color: #3F3A64;
          color: white;
        }
      }
    }
  }
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .container{
  max-width: 1200px;
  margin: auto;

  }
}
</style>
