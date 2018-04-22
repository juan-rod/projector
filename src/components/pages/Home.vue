<template>
  <div class="home">
    <div class="square top-right">
      <div class="circle"></div>
    </div>
    <div class="square top-left">
    <div class="circle left"></div>

    </div>
    <div class="square bottom-right">
    <div class="circle right--bottom"></div>

    </div>
    <div class="square bottom-left">
    <div class="circle"></div>

    </div>
    <div class="circle--lg"></div>
    <the-menu></the-menu>
  </div>
</template>

<script>
import TheMenu from './Menu.vue'
export default {
  name:'Home',
  components: { TheMenu }
}
</script>

<style>

</style>
