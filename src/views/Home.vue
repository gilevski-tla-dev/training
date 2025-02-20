<script lang="ts">
import { defineComponent } from "vue";
import DocumentsList from "@/components/DocumentsList.vue";
import { getDocuments } from "@/services/api/getDocuments";

export default defineComponent({
  name: "HomePage",
  components: {
    DocumentsList,
  },
  async mounted() {
    try {
      const data = await getDocuments(); // Запрашиваем данные
      console.log("Данные из getDocuments():", data); // Выводим в консоль
    } catch (error) {
      console.error("Ошибка при запросе данных:", error);
    }
  },
});
</script>

<template>
  <div>
    <h1>Домашняя страница</h1>
    <DocumentsList />

    <iframe
      src="http://241.lnsk.infra.innoseti.ru:9001/#/claims/viewfile/fe16ea3e-21bb-4ff1-86d3-d218e6d74501"
      frameborder="0"
    ></iframe>
  </div>
</template>
