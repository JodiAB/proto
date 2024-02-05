<!-- NavBar.vue -->

<template>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/shop">Shop</router-link> |
      <router-link to="/Cart">Cart</router-link> |
      <router-link to="/Contact">Contact</router-link> |
      <router-link to="/Admin">Admin</router-link>
    </nav>
  </template>
  
  <script>
  export default {

  };
  </script>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center;  
    background-color: transparent;
    text-align: center;
    border: none;
    width: 92%;
    font-size: 18px;
    gap: 5rem;
    position: fixed;
    box-shadow: 0px 0px 100em rgba(0,255,255,0.5), 
    0px 0px 10px rgba(0,255,255,0.5), 
    0px 0px 10px rgba(0,255,255,0.5), 
    0px 0px 10px rgba(0,255,255,0.5);
  }
  
  nav a {
    font-weight: bold;
    color: darkgoldenrod;
  }
  
  nav a.router-link-exact-active {
    color: beige;
  }

 /* nav img{
    width: 50px;
    position: relative;
    top: 0%;
    animation: animate 8s linear infinite;
  }

  @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } */
  </style>
  