<script lang="ts">
import UserList from "@/components/UserList.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Exercise1",
  components: {
    UserList,
  },
});
</script>

<template>
  <div>
    <h1>Упражнение 1</h1>
    <UserList />
  </div>
</template>
