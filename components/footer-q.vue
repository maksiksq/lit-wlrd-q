<script setup lang="ts">

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'

import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faBluesky, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons'

library.add(faBluesky, faGithub, faDiscord, faEnvelope)

const socials = [
  {
    _name: 'GitHub',
    tooltip: '',
    icon: faGithub,
    scaling: null,
    link: ''
  },
  {
    _name: 'Bluesky',
    tooltip: '',
    icon: faBluesky,
    scaling: null,
    link: ''
  },
  {
    _name: 'Discord',
    tooltip: '@maksiks (Натисни щоб скопіювати)',
    icon: faDiscord,
    scaling: 0.8,
    link: ''
  },
  {
    _name: 'E-mail',
    tooltip: 'maksiks.touch@gmail.com (Натисни щоб скопіювати)',
    icon: faEnvelope,
    scaling: null,
    link: ''
  }
]

</script>

<template>
  <footer>
    <div class="cont-l">
      <p>Ось твоє печиво з чаєм ☕🍪, за те що ти дійшов до кінця сайту!</p>
    </div>
    <div class="cont-r">
      <div>
        <p>Maksiks☕</p>
      </div>
      <address>
        <a v-for="social in socials" href="#">
          <font-awesome-icon :icon="social.icon" :style="{scale: social.scaling}"></font-awesome-icon>
        </a>
      </address>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  // calculation to make the footer itself-scrollbar width because flex is funny with it
  width: calc(calc(100vw + 0%) - calc(100vw - 100%));
  height: 8vw;
  background-color: #282828;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-top: 1px solid black;


  .cont-l {
    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    justify-content: center;
    border-right: 1px solid black;

    p {
      color: #D4D4D4;
      font-size: 1.2rem;
    }
  }

  .cont-r {
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;

    div {
      width: 100%;
      height: 50%;

      display: flex;
      align-items: center;

      border-bottom: 1px black solid;

      p {
        font-family: "e-Ukraine head", sans-serif;
        font-size: 2rem;
        padding-left: 1vw;
      }
    }

    address {
      display: flex;
      justify-content: space-between;
      align-items: center;

      width: 100%;
      height: 50%;

      a {
        width: 100%;
        height: 100%;
        border-right: 1px black solid;
        color: white;

        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          scale: 0.6;
          width: 4vw;
          height: 100%;
        }
      }
    }
  }
}
</style>