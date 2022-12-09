<template>
  <header>
    <div class="container">
      <nav>
        <img
          src="images\dark-logo.png"
          alt="logo"
        >
        <div class="text">
          <ul>
            <li
              v-for="part in navParts"
              :key="part"
            >
              <a :href="part.url">
                {{ part.text }}
                <font-awesome-icon
                  class="icona"
                  icon="fa-solid fa-chevron-down"
                />
              </a>
            </li>
          </ul>
          <a
            href="!"
            class="carrello"
          >
            <font-awesome-icon
              class="icona-carrello"
              icon="fa-solid fa-cart-shopping"
            />
            <div
              class="contenuto-carrello"
              v-bind="carrello"
            >
              {{ carrello }}
            </div>
          </a>
          <a href="!">
            <font-awesome-icon icon="fa-solid fa-circle-user" />
            <p>.</p>
          </a>
          <label for="s">
            <input
              type="text"
              placeholder="Search..."
            >
            <font-awesome-icon
              class="lente"
              icon="fa-solid fa-magnifying-glass"
            />
          </label>
        </div>
      </nav>
      <div class="jumbo">
        <div class="jumbo-text">
          <h1>Complete Your Dreams in JavaS Programming</h1>
          <p>
            Learn any coding program in distance and for a
            resonable fee. You don't have to struggle alone,
            you've got our assistance and help.
          </p>
          <button><font-awesome-icon icon="fa-solid fa-download" /> Download free E-book</button>
        </div>
        <div class="jumbo-img">
          <img
            src="images\home-5-hero-image-279x300.png"
            alt="jumbo"
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      navParts: [
        {
          url: '#start',
          text: 'Home',
        },
        {
          url: '#story',
          text: 'Pages',
        },
        {
          url: '#courses',
          text: 'Courses',
        },
        {
          url: '#features',
          text: 'Features',
        },
        {
          url: '#blog',
          text: 'Blog',
        },
        {
          url: '#courses',
          text: 'Shop',
        },
      ],
      carrello: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
  header{
    background-color: #E9E6E3;
    background-image: url(../../public/images/jumbo-overlay.svg);

    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 70px;
      img{
        height: 30px;
      }
      .text{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        ul{
          display: flex;
          gap: .7rem;
          list-style: none;
        }
        a{
          text-decoration: none;
          color: #3F3A64;
          .icona{
            margin-left: .2rem;
            font-size: 10px;
          }
          p{
            display: none;
          }
        }
        .carrello{
          position: relative;
          .icona-carrello{
            font-size: 20px;
          }
          .contenuto-carrello{
            background-color: #62C5B5;
            color: white;
            border-radius: 100%;
            text-align: center;
            position: absolute;
            padding: .2rem .4rem;
            font-size: 12px;
            top: -15px;
            right: -12px;
          }
        }
        label{
          position: relative;
          top: -7px;
          input{
            border: 1px solid white;
            padding: .7rem;
            border-radius: 5px 0 0 5px;
          }
          .lente{
            color: green;
            background-color: white;
            padding: .75rem;
            position: relative;
            top: 14px;
            border-radius: 0 5px 5px 0;
          }
        }
      }
    }
    .jumbo{
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 0;
      .jumbo-text{
        flex: 0 0 40%;
        h1{
        color: #3F3A64;
        font-size: 60px;
        padding-bottom: 2rem;
        }
        p{
          color: gray;
          padding-bottom: 2rem;
        }
        button{
          color: white;
          background-color: #20AD96;
          padding: 1rem 2rem;
          border: 0;
          border-radius: 7px;
          &:hover{
            background-color: #3F3A64;
            color: white;
          }
        }
      }
      .jumbo-img{
        flex: 0 0 40%;
        img{
          width: 100%;
        }
      }
    }
    .overlay{
      transform: rotate(180deg);
    }
  }
</style>
