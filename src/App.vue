<script setup lang="ts">
import TodoBox from '/src/components/TodoBox.vue'
import { ref } from 'vue'
import CompletedList from '@/components/CompletedList.vue'
import type { Item } from '@/types'

defineProps({
  completedList: {
    type: Object as () => Item[]
  }
})
const todos = ref(['Todo 1', 'Todo 2', 'Todo 3', 'Todo 4', 'Todo 5', 'Todo 6', 'Todo 7', 'Todo 8'])
const finishedTodosMap = new Map<String, Item[]>()
const inputValue = ref('')
const showCompleted = ref(false)
const showFinishedButton = ref('Show Completed')
const createNewTodo = (event: SubmitEvent) => {
  const input = event.target[0]
  if (input) todos.value.push(input.value)
  inputValue.value = ''
}
const addToCompletedList = (list: Item[], header: string) => {
  console.log('my list', list)
  finishedTodosMap.set(header, JSON.parse(JSON.stringify(list)))
  todos.value.splice(
    todos.value.findIndex((c) => c === header),
    1
  )
}
const toggleCompleted = () => {
  showCompleted.value = !showCompleted.value
  showCompleted.value
    ? (showFinishedButton.value = 'Show Todo')
    : (showFinishedButton.value = 'Show Completed')
}
</script>

<template>
  <header>
    <h1 class="toDoHeader">TODO</h1>
    <form id="addForm" @submit.prevent="createNewTodo">
      <div>
        <input class="createTodoText" v-model="inputValue" placeholder="New Todo" required />
        <input class="createTodoButton" type="submit" value="Add" />
      </div>
    </form>
    <div id="showCompleted">
      <button id="toggleCompletedButton" @click="toggleCompleted">{{ showFinishedButton }}</button>
    </div>
  </header>
  <main class="main">
    <ul
      v-if="showCompleted"
      class="list"
      v-for="finished in finishedTodosMap"
      :key="JSON.stringify(finished)"
    >
      <CompletedList v-if="showCompleted" :finished-items="[finished]"></CompletedList>
    </ul>
    <ul v-else class="list" v-for="todo in todos" :key="todo">
      <TodoBox
        class="box"
        todo="todo"
        :header-name="todo"
        @completed-list="(list: Item[], header: string) => addToCompletedList(list, header)"
      />
    </ul>
  </main>
</template>

<style scoped>
.main {
  display: grid;
  justify-items: center;
  background-color: #383835;
}

.list {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 10px;
  margin: 10px;
}

.toDoHeader {
  font-size: 40px;
  text-align: center;
  color: white;
}

.box {
  display: grid;
  width: 300px;
  min-height: 200px;
  height: auto;
  border: 1px solid black;
  padding: 10px;
}

#addForm {
  display: grid;
  justify-items: center;
  padding: 5px;
}

#showCompleted {
  display: grid;
  justify-items: center;
  padding: 10px;
}

#toggleCompletedButton {
  height: 43px;
  width: 95px;
  border-radius: 10px;
  margin-top: 5px;
}

#toggleCompletedButton:hover {
  background-color: #c6c5bb;
}

.createTodoText {
  width: 200px;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 10px;
}

.createTodoButton {
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-top: 5px;
  margin-left: 10px;
}

@media screen and (min-width: 768px) {
  .main {
    display: grid;
    grid-template-columns: repeat(auto-fill, 425px);
    justify-items: center;
  }
}
</style>
