<script setup lang="ts">
const props = defineProps(['id', 'cls', 'head', 'subhead', 'cnt', 'svg'])

import Ukraine from './svg/Ukraine.vue'
import cow from './svg/cow.vue'
import dronee from './svg/dronee.vue'

const evenClass = ref('even')
const seg1Class = ref('seg-1')
const seg2Class = ref('seg-2')
const seg3Class = ref('seg-3')
const ifEven = parseInt(props.id)%2;

onMounted(() => {
  console.log(props.svg)
})

</script>

<template>
  <div :class="[!ifEven ? evenClass : '', 'seg-'+props.id]"  class="segment">
    <div class="seg-l half">
      <h2>{{ id }}<span>/</span> {{ head }}</h2>
      <h4 class="subheader">{{ subhead }}</h4>
      <p class="content">{{ cnt }}</p>
    </div>
    <div class="seg-r half">
      <Ukraine v-if="props.svg === '0'" />
      <cow v-else-if="props.svg === '1'" />
      <dronee v-else-if="props.svg === '2'" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.even {
  flex-direction: row-reverse !important; // yes yes very proper i know
  .seg-l {
    padding-left: 0;
    padding-right: 7.292vw;
  }
}

.segment {
  display: flex;
  flex-direction: row;

  height: 90vh;

  h2 {
    font-family: 'e-Ukraine head',sans-serif;
    font-size: 3.75rem;

    padding-bottom: 1vw;
  }

  h4 {
    padding-bottom: 1vw;
    font-size: 1.3rem;
  }

  p {
    font-size: 1.3rem;
  }

  div {
    display: flex;
  }

  .seg-l {
    width: 40%;
    padding-left: 7.292vw;
    padding-top: 10vw;

    display: flex;
    flex-direction: column;

    .subheader {
      color: #D4D4D4;
    }

  }
  .seg-r {
    width: 60%;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 80%;
      height: 100%;
    }

    .svg-cow {
      width: 170%;
    }
    .svg-dronee {
      width: 30%;

    }

  }

}
</style>