<style scoped>
  main{
    display: grid;
  }
  .center_section{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
</style>

<template>
  <main>
    <div class="center_section">
      <Stage></Stage>
      <InfoPanel></InfoPanel>
    </div>
    <Layers></Layers>
  </main>
</template>