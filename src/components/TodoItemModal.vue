<script setup lang="ts">
import { ref } from 'vue'
import type { Item } from '../types'
import { Priority } from '../types'

const emit = defineEmits(['addItem'])

const priority = ref(Priority.LOW)
const generateId = () => {
  return Math.floor(Math.random() * 100000000000)
}
const submitForm = (event: SubmitEvent) => {
  console.log(priority.value)
  const newItem: Item = {
    id: generateId(),
    completed: false,
    created: new Date().getTime(),
    priority: priority.value,
    title: ''
  }
  if (event.target[0] && event.target[1]) {
    const title = event.target[0].value
    if (title) newItem.title = title
  }
  emit('addItem', newItem)
}
</script>
<template>
  <Transition>
    <main class="modal">
      <div class="modalContainer">
        <form class="form" @submit.prevent="submitForm">
          <p>What do you want to add?</p>
          <input type="text" placeholder="Title" required />
          <div class="radioButtonDiv">
            <input
              class="radioButton"
              type="radio"
              name="prio"
              id="low"
              :value="Priority.LOW"
              v-model="priority"
            />
            <label class="radioLabel" for="low">Low</label>
            <input
              class="radioButton"
              type="radio"
              name="prio"
              id="medium"
              :value="Priority.MEDIUM"
              v-model="priority"
            />
            <label class="radioLabel" for="medium">Medium</label>
            <input
              class="radioButton"
              type="radio"
              name="prio"
              id="high"
              :value="Priority.HIGH"
              v-model="priority"
            />
            <label class="radioLabel" for="high">High</label>
          </div>
          <input class="submitButton" type="submit" />
        </form>
      </div>
    </main>
  </Transition>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: grid;
  align-items: center;
  justify-items: center;
}

.modalContainer {
  width: 300px;
  background-color: #c6c5bb;
  border-radius: 10px;
  margin-left: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.form {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 10px;
  padding: 10px;
  background-color: #c6c5bb;
  border-radius: 10px;
}

.radioButtonDiv {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 10px;
}

.radioButton {
  height: 2em;
  width: 50%;
  justify-self: start;
}

.radioLabel {
  display: flex;
  align-items: center;
}

.submitButton {
  display: grid;
  height: 3em;
  width: 50%;
  justify-self: center;
  border-radius: 10px;
}
</style>
