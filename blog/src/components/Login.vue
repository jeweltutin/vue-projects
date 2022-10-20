<template>
    <div>
        <p>
        <input type="text" v-model="loginForm.username" name="username" placeholder="Enter Username" /><br><br>
        <input type="password" v-model="loginForm.passwd" name="passwd" placeholder="Password" /><br><br>
        <button v-on:click="loginData">Login</button>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods:{
        loginData(){
            //console.log('loginData',this.loginForm)
            console.log('loginData',this.loginForm.username,this.loginForm.passwd)
        }
    },
    data(){
        return {loginForm:{
            username:null,
            passwd:null
        }
        }
    }

}
</script>