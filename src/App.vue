<template>
  <div class="fire">
    <nav> <Navi /></nav>
   
  
    <router-view />
    <Spinner />
    <Footer />
    <div class="stars"></div>
    <div class="twinkling"></div>
    <div class="clouds"></div>
  </div>
</template>
<script>
import Navi from '@/components/Navi.vue'; // Adjust the import path based on your project structure
import Footer from '@/components/Footer.vue';
import Spinner from '@/components/Spinner.vue';
export default {
  components: {
    Navi,
    Footer,
    Spinner

    
  
  },
};
</script>
  <style>
  body{
    width: 100%;
    height: 100vh;
    
  }
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  nav {
    padding: 30px;
  }
  nav a {
    font-weight: bold;
    color: darkgoldenrod;
  }
  nav a.router-link-exact-active {
    color: beige;
  }
  footer{
    position: fixed;
    bottom: 5%;
    width: 100%;
    color: black;
    font-size: 20px;
  }
  * {
      margin: 0;
      padding: 0;
  }
  header {
      background-color:rgba(33, 33, 33, 0.9);
      color:#ffffff;
      display:block;
      font: 14px/1.3 Arial,sans-serif;
      height:50px;
      position:relative;
      z-index:-1;
  }
  h2{
      margin-top: 30px;
      text-align: center;
  }
  header h2{
      font-size: 22px;
      margin: 0 auto;
      padding: 10px 0;
      width: 80%;
      text-align: center;
  }
  header a, a:visited {
      text-decoration:none;
      color:#fcfcfc;
  }
  @keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @-webkit-keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @-moz-keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @-ms-keyframes move-twink-back {
      from {background-position:0 0;}
      to {background-position:-10000px 5000px;}
  }
  @keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  @-webkit-keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  @-moz-keyframes move-clouds-back {
      from {background-position:0 0;}
      to {background-position:10000px 0;}
  }
  @-ms-keyframes move-clouds-back {
      from {background-position: 0;}
      to {background-position:10000px 0;}
  }
  .stars, .twinkling, .clouds {
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    display:block;
  }
  .stars {
    background:#000 url(http://www.script-tutorials.com/demos/360/images/stars.png) repeat top center;
    z-index:-100;
  }
  .twinkling{
    background:transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
    z-index:-100;
    -moz-animation:move-twink-back 200s linear infinite;
    -ms-animation:move-twink-back 200s linear infinite;
    -o-animation:move-twink-back 200s linear infinite;
    -webkit-animation:move-twink-back 200s linear infinite;
    animation:move-twink-back 200s linear infinite;
  }
  .clouds{
    filter: grayscale(100%);
      background:transparent url(http://www.script-tutorials.com/demos/360/images/clouds3.png) repeat top center;
      z-index:-100;
    -moz-animation:move-clouds-back 200s linear infinite;
    -ms-animation:move-clouds-back 200s linear infinite;
    -o-animation:move-clouds-back 200s linear infinite;
    -webkit-animation:move-clouds-back 200s linear infinite;
    animation:move-clouds-back 200s linear infinite;
  }
  </style>