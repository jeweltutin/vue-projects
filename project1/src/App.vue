<template>
<img alt="Vue logo" src="./assets/logo.png">
<!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
<!-- <FirstComponent /> -->
<!-- <HomeComponent /> -->
<!-- <SecondComponent /> -->
<!-- <ThirdComponent /> -->
<!-- <MotherComponent /> -->


<router-link to="/">Home</router-link>
<router-link to="/login">Login</router-link>
<router-link to="/profile">Profile</router-link>
<router-link to="/watcher">Watcher</router-link>
<!-- <router-link to="/about-us">About Us</router-link> -->

<router-view></router-view>
</template>

<script>
//import ThirdComponent from './components/ThirdComponent.vue';
//import MotherComponent from './components/MotherComponent.vue';
//import HelloWorld from './components/HelloWorld.vue'
//import FirstComponent from './components/FirstComponent.vue'
//import HomeComponent from './components/HomeComponent.vue'
//import SecondComponent from './components/SecondComponent.vue'

export default {
    name: 'App',
    // components: {
    //     //ThirdComponent,
    //     MotherComponent
    // }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
a{
  padding: 5px 10px;
}
</style>
