<style scoped>
  header{ border-bottom: 1px solid white }
  .list{
    display: flex;
    list-style: none;
    cursor: pointer;
  }
  .list li{ 
    padding: 10px 5px;
    position: relative; 
  }
  .list li:hover > ul{ display: block; }
  .list ul{
    position: absolute;
    top: 100%;
    background-color: #1c1b22;
    display: none; 
  }
</style>

<template>
  <header>
    <nav>
      <ul class="list">
        <li>Project</li>
        <li>Elements</li>
        <li>View</li>
        <li>
          <div>Help</div>
          <ul>
            <HelpMenu></HelpMenu>
          </ul>
        </li>
      </ul>
    </nav>
    <HelpDialog></HelpDialog>
  </header>
</template>