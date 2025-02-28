<script setup lang="ts">
import {animate} from "motion"

import Ukraine from './svg/Ukraine.vue'
import cow from './svg/cow.vue'
import dronee from './svg/dronee.vue'

const props = defineProps(['id', 'cls', 'head', 'subhead', 'cnt', 'svg'])

const evenClass = ref('even')
const ifEven = parseInt(props.id) % 2;

const fadeDefault = ref('fade-default')

onMounted(() => {
  console.log(props.svg)
})

async function onEnter(el: any, onComplete: any) {
  console.log(el)
  console.log("hai")
  await animate(el,
      { y: ['10vw', '0%'], opacity: [0, 1]},  { duration: 0.8, easing: "ease-out" })

  onComplete()
}

function animateOnEnter() {
  console.log("test");
}

</script>

<template>
  <div :id="'seg-'+props.id" :class="[!ifEven ? evenClass : '']" class="segment">
    <div class="seg-l half">
      <Transition appear :css="false" @enter="onEnter" @appear="onEnter">
        <h2>{{ id }}<span>/</span> {{ head }}</h2>
      </Transition>
      <Transition appear :css="false" @enter="onEnter" @appear="onEnter">
        <h4 class="subheader">{{ subhead }}</h4>
      </Transition>
      <Transition appear :css="false" @enter="onEnter" @appear="onEnter">
        <p v-intersect="animateOnEnter" class="content">{{ cnt }}</p>
      </Transition>
    </div>
    <div class="seg-r half">
      <Transition appear :css="false" @enter="onEnter" @appear="onEnter">
        <Ukraine v-if="props.svg === '0'"/>
      </Transition>
      <Transition appear :css="false" @enter="onEnter" @appear="onEnter">
        <cow v-if="props.svg === '1'"/>
      </Transition>
      <Transition appear :css="false" @enter="onEnter" @appear="onEnter">
        <dronee v-if="props.svg === '2'"/>
      </Transition>



    </div>
  </div>
</template>

<style lang="scss" scoped>

@mixin motion {

}


.fade-default {
  background-color: purple;
  * {
    opacity: 0;
    background-color: yellow;
  }
}

.even {
  flex-direction: row-reverse !important; // yes yes very proper i know
  .seg-l {
    padding-left: 0;
    padding-right: 7.292vw;
  }
}

.segment {
  padding-top: 4.125vw;

  display: flex;
  flex-direction: row;

  height: 90vh;

  div {
    display: flex;
  }

  .seg-l {
    width: 40%;
    padding-left: 7.292vw;
    padding-top: 10vw;

    display: flex;
    flex-direction: column;

    h2 {
      @include motion;

      font-family: 'e-Ukraine head', sans-serif;
      font-size: 3.75rem;

      padding-bottom: 1vw;
    }

    h4 {
      @include motion;

      padding-bottom: 1vw;
      font-size: 1.3rem;
    }

    p {
      @include motion;
      font-size: 1.3rem;
    }


    .subheader {
      @include motion;

      color: #D4D4D4;
    }

  }

  .seg-r {
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      @include motion;

      width: 80%;
      height: 100%;
    }

    .svg-cow {
      @include motion;

      width: 60%;
    }

    .svg-dronee {
      @include motion;

      width: 30%;
    }

  }

}
</style>