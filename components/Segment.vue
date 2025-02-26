<script setup lang="ts">

</script>

<template>
  <div class="segment seg-1">
    <div class="seg-l">
      <h2>1<span>/</span>  Мирна Україна</h2>
      <h4 class="subheader">lorem lorem lorem</h4>
      <p class="content">test tekst testse</p>
    </div>
    <div class="seg-r">aa</div>
  </div>
</template>

<style scoped>
.segment {
  display: flex;
  flex-direction: row;

  height: 100vh;

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