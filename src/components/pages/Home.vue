<template>
  <div class="home" @keyup.enter="keyUpWorking">
    <div class="square top-right">
      <div class="circle"></div>
    </div>
    <div class="square top-left">
    <div class="circle left"></div>
    <!-- <canvas></canvas> -->
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
  components: { TheMenu },
  data () {
    return{
      paths: [],
      currentPath: ''
    }
  },
  created (){
    window.addEventListener('keyup', this.keyNavigation)
  },
  mounted () {
    // this.createCanvas()
    this.getRoutes()
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('to:',to)
    // console.log('from:',from)
    // console.log('next:',next)
    next()
  },
  watch:{
    $route (to, from){
      let path = to.path
          path = path = path.replace(/\//g, '')
     return this.currentPath = path
    }
  },
  methods: {
    keyNavigation (e){
      let keyPressed = e.which
      console.log('this.currentPath ',this.currentPath )
      //keypress 37 = right arrow
      //keypress 38 = up arrow
      //keypress 39 = left arrow
      //keypress 40 = down arrow

      console.log('keyPressed:',keyPressed)
      console.log('this.paths:',this.paths)
      if (keyPressed) {
        if(this.currentPath === '') this.$router.push({path: this.paths[0].path})
        if(this.currentPath === 'about') this.$router.push({path: this.paths[1].path})
        if(this.currentPath === 'now') this.$router.push({path: this.paths[2].path})
        if(this.currentPath === 'projects') this.$router.push({path: '/'})
      }
      
    },
    getRoutes () {
      this.$router.options.routes[0].children.forEach(route => {
        this.paths.push({
          path: route.path
        })
      })
    },
    createCanvas () {
      var canvas, context, width, height;

      // canvas = document.querySelector('canvas');
      // console.log('canvas:',canvas)
      // context = canvas.getContext('2d');

      // width = canvas.width = innerWidth;
      // height = canvas.height = innerHeight;
      // width = 100+'%';
      // height = 100+'%';

      // var imageData = context.createImageData(width, height);

      // (function loop() {
          
      //     for (var i = 0, n = imageData.data.length; i < n; i++) {
      //         imageData.data[i] = Math.floor(Math.random() * 255);
      //     }
          
      //     context.putImageData(imageData, 0, 0);
      //     requestAnimationFrame(loop);
          
      // })();

    }
  }
}
</script>

<style>

</style>
