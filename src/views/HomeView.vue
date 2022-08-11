<template>
  <main>
    <hero-section></hero-section>
    <tech-stack></tech-stack>
    <about-me></about-me>
  </main>
</template>

<script>
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";
import AboutMe from "../components/AboutMe";

export default {
  name: "HomeView",

  components: {
    HeroSection,
    TechStack,
    AboutMe,
  },
};
</script>
