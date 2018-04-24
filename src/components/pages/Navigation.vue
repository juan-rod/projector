<template>
  <div class="navigation">
    <div class="navigation__container" v-for="nav in navlinks" :key="nav.id">
      <p>{{nav.name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:'Navigation',
  data () {
    return {
      navlinks: [
        {
          name : "Home",
          link : ''
        },
         {
          name : "About",
          link : ''
        },
         {
          name : "Now",
          link : ''
        },
         {
          name : "Blog",
          link : ''
        }
      ]
    }
  }
}
</script>

<style>

</style>
