<script setup lang="ts">

import type {Item} from '@/components/TodoBox.vue'

enum Priority {
  HIGH,
  MEDIUM,
  LOW
}

const props = defineProps({
  finishedItems: {
    type: Map<string, Item[]>
  }
})

</script>

<template>
  <main class="finishedBox">
    <div v-for="[key, value] in props.finishedItems" :key="key">
      <div>
        <h1 class="header">{{ key }}</h1>
      </div>
      <div class="finishedItem" v-for="v in value" :key="v.id">
        <p> Done: <br> {{ v.title }}</p>
        <p> Priority: <br> {{ Priority[v.priority].toLowerCase() }}</p>
        <p> Created: <br> {{ new Date(v.created).toDateString() }}</p>
      </div>
    </div>

  </main>
</template>

<style scoped>

.header {
  display: grid;
  justify-items: center;
  font-size: 20px;
}

.finishedBox {
  height: auto;
  width: 100%;
  background-color: #C6C5BB;
  border-radius: 10px;
  align-items: center;
}

.finishedItem {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid black;
}
</style>