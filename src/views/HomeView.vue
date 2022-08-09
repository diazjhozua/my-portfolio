<template>
  <main>
    <hero-section></hero-section>
    <tech-stack></tech-stack>
    <about-me></about-me>
    <hello-world />
  </main>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";
import AboutMe from "../components/AboutMe";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    HeroSection,
    TechStack,
    AboutMe,
  },
};
</script>
