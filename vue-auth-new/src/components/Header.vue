<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary" :user="userInfo">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">DXSoft</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
        <!-- <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-success" type="submit">Search</button>
        </form> -->
            <div class="mynav" v-if="user">
                <span>Hi, {{ user.name }}</span>
                <a href="javascript:void(0)" @click="handleLogout">Logout</a>
            </div>
            <div class="mynav" v-if="!user">
                <router-link :to="{name: 'Login'}">Login</router-link>
                <router-link :to="{name: 'Register'}">Register</router-link>
            </div>
        </div>
    </div>
</nav>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
    name: "HeaderPart",
    //props: ['user'],
    methods: {
        handleLogout(){
            localStorage.removeItem('user-info');
            this.$store.dispatch('user', null);
            this.$router.push('/');
            //this.$router.push({ name: 'Home'});
        }
    },
    computed: {
        ...mapGetters(['user'])
    }
}
</script>

<style>
.mynav a {
    color: #fff;
    text-decoration: none;
    padding: 0 10px;
}

.mynav a:hover {
    color: lightblue;
}
</style>
