<style scoped>
  .layer{
    display: grid;
    grid-template-columns: var(--layer-grid);
  }
  .layer > div{ padding: 5px 10px }
  .layer:nth-child(odd){ background-color: rgb(12, 12, 12) }
  .layers{overflow-y: auto;}
  .selected .element{
    color: black;
    background-color:  var(--highlight);;
  }
</style>

<script setup lang="ts">
  import { v4 as uuidv4 } from 'uuid';
  import type { ElementModel } from '~/models';

  let selected = null;
  const dummy: ElementModel[] = [
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },{
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },{
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    },
    {
      name: `Foo`,
      id: uuidv4()
    },
    {
      name: `Bar`,
      id: uuidv4()
    }
  ];

  const highlight = (item: ElementModel) => {
    selected = item;
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
  <div class="layers" v-if="dummy?.length">
    <ClientOnly>
      <div 
        class="layer" 
        v-for="(layer, index) in dummy" 
        :key="layer.id"
        :id="layer.id"
        @click="highlight(layer)"
      >
        <div class="index">{{ index }}</div>
        <div class="element">{{ layer.name }}</div>
      </div>
    </ClientOnly>
  </div>
</template>