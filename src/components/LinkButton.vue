<template>
  <RouterLink :to="to"
    ><button>{{ text }}</button></RouterLink
  >
</template>

<script setup>
import { RouterLink } from "vue-router";
const props = defineProps({
  to: {
    type: String,
  },
  text: {
    type: String,
  },
});
</script>

<style scoped>
button {
  background-color: rgb(128, 0, 0);
  color: white;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 10px;
  padding: 16px;
  font-size: 19px;
  font-weight: 550;
  border: 2px solid #222;
}

button:hover {
  background-color: #222;
}
</style>
