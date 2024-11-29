<template>
  <div class="burger_menu_container">
    <svg class="burger_menu" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="40px" height="40px" fill="currentColor"><path d="M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"/></svg>
  </div>
</template>

<style>

.burger_menu_container{
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  width: 40px;
  height: 40px;
  border-radius: 30px;
  background-color: #FFFFFF;
  position: relative;
}

.burger_menu{
  position: absolute;
  top: 0;
  left: 0;
  color: #000000;
  transition: var(--ease-power3-out) 0.3s color;
  border-radius: 30px;
  padding: 5px;
}

svg:hover{
  color: #000000A0;
}




</style>
<script setup lang="ts">
</script>