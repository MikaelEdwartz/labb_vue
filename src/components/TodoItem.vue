<script setup lang="ts">
enum Priority {
  HIGH, MEDIUM, LOW
}
export interface item {
  id: number;
  title: string;
  description?: string;
  created?: string;
  priority: Priority;
}

const testItem = {id: 1, title: 'Buy groceries', description: 'test', priority: Priority.MEDIUM};

</script>

<template>
<div class="item">
  <p> • {{testItem.title}} </p>
  <div class="checkBoxDiv">
  <input type="checkbox" id="checkbox" />
  </div>
  <label for="checkbox" ></label>


</div>

</template>

<style scoped>

.item{
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.checkBoxDiv{
 display: grid;
  justify-items: end;
}
#checkbox{
  height: auto;
  width: 30px;
  border-radius: 1.5%;
}
</style>