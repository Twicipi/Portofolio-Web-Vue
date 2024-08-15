<script setup>
import POSKeratonIcon from "../icons/POSKeratonicon.vue";
import RopDeHomIcon from "../icons/RopDeHomIcon.vue";
import JigglersDessertIcon from "../icons/JigglersDessertIcon.vue";
</script>
<template>
  <div class="card-container">
    <div class="portfolio-card">
      <img src="/src/assets/img/fotoPOSKeraton.jpeg" alt="Portfolio Image" width="250" height="150" />
      <div class="card-content">
        <h3>POS Keraton Kasepuhan Cirebon</h3>
        <p>
          Website of POS/Cashier Keraton Kasepuhan Cirebon. In this project I
          worked as Front-End Developer.
        </p>
        <p class="info">
          Technology Used:
          <POSKeratonIcon />
        </p>
      </div>
    </div>

    <div class="portfolio-card">
      <img src="/src/assets/img/websiteRopade.jpeg" alt="Portfolio Image" width="250" height="150" />
      <div class="card-content">
        <h3>Website Ropa de Hombre</h3>
        <p>Website landing page Ropa De Hombre</p>
        <p class="info">
          Technology Used:
          <RopDeHomIcon />
        </p>
      </div>
    </div>

    <div class="portfolio-card">
      <img src="/src/assets/img/JigglersDessertPict.png" alt="Portfolio Image" width="250" height="150" />
      <div class="card-content">
        <h3>Jigglers Dessert</h3>
        <p>Website for Jigglers Dessert Pudding Shop</p>
        <p class="info">
          Technology Used:
          <JigglersDessertIcon />
        </p>
      </div>
    </div>

    <div class="portfolio-card">
      <img src="/src/assets/img/Geshidan.png" alt="Portfolio Image" width="250" height="150" />
      <div class="card-content">
        <h3>Geshidan To Do App</h3>
        <p>Web based to do list app using react.js</p>
        <p class="info">
          Technology Used:
          <JigglersDessertIcon />
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.portfolio-card {
  width: 500px;
  height: 450px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  transition: 0.3s ease-out;
  display: flex;
  flex-direction: column;
}

.portfolio-card:hover {
  border-color: burlywood;
  border-width: 10px;
}

.portfolio-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: 0.3s ease-in-out;
}

.portfolio-card img:hover {
  transform: scale(110%);
}

.card-content {
  padding: 10px;
}

.card-content h3 {
  font-size: 1.7em;
}

.info {
  gap: 10px;
  margin-top: 4rem;
  display: flex;
  justify-content: left;
}
</style>
