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
    <div class="second-section">
      <div class="second-sec-image">
        <img
          src="images\about-us-03-image-01-215x300.png"
          alt="career-image"
        >
      </div>
      <div class="second-sec-text">
        <p>DREAM WITH <strong>MAXCOACH</strong></p>
        <h1 class="s-s-h">
          Construct A
        </h1>
        <span>Stunning</span>
        <h1>Career Prospective</h1>
        <div class="dropdown">
          <div
            v-for="(objProspettiva, i) in prospettive"
            :key="(objProspettiva.i)"
          >
            <p
              class="title"
              @click="trigger(i)"
              @keypress="trigger(i)"
            >
              <strong>{{ objProspettiva.title }}</strong>
              <font-awesome-icon icon="fa-solid fa-circle-plus" />
              <font-awesome-icon icon="fa-solid fa-circle-minus" />
            </p>
            <p v-show="objProspettiva.toggle">
              {{ objProspettiva.text }}
            </p>
          </div>
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
      prospettive: [
        {
          title: 'Multiple Platforms Supported for Teaching & Studyng',
          text: 'MaxCoach support the act of teaching and learning on multiple plattforms like online and ofline via material downolads. We know things aren?t supposed to be devoured in a short time, you can always acces our knowledge base from any device.',
          toggle: true,
        },
        {
          title: 'Multiple Course Partecipation at the Same Time',
          text: 'MaxCoach support the act of teaching and learning on multiple plattforms like online and ofline via material downolads. We know things aren?t supposed to be devoured in a short time, you can always acces our knowledge base from any device.',
          toggle: false,
        },
        {
          title: 'Track Study Progress & Deliver Prompt Feedback',
          text: 'MaxCoach support the act of teaching and learning on multiple plattforms like online and ofline via material downolads. We know things aren?t supposed to be devoured in a short time, you can always acces our knowledge base from any device.',
          toggle: false,
        },
      ],
    };
  },
  methods: {
    trigger(i) {
      this.objProspettiva[i].toggle = !this.objProspettiva[i].toggle;
    },
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
    color: #62C5B5;
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
.second-section{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5rem;
  .second-sec-image{
    flex: 0 0 45%;
  }
  .second-sec-text{
    flex: 0 0 45%;
    p{
      color: gray;
    }
    h1{
      color: #3F3A64;
      font-size: 50px;
    }
    .s-s-h{
      display: inline-block;
    }
    span{
      color: #62C5B5;
      font-size: 45px;
    }
    .dropdown{
      p{
        display: flex;
        justify-content: space-between;
        background-color: #62C5B5;
        color: white;
        padding: 1rem .7rem;
        border-radius: 5px;
      }
    }
  }

}
</style>
