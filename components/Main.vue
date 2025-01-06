<script setup lang="ts">
  import MainStage from './main/MainStage.vue';  
</script>

<style scoped>
  .center_section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  main{ 
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    overflow: hidden;
  }
</style>

<template>
  <main>
    <div class="center_section">
      <MainStage></MainStage>
      <MainPanel></MainPanel>
    </div>
    <Layers></Layers>
  </main>
</template>