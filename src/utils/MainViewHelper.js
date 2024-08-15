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
})

export default{
  cursorBigRef,
  cursorSmallRef,
  mouseX,
  mouseY,
  moveCursor,
  updateCursor,
  animateCursor,
  onBeforeUnmount
}