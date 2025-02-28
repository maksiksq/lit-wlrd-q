<script setup lang="ts">
// font awesome icons because yes
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
</script>
<template>
  <div>
    <NuxtLayout>
      <header-q/>
      <main>
        <NuxtPage/>
      </main>
      <footer-q></footer-q>
    </NuxtLayout>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&display=swap');
@import url('https://raw.githubusercontent.com/maksiksq/lit-wlrd-q/refs/heads/master/assets/styles/include-media.scss');

@font-face {
  font-family: 'e-Ukraine';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/e-Ukraine-Regular.otf') format('otf');
}

@font-face {
  font-family: 'e-Ukraine head';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./fonts/e-UkraineHead-Regular.otf') format('otf');
}

body, html, * {
  margin: 0;
  padding: 0;

  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

body, html {
  overflow-x: hidden;
  background-color: #2B2B2B;

  font-family: 'e-Ukraine', sans-serif;
  color: white;
}


</style>
<style lang="scss" scoped></style>