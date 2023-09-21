<script setup lang="ts">
import { ref } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoItemModal from './TodoItemModal.vue'
import { Item, Priority } from '@/types'

const props = defineProps({
  headerName: {
    type: String
  }
})

let todoHeader = ref(props.headerName)
let showModal = ref(false)
let isChecked = ref(false)
let allChecked = ref(false)
const generateId = () => {
  return Math.floor(Math.random() * 100000000000)
}
const testItems = [
  {
    id: generateId(),
    title: 'Groceries',
    priority: Priority.HIGH,
    created: new Date().getTime(),
    completed: false
  },
  {
    id: generateId(),
    title: 'Workout',
    priority: Priority.MEDIUM,
    created: new Date().getTime(),
    completed: false
  },
  {
    id: generateId(),
    title: 'Schleep',
    priority: Priority.LOW,
    created: new Date().getTime(),
    completed: false
  }
]
const todoList = ref(testItems)

const handleSubmit = (newItem: Item) => {
  todoList.value.push({
    id: newItem.id,
    title: newItem.title,
    created: newItem.created,
    priority: newItem.priority,
    completed: newItem.completed
  })
  todoList.value.forEach((e) => console.log(e))
  showModal.value = false
}
const removeCompleted = () => {
  todoList.value = [...todoList.value.filter((todo) => !todo.completed)]
  checkIfChecked()
}

const checkIfChecked = () => {
  const completedList = todoList.value.filter((value) => value.completed)
  completedList.length === todoList.value.length
    ? (allChecked.value = true)
    : (allChecked.value = false)
  completedList.length > 0 ? (isChecked.value = true) : (isChecked.value = false)
}
const toggleAllCompleted = () => {
  allChecked.value
    ? todoList.value.forEach((todo) => (todo.completed = false))
    : todoList.value.forEach((todo) => (todo.completed = true))
  checkIfChecked()
  todoList.value.forEach((todo) => console.log(todo))
}
</script>
<template>
  <main class="todoBox">
    <TodoItemModal v-if="showModal" @add-item="(item) => handleSubmit(item)"></TodoItemModal>
    <h1 class="header"><textarea id="headerInput" v-model="todoHeader" /></h1>
    <div v-for="item in todoList" :key="item.id">
      <TodoItem :list-item="item" @check-Box-Toggled="checkIfChecked"></TodoItem>
    </div>
    <footer class="boxFooter">
      <button
        id="removeBox"
        v-show="allChecked"
        @click="$emit('completedList', todoList, todoHeader)"
      >
        Finish list
      </button>
      <button id="clearButton" v-show="isChecked && !allChecked" @click="removeCompleted">
        Clear completed
      </button>
      <button id="completeButton" @click="toggleAllCompleted">Check all</button>

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
  height: auto;
  background-color: #c6c5bb;
  border-radius: 10px;
}

.boxFooter {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-self: baseline;
  width: 100%;
}
#addButton,
#completeButton,
#clearButton,
#removeBox {
  width: auto;
  height: auto;
  border-radius: 6px;
  padding: 10px;
  grid-column: 1;
  margin: 10px;
}
#completeButton {
  grid-column: 2;
}
#addButton {
  grid-column: 3;
}

#headerInput {
  border: 0;
  font-size: 20px;
  height: 25px;
  text-align: center;
  overflow-x: scroll;
  background-color: #c6c5bb;
  resize: none;
}

#addButton:hover,
#clearButton:hover,
#removeBox:hover {
  background-color: #c6c5bb;
}
</style>
