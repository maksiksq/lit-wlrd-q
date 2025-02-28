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

// scrollbar

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #bcbcbc;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

// and selection

::-moz-selection {
  background: #f9ff00;
}

::selection {
  background: #f9ff00;
}


</style>
<style lang="scss" scoped></style>