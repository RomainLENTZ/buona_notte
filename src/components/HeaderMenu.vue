<template>
  <div class="icon_container"><BurgerIcon @click="openMenu"/></div>
  <div class="background_menu" ref="backgroundMenu" @click="closeMenu"/>
  <div class="header" ref="header">
    <div class="menu-wrapper">
      <a class="buona_note" href="/"><span>buona notte</span></a>
      <a class="rice" href="/rice"><span>riz</span></a>
      <a class="taxes end" href="/taxe"><span>taxes</span></a>
    </div>
  </div>
</template>


<script setup>
  import BurgerIcon from "@/components/icons/BurgerIcon.vue";
  import { ref } from 'vue';

  const header = ref(null);
  const backgroundMenu = ref(null);

  function openMenu() {
    if (header.value) {
      header.value.style.top = "2%";
      backgroundMenu.value.classList.add("isOpen")
    }
  }

  function closeMenu() {
    if (header.value) {
      header.value.style.top = "-30%";
      backgroundMenu.value.classList.remove("isOpen");
    }
  }

</script>

<style>

.isOpen{
  opacity: 0.3!important;
  pointer-events: all!important;
  z-index: 1!important;
}

.header {
  transition: var(--ease-power3-out) 0.4s;
  position: fixed;
  top: 2%;
  width: 80%;
  height: 100px;
  background: #ffffff;
  border-radius: 30px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
}

.icon_container{
  position: absolute;
  top: 2%;
  left: 5%;
  z-index: 2;
}

.menu-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

span{
  z-index: 100;
  transition: var(--ease-power3-out) 0.4s color;
}

a{
  text-decoration: none;
  color: black;
  padding: 10px 40px;
  font-size: 24px;
  transition: var(--ease-power3-out) 0.4s background-color;
  position: relative;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}

a:not(.end):after{
  content: "";
  height: 50%;
  width: 1px;
  position: absolute;
  left: 100%;
  background-color: #e8e8e8;
}

a:before {
  content: "";
  position: absolute;
  top: 0%;
  width: 80%;
  height: 0%;
  z-index: 1;
  border-radius: 15px;
  transition: var(--ease-power3-out) 0.4s;
}


@media (min-width: 768px) {
  .icon_container{
    display: none;
  }

  .buona_note:before{
    background: #08086e;
  }

  .rice:before{
    background: #F4D03F;
  }

  .taxes:before{
    background: rgb(255, 104, 104);
  }

  a:hover{
    background-color: transparent;
    color: white;
  }

  a:hover:before {
    height: 100%;
  }

}

@media (max-width: 768px) {
  .background_menu{
    display: block;
    background-color: #000000;
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: -1;
    pointer-events: none;
    top: 0;
    left: 0;
    transition: var(--ease-power3-out) 0.4s opacity;
  }

  .menu-wrapper{
    display: flex;
    flex-direction: column;
  }

  .header{
    z-index: 20;
    height: auto;
    top: -30%;
  }

  a:not(.end):after{
    content: "";
    width: 25%;
    height: 1px;
    position: absolute;
    top : 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #e8e8e8;
  }

  .icon_container{
    display: block;
  }
}

</style>
