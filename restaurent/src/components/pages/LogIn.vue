<template>
    <img class="logo" src="../../assets/twitter.png" alt="logo" />
    <h2>Login</h2>
    <div class="login">
        <input type="text" v-model="email" placeholder="Enter Email" />
        <input type="password" v-model="password" placeholder="Enter Password" />
        <button v-on:click="login">Login</button>
        <p>
            No account, New User, Register Now 
            <router-link to="/sign-up">SignUp</router-link>
        </p>
    </div>
    </template>

<script>
import axios from 'axios'
export default {
    name: "LogIn",
    data(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            );
            //alert("login Function called");
            //http://localhost:3000/users?email=jewel@test.com&password=12345
            //console.log("Login Data:", this.email, this.password);
            //console.warn(result);
            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]));
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({ name: 'Home'});
        }
    }
}
</script>

<style>

</style>