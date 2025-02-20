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
  <Default> <router-view /> </Default>
</template>

<style></style>
