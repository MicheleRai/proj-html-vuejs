<template>
  <main>
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
              v-for="(objProspettiva) in prospettive"
              :key="(objProspettiva.i)"
              class="obj"
            >
              <p
                class="title"
                :class="{green:objProspettiva.toggle}"
                @click="trigger(objProspettiva)"
                @keypress="trigger(objProspettiva)"
              >
                <strong>{{ objProspettiva.title }}</strong>
                <font-awesome-icon
                  :class="{hide:objProspettiva.toggle}"
                  icon="fa-solid fa-circle-plus"
                />
                <font-awesome-icon
                  :class="{hide:!objProspettiva.toggle}"
                  icon="fa-solid fa-circle-minus"
                />
              </p>
              <p v-show="objProspettiva.toggle">
                {{ objProspettiva.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="result-section">
      <div class="container">
        <div
          v-for="objResult in results"
          :key="(objResult.risultato)"
        >
          <h1>{{ objResult.numero }}</h1>
          <strong>{{ objResult.risultato }}</strong>
        </div>
      </div>
    </div>
    <div class="third-section">
      <div class="container">
        <div class="title">
          <p><strong>CHOOSE WHERE YOU'D LIKE TO BEGIN</strong></p>
          <h1>Latest Featured</h1>
          <span>Courses</span>
        </div>
        <div class="card-container">
          <div
            v-for="objCorso in nuoviCorsi"
            :key="objCorso.i"
            class="card"
          >
            <img
              :src="objCorso.img"
              alt="corso"
              class="poster"
            >
            <p>{{ objCorso.price }}</p>
            <p>
              <img
                :src="objCorso.teacherPhoto"
                alt="teacher-photo"
              >
              <span>{{ objCorso.teacher }}</span>
            </p>
            <h2>{{ objCorso.courses }}</h2>
            <p>
              <span>
                <font-awesome-icon icon="fa-solid fa-file-lines" />
                {{ objCorso.lessons }} Lessons
              </span>
              <span>
                <font-awesome-icon icon="fa-solid fa-user" />
                {{ objCorso.students }} Students
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </main>
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
          text: 'MaxCoach support the act of teaching and learning on multiple plattforms like online and ofline via material downolads. We know things aren\'t supposed to be devoured in a short time, you can always acces our knowledge base from any device.',
          toggle: true,
        },
        {
          title: 'Multiple Course Partecipation at the Same Time',
          text: 'MaxCoach support the act of teaching and learning on multiple plattforms like online and ofline via material downolads. We know things aren\'t supposed to be devoured in a short time, you can always acces our knowledge base from any device.',
          toggle: false,
        },
        {
          title: 'Track Study Progress & Deliver Prompt Feedback',
          text: 'MaxCoach support the act of teaching and learning on multiple plattforms like online and ofline via material downolads. We know things aren\'t supposed to be devoured in a short time, you can always acces our knowledge base from any device.',
          toggle: false,
        },
      ],
      results: [
        {
          risultato: 'FINISHED SESSIONS',
          numero: '1.925',
        },
        {
          risultato: 'ENROLLED LEARNERS',
          numero: '3.092+',
        },
        {
          risultato: 'ONLINE ISTRUCTORS',
          numero: '200',
        },
        {
          risultato: 'SATISFACTION RATE',
          numero: '100%',
        },
      ],
      nuoviCorsi: [
        {
          img: 'images/course-02-480x298.jpg',
          price: '$40.00',
          teacher: 'Blanche Helds',
          teacherPhoto: 'images/73ee246daf47502812ccefc84bf02898 (1).jpeg',
          courses: 'Learning to Write as a Professional Author',
          lessons: '20',
          students: '50',
        },
        {
          img: 'images/stock-full-hd-03-480x298.jpg',
          price: 'Free',
          teacher: 'Maggie Strickland',
          teacherPhoto: 'images/d0d504142acfde820eef2f11feea6253 (1).jpeg',
          courses: 'Customer-centric Info-Tech Strategies',
          lessons: '24',
          students: '769',
        },
        {
          img: 'images/stock-full-hd-04-480x298.jpg',
          price: '$19.00',
          teacher: 'Maggie Strickland',
          teacherPhoto: 'images/d0d504142acfde820eef2f11feea6253 (1).jpeg',
          courses: 'Open Programming Courses for Everyone: Python',
          lessons: '17',
          students: '62',
        },
        {
          img: 'images/stock-full-hd-06-480x298.jpg',
          price: '$26.00',
          teacher: 'Blanche Helds',
          teacherPhoto: 'images/73ee246daf47502812ccefc84bf02898 (1).jpeg',
          courses: 'Academic Listening and Note-taking',
          lessons: '14',
          students: '67',
        },
        {
          img: 'images/course-featured-image-01-480x298.jpg',
          price: '$39.00',
          teacher: 'Blanche Helds',
          teacherPhoto: 'images/73ee246daf47502812ccefc84bf02898 (1).jpeg',
          courses: 'Master jQuery in a Short Period of Time',
          lessons: '6',
          students: '51',
        },
        {
          img: 'images/stock-full-hd-05-480x298.jpg',
          price: '$59.00',
          teacher: 'Blanche Helds',
          teacherPhoto: 'images/73ee246daf47502812ccefc84bf02898 (1).jpeg',
          courses: 'Introduction to javascript for Beginners',
          lessons: '14',
          students: '76',
        },

      ],
    };
  },
  methods: {
    trigger(objProspettiva) {
      const obj = objProspettiva;
      obj.toggle = !obj.toggle;
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
    background-image: url(../../public/images/underlay-shape-lilla.svg);
    background-size: 400px;
    background-repeat: no-repeat;
    background-position: left bottom ;
    img{
    width: 60%;
    margin-left: 10rem;
    }
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
      .obj{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.08);
      border-radius: 5px;
      margin: 2rem 0;
        .green{
          background-color: #62C5B5;
          color: white;
        }
        .hide{
          display: none;
        }
        p{
          display: flex;
          justify-content: space-between;
          padding: 1rem .7rem;
          border-radius: 5px;
      }
      }
    }
  }
}
.result-section{
    background-color: #FAF8F6;
    .container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      padding: 4rem 0;
      h1{
        color: #35AE96;
        font-size: 50px;
      }
      strong{
        color: gray;
      }
    }
  }
.third-section{
  background-image: url(../../public/images/jumbo-overlay.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  padding-bottom: 5rem;
  .title{
    text-align: center;
    padding: 5rem 0 2rem 0;
    p{
      color: gray;
    }
    h1{
      color: #3F3A64;
      font-size: 50px;
      display: inline-block;
    }
    span{
      color: #35AE96;
      font-size: 50px;
      padding-left: .7rem;
    }
  }
  .card-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    .card{
      flex: 0 0 30%;
      margin: 2rem 0;
      .poster{
        width: 100%;
      }
    }
  }
}
</style>
