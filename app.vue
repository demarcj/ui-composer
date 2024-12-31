<style>
  :root{
    --layer-grid: 75px 1fr
  }
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  html{ color-scheme: dark }
  button{
    padding: 5px;
  }
  dialog{
    position: fixed;
    margin: auto;
  }
  dialog > .container{ padding: 15px }
</style>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </div>
</template>
