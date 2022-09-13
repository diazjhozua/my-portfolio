<template>
  <section class="mt-16 mb-16 pb-16">
    <v-container>
      <h2 class="text-h5 text-sm-h3 text-center font-weight-bold">Projects</h2>

      <vue-horizontal responsive scroll :button="false" class="horizontal">
        <v-card
          v-for="(project, index) in projects"
          :key="index"
          class="d-flex flex-column my-12 mx-sm-4 mx-xl-auto"
          min-width="300"
        >
          <!-- <v-img height="250" contain :src="project.image"></v-img> -->

          <v-card-title>{{ project.title }}</v-card-title>

          <v-card-subtitle class="text--primary"
            >({{ project.subTitle }})</v-card-subtitle
          >

          <v-card-text>
            <div class="grey--text">
              {{ project.associated }}
            </div>

            <div class="text--primary my-4">
              {{ project.description }}
            </div>
          </v-card-text>

          <v-spacer></v-spacer>
          <v-card-actions>
            <v-row no-gutters v-if="project.links && project.links.length > 0">
              <v-col
                cols="6"
                v-for="(link, index) in project.links"
                :key="index"
              >
                <v-btn
                  color="grey darken-4"
                  :href="link.href"
                  target="“_blank”"
                  text
                >
                  <v-icon>{{ link.icon }}</v-icon>
                  {{ link.label }}
                </v-btn>
              </v-col>
            </v-row>

            <div v-else class="text--secondary ma-3">
              FOR TREND MICRO ASSOCIATE ONLY
            </div>
          </v-card-actions>
        </v-card>
      </vue-horizontal>
    </v-container>
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
      projects: [
        {
          title: "e-Serbisyo",
          subTitle:
            "Barangay Cupang Information Dessimination and Certificate Issuance System",
          associated:
            "Associated with Technological University of the Philippines",
          image: require("../assets/closed-sign.png"),
          description:
            "e-Serbisyo website and android applications allow barangay officials and residents to communicate and provide services through the digital platform.",
          links: [
            {
              icon: "mdi-github",
              label: "Mobile",
              href: "https://github.com/diazjhozua/eSerbisyoAndroid",
            },
            {
              icon: "mdi-github",
              label: "Web",
              href: "https://github.com/diazjhozua/eSerbisyoWebApi",
            },
            {
              icon: "mdi-web",
              label: "Visit",
              href: "https://barangay-cupang.herokuapp.com/",
            },
          ],
        },
        {
          title: "TrendEats: Merchant Web",
          subTitle: "Food Delivery Service App",
          associated: "Associated with Trend Micro",
          image: require("../assets/closed-sign.png"),
          description:
            "TrendEats is a food delivery service that allows Trend Micro employees to order affordable and nutritious food. TrendEats has a merchant app for the concessionaire to create a menu and process orders.",
          links: [],
        },
        {
          title: "Shuttle App: Wayfarer Admin",
          subTitle: "Shuttle Service App",
          associated: "Associated with Trend Micro",
          image: require("../assets/closed-sign.png"),
          description:
            "The Shuttle application is a shuttle service for Trend Micro Employees. The Wayfarer admin application is for managing the services like creating routes, approving drivers, and other CMS related to the shuttle application.",
          links: [],
        },
        {
          title: "My Expense",
          subTitle: "Expense Tracker App",
          associated: "Sample Project",
          image: require("../assets/closed-sign.png"),
          description:
            "My expense tracker is a website mobile-first application focuses on managing expense of the user with different various functionality.",
          links: [
            {
              icon: "mdi-github",
              label: "API",
              href: "https://github.com/diazjhozua/my-expense-api",
            },
            {
              icon: "mdi-github",
              label: "Web",
              href: "https://github.com/diazjhozua/my-expense-web",
            },
            {
              icon: "mdi-web",
              label: "Visit",
              href: "https://my-expense-web.netlify.app/",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.horizontal >>> .v-hl-container {
  overflow: auto;
  /* Space between content and scrollbar */
  padding-bottom: 16px;

  /* For firefox only */
  scrollbar-width: thin;
  scrollbar-color: orangered black;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar {
  height: 10px;
  width: 4px;
  background: transparent;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-track {
  background: black;
  border-radius: 4px;
}

.horizontal >>> .v-hl-container::-webkit-scrollbar-thumb {
  border-radius: 6px;
  border: 4px black solid;
  background: #ffffff;
}
</style>
