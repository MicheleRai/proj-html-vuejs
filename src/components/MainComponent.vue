<template>
  <main>
    <div class="container">
      <div
        id="start"
        class="first-section"
      >
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
      <div
        id="blog"
        class="second-section"
      >
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
    <div
      id="courses"
      class="third-section"
    >
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
            <p class="price">
              <strong>{{ objCorso.price }}</strong>
            </p>
            <div class="card-text">
              <p class="teacher-container">
                <img
                  :src="objCorso.teacherPhoto"
                  alt="teacher-photo"
                >
                <span>{{ objCorso.teacher }}</span>
              </p>
              <h2>{{ objCorso.courses }}</h2>
              <p class="contenuto">
                <span class="gray">
                  <font-awesome-icon icon="fa-solid fa-file-lines" />
                  {{ objCorso.lessons }} Lessons
                </span>
                <span class="gray right">
                  <font-awesome-icon icon="fa-solid fa-user" />
                  {{ objCorso.students }} Students
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="button-container">
          <button>View all courses <font-awesome-icon icon="fa-solid fa-arrow-right" /></button>
        </div>
      </div>
    </div>
    <div class="fourth-section">
      <div class="first-container">
        <div class="text">
          <p
            class="gray"
          >
            <strong>WHY HESITATE TO REGISTER?</strong>
          </p>
          <h1>
            Learn At Your Own
            <span>Pace</span>
          </h1>
          <div class="vantaggi">
            <p class="gray">
              <font-awesome-icon
                class="green"
                icon="fa-solid fa-check"
              />
              Select & customize courses to your preferences
            </p>
            <p class="gray">
              <font-awesome-icon
                class="green"
                icon="fa-solid fa-check"
              />
              Change the tutor and make arrangements
            </p>
            <p class="gray">
              <font-awesome-icon
                class="green"
                icon="fa-solid fa-check"
              />
              Partecipate in event to join others
            </p>
            <p class="gray">
              <font-awesome-icon
                class="green"
                icon="fa-solid fa-check"
              />
              Get the desired certificate delivered at house
            </p>
          </div>
          <button>Get started for free</button>
        </div>
        <div class="img-section">
          <img
            src="images\home-5-image-01-269x300.png"
            alt="Pace-img"
            class="jumbo"
          >
          <img
            src="images\maxcoach-shape-05-100x100.png"
            alt="smaller"
            class="small"
          >
        </div>
      </div>
      <div class="second-container">
        <div class="img-section">
          <img
            src="images\home-5-image-02.png"
            alt="Pace-img"
            class="jumbo"
          >
          <img
            src="images\maxcoach-shape-07-150x150.png"
            alt="smaller"
            class="small-one"
          >
          <img
            src="images\maxcoach-shape-01.png"
            alt="smaller"
            class="small-two"
          >
          <img
            src="images\maxcoach-shape-02.png"
            alt="smaller"
            class="small-tre"
          >
        </div>
        <div class="text">
          <p class="gray">
            WHAT ARE YOU LOOKING FOR?
          </p>
          <h1>Learn on your <span>mobile</span> anytime!</h1>
          <p class="text-part">
            Save lessons for later and ravisa or write notes at any
            time and on multiple devices on your way. Never
            interfere with activities of enjoyment or other precious moments.
          </p>
          <button>Download Our App</button>
        </div>
      </div>
    </div>
    <div class="fifth-section">
      <div class="container">
        <div class="title">
          <p>GET IN CONTACT NOW</p>
          <h1>Upcoming <span>Events</span></h1>
        </div>
        <div class="event-container">
          <div
            v-for="objEvent in events"
            :key="objEvent.i"
            class="card"
          >
            <div class="text">
              <p>
                <font-awesome-icon icon="fa-solid fa-location-dot" />
                {{ objEvent.position }}
              </p>
              <h3>{{ objEvent.event }}</h3>
            </div>
            <div class="date-container">
              <p class="day">
                {{ objEvent.day }}
              </p>
              <p class="mounth">
                <strong> {{ objEvent.mounth }}</strong>
              </p>
              <button>Get ticket</button>
            </div>
          </div>
        </div>
        <p class="all-event">
          Excited about our event?
          <span>View all events <font-awesome-icon icon="fa-solid fa-arrow-right" /></span>
        </p>
      </div>
    </div>
    <div
      id="story"
      class="sixth-section"
    >
      <div class="container">
        <div class="title">
          <p>PEOPLE ARE PRAISING MAXCOACH</p>
          <h1>What make they <span>love us?</span></h1>
        </div>
        <SliderComponent />
        <div class="carosello">
          <div
            v-for="objRecensione in recensioni"
            :key="objRecensione.i"
            class="card"
          >
            <img
              :src="objRecensione.img"
              alt="foto-profilo"
            >
            <p class="recensione">
              {{ objRecensione.text }}
            </p>
            <p class="nome">
              <strong>{{ objRecensione.name }}</strong>
            </p>
            <p class="job">
              {{ objRecensione.job }}
            </p>
          </div>
        </div>
        <div class="start">
          <h2>Start today for getting <span>Online Certification</span></h2>
          <h1>You can be your own guiding star with our help!</h1>
          <button><strong>Get started now</strong></button>
          <img
            src="images\maxcoach-shape-02.png"
            alt="small"
            class="small-one"
          >
          <img
            src="images\maxcoach-shape-02.png"
            alt="small"
            class="small-two"
          >
          <img
            src="images\maxcoach-shape-01.png"
            alt="small"
            class="small-tre"
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import SliderComponent from '@/components/SliderComponent.vue';

