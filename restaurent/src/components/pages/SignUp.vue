<template>
<img class="logo" src="../../assets/twitter.png" alt="logo" />
<h2>Sign Up</h2>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="text" v-model="phone" placeholder="Enter Phone" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signup">Sing Up</button>
    <p>Already have an account, 
        <router-link to="/login">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "SignUp",
    data() {
        return {
            name: '',
            email: '',
            phone: '',
            password: ''
        }
    },
    methods: {
        async signup() {
            console.log("Submitted", this.name, this.email, this.phone, this.password);
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                name: this.name,
                phone: this.phone,
                password: this.password
            });
            console.warn(result);
            if (result.status == 201) {
                //alert("Sign Up Done");
                localStorage.setItem("user-info", JSON.stringify(result.data));
                this.$router.push({
                    name: 'Home'
                });
            }
        }
    },
    mounted() {
        //console.warn("Mounted");
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({ name: 'Home'});
        }
    }
}
</script>

<style>

</style>
