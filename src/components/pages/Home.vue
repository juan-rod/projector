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
      items: []
    }
  },
  created (){
    window.addEventListener('keyup', this.keyNavigation)
  },
  mounted () {
    this.createCanvas()
    this.$router.options.routes.forEach(route => {
      console.log('route:',route)
      
            // this.items.push({
            //     name: route.name
            //     , path: route.path
            // })
        })
  },
  beforeRouteUpdate (to, from, next) {
    console.log('to:',to)
    console.log('from:',from)
    console.log('next:',next)
    next()
    // react to route changes...
    // don't forget to call next()
  },
  methods: {
    keyNavigation (e){
      let keyPressed = e.which
      this.$router.push({ path: '/about' })
      // this.$router.options.routes.forEach(route => {
      //       this.items.push({
      //           name: route.name
      //           , path: route.path
      //       })
      //   })
      
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
