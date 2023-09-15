<script setup lang="ts">
import TodoBox from "./components/TodoBox.vue";
import { ref } from "vue";
const todos = ref(["Todo 1", "Todo 2", "Todo 3"]);
</script>

<template>
  <header>
    <h1 class="toDoHeader">TODO</h1>
  </header>
  <main>
    <p>THIS TODO</p>
    <ul class="list" v-for="todo in todos">
    <TodoBox class="box">
      {{todo}}
    </TodoBox>
    </ul>
  </main>
</template>



<style scoped>
.list{
  display: grid;
  grid-template-rows: 1fr;
  justify-items: center;
}
.toDoHeader{
  font-size: 40px;
  text-align: center;
}
.box{
  width: 300px;
  height: 300px;
  border: 1px solid black;
}
</style>
