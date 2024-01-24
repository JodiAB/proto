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
    width: 92%;
    font-size: 18px;
    gap: 6rem;
    position: fixed;
    box-shadow: 0px 1px 2px rgba(0,255,255,0.5), 
    0px 2px 4px rgba(0,255,255,0.5), 
    0px 4px 8px rgba(0,255,255,0.5), 
    0px 8px 16px rgba(0,255,255,0.5);
  }
  
  nav a {
    font-weight: bold;
    color: darkgoldenrod;
  }
  
  nav a.router-link-exact-active {
    color: beige;
  }
  </style>
  