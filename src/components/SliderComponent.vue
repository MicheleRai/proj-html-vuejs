<template>
  <div
    class="background"
  >
    <div class="container-blur">
      <div class="contents">
        <div
          class="slider"
          @mouseenter="pauseAutoplay"
          @focusin="pauseAutoplay"
          @mouseleave="resumeAutoplay"
          @focusout="resumeAutoplay"
        >
          <div class="slider-viewer">
            <div class="controls">
              <button
                class="btn-left"
                @click="changeSlide(-1)"
              >
                &lt;
              </button>
              <button
                class="btn-right"
                @click="changeSlide(1)"
              >
                &gt;
              </button>
            </div>

            <div
              v-for="(objRecensione, i) in recensioni"
              :key="objRecensione.i"
              class="slide"
              :class="i === activeIndex ? 'active' : ''"
            >
              <img
                :src="(objRecensione.img)"
                :alt="objRecensione.i"
              >
              <div class="text">
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
          </div>

          <div class="thumbs">
            <img
              v-for="(objRecensione, i) in recensioni"
              :key="objRecensione.i"
              :src="(objRecensione.img)"
              class="thumb-img"
              :class="{active: i === activeIndex}"
              alt="thumbs"
              @click="setActiveIndex(i)"
              @keypress="setActiveIndex(i)"
            >
          </div>
        </div>

        <!-- <div class="btns">
          <button
            class="btn-start-stop"
            @click="controlAutoplay"
          >
            {{ isAutoplayActive ? 'STOP' : 'START' }}
          </button>
          <button
            class="btn-invert"
            @click="invertAutoplay"
          >
            Invert
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderComponent',
  data() {
    return {
      timeSlider: 3 * 1000,
      direction: 1,
      activeIndex: 0,
      idInterval: 0,
      isAutoplayActive: true,
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
  mounted() {
    if (this.isAutoplayActive) {
      this.startAutoplay();
    }
  },
  methods: {
    changeSlide(direction) {
      if (direction > 0) {
        this.activeIndex += 1;
        if (this.activeIndex === this.recensioni.length) {
          this.activeIndex = 0;
        }
      } else {
        if (this.activeIndex === 0) {
          this.activeIndex = this.recensioni.length;
        }
        this.activeIndex -= 1;
      }
    },
    setActiveIndex(index) {
      this.activeIndex = index;
    },
    controlAutoplay() {
      if (this.isAutoplayActive) {
        this.stopAutoplay();
        this.isAutoplayActive = false;
      } else {
        this.startAutoplay();
        this.isAutoplayActive = true;
      }
    },
    stopAutoplay() {
      clearInterval(this.idInterval);
    },
    startAutoplay() {
      this.idInterval = setInterval(() => this.changeSlide(this.direction), this.timeSlider);
    },
    invertAutoplay() {
      this.direction *= -1;
    },
    pauseAutoplay() {
      console.log('mouseenter');
      this.stopAutoplay();
    },
    resumeAutoplay() {
      console.log('mouseleave');
      if (this.isAutoplayActive) {
        this.startAutoplay();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.background {
    border-radius: 100%;
    height: 60vh;
    background-size: cover;

  .container-blur {
    height: 100%;
    backdrop-filter: blur(20px);

    .contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      height: 100%;
      .slider {
        height: 100%;
        width: 80%;
        max-width: 500px;
        max-height: 600px;
        background-color: salmon;
        border: 5px solid white;
        border-radius: 100%;

        .slider-viewer {
          position: relative;
          height: 80%;

          .controls {
            position: absolute;
            inset: 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 100%;
            z-index: 10;
          }

          .btn-left, .btn-right {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: .5rem;
            width: 2rem;
            height: 2rem;
            border-radius: 100%;
            background-color: white;
          }

          .btn-left:hover, .btn-right:hover {
            background-color: lightblue;
            cursor: pointer;
          }

          .hidden {
            visibility: hidden;
          }

          .slide {
            position: absolute;
            inset: 0;
            display: none;
            width: 100%;
            height: 100%;
          }

          .slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .slide .text {
            position: absolute;
            bottom: 0 ;
            padding: 1.5rem;
            text-align: center;
            background-color: rgba(255, 255, 255, 0.584);
          }

          .slide.active {
            display: block;
          }
        }
        .thumbs {
          position: relative;
          display: flex;
          height: 20%;

          .thumb-img {
            flex: 1 0 0;
            min-width: 0;
            height: 100%;
            object-fit: cover;
            object-position: center;
            filter: brightness(.4);
          }

          .thumb-img.active {
            border: 5px solid white;
            filter: brightness(1);
          }
        }
      }
    }
  }
}
</style>
