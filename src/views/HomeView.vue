<template>
  <main>
    <v-app-bar app color="white" flat elevation="1">
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
        size="32"
      >
        <v-img
          alt="Jhozua Diaz Website Logo"
          class="shrink"
          :src="require('../assets/logo.png')"
          transition="scale-transition"
        />
      </v-avatar>

      <v-tabs color="black" centered class="ml-n9">
        <v-tabs-slider color="black"></v-tabs-slider>
        <v-tab @click="navigate(0)"> Home </v-tab>
        <v-tab @click="navigate(1)"> About Me </v-tab>
        <v-tab @click="navigate(2)"> Experience </v-tab>
        <v-tab @click="navigate(3)"> Projects </v-tab>
      </v-tabs>
    </v-app-bar>
    <hero-section ref="hero" @smoothScroll="navigate(1)"></hero-section>
    <tech-stack></tech-stack>
    <about-me id="about" ref="about"></about-me>
    <education-work ref="exp"></education-work>
    <involved-projects ref="projects"></involved-projects>
    <footer-section></footer-section>
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";
import AboutMe from "../components/AboutMe";
import EducationWork from "../components/EducationWork";
import InvolvedProjects from "@/components/InvolvedProjects.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  name: "HomeView",

  components: {
    HeroSection,
    TechStack,
    AboutMe,
    EducationWork,
    InvolvedProjects,
    FooterSection,
  },
  data() {
    return {
      tabs: 0,
    };
  },
  methods: {
    navigate(tabIndex) {
      let element;
      let hash;
      switch (tabIndex) {
        case 0:
          element = this.$refs.hero.$el;
          hash = "#home";
          break;
        case 1:
          element = this.$refs.about.$el;
          hash = "#about";
          break;
        case 2:
          element = this.$refs.exp.$el;
          hash = "#experience";
          break;
        case 3:
          element = this.$refs.projects.$el;
          hash = "#projects";
          break;
        default:
          return;
      }

      this.$smoothScroll({
        scrollTo: element,
        duration: 1000,
        offset: -50,
        hash: hash,
      });
    },
  },
};
</script>
