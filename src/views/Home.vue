<script lang="ts">
import { defineComponent } from "vue";

import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";

export default defineComponent({
  name: "HomePage",

  data() {
    return {
      visible: false,
    };
  },
});
</script>

<template>
  <div>
    <h1>Домашняя страница</h1>
  </div>
</template>
