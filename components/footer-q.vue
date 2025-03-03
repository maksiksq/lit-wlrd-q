<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {library} from '@fortawesome/fontawesome-svg-core'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faBluesky, faGithub, faDiscord} from '@fortawesome/free-brands-svg-icons'

library.add(faBluesky, faGithub, faDiscord, faEnvelope)

const desktopScalingClass = ref('desktop-scaling')

const socials = [
  {
    _name: 'Github',
    tooltip: 'maksiksq (Натисни щоб перейти)',
    value: undefined,
    icon: faGithub,
    desktopScaling: false,
    link: 'https://github.com/maksiksq'
  },
  {
    _name: 'Bluesky',
    tooltip: 'maksiks.bsky.social (Натисни щоб перейти)',
    value: undefined,
    icon: faBluesky,
    desktopScaling: false,
    link: 'https://bsky.app/profile/did:plc:hyordudettlbjkmif7jg2cdu'
  },
  {
    _name: 'Discord',
    tooltip: '@maksiks (Натисни щоб скопіювати)',
    value: "@maksiks",
    icon: faDiscord,
    desktopScaling: true,
    link: undefined
  },
  {
    _name: 'E-mail',
    tooltip: 'maksiks.touch@gmail.com (Натисни щоб скопіювати)',
    value: "maksiks.touch@gmail.com",
    icon: faEnvelope,
    desktopScaling: false,
    link: undefined
  }
]

function handleClick(social: any) {
  if (social.link !== undefined) {
    return faEnvelope
  }
  navigator.clipboard.writeText(social.value)
}

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
        <!-- would make it a NuxtLink but doesn't matter enough here,
        and I'd have to make the logic more complex -->
        <a v-for="social in socials" target="_blank" :href="social.link" v-tooltip="{content: social.tooltip, autoHide: true}" @click="handleClick(social)">
          <font-awesome-icon :icon="social.icon" :class="social.desktopScaling ? desktopScalingClass : ''"></font-awesome-icon>
        </a>
      </address>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use "@/assets/styles/include-media.scss";

footer {
  @include include-media.media(">phone", "<=tablet") {
    height: 100%;
    flex-direction: column;

    margin-top: 2vh;
  }

  // calculation to make the footer itself-scrollbar width because flex is funny with it
  width: calc(calc(100vw + 0%) - calc(100vw - 100%));
  height: 8vw;


  background-color: #282828;

  display: flex;
  flex-direction: row;
  align-items: center;

  border-top: 1px solid black;


  .cont-l {
    @include include-media.media(">phone", "<=tablet") {
      width: 100%;
      border-bottom: 1px solid black;

      padding: 5vw;
    }

    display: flex;
    align-items: center;
    width: 70%;
    height: 100%;
    justify-content: center;
    border-right: 1px solid black;

    p {
      @include include-media.media(">phone", "<=tablet") {
        font-size: 1rem;

        padding-left: 5vw;
        padding-right: 5vw;
      }

      color: #D4D4D4;
      font-size: 1.2rem;
    }
  }

  .cont-r {
    @include include-media.media(">phone", "<=tablet") {
      width: 100%;
    }

    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;

    div {
      @include include-media.media(">phone", "<=tablet") {
        padding: 3vw;
      }


      width: 100%;
      height: 50%;

      display: flex;
      align-items: center;

      border-bottom: 1px black solid;

      p {
        @include include-media.media(">phone", "<=tablet") {
          font-size: 1.8rem;


        }


        font-family: "e-Ukraine head", sans-serif;
        font-size: 2rem;
        padding-left: 1vw;
      }
    }

    address {
      @include include-media.media(">phone", "<=tablet") {
        height: 15vw;
      }

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

        cursor: pointer;

        .desktop-scaling {
          @include include-media.media(">phone", "<=tablet") {
            scale: 2.2;
          }
        }

        svg {
          @include include-media.media(">phone", "<=tablet") {
            scale: 2.2;
            height: 30%;
          }

          scale: 0.6;
          width: 4vw;
          height: 100%;
        }
      }
    }
  }
}

.tooltip {
  position: fixed;
  background: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  font-size: 12px;
  pointer-events: none;
}
</style>