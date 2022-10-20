<template>
<!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->
<div class="container">
    <h2>Hi, <span v-if="user">{{ user.name }}</span> Welcome!</h2>
    <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde illum dignissimos doloremque pariatur beatae,
        eius nulla ipsa quas, officiis laborum blanditiis ducimus. Tenetur quidem accusamus deserunt alias ipsum
        perferendis dicta.
    </p>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </nav>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import {mapGetters} from 'vuex'

export default {
    name: 'HomeView',
    //props: ['user'],
    components: {

    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>

  
<style>
.container {
    padding-top: 20px;
}
</style>
