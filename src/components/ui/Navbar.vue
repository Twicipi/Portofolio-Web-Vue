<script setup>
import { ref, onMounted } from 'vue';

const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const isNavbarFixed = ref(false);

onMounted(() => {
  window.addEventListener('scroll', () => {
    isNavbarFixed.value = window.scrollY > 80;
  });
});
</script>
<template>
  <header :class="{ 'fixed-navbar': isNavbarFixed }">
    <nav class="navbar">
      <div class="logo">MuhamadWifi</div> 
      <ul>
        <li><a href="#home" @click="scrollToSection('home')" class="nav-link">Home</a></li>
        <li><a href="#about" @click="scrollToSection('about')" class="nav-link">About</a></li>
        <li><a href="#portfolio" @click="scrollToSection('portfolio')" class="nav-link">Project</a></li>
        <li><a href="#contact" @click="scrollToSection('contact')" class="nav-link">Contact</a></li>
      </ul>
    </nav>
  </header>
  <hr>
</template>

<style scoped>
.fixed-navbar {
  transition: 0.5s ease-in;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.logo {
  font-size: 1.5em;
  font-weight: bold;
  margin-right: 20px;
}

.navbar {
  background-color: antiquewhite;
  font-size: 1.3em;
  height: 80px;
  padding: 1rem;
  display: flex; 
  justify-content: space-between;
  align-items: center; 
}

.navbar ul {
  list-style: none;
  display: flex;
  align-items: center; 
}

.navbar li {
  margin: 0 1rem;
}

.navbar a {
  color: rgb(0, 0, 0);
  text-decoration: none;
}

.navbar a:hover {
  text-decoration: underline;
}
</style>
