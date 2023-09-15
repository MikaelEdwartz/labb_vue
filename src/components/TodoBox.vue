<script setup lang="ts">
import {ref} from "vue";
import TodoItem from "./TodoItem.vue";
defineProps(["itemss"]);
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
const items = ["1", "2"]
</script>

<template>
<main>
<div v-for="item in items"> <TodoItem item="item"></TodoItem></div>
</main>
</template>

<style scoped>

</style>