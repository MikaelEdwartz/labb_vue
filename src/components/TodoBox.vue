<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoItemModal from "@/components/TodoItemModal.vue";

enum Priority {
  HIGH,
  MEDIUM,
  LOW
}
export interface Item {
  id: number
  title: string
  description: string
  created: number
  priority: Priority
  completed: boolean
}
const todoHeader: string = "Groceries";
let showModal = ref(false)
const items = ['1', '2', '3', '2', '3', '5']
const testItem = { id: 1, title: 'Buy groceries', description: 'test', priority: Priority.MEDIUM, created: 1, completed: false }

const todoList = ref([testItem]);

const handleSubmit = (newItem: Item) =>{
  console.log(newItem)
  todoList.value.push({id: newItem.id, title: newItem.title, description: newItem.description, created: newItem.created, priority: newItem.priority, completed: newItem.completed})
  todoList.value.forEach((e) => console.log(e));
  showModal.value = false;


}
</script>

<template>
  <main class="todoBox">
    <TodoItemModal v-if="showModal" @add-item="(item) => handleSubmit(item)"></TodoItemModal>
    <h1 class="header" ><textarea id="headerInput" v-model="todoHeader"/></h1>

    <div v-for="item in todoList"><TodoItem :list-item="item"></TodoItem></div>
    <div class="addButton">
      <button id="addButton" @click="showModal = true">Add new</button>
    </div>
  </main>
</template>

<style scoped>
.header {
  display: grid;
  justify-items: center;
  font-size: 20px;
}
.todoBox {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  height: auto;
}
.addButton {
  display: grid;
  justify-items: end;
}
#addButton {
  width: 80px;
  height: auto;
}
#headerInput{
  border: 0;
  font-size: 20px;
  height: 25px;
  text-align: center;
  overflow-x: scroll;
}
</style>
