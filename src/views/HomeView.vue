<template>
  <main>
    <hero-section></hero-section>
    <tech-stack></tech-stack>
    <hello-world />
  </main>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import HeroSection from "../components/HeroSection";
import TechStack from "../components/TechStack";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    HeroSection,
    TechStack,
  },
};
</script>
