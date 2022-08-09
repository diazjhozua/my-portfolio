<template>
  <section class="hero-section red lighten-5 py-10">
    <v-container>
      <v-row align="center">
        <v-col cols="12" sm="7" class="order-last order-sm-first">
          <h2 class="text-h5 font-weight-bold">
            Hello, my name is
            <span class="red--text text--darken-4 font-italic"
              >Jhozua Diaz</span
            >
          </h2>

          <vue-typed-js
            :typeSpeed="100"
            :loop="true"
            :strings="['Developer', 'Tutoree']"
          >
            <h1 class="text-h4 text-sm-h3 font-weight-bold mt-5">
              I'm a
              <span class="red--text text--darken-4"
                ><span class="typing"></span
              ></span>
            </h1>
          </vue-typed-js>

          <p class="text-title mt-5 py">
            I'm an aspiring developer with general knowledge about developing
            realworld application. My expertise is to create full-stack website
            using current technologies.
          </p>

          <div class="d-flex">
            <v-btn color="red darken-4" class="white--text my-2 mx-2" large
              >Hire me</v-btn
            >
            <v-btn
              outlined
              color="red darken-4"
              class="white--text my-2 mx-2"
              large
              >Learn more
            </v-btn>
          </div>

          <div class="d-flex mt-10">
            <v-btn
              href="https://www.linkedin.com/in/diazjhozua/"
              target="_blank"
              text
              plain
            >
              <v-icon large>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn
              href="https://github.com/diazjhozua"
              target="_blank"
              text
              plain
            >
              <v-icon large>mdi-github</v-icon>
            </v-btn>

            <v-btn
              href="https://www.facebook.com/diazjhozua/t"
              target="_blank"
              text
              plain
            >
              <v-icon large>mdi-facebook</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" sm="5" align="right" class="hero-img-box">
          <img
            :src="require('../assets/graph.png')"
            class="hero-background"
            alt="Jhozua Diaz"
          />
          <img
            :src="require('../assets/hero.png')"
            class="hero-img"
            alt="Jhozua Diaz"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.hero-section {
  min-height: 460px;
}

.hero-img-box {
  position: relative;

  width: 100%;
  height: 320px;
}

.hero-img-box img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  transition: all 1s;
}

.hero-background {
  width: 150px;
}

.hero-img-box:hover .hero-background {
  bottom: 4rem;
}

.hero-img-box:hover .hero-img {
  left: 54%;
}
</style>
