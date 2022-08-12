<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
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
