<template>
<v-container>
  <v-img width="350" height="300" :src="imgUrl"></v-img>
</v-container>
  

</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "GetRandomPic",
  data: () => ({
    imgUrl: '',
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
    axios.get("https://dog.ceo/api/breeds/image/random").then( res => this.imgUrl = res.data.message);
  },
});
</script>

<style scoped>

</style>
