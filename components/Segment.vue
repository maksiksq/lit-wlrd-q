<script setup lang="ts">
const props = defineProps(['id', 'cls', 'head', 'subhead', 'cnt', 'img'])

const ifEven = props.id/2%0;

</script>

<template>
  <div :style="{ flexDirection: ifEven ? 'row-reverse' : 'row' }"  class="segment seg-1">
    <div class="seg-l">
      <h2>{{ id }}<span>/</span> {{ head }}</h2>
      <h4 class="subheader">{{ subhead }}</h4>
      <p class="content">{{ cnt }}</p>
    </div>
    <div class="seg-r">aa</div>
  </div>
</template>

<style scoped>
.segment {
  display: flex;
  flex-direction: row;

  height: 100vh;

  h2 {
    font-family: 'e-Ukraine head',sans-serif;
    font-size: 3.75rem;

    padding-bottom: 1vw;
  }

  h4 {
    padding-bottom: 1vw;

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
  }
}
</style>