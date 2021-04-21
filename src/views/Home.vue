<template>
  <v-container>
    <v-row>
      <v-col v-for="n in items" :key="n" cols="4">
        <v-card height="400" v-if="n === 'All Breeds'" to="/allbreed">
          <v-card-title>{{ n }}</v-card-title>
          <get-random-pic></get-random-pic>
        </v-card>
        <v-card
          height="400"
          v-if="n != 'All Breeds'"
          :to="`/breed?breed=${n.toLowerCase()}`"
        >
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
    items: [
      "All Breeds",
      "African",
      "Airedale",
      "Akita",
      "Appenzeller",
      "Basenji",
      "Beagle",
      "Boxer",
      "Brabancon",
      "Briard",
      "Buhund",
      "Bulldog",
      "Bullterrier",
      "cairn",
      "cattledog",
      "chihuahua",
      "chow",
      "clumber",
      "cockapoo",
      "collie",
      "coonhound",
      "corgi",
      "cotondetulear",
      "dachshund",
      "dalmatian",
      "dane",
      "dhole",
      "dingo",
      "doberman",
      "entlebucher",
      "eskimo",
      "frise",
      "germanshepherd",
      "groenendael",
      "havanese",
      "hound",
      "blood",
      "husky",
      "keeshond",
      "kelpie",
      "komondor",
      "kuvasz",
      "labradoodle",
      "labrador",
      "leonberg",
      "lhasa",
      "malamute",
      "malinois",
      "maltese",
      "mastiff",
      "mexicanhairless",
      "mix",
      "pekinese",
      "pembroke",
      "pitbull",
      "pointer",
      "pomeranian",
      "pug",
      "puggle",
      "pyrenees",
      "redbone",
      "rottweiler",
      "saluki",
      "samoyed",
      "schipperke",
      "schnauzer",
      "shiba",
      "shihtzu",
      "stbernard",
    ],
  }),
});
</script>
