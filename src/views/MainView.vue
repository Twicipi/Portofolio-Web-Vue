<script setup>
import Navbar from "@/components/ui/Navbar.vue";
import TheWelcome from "@/components/pages/TheWelcome.vue";
import AboutSection from "@/components/pages/AboutSection.vue";
import ProjectSection from "@/components/pages/ProjectSection.vue";
import ContactSection from "@/components/pages/ContactSection.vue";
import { onBeforeUnmount, ref } from "vue";
const cursorBigRef = ref(null);
const cursorSmallRef = ref(null);

let mouseX = 0,
  mouseY = 0;
let cursorX = 0,
  cursorY = 0;

const moveCursor = (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY + window.scrollY;
  updateCursor();
};

const updateCursor = () => {
  if (cursorSmallRef.value) {
    cursorSmallRef.value.style.left = `${mouseX}px`;
    cursorSmallRef.value.style.top = `${mouseY}px`;
  }
};

document.addEventListener("mousemove", moveCursor);
window.addEventListener("scroll", updateCursor); 

const animateCursor = () => {
  cursorX += (mouseX - cursorX) * 0.25;
  cursorY += (mouseY - cursorY) * 0.25;

  if (cursorBigRef.value) {
    cursorBigRef.value.style.left = `${cursorX}px`;
    cursorBigRef.value.style.top = `${cursorY}px`;
  }

  requestAnimationFrame(animateCursor);
};

animateCursor();

onBeforeUnmount(() => {
  sessionStorage.clear(); 
  document.removeEventListener("mousemove", moveCursor);
  window.removeEventListener("scroll", updateCursor); 
});
</script>

<template>
  <Navbar />
  <div ref="cursorBigRef" class="custom-cursor big"></div>
  <div ref="cursorSmallRef" class="custom-cursor small"></div>
  <section>
    <div class="welcome fs-label flex align-items-f-end">
      <TheWelcome />
    </div>
  </section>
  <AboutSection />
  <ProjectSection />
  <ContactSection />
</template>

<style>
.custom-cursor {
  width: 30px;
  z-index: 999;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  position: absolute;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
}

.custom-cursor.big {
  width: 40px;
  height: 40px;
  border: 2px solid black;
  transform: translate(-50%, -50%);
  transition: transform 0.1s ease-out;
}

.custom-cursor.big:hover {
  transform: translate(-50%, -50%) scale(3);
  z-index: 1000; 
}

.custom-cursor.small {
  width: 10px;
  height: 10px;
  background-color: black;
}
</style>
