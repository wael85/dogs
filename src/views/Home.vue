<template>
  <v-container>
    <v-row>
      <v-col v-for="n in items" :key="n" cols="4">
        <v-card height="400" v-if="n === 'All Breeds'">
          <v-card-title>{{ n }}</v-card-title>
          <get-random-pic></get-random-pic>
        </v-card>
        <v-card height="400" v-if="n != 'All Breeds'" :to="breedUrl('g')">
          <v-card-title>{{ n }}</v-card-title>
          <get-dog-by-breed :breed="n.toLowerCase()"></get-dog-by-breed>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import GetRandomPic from "@/components/GetDogPicRandom.vue";
import GetDogByBreed from "@/components/GetDogByBreed.vue";

export default Vue.extend({
  name: "Home",
  components: {
    GetRandomPic,
    GetDogByBreed,
  },
  data: () => ({
    items: ["All Breeds", "African"],
  }),
  computed: {
    breedUrl: () =>{
      
      return '/onebreed?breed=';
      
    },
  }
});
</script>
