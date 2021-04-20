<template>
  <v-img :src="imgUrl"></v-img>

</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "GetRandomPic",
  data: () => ({
    imgUrl: String,
  }),
  computed: {
    getRandomDogs: async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const res = await result.json();
      const url = res.message;
      return url;
    },
  },
  created() {
    axios.get("https://dog.ceo/api/breeds/image/random").then( res => {this.imgUrl = res.data.message; console.log(res)});
  },
});
</script>

<style></style>
