<template>
  <div class="navigation">
    <div class="navigation__container" v-for="nav in navlinks" :key="nav.id">
      <router-link :to="nav.link" active-class="nav__active" exact><p>{{nav.name}}</p> </router-link>
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
          link : '/'
        },
         {
          name : "About",
          link : '/about'
        },
         {
          name : "Now",
          link : '/now'
        },
         {
          name : "Projects",
          link : '/projects'
        }
      ]
    }
  }
}
</script>

<style>

</style>
