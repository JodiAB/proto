<template>
  <div class="home">
        <h3>Welcome to MenWithClass</h3>    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    
  }
}
</script>

<style scoped>
.home{
  width: 100%;
  height: 80vh;
  overflow: hidden;
}

.home img{
  height: 500px;
  width: 500px;
  z-index: -1;
  position: relative;
  left: -33%;
  top: 13%;

}

.home h3{
    position: relative;
    font-size: 5rem;
    color: transparent;
    -webkit-text-stroke: .5px darkgoldenrod;
    background-image: linear-gradient(white, white);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-position: -1910px 0;
    animation: animateText 9s linear infinite;
    top: -70%;
    left: 16%;
}

@keyframes animateText{
    0%, 95%, 100%{
        background-position: -1410px 0;
    }
    65%,85%{
        background-position: 0 0;
    }
}



</style>
