<script lang="ts">
import { defineComponent } from "vue";

interface User {
  id: number;
  name: string;
  age: number;
}

export default defineComponent({
  data() {
    return {
      users: [
        { id: 1, name: "John", age: 20 },
        { id: 2, name: "Jane", age: 21 },
        { id: 3, name: "Jim", age: 22 },
      ] as User[],
      newUserName: "",
      newUserAge: 0,
    };
  },
  methods: {
    addUser() {
      this.users.push({
        id: this.users.length + 1,
        name: this.newUserName,
        age: this.newUserAge,
      });
    },
  },
});
</script>

<template>
  <div>
    <h1>Список пользователей</h1>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.age }} лет)
      </li>
    </ul>
    <input v-model="newUserName" placeholder="Имя пользователя" />
    <input v-model="newUserAge" type="number" placeholder="Возраст" />
    <button @click="addUser">Добавить пользователя</button>
  </div>
</template>

<style lang="scss" scoped></style>
