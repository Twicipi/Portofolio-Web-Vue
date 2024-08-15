<template>
  <div>
    <section class="hero" id="home">
      <div class="welcome">
        <h1>Hi! I am Muhamad Wifi Shobron</h1>
        <p>
          Aspiring Web Developer from Indonesia | Currently studying Software
          Development at SMKN 4 Bandung
        </p>
      </div>
      <img src="/src/assets/img/abstract.png" alt="" />
    </section>
  </div>
</template>

<style scoped>
img {
  z-index: 0;
  display: flex;
  flex-direction: column;
  
  margin-left: auto;
  opacity: 0.5;
  width: 400px;
  margin-top: 30rem;
}

.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: antiquewhite;
  color: rgb(0, 0, 0);
  text-align: center;
}
.welcome {
  z-index: 3;
  position: absolute;
  margin-top: 5rem;
}
</style>
