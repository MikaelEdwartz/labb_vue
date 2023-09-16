<script setup lang="ts">
import {ref} from "vue";
import TodoItem from "./TodoItem.vue";
defineProps(["itemss"]);
enum Priority {
  HIGH, MEDIUM, LOW
}
export interface item {
  id: number;
  title: string;
  description?: string;
  created?: string;
  priority: Priority;
  completed: boolean;
}
const items = ["1", "2","3", "2","3", "5"]
</script>

<template>
<main class="todoBox">
  <h1 class="header">Groceries</h1>
<div v-for="item in items"> <TodoItem item="item"></TodoItem></div>
  <div class="addButton">
    <Button id="addButton">Add new</Button>
  </div>

</main>

</template>

<style scoped>

.header{
  display: grid;
  justify-items: center;
  font-size: 20px;
}
.todoBox{
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: auto;
}
.addButton{
  display: grid;
  justify-items: end;

}
#addButton{
  width: 80px;
  height: auto;
}

</style>