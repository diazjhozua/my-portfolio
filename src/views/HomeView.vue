<template>
  <main>
    <hero-section ref="myRef"></hero-section>
    <tech-stack></tech-stack>
    <about-me></about-me>
    <education-work></education-work>
    <involved-projects></involved-projects>
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
};
</script>
