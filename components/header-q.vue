<script setup lang="ts">

function scrollToTop() {
  window.scrollTo(0,0);
}

</script>

<template>
  <header>
    <nav>
      <video v-on:click="scrollToTop" class="logo" autoplay muted loop>
        <source src="../public/assets/vid/webcomp2625.mp4"></source>
      </video>
      <div>
        <a href="#seg-1">1</a>
      </div>
      <div>
        <a href="#seg-2">2</a>
      </div>
      <div>
        <a href="#seg-3">3</a>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 4.125vw;

  background-color: #282828;
  border-bottom: 1px solid black;

  position: fixed;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    div:last-child {
      border-right: 1px solid black;
    }

    div {
      height: 100%;
      border-left: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        padding-left: 2vw;
        padding-right: 2vw;
        width: 100%;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;

        text-decoration: none;
        color: white;
      }
    }


    * {
      font-size: 2rem;

      font-family: "e-Ukraine head", sans-serif;
    }

    .logo {
      margin-left: 2.83vw;
      cursor: pointer;

      padding-right: 2.083vw;
      width: 3vw;
    }
  }
}
</style>