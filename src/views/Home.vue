<template>
  <div class="home">
    <GetRandomPic/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import GetRandomPic from "@/components/GetDogPicRandom.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "Home",
  components: {
    GetRandomPic,
  },
});
</script>
