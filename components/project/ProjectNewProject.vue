<script setup lang="ts">
  const set_new_project = () => {
    console.log(`Hello`)
  }
</script>

<template>
  <ClientOnly>
    <div @click="set_new_project()">New Project</div>
  </ClientOnly>
</template>