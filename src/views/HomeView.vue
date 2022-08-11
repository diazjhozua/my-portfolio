<template>
  <main>
    <hero-section></hero-section>
    <tech-stack></tech-stack>
    <about-me></about-me>
    <education-work></education-work>
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";
import AboutMe from "../components/AboutMe";
import EducationWork from "../components/EducationWork";

export default {
  name: "HomeView",

  components: {
    HeroSection,
    TechStack,
    AboutMe,
    EducationWork,
  },
};
</script>
