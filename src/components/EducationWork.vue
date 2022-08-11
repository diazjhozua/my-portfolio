<template>
  <section style="height: 600px">
    <v-container>
      <h2 class="text-h5 text-sm-h3">Education & Work Timeline</h2>

      <v-timeline :dense="$vuetify.breakpoint.smAndDown">
        <!-- Start Junior High -->

        <v-timeline-item
          v-for="(experience, index) in experiences"
          :key="index"
          large
          class="mb-7"
        >
          <template v-slot:icon>
            <v-avatar>
              <img :src="experience.avatar" />
            </v-avatar>
          </template>
          <template v-slot:opposite>
            <span>{{ experience.year }}</span>
          </template>
          <v-card class="elevation-2 px-6">
            <v-row>
              <v-col cols="12" md="10">
                <div class="text-h6 font-weight-bold">
                  {{ experience.title }}

                  <span v-if="$vuetify.breakpoint.smAndDown"
                    >({{ experience.year }})</span
                  >
                </div>

                <div
                  v-if="experience.pointers && experience.pointers.length > 0"
                >
                  <ul
                    v-for="(pointer, index) in experience.pointers"
                    :key="index"
                  >
                    <li class="text-subtitle-2 font-weight-medium">
                      {{ pointer }}
                    </li>
                  </ul>
                </div>

                <v-expansion-panels
                  v-if="experience.jobRoles && experience.jobRoles.length > 0"
                  flat
                >
                  <v-expansion-panel>
                    <v-expansion-panel-header
                      class="text-subtitle-2 font-weight-normal"
                    >
                      View Job Description
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <ul
                        v-for="(role, index) in experience.jobRoles"
                        :key="index"
                      >
                        <li class="text-subtitle-2 font-weight-medium">
                          {{ role }}
                        </li>
                      </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </v-col>
              <v-col class="hidden-sm-and-down text-right" md="2">
                <v-icon large> {{ experience.icon }} </v-icon>
              </v-col>
            </v-row>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </section>
</template>
<script>
export default {
  data() {
    return {
      experiences: [
        {
          year: 2012,
          title:
            "Started Junior High School at Muntinlupa Business High School - Main",
          icon: "mdi-bus-school",
          avatar: require("../assets/experience/mbhs.png"),
        },
        {
          year: 2014,
          title: "Finished the Citizenship Advancement Training Officer Course",
          icon: "mdi-pistol",
          avatar: require("../assets/experience/cat.jpg"),
          pointers: ["Rank: Corps S1 / Adjutant"],
        },
        {
          year: 2015,
          title: "Back Office Assistant Intern at Petron Corporation",
          icon: "mdi-briefcase",
          avatar: require("../assets/experience/petron.png"),
          jobRoles: [
            "Organize office and assist associates in ways that optimize procedures",
            "Sort and distribute communications promptly",
            "Create and update records ensuring accuracy and validity of information",
            "Schedule and plan meetings and appointments",
            "Monitor level of supplies and handle shortages",
          ],
        },
        {
          year: 2016,
          title:
            "Finished Junior High School at Muntinlupa Business High School - Main",
          icon: "mdi-school",
          avatar: require("../assets/experience/mbhs.png"),
        },
        {
          year: "2018",
          title:
            "Finished Senior High School at Muntinlupa National High School - Main",
          icon: "mdi-school",
          avatar: require("../assets/experience/mnhs.png"),
          pointers: [
            "Strand: Science, Technology, Engineering and Mathematics (STEM)",
            "Awards: With Honors",
            "Grade: 91",
          ],
        },
        {
          year: "2018",
          title:
            "Started College at Technological University of the Philippines - Taguig",
          icon: "mdi-bus-school",
          avatar: require("../assets/experience/tup.png"),
          pointers: ["Course: Bachelor of Science in Information Technology"],
        },
        {
          year: 2022,
          title:
            "Information Services (IS) Engineer Intern at Trend Micro Inc.",
          icon: "mdi-briefcase",
          avatar: require("../assets/experience/trendmicro.png"),
          jobRoles: [
            "Create and develop visual designs for desktop and mobile websites",
            "Design user interface elements",
            "Create wireframes, mockups, and user and process flows to show how sites function and appear effectively",
            "Present mockups to internal teams and key stakeholders",
            "Make layout adjustments based on feedback",
            "Adhere to brand guidelines",
            "Stay updated on the latest UX/UI trends and design skills",
            "Translate prototypes and designs into clean, valid, launch-ready code.",
            "Deliver solutions with quality.",
            "Work with other team members and bridge the gap between different service.",
            "Implementation involves taking an active role on both sides and defining how the application looks and works.",
            "Document solutions to ease knowledge sharing within the team.",
          ],
        },
        {
          year: 2022,
          title:
            "Finished College at Technological University of the Philippines - Taguig",
          icon: "mdi-school",
          avatar: require("../assets/experience/tup.png"),
          pointers: [
            "Course: Bachelor of Science in Information Technology",
            "Awards: Magna Cum Laude",
            "Grade: 1.364",
          ],
        },
        {
          year: "Present",
          title: "Information Services (IS) Engineer at Trend Micro Inc.",
          icon: "mdi-briefcase",
          avatar: require("../assets/experience/trendmicro.png"),
        },
      ],
    };
  },
};
</script>

<style scoped></style>
