<template>
  <div class="home" @keyup.enter="keyUpWorking">
    <div class="square top-right">
      <div class="circle"></div>
    </div>
    <div class="square top-left">
    <div class="circle left"></div>
    <canvas></canvas>
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
  created (){
    window.addEventListener('keyup', this.myMethod)
  },
  mounted () {
    this.createCanvas()

  },
  methods: {
    myMethod (e){
      console.log('key pressed: ' + e.which)
    },
    createCanvas () {
      var canvas, context, width, height;

      canvas = document.querySelector('canvas');
      console.log('canvas:',canvas)
      context = canvas.getContext('2d');

      width = canvas.width = innerWidth;
      height = canvas.height = innerHeight;

      var imageData = context.createImageData(width, height);

      (function loop() {
          
          for (var i = 0, n = imageData.data.length; i < n; i++) {
              imageData.data[i] = Math.floor(Math.random() * 255);
          }
          
          context.putImageData(imageData, 0, 0);
          requestAnimationFrame(loop);
          
      })();

    }
  }
}
</script>

<style>

</style>
