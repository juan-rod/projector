<template>
  <div class="about">
    <div class="about__container" v-for="about in aboutItems" :key="about.id">
      <router-link :to="about.link" active-class="active" class="sub__nav">
        <div @click="aboutLink">
          <p>{{about.topic}}</p> 
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      aboutItems: [
        {
          link:'',
          topic:'what'
        },
        {
          link:'',
          topic:'skills'
        },
        {
          link:'',
          topic:'description'
        },
        {
          link:'',
          topic:'contact'
        }

      ]
    }
  },
  methods:{
    aboutLink () {
      console.log('hey from link')
    }
  }
}
</script>

<style>

</style>
