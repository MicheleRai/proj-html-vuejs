<template>
  <footer id="us">
    <div class="left">
      <div class="address">
        <h3>Address</h3>
        <ul>
          <li>{{ footerData.address.adr }}</li>
          <li>{{ footerData.address.phone }} |{{ footerData.address.openDay }}|</li>
          <li>{{ footerData.address.email }}</li>
        </ul>
      </div>
    </div>
    <div class="right">
      <div class="explore">
        <h3>Explore</h3>
        <ul
          v-for="objExplore in footerData.explore"
          :key="objExplore.i"
        >
          <li><a :href="objExplore.url">{{ objExplore.text }}</a></li>
        </ul>
      </div>
      <div class="information">
        <h3>Information</h3>
        <ul
          v-for="objInfo in footerData.information"
          :key="objInfo.i"
        >
          <li><a :href="objInfo.url">{{ objInfo.text }}</a></li>
        </ul>
      </div>
    </div>
    <div class="social">
      <ul>
        <li>
          <a
            aria-label="facebook"
            href="!"
          ><font-awesome-icon icon="fa-brands fa-square-facebook" /></a>
        </li>
        <li>
          <a
            aria-label="twitter"
            href="!"
          ><font-awesome-icon icon="fa-brands fa-twitter" /></a>
        </li>
        <li>
          <a
            aria-label="instagram"
            href="!"
          ><font-awesome-icon icon="fa-brands fa-instagram" /></a>
        </li>
        <li>
          <a
            aria-label="linkedin"
            href="!"
          ><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
        </li>
      </ul>
    </div>
    <div class="copyright">
      <p><font-awesome-icon icon="fa-solid fa-copyright" /> 2020 Maxcoach. All Rights Reserved</p>
    </div>
    <div>
      <a
        class="scroll-button"
        href="!"
        aria-label="back to top"
      ><font-awesome-icon icon="fa-solid fa-arrow-up" /></a>
      <!-- TODO COME METTERE I LINK VUOTI CON SOLO LE ICONE ALL INTERNO -->
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  // TODO  CAPIRE COME ITERARE QUI DENTRO
  data() {
    return {
      footerData: {

        address: {
          adr: '382 NE 191st ST * 87394 Miami, FL 33179-3899',
          phone: '+1(305)547-9909',
          openDay: '9am-5pmEST, Monday-Friday',
          email: 'support@maxcoach.com',
        },

        explore: [
          {
            url: '#start',
            text: 'Start here',
          },
          {
            url: '#story',
            text: 'Success story',
          },
          {
            url: '#blog',
            text: 'Blog',
          },
          {
            url: '#courses',
            text: 'Courses',
          },
          {
            url: '#us',
            text: 'About us',
          },
          {
            url: '#us',
            text: 'Contact us',
          },
        ],

        information: [
          {
            url: '!',
            text: 'Membership',
          },
          {
            url: '!',
            text: 'Purchase guide',
          },
          {
            url: '!',
            text: 'Privacy policy',
          },
          {
            url: '!',
            text: 'Terms of services',
          },
        ],

      },
    };
  },
};
</script>

<style lang="scss" scoped>
footer{
  max-width: 1200px;
  margin: auto;
  display: flex;
  padding: 5rem 0;
  flex-wrap: wrap;
  position: relative;

  li{
  list-style: none;
  }
  a{
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover{
      color: #35AE96;
    }
  }

  .left{
    flex:0 0 45% ;
    line-height: 3rem;
  }
  .right{
    flex:0 0 55%;
    line-height: 3rem;
    display: flex;
    .explore{
      flex: 0 0 60%;
      h3{
        width: 100%;
      }
      ul{
        display: flex;
        flex-wrap: wrap;
        li{
          flex: 0 0 50%;
        }
      }
    }
    .information{
      flex: 0 0 40%;
    }
  }
  .social{
    ul{
      display: flex;
      gap: 3rem;
      a{
        color: rgb(165, 164, 164);
        font-size: 30px;
        &:hover{
          color: #35AE96;
        }
      }
    }
  }
  .copyright{
    flex: 0 0 100%;
    margin-top: 5rem;
    align-self: center;
    text-align: center;
    color: rgb(165, 164, 164);
  }
  .scroll-button{
    background-color: #35AE96;
    color: white;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    position: absolute;
    bottom: 20px;
    right: 10px;
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
</style>
