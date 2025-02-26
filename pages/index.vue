<script setup lang="ts">
import Section from "~/components/Segment.vue";

const data = reactive({
  seg1: {
    id: "1",
    cls: "seg-1",
    head: "Мирна Україна",
    subhead: "В якій нам жити.",
    cnt: "Уяви: тихий вечір у Києві, люди гуляють набережною, десь лунає жива музика. Ніяких тривог, ніяких втрат, тільки спокійне життя, яке давно мало бути нормою. Заводи працюють на економіку, а не на оборону, а замість зборів на дрони збирають на стартапи, дослідження і аніме фестивалі.",
    img: "wait for it"
  },
})
</script>

<template>
  <Section></Section>
  <Section></Section>
  <Section></Section>
</template>

<style scoped>

</style>