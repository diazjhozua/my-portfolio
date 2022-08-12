<template>
  <section>
    <v-divider></v-divider>
    <v-footer padless>
      <v-card flat tile class="grey--text text-center" width="100%">
        <v-card-text>
          <v-btn
            class="mx-4 grey--text"
            href="https://www.linkedin.com/in/diazjhozua/"
            target="_blank"
            icon
          >
            <v-icon size="24px">mdi-linkedin</v-icon>
          </v-btn>

          <v-btn
            href="https://github.com/diazjhozua"
            target="_blank"
            class="mx-4 grey--text"
            icon
          >
            <v-icon size="24px">mdi-github</v-icon>
          </v-btn>

          <v-btn
            href="https://www.facebook.com/diazjhozua/"
            class="mx-4 grey--text"
            target="_blank"
            icon
          >
            <v-icon size="24px">mdi-facebook</v-icon>
          </v-btn>
        </v-card-text>

        <v-card-text class="grey--text">
          {{ new Date().getFullYear() }} — <strong>Jhozua Diaz</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </section>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style scoped></style>
