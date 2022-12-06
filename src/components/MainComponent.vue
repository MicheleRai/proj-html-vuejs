<template>
  <div class="container">
    <div class="first-section">
      <p>START LEARNING CODING LANGUAGES</p>
      <h1 class="section-title">
        Build Your Dream
      </h1>
      <span>TODAY</span>
      <div class="corsi">
        <div
          v-for="objCorso in corsi"
          :key="objCorso.i"
        >
          <img
            :src="objCorso.image"
            alt="corso-image"
          >
          <h2>
            {{ objCorso.corso }}
          </h2>
          <p>
            {{ objCorso.text }}
          </p>
          <a href="!">Start now <font-awesome-icon icon="fa-solid fa-arrow-right" /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
  data() {
    return {
      corsi: [
        {
          corso: 'Idea Discussion',
          image: 'images/home-5-image-box-01.png',
          text: 'Get teamed up with the specialist who work and teach coding for years at famous universities.',
        },
        {
          corso: 'Web Development',
          image: 'images/home-5-image-box-02.png',
          text: 'Learn to start building a webpage from scratch. You decide your own path, course and speed.',
        },
        {
          corso: 'Sistem Administration',
          image: 'images/home-5-image-box-03.png',
          text: 'Learners are encouraged to study the mechanism and structure of system administration.',
        },
        {
          corso: 'Graphic Design',
          image: 'images/home-5-image-box-04.png',
          text: 'Have apassion for graphics and arts? Show your talents with confidence and self-assertivenes.',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.first-section{
  padding: 4rem 0;
  text-align: center;
  p{
    padding-bottom: 1rem;
    color: gray;
  }
  .section-title{
    display: inline-block;
    color: #3F3A64;
    font-size: 50px;
    margin-bottom: 5rem;
  }
  span{
    color: green;
    font-size: 50px;
  }
  .corsi{
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
      margin: 1rem 0;
    }
    a{
    text-decoration: none;
    color: #3F3A64;
    }
  }
}
</style>
