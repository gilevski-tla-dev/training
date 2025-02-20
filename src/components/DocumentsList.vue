<script lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";

interface Product {
  code: string;
  name: string;
  category: string;
  quantity: number;
}

export default {
  name: "DocumentsList",
  components: {
    DataTable,
    Column,
  },
  data() {
    return {
      products: [] as Product[],
    };
  },
  mounted() {
    // Загрузка данных при монтировании компонента
    this.products = [
      { code: "001", name: "Product 1", category: "Category 1", quantity: 10 },
      { code: "002", name: "Product 2", category: "Category 2", quantity: 20 },
      { code: "003", name: "Product 3", category: "Category 3", quantity: 30 },
    ];
  },
};
</script>

<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="quantity" header="Quantity"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>

<style scoped>
.card {
  margin: 20px;
}
</style>
