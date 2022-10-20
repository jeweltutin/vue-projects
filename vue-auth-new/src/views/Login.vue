<template>
<div class="row justify-content-center mt-5">
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <div class="card-header">
                    <h4>Login</h4>
                </div>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3 mt-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "LoginPage",
    data(){
        return{
            email: 'jewel@gmail.com',
            password: '123456'
        }
    },
    methods:{
        async handleLogin(){
            const response = await axios.post('auth/login',{
                email: this.email,
                password: this.password
            });

            console.log(response);
            //console.log(response.data.access_token);
            //localStorage.setItem('token', response.data.access_token);
            if (response.data.access_token) {
                localStorage.setItem('user-info', response.data.access_token);
                
                //console.log(response.data.user);
                this.$store.dispatch('user', response.data.user);
                this.$router.push({ name: 'Home'});
                //this.$router.push('/');
            }
            return response.data;
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
