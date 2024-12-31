<script setup lang="ts">
  let dialog: HTMLDialogElement | null = null;
  const open_help = () => dialog?.showModal();

  onMounted(() => dialog = document.querySelector(`#help_dialog`));
</script>

<template>
  <div>
    <div @click="open_help">About</div>
  </div>
</template>