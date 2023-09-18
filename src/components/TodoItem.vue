<script setup lang="ts">

import type {Item} from "@/components/TodoBox.vue";

enum Priority {
  HIGH,
  MEDIUM,
  LOW
}
defineProps({
  listItem: {
    type: Object as ()=> Item,
    required: true
  }
})

const testItem = { id: 1, title: 'Buy groceries', description: 'test', priority: Priority.MEDIUM }
</script>

<template >
  <div class="item">
    <p>• {{ listItem.title}}</p>


    <div class="checkBoxDiv">
      <input type="checkbox" id="checkbox" />
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
</style>
