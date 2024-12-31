<script setup lang="ts">
  let dialog: HTMLDialogElement | null = null;
  const close = (e: Event) => e.target === e.currentTarget && dialog?.close();

  onMounted(() => dialog = document.querySelector(`#help_dialog`));
</script>

<style scoped>
  .help{padding-bottom: 15px}
  dialog{max-width: 50vw}
</style>

<template>
  <dialog id="help_dialog" @click="close">
      <div class="container">
        <div class="help"> 
          This platform provides the essential tools for animation, compositing, and VFX directly in your web browser, making powerful motion graphics accessible from anywhere. 
        </div>
        <button @click="dialog?.close()">Close</button>
      </div>
    </dialog>
</template>