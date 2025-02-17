<script lang="ts">
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Menubar,
  },
  setup() {
    const router = useRouter();

    // Элементы меню
    const menuItems = ref([
      {
        label: "Home",
        icon: "pi pi-home",
        command: () => {
          router.push("/home");
        },
      },
      {
        label: "Exercise 1",
        icon: "pi pi-users",
        command: () => {
          router.push("/exercise1");
        },
      },
    ]);

    return {
      menuItems,
    };
  },
});
</script>

<template>
  <div id="app">
    <Menubar :model="menuItems" />

    <router-view />
  </div>
</template>

<style></style>
