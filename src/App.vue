<script lang="ts">
import { defineComponent } from "vue";
import Default from "./layouts/default.vue";
export default defineComponent({
  components: {
    Default,
  },
});
</script>

<template>
  <div id="app">
    <Default> <router-view /> </Default>
  </div>
</template>

<style></style>
