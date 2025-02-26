<script setup lang="ts">

</script>

<template>
  <div class="segment seg-1">
    <div class="seg-l">
      <h2>1<span>/</span>  Мирна Україна</h2>
      <h4 class="subheader">В якій нам жити.</h4>
      <p class="content">Уяви: тихий вечір у Києві, люди гуляють набережною, десь лунає жива музика. Ніяких тривог, ніяких втрат, тільки спокійне життя, яке давно мало бути нормою. Заводи працюють на економіку, а не на оборону, а замість зборів на дрони збирають на стартапи, дослідження і аніме фестивалі.</p>
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