<template>
  <div class="menu">
    <div class="menu__main">
      <div class="menu__main--overlay">
        <div class="menu__main--header">
          <p>JUAN [RODRIGUEZ]</p>
          <p>TWENTY18</p>
        </div>
        <div class="menu__main--body">
          <the-nav></the-nav>
          <router-view class="menu__main--router-view"></router-view>
        </div>
      </div>
    </div>
    <div class="menu__nav border">

    </div>
  </div>
</template>

<script>
import TheNav from './Navigation.vue'
export default {
  name: 'Menu',
  components:{ TheNav }

}
</script>

<style>

</style>
