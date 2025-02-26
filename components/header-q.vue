<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <div class="logo">temp</div>
      <a href="#seg-1">1</a>
      <a href="#seg-2">2</a>
      <a href="#seg-3">3</a>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100vw;
  height: 4.125vw;

  background-color: #282828;
  border-bottom: 1px solid black;

  nav {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    * {
      margin-left: 2.083vw;
      font-size: 2rem;

      font-family: "e-Ukraine head", sans-serif;
    }

    .logo {
      margin-left: 2.83vw;
    }
  }
}
</style>