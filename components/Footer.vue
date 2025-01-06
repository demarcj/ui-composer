<script setup lang="ts">
  const year = new Date().getFullYear();
</script>

<style scoped>
  footer{
    border-top: 1px solid white;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .social{
    display: flex;
    gap: 15px;
  }
</style>

<template>
  <footer>
    <div class="left_row">
      <div class="social">
        <a href="https://www.youtube.com/@demarctheprogrammer">
          <Icon size="1.4em" name="uil:youtube" />
        </a>
        <a href="https://github.com/demarcj">
          <Icon size="1.4em" name="uil:github" />
        </a>
        <a href="https://www.linkedin.com/in/demarc-johnson/g">
          <Icon size="1.4em" name="uil:linkedin" />
        </a>
      </div>
    </div>
    <div class="right_row">
      <div>&copy; {{ year }} UI Composer</div>
    </div>
  </footer>
</template>