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
@use "@/assets/styles/include-media.scss";


header {
  @include include-media.media(">phone", "<=tablet") {
    height: 15vw;
  }
  @include include-media.media("=>tablet", "<desktop") {
    height: 20vw;
  }

  width: 100vw;
  height: 4.125vw;

  background-color: #282828;
  border-bottom: 1px solid black;

  position: fixed;
  z-index: 99999;

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
        @include include-media.media(">phone", "<=tablet") {
          padding-left: 5vw;
          padding-right: 5vw;

          user-select: none;
        }

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
      @include include-media.media(">phone", "<=tablet") {
        margin-left: 5.3vw;
        padding-right: 5.3vw;

        width: 10vw;

      }
      margin-left: 2.83vw;
      cursor: pointer;

      padding-right: 2.083vw;
      width: 3vw;
    }
  }
}
</style>