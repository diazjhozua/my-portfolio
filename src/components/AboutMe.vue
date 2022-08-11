<template>
  <section class="terminal px-sm-15 mb-10">
    <v-shell
      style="width: inherit !important"
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
    ></v-shell>
  </section>
</template>

<script>
export default {
  data() {
    return {
      send_to_terminal: "info",
      banner: {
        header: "About Me",
        subHeader: "Do want to get to know more about me? Use this terminal",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "☠️",
          second: "💀",
          time: 750,
        },
        sign: "info-diaz $",
        img: {
          align: "left",
          link: require("../assets/logo.png"),
          width: 100,
          height: 100,
        },
      },
      commands: [
        {
          name: "info",
          get() {
            return `I was born in Philippines and grew up in the city of Muntinlupa, went to school in Technological University of the Philippines - Taguig Campus taking Bachelor of Science in Information Technology. When I first grasp to the field of technology, I was addicted to it and immedietly got interested in the field of programming. Solving problems is always my habit, I could not finish any day without practicing my skills in programming.`;
          },
        },
        {
          name: "name",
          get() {
            return "Jhozua Diaz";
          },
        },
        {
          name: "short-term-goal",
          get() {
            return "To become a senior developer within 2-3 years working.";
          },
        },
        {
          name: "long-term-goal",
          get() {
            return "To become a developer with knowledge on different frameworks <br/>To have Master's and PhD degree in information technology <br/>";
          },
        },
        {
          name: "hobby",
          get() {
            return "Initializing new git repository 😂. ";
          },
        },
        {
          name: "dislike",
          get() {
            return "Initializing new git repository 😂. ";
          },
        },
      ],
    };
  },
  methods: {
    prompt(value) {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      } else {
        this.send_to_terminal = `'${value}' is not recognized as an internal command or external, an executable program or a batch file`;
      }
    },
  },
};
</script>

<style scoped>
.terminal {
  background-color: black;
  width: 100% !important;
  min-height: 440px;
}
</style>
