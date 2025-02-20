<script lang="ts">
import { defineComponent, ref } from "vue";
import Menubar from "primevue/menubar";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

export default defineComponent({
  components: {
    Menubar,
  },
  setup() {
    const route = useRoute();
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
      route,
    };
  },
});
</script>

<template>
  <div class="app_layout">
    <div class="content">
      <Menubar :model="menuItems" />

      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.app_layout {
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: column;
  width: 1440px;
  height: 100%;
}
</style>
