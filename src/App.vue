<script setup lang="ts">
import TodoBox from "./components/TodoBox.vue";
import { ref } from "vue";
import TodoItemModal from "@/components/TodoItemModal.vue";
import {hasOwnProperty} from "node";
const todos = ref(["Todo 1", "Todo 2", "Todo 3"]);
const showModal: boolean = true;
</script>

<template>
  <header>
    <h1 class="toDoHeader">TODO</h1>
  </header>
  <main>
      <TodoItemModal v-if="showModal" @close="showModal = false"></TodoItemModal>
    <ul class="list" v-for="todo in todos">
      <TodoBox class="box" todo="todo"/>


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
  min-height: 200px;
  height: auto;
  border: 1px solid black;
}
</style>
