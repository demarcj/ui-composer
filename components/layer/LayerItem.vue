<style scoped>
  .layer{
    display: grid;
    grid-template-columns: var(--layer-grid);
  }

  .layer > div{
    padding: 5px 10px;
  }

  .layer:nth-child(odd){
    background-color: rgb(12, 12, 12);
  }
  
  .selected .element{
    color: black;
    background-color: rgb(206, 206, 206);
  }
</style>

<script setup lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import type { ElementModel } from '~/models'
  let selected: string[] = [];
  const dummy: ElementModel[] = [
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    }
  ];

  const highlight = (item: any) => {
    selected = [...selected, item.id];
    document.querySelectorAll(`.layer`).forEach(el => {
      if(el.id === item.id){
        el.classList.add(`selected`)
      } else {
        el.classList.remove(`selected`)
      }
    })
  }
</script>

<template>
  <div class="layers">
    <div 
      class="layer" 
      v-for="(item, index) in dummy" 
      :key="item.id"
      :id="item.id"
      @click="highlight(item)"
    >
      <div class="index">{{ index }}</div>
      <div class="element">{{ item.name }}</div>
    </div>
  </div>
</template>