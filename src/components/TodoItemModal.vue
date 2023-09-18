<script setup lang="ts">
import type {Item} from "@/components/TodoBox.vue";
import {ref} from "vue";
const emit = defineEmits(["addItem"])
enum Priority {
  HIGH,
  MEDIUM,
  LOW
}
const priority= ref(Priority.LOW);
const generateId = () =>{
  return 2;
}
const submitForm = (event: SubmitEvent) =>{
  const newItem: Item = {id : generateId(), completed: false, created: Date.now(), priority: priority.value, title: "", description: ""};
  if(event.target[0] && event.target[1]) {
    const title = event.target[0].value;
    if (title)
      newItem.title = title;
    const description = event.target[1].value;
    if (description)
      newItem.description = description;
  }
 emit('addItem', newItem);

}
</script>

<template>
  <Transition>
    <main class="modal">
      <div class="modalContainer" >
        <form @submit.prevent="submitForm">
          <p>What do you want to add?</p>
        <input type="text" placeholder="Title" >
        <input type="text" placeholder="Description" >
          <div>
          <input type="radio" id="low" value="Low" v-model="priority" >
          <label for="low">Low</label>
          <input type="radio" id="medium" value="Medium" v-model="priority" >
          <label for="medium">Medium</label>
          <input type="radio" id="high" value="High" v-model="priority" >
          <label for="high">High</label>
          </div>
          <input type="submit">
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
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  align-items: center;
  justify-items: center;
  transition: opacity 0.3s ease;
}
.modalContainer {
  width: 300px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
</style>
