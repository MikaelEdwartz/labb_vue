<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoItemModal from '@/components/TodoItemModal.vue'
const props = defineProps({
  headerName: {
    type: String
  }
})
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
let todoHeader: string = ref(props.headerName);
let showModal = ref(false)
const items = ['1', '2', '3', '2', '3', '5']
let isChecked = ref(false);
const testItems = [{
  id: 1,
  title: 'Buy groceries',
  description: 'test',
  priority: Priority.MEDIUM,
  created: 1,
  completed: false
},{
  id: 2,
  title: 'Buy gear',
  description: 'test',
  priority: Priority.MEDIUM,
  created: 1,
  completed: false
},{
  id: 3,
  title: 'Buy milk',
  description: 'test',
  priority: Priority.MEDIUM,
  created: 1,
  completed: false
}]

const todoList = ref(testItems)

const handleSubmit = (newItem: Item) => {
  console.log(newItem)
  todoList.value.push({
    id: newItem.id,
    title: newItem.title,
    description: newItem.description,
    created: newItem.created,
    priority: newItem.priority,
    completed: newItem.completed
  })
  todoList.value.forEach((e) => console.log(e))
  showModal.value = false
}
const removeCompleted = () =>{
  todoList.value = [...todoList.value.filter((todo) => !todo.completed)];
  checkIfChecked()
}

const checkIfChecked = () =>{
  const completedList = todoList.value.filter((value) => value.completed)

  completedList.length > 0 ? isChecked.value = true : isChecked.value = false;
}
</script>

<template>
  <main class="todoBox">
    <TodoItemModal v-if="showModal" @add-item="(item) => handleSubmit(item)"></TodoItemModal>
    <h1 class="header"><textarea id="headerInput" v-model="todoHeader" /></h1>

    <div v-for="item in todoList"><TodoItem :list-item="item" @check-Box-Toggled="checkIfChecked"></TodoItem></div>
    <footer class="boxFooter">
      <button id="clearButton" v-show="isChecked" @click="removeCompleted">REMOVE</button>
      <button id="addButton" @click="showModal = true">Add new</button>
    </footer>
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
.boxFooter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
}
#addButton {
  width: 80px;
  height: auto;
  align-self: end;
  grid-column: 2;
}
#clearButton{
  place-self: start;
}
#headerInput {
  border: 0;
  font-size: 20px;
  height: 25px;
  text-align: center;
  overflow-x: scroll;
}
</style>
