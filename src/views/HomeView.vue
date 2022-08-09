<template>
  <main>
    <on-boarding></on-boarding>
    <hello-world />
  </main>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import OnBoarding from "../components/OnBoarding";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    OnBoarding,
  },
};
</script>
