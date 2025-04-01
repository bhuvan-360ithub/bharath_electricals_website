<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/categories">Categories</router-link>
      <router-link to="/products">Products</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
