<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();
    console.log(route);
    return {
      route,
    };
  },
});
</script>

<template>
  <component :is="route.meta.layouts">
    <slot />
  </component>
</template>

<style scoped></style>
