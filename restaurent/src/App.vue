<template>
  <!-- <SignUp /> -->
  <router-view></router-view>
</template>

<script>
//import SignUp from './components/pages/SignUp.vue';


export default {
  name: 'App',
  components: {
    //SignUp
}
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.logo {
    width: 100px;
    height: auto;
}

.register input, .login input, .restuarant input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid skyblue;
}

.register button, .login button, .restuarant button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    color: #fff;
    background-color: skyblue;
    cursor: pointer;

}
</style>
