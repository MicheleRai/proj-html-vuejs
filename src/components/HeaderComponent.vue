<template>
  <header>
    <div class="container">
      <nav>
        <img
          src="images\dark-logo.png"
          alt="logo"
        >
        <div class="text">
          <a
            v-for="part in navParts"
            :key="part"
            href="!"
          >
            {{ part }} <font-awesome-icon
              class="icona"
              icon="fa-solid fa-chevron-down"
            />
          </a>
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
            >{{ carrello }}</div>
          </a>
          <a href="!">
            <font-awesome-icon icon="fa-solid fa-circle-user" />
            .
          </a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      navParts: ['Home', 'Pages', 'Courses', 'Features', 'Blog', 'Shop'],
      carrello: 0,
    };
  },
};
</script>

<style lang="scss" scoped>
  header{
    background-color: #E9E6E3;
    nav{
      display: flex;
      justify-content: space-around;
      align-items: center;
      height: 70px;
      img{
        height: 30px;
      }
      .text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
        a{
          text-decoration: none;
          color: #3F3A64;
          .icona{
            margin-left: .2rem;
            font-size: 15px;
          }
        }
        .carrello{
          position: relative;
          .icona-carrello{
            font-size: 20px;
          }
          .contenuto-carrello{
            background-color: green;
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
      }
    }
  }
</style>
