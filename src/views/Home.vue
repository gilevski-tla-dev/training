<script lang="ts">
import { defineComponent } from "vue";
import DocumentsList from "@/components/DocumentsList.vue";
import { getDocuments } from "@/services/api/getDocuments";
import { getDocumentByID } from "@/services/api/getDocumentById";

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

    try {
      const data = await getDocumentByID(
        "68c1712d-479b-4626-94b3-aa131bd4404d"
      ); // Запрашиваем данные
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
