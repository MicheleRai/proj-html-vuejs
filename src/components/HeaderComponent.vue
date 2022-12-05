<template>
  <header>
    <div class="container">
      <nav>
        <img
          src="images\dark-logo.png"
          alt="logo"
        >
        <div class="text">
          <p
            v-for="part in navParts"
            :key="part"
          >
            {{ part }}
          </p>
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
    };
  },
};
</script>

<style lang="scss" scoped>
  header{
    background-color: #E9E6E3;
    nav{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .text{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;
      }
    }
  }
</style>
