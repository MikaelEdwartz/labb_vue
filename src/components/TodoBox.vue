<script setup lang="ts">
import {ref} from 'vue'
import TodoItem from './TodoItem.vue'
import TodoItemModal from './TodoItemModal.vue'

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
  created: number
  priority: Priority
  completed: boolean
}

let todoHeader = ref(props.headerName);
let showModal = ref(false)
let isChecked = ref(false);
let allChecked = ref(false);
const testItems = [{
  id: 1,
  title: 'Groceries',
  priority: Priority.HIGH,
  created: new Date().getTime(),
  completed: false
}, {
  id: 2,
  title: 'Workout',
  priority: Priority.MEDIUM,
  created: new Date().getTime(),
  completed: false
}, {
  id: 3,
  title: 'Schleep',
  priority: Priority.LOW,
  created: new Date().getTime(),
  completed: false
}]
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
  todoList.value = [...todoList.value.filter((todo) => !todo.completed)];
  checkIfChecked()
}

const checkIfChecked = () => {
  const completedList = todoList.value.filter((value) => value.completed)
  completedList.length === todoList.value.length ? allChecked.value = true : allChecked.value = false;
  completedList.length > 0 ? isChecked.value = true : isChecked.value = false;
}

</script>
<template>
  <main class="todoBox">
    <TodoItemModal v-if="showModal" @add-item="(item) => handleSubmit(item)"></TodoItemModal>
    <h1 class="header"><textarea id="headerInput" v-model="todoHeader"/></h1>
    <div v-for="item in todoList" :key="item.id">
      <TodoItem :list-item="item" @check-Box-Toggled="checkIfChecked"></TodoItem>
    </div>
    <footer class="boxFooter">'
      <button id="removeBox" v-show="allChecked" @click="$emit('completedList', todoList, todoHeader)">Finish
        {{ todoHeader }}
      </button>
      <button id="clearButton" v-show="isChecked && !allChecked" @click="removeCompleted">Clear completed</button>
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
  background-color: #C6C5BB;
  border-radius: 10px;
}

.boxFooter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  align-self: baseline;
}

#addButton {
  width: 80px;
  height: 35px;
  align-self: end;
  grid-column: 2;
  border-radius: 6px;

}

#clearButton, #removeBox {
  place-self: start;
  grid-column: 1;
  border-radius: 6px;
  width: 100px;
  height: 35px;
}

#headerInput {
  border: 0;
  font-size: 20px;
  height: 25px;
  text-align: center;
  overflow-x: scroll;
  background-color: #C6C5BB;
  resize: none;
}
  #addButton:hover, #clearButton:hover, #removeBox:hover {
    background-color: #C6C5BB;
}
</style>
