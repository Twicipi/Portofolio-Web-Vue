<script setup>
import PortofolioCard from "../ui/ProjectCard.vue";
</script>
<template>
  <section id="portfolio">
    <h2>Projects</h2>
    <PortofolioCard />
  </section>
</template>

<style scoped>
#portfolio {
  height: auto;
  max-height: 300vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: antiquewhite;
  color: rgb(0, 0, 0);
  text-align: center;
}
#portfolio h2 {
  margin-bottom: 3rem;
}
</style>
