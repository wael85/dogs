<template>
  <v-container v-for="n in 24 ">
    <v-card height="300"> {{n}}</v-card>
  </v-container>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'BreedView',
  data: () => ({

  }),
});
</script>

<style scoped>

</style>