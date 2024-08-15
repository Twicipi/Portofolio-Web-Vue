<template>
  <section id="about">
    <div class="about-content">
      <div class="about-text">
        <h2>About Me</h2>
        <p>
          Hey there! I am a student who has been interested in computers since I
          was 4 years old. I used to play video games, but over time I wanted to
          learn programming and then entered RPL. At RPL, I have an interest in
          Web Development, especially Front-End Development. I am quite familiar
          with using frameworks like Vue.js. I also have a basic understanding
          of UI/UX using Figma.
        </p>
      </div>
      <div class="image-profile-pic">
        <img
          src="/src/assets/img/profile-pic.jpeg"
          alt="Profile Picture"
          class="profile-pic"
        />
      </div>
    </div>
    <div class="image-icon">
      <img src="/src/assets/img/abstract-shape.png" alt="" />
    </div>
  </section>
</template>

<style scoped>
#about {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: antiquewhite;
  color: rgb(0, 0, 0);
  text-align: left;
}

.about-content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.about-text {
  width: 65%;
  padding: 0 20px;
}

#about p {
  font-size: 1.2em;
  margin-left: 5rem;
}

#about h2 {
  padding: 5px;
  margin-left: 5rem;
}

.image-profile-pic {
  width: 100%;
  text-align: right;
}

.profile-pic {
  margin-right: 10rem;
  max-width: 600px;
  width: 500px;
  transition: 0.3s ease-in-out;
  height: 350px;
  border-radius: 10%;
}

.profile-pic:hover {
  transform: scale(110%);
}

.image-icon img {
  width: 100px;
}
</style>
