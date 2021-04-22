<template>
  <v-container>
    <v-row v-if="(breed === 'allbreed')">
      <v-col v-for="n in 12" :key="n" cols="4">
        <v-card height="400">
          <v-card-title>{{ n }}</v-card-title>
          <get-dog-pic-random></get-dog-pic-random>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="breed != 'allbreed'">
      <v-col v-for="n in d" :key="n" cols="4">
        <v-card height="400">
          <v-img height="400" width="400" :src="n" alt="n" />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import GetDogPicRandom from "@/components/GetDogPicRandom.vue";
import Vue from "vue";
import ArrayOfPic from "@/models/GetArrayOfBreedPic";

export default Vue.extend({
  components: { GetDogPicRandom },
  name: "BreedView",
  data: () => ({
    breed: "",
    d: [] as string[],
  }),
  async created() {
    this.breed = this.$route.query.breed.toString();
    console.log(this.breed);
    this.d = await ArrayOfPic(this.breed);
    console.log(this.d);
  },
});
</script>

<style scoped></style>
