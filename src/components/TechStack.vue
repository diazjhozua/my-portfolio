<template>
  <section class="mt-5 mb-5">
    <h3 class="text-center text-subtitle-2 mb-4 font-weight-bold grey--text">
      TECH STACK
    </h3>
    <vue-horizontal responsive :button="true" class="mx-10 horizontal">
      <figure
        v-for="(stack, index) in techStack"
        :key="index"
        class="d-flex flex-column"
      >
        <v-icon size="100">{{ stack.icon }}</v-icon>
        <figcaption class="text-center text-overline grey--text">
          {{ stack.text }}
        </figcaption>
      </figure>
    </vue-horizontal>
  </section>
</template>

<script>
import VueHorizontal from "vue-horizontal";

export default {
  components: {
    VueHorizontal,
  },

  data() {
    return {
      techStack: [
        {
          icon: "mdi-language-php",
          text: "Laravel & CodeIgniter",
        },
        {
          icon: "mdi-language-csharp",
          text: "ASP.NET",
        },
        {
          icon: "mdi-nodejs",
          text: "Node Js",
        },
        {
          icon: "mdi-language-html5",
          text: "HTML5",
        },
        {
          icon: "mdi-language-css3",
          text: "CSS3",
        },
        {
          icon: "mdi-bootstrap",
          text: "Bootstrap",
        },
        {
          icon: "mdi-language-javascript",
          text: "Javascript",
        },
        {
          icon: "mdi-react",
          text: "React JS",
        },
        {
          icon: "mdi-vuejs",
          text: "Vue JS",
        },
        {
          icon: "mdi-vuetify",
          text: "Vuetify",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
