<template>
  <section class="mt-15">
    <v-container class="mt-5">
      <v-row class="text-center">
        <v-col class="mb-4">
          <h1 class="display-2 font-weight-bold mb-3">About Me</h1>
        </v-col>
        <v-col cols="12">
          <v-img
            :src="require('../assets/logo.png')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>
        <v-col class="mb-4">
          <p class="about-me-txt text-start text-h5 font-weight-regular">
            I was born in Philippines and grew up in the city of Muntinlupa,
            went to school in Technological University of the Philippines -
            Taguig Campus taking Bachelor of Science in Information Technology
            with Magna Cum Laude. When I first grasp to the field of technology,
            I was addicted to it and immedietly got interested in the field of
            programming. Solving problems is always my habit, I could not finish
            any day without practicing my skills in programming.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.about-me-txt {
  line-height: 2.8;
}
</style>
