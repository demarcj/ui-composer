<style scoped>
  .header{
    display: grid;
    border-bottom: 1px solid white;
    grid-template-columns: var(--layer-grid);
  }
  .header > div{
    padding: 5px 10px;
  }
  .header > :not(div:first-child){
    border-left: 1px solid white;
  }
</style>

<template>
  <div class="header">
    <div>Index</div>
    <div>Element / Layer Name</div>
  </div>
</template>