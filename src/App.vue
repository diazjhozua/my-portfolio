<template>
  <!-- <div style="width: 100% !important">
    <v-shell
      style="width: inherit !important; align-self: baseline; !important"
      :banner="banner"
      :shell_input="send_to_terminal"
      :commands="commands"
      @shell_output="prompt"
    ></v-shell>
  </div> -->

  <v-app>
    <v-app-bar color="red lighten-5">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/logo.png')"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title
          class="shrink mt-1 ml-4 hidden-sm-and-down text-h5 font-weight-bold font-italic"
          >My Profile
        </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Contact Me</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      send_to_terminal: "",
      banner: {
        header: "Vue Shell",
        subHeader: "Shell is power just enjoy ?",
        helpHeader: 'Enter "help" for more information.',
        emoji: {
          first: "?",
          second: "?",
          time: 750,
        },
        sign: "VueShell $",
        // img: {
        //   align: "left",
        //   link: "/mylogo.png",
        //   width: 100,
        //   height: 100,
        // },
      },
      commands: [
        {
          name: "info",
          get() {
            return `<p>With ❤️ By Salah Bentayeb @halasproject.</p>`;
          },
        },
        {
          name: "uname",
          get() {
            return navigator.appVersion;
          },
        },
      ],
    };
  },
  methods: {
    prompt(value) {
      if (value == "node -v") {
        this.send_to_terminal = process.versions.node;
      }
    },
  },
};
</script>

<style>
/* For Vue-Shell */
.cmdline {
  width: fit-content !important;
}

pre {
  font-size: 1em;
  white-space: pre-wrap;
}

/*  */
</style>
