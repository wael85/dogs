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
    imgUrl: '',
  }),
  created() {
    axios.get("https://dog.ceo/api/breeds/image/random").then((res) => {
      this.imgUrl = res.data.message;
    });
  },
});
</script>

<style scoped></style>