export default {
  name: 'MainComponent',
  comments: {
    SliderComponent,
  },
  components: { SliderComponent },
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
      events: [
        {
          position: 'Texas, US',
          event: 'Storytelling Workshop',
          day: '22',
          mounth: 'NOV',
        },
        {
          position: 'New York, US',
          event: 'Painting Art Contest 2020',
          day: '10',
          mounth: 'OCT',
        },
        {
          position: 'Hamburg, Germany',
          event: 'International Art Fair 2020',
          day: '23',
          mounth: 'NOV',
        },
        {
          position: 'Illinois, US',
          event: 'Street Performance: Call for Artist',
          day: '15',
          mounth: 'DEC',
        },
        {
          position: 'Illinois, US',
          event: 'Consumer Food Safety Education Conference',
          day: '22',
          mounth: 'JUL',
        },
        {
          position: 'Dubai',
          event: 'How meditation improve your mental health',
          day: '12',
          mounth: 'AUG',
        },
      ],
      recensioni: [
        {
          img: 'images/testimonial-avata-02.jpg',
          text: 'I am free to learn at my own pace, follow my own schedule and choose teh subject I like. Great study portal for people like me.',
          name: 'MINA HOLLACE',
          job: '/Freelancer',
        },
        {
          img: 'images/testimonial-avata-04.jpg',
          text: 'MaxCoach is my  best choice. their tutors are smart and professional when dealing with students.',
          name: 'MADLEY PONDOR',
          job: '/IT Specialist',
        },
        {
          img: 'images/testimonial-avata-01.jpg',
          text: 'I am happy with theeir arrangiament of lessons and subjects. They reflect a scientific investigation.',
          name: 'LUDVIC DUBBLE',
          job: '/Private Tutor',
        },
        {
          img: 'images/testimonial-avata-03.jpg',
          text: 'MaxCoach is my  best choice. their tutors are smart and professional when dealing with students.',
          name: 'MADLEY PONDOR',
          job: '/IT Specialist',
        },
        {
          img: 'images/73ee246daf47502812ccefc84bf02898 (1).jpeg',
          text: 'I am free to learn at my own pace, follow my own schedule and choose teh subject I like. Great study portal for people like me.',
          name: 'MINA HOLLACE',
          job: '/Freelancer',
        },
        {
          img: 'images/d0d504142acfde820eef2f11feea6253 (1).jpeg',
          text: 'I am happy with theeir arrangiament of lessons and subjects. They reflect a scientific investigation.',
          name: 'LUDVIC DUBBLE',
          job: '/Private Tutor',
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
    color: #62C5B5 ;
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
    padding: .6rem .5rem;
    border-radius: 5px;
    font-weight: bold;
    &:hover{
      background-color: #f0f0f0;
      color: #62C5B5;
    }
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
      position: relative;
      border-radius: 5px;
        &:hover{
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.3);
          background-color: white;
        }
      .gray{
        color: gray;
      }
      .right{
        margin-left: 2rem;
      }
      .price{
        color: white;
        background-color: #35AE96;
        position: absolute;
        top: 0;
        right: 0;
        padding: .5rem .7rem;
        border-radius: 0 5px;
      }
      .poster{
        width: 100%;
        border-radius: 5px 5px 0 0;
      }
      .card-text{
        padding:1rem 1.5rem 1.5rem 1.5rem;
        line-height: 2rem;
        .teacher-container{
          display: flex;
          align-items: center;
          gap: 1rem;
          img{
            height: 35px;
            border-radius: 100%;
          }
        }
        h2{
          margin-top: .7rem;
        }
        .contenuto{
          margin-top: 1.3rem;
        }
      }

    }
  }
  .button-container{
    text-align: center;
    button{
      background-color: #35AE96;
      color: white;
      border: 0px;
      padding: 1.3rem 4rem;
      border-radius: 5px;
      &:hover{
      background-color: #3F3A64;
      color: white;
    }
    }
  }
}
.fourth-section{
  margin-bottom: 5rem;
  .first-container{
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .text{
      flex: 0 0 30%;
      .gray{
        color: gray;
      }
      .green{
        color: #35AE96;
        margin-right: .7rem;
      }
      h1{
        font-size: 50px;
        display: inline-block;
        margin-right: 1rem;
        color: #3F3A64;
        span{
        font-size: 50px;
        color: #35AE96;
        font-weight: normal;
        }
      }
      .vantaggi{
        line-height: 2rem;
        margin-top: 1rem;
      }
      button{
      background-color: #35AE96;
      color: white;
      border: 0px;
      padding: 1rem 2rem;
      border-radius: 5px;
      margin-top: 2rem;
      &:hover{
      background-color: #3F3A64;
      color: white;
    }
      }
    }
    .img-section{
      flex: 0 0 50%;
      background-image: url(../../public/images/underlay-shape-grey.svg);
      background-repeat: no-repeat;
      background-size: 400px;
      padding: 2rem 0 5rem 5rem;
      background-position-x: 0px;
      background-position-y: 160px;
      position: relative;
      .jumbo{
        height: 500px;
        margin: auto;
      }
      .small{
        position: absolute;
        height: 140px;
        top: 300px;
        right: 60px;
      }
    }
  }
  .second-container{
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 3rem;
    .img-section{
      flex: 0 0 50%;
      background-image: url(../../public/images/underlay-shape-grey.svg);
      background-repeat: no-repeat;
      background-size: 400px;
      padding: 2rem 0 5rem 5rem;
      background-position-x: 0px;
      background-position-y: 160px;
      position: relative;
      .jumbo{
        height: 500px;
        margin: auto;
      }
      .small-one{
        z-index: -1;
        position: absolute;
        right: 60px;
        top: 330px;
      }
      .small-two{
        position: absolute;
        top: 290px;
        right: 550px;
      }
      .small-tre{
        position: absolute;
        height: 80px;
        top: 20px;
        left:480px;
      }
    }
    .text{
      flex: 0 0 40%;
      .gray{
        color: gray;
      }
      h1{
        font-size: 50px;
        color: #3F3A64;
        margin: 2rem 0;
        span{
          color: #35AE96;
          font-weight: normal;
        }
      }
      .text-part{
        margin-bottom: 3.5rem;
        line-height: 1.5rem;
      }
      button{
      background-color: #35AE96;
      color: white;
      border: 0px;
      padding: 1rem 2rem;
      border-radius: 5px;
      &:hover{
      background-color: #3F3A64;
      color: white;
    }
      }
    }
  }

}
.fifth-section{
  padding-bottom: 4rem;
  .title{
    text-align: center;
    p{
      color: gray;
    }
    h1{
      color: #3F3A64;
      span{
        color: #35AE96;
        font-weight: normal;
      }
    }
  }
  .event-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-top: 3rem;
    .card{
      background-color: #F8F8F8;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex: 0 0 calc(50% - 1rem);
      border-left: 4px solid #F8F8F8;
      &:hover{
        border-left:4px solid #35AE96;
      }
      .text{
        flex: 0 0 60%;
        p{
          color: gray;
          font-size: small;
        }
        h3{
          margin-top: .7rem;
        }
      }
      .date-container{
        text-align: center;
        .day{
          color: #35AE96;
          font-size: 40px;
        }
        .mounth{
          margin: 0 0 .5rem 0 ;
          font-size: 14px;
        }
        button{
          background-color: #35AE96;
          color: white;
          border: 0px;
          padding: .5rem 2rem;
          border-radius: 5px;
          &:hover{
            background-color: #3F3A64;
            color: white;
          }
        }
      }
    }
  }
  .all-event{
    text-align: center;
    color: gray;
    margin: 3rem 0;
    span{
      color: #35AE96;
    }
  }
}
.sixth-section{
  background-color: #F8F8F8;
  .title{
    text-align: center;
    p{
      color: gray;
    }
    h1{
      color: #3F3A64;
      font-size: 50px;
      span{
        color: #35AE96;
        font-weight: normal;
      }
    }
  }
  .carosello{
    margin-top: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    .card{
      margin-bottom: 5rem;
      flex: 0 0 calc((100% - 4rem) / 3);
      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 5px;
      text-align: center;
      padding: 0 3rem 3rem 3rem;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05), 0 6px 20px 0 rgba(0, 0, 0, 0.05);
      img{
        width: 200px;
        border-radius: 100%;
        position: relative;
        top: -50px;
      }
      .recensione{
        margin-bottom: 2rem;
      }
      .name{
        margin-bottom: 1rem;
      }
      .job{
        padding: 1rem;
        color: gray;
      }
    }
  }
  .start{
    text-align: center;
    color: #3F3A64;
    padding-bottom: 7rem;
    position: relative;
    h2{
      font-size: 30px;
      span{
        color: #35AE96;
        font-weight: normal;
      }
    }
    h1{
      font-size: 50px;
      margin-bottom: 2rem;
    }
    button{
      background-color: #35AE96;
      color: white;
      border: 0px;
      padding: 1.3rem 6rem;
      border-radius: 5px;
      &:hover{
      background-color: #3F3A64;
      color: white;
    }
    }
    .small-one{
      position: absolute;
      top: 110px;
      right: -30px;
    }
    .small-two{
      position: absolute;
      transform: rotate(180deg);
      height: 80px;
      top: 0;
      left: -100px;
    }
    .small-tre{
      position: absolute;
      top: 100px;
      left: -70px;
    }
  }
}
</style>
