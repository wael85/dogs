<template>
  <v-container>
      <v-img width="350" height="300" :src="imgUrl"></v-img>
  </v-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";

export default Vue.extend({
  name: "GetDogByBreed",
  props: {
    breed: String,
  },
  data: () => ({
    imgUrl: String,
  }),
  computed: {
    getRandomDogs: async () => {
      const result = await fetch(
        `https://dog.ceo/api/${this.breed}/image/random`
      );
      const res = await result.json();
      const url = res.message;
      return url;
    },
  },
  created() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      this.imgUrl = res.data.message;
      console.log(res);
    });
  },
});
</script>

<style scoped></style>
