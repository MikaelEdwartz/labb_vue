<script setup lang="ts">
import type { Item } from '@/components/TodoBox.vue'

enum Priority {
  HIGH,
  MEDIUM,
  LOW
}
defineProps({
  listItem: {
    type: Object as () => Item,
    required: true
  }
})


const testItem = { id: 1, title: 'Buy groceries', description: 'test', priority: Priority.MEDIUM }
</script>

<template>
  <div class="item">
    <p id="checkedText" v-if="listItem.completed">• {{ listItem.title }}</p>
    <p id="nonCheckedText" v-else>• {{ listItem.title }}</p>

    <div class="checkBoxDiv" @click="$emit('checkBoxToggled', )">
      <input v-if="listItem.completed" type="checkbox" id="checkbox" checked @click="listItem.completed = !listItem.completed" />
      <input v-else type="checkbox" id="checkbox"  @click="listItem.completed = !listItem.completed" />
    </div>
    <label for="checkbox"></label>
  </div>
</template>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.checkBoxDiv {
  display: grid;
  justify-items: end;
}
#checkbox {
  height: auto;
  width: 30px;
  border-radius: 1.5%;
}
#nonCheckedText{
font-size: 18px;
}
#checkedText{
  font-size: 18px;

  color: rgb(128, 128, 128);
  text-decoration: line-through;
}
</style>
