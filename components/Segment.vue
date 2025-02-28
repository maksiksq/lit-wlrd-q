<script setup lang="ts">
import {animate} from "motion"
import {vIntersectionObserver} from '@vueuse/components'

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
  console.log('boink')
  onComplete()
}

const animatedElems = new Set();
const i = ref(0.1);
const isDone = ref(false);

function animateOnObserve(entries: IntersectionObserverEntry[]) {
  i.value += 0.1;
  entries.forEach((entry) => {
    const el = entry.target as HTMLElement;

    if (!el || animatedElems.has(el.dataset.animId)) {
      return;
    }

    if (entry.isIntersecting) {
      animatedElems.add(el.dataset.animId);

      const duration = 0.8 + i.value;

      if (el.dataset.animId && el.dataset.animId[0] + el.dataset.animId[1] === 'sv' ) {
        animate(el, { y: ["10vw", "0%"], opacity: [0, 1] }, { duration: 1.2, easing: "spring", stiffness: 10, damping: 500 }).finished.then(() => {
          isDone.value = true;
        });
      } else if (el.dataset.animId && el.dataset.animId[0] + el.dataset.animId[1] === 'ev') {
        animate(el, { x: ["100vw", "0%"], opacity: [0, 1] }, { duration: duration, easing: "spring", stiffness: 300, damping: 10, mass: 100  });
      } else {
        animate(el, { x: ["-100vw", "0%"], opacity: [0, 1] }, { duration: duration, easing: "spring", stiffness: 300, damping: 10, mass: 100  });
      }
    }
  });
}

const evId = ref("head-{{ props.id }}")
const subheadId = ref("subhead-{{ props.id }}")
const contentId = ref("content-{{ props.id }}")

onMounted(() => {
  animatedElems.clear();

  if (!ifEven) {
    evId.value = "ev-head-{{ props.id }}";
    subheadId.value = "ev-subhead-{{ props.id }}";
    contentId.value = "ev-content-{{ props.id }}";
  }
})

</script>

<template>
  <div :id="'seg-'+props.id" :class="[!ifEven ? evenClass : '']" class="segment">
    <div class="seg-l half">
      <h2 v-intersection-observer="animateOnObserve" :data-anim-id=evId style="opacity: 0; transform: translateY(10vw);" class="main-head">
        {{ id }}<span>/</span> {{ head }}
      </h2>

      <h4 v-intersection-observer="animateOnObserve" :data-anim-id=subheadId style="opacity: 0; transform: translateY(10vw);" class="subheader">
        {{ subhead }}
      </h4>

      <div class="anim-cont" v-intersection-observer="animateOnObserve" :data-anim-id=contentId style="opacity: 0; transform: translateY(10vw);">
        <p class="content">{{ cnt }}</p>
      </div>
    </div>
    <div class="seg-r half">
      <Ukraine :isDone="isDone" v-intersection-observer="animateOnObserve" data-anim-id="sv-Ukraine-{{ props.id }}" :style="{transform: ifDone ? 'translateY(20vw)' : 'translateY(0vw)'}" v-if="props.svg === '0'"/>
      <cow :isDone="isDone" v-intersection-observer="animateOnObserve" data-anim-id="sv-cow-{{ props.id }}" :style="{transform: ifDone ? 'translateY(40vw)' : 'translateY(0vw)'}" v-if="props.svg === '1'"/>
      <dronee :isDone="isDone" v-intersection-observer="animateOnObserve" data-anim-id="sv-dronee-{{ props.id }}" :style="{transform: ifDone ? 'translateY(40vw)' : 'translateY(0vw)'}" v-if="props.svg === '2'"/>


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

  overflow-y: hidden;
  overflow-x: hidden;

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