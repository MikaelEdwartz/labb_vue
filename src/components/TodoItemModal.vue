<script setup lang="ts">

</script>

<template>
<Transition>
  <main class="modal">
    <div class="modalContainer" @click="$emit('closeModal')">
    <input type="text"/>
    <input type="text">
    <input type="text">
    <input type="text">
    <input type="text">
    </div>

  </main>
</Transition>
</template>

<style scoped>
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  display: grid;
  align-items: center;
  justify-items: center;
  transition: opacity 0.3s ease;

}
.modalContainer{
  width: 300px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);

}
</style>
