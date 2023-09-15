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

const testItem = {id: 1, title: 'Dricka öl', description: 'test', priority: Priority.MEDIUM};

</script>

<template>
<div class="item">
  <p>{{testItem.title}}</p>
  <input type="checkbox" id="checkbox"/>
  <label for="checkbox"></label>

  <ul>
    <li v-for="item in items" :key="item.id">{{item.title}}</li>

  </ul>
</div>

</template>

<style scoped>
.item{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

</style>