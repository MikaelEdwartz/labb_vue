<script setup lang="ts">
import TodoBox from './components/TodoBox.vue'
import { ref } from 'vue'
import TodoItemModal from '@/components/TodoItemModal.vue'
import type {Item} from "@/components/TodoBox.vue";
defineProps({
  completedList: {
    type: Object as () => Item[]

  }
})
const todos = ref(['Todo 1', 'Todo 2', 'Todo 3'])
const finishedTodosMap = new Map<String, Item[]>();
const inputValue = ref("");

const createNewTodo = (event: SubmitEvent) =>{
  const input = event.target[0];
  if(input)
    todos.value.push(input.value)
  inputValue.value = "";


}
const addToCompletedList = (emitEvent: SubmitEvent, header: string) => {
  [...emitEvent].forEach((c) => {finishedTodosMap.set(header, JSON.parse(JSON.stringify(c)))})
 // let s = todos.value.filter((val) => val !== header);
  console.log(todos.value)
  todos.value.splice(todos.value.indexOf(header),1)
  console.log(header)
//  todos.value = [...s]

  console.log(todos.value)
}
</script>

<template>

  <header>
    <h1 class="toDoHeader">TODO</h1>
    <form id="addForm" @submit.prevent="createNewTodo">
      <div>
      <input type="text" v-model="inputValue" placeholder="New Todo" required/>
      <input type="submit" value="Add"/>
      </div>
    </form>

  </header>
  <main class="main">

    <ul class="list" v-for="todo in todos" key="{{todo}}">
      <TodoBox class="box" todo="todo" :header-name="todo" @completed-list="(emitEvent, header) => addToCompletedList(emitEvent, header)"/>

    </ul>
  </main>
</template>

<style scoped>

.main{
  display: grid;
  justify-items: baseline;
  background-color: #383835;
}
.list {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
}
.toDoHeader {
  font-size: 40px;
  text-align: center;
  color: white;
}
.box {
  width: 300px;
  min-height: 200px;
  height: auto;
  border: 1px solid black;
}
#addForm{
  display: grid;
  justify-items: center;
}


</style>
