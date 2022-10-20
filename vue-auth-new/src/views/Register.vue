<template>
<div class="row justify-content-center mt-5">
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <div class="card-header">
                    <h4>Sign Up</h4>
                </div>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3 mt-3">
                        <label for="inputname" class="form-label">Name</label>
                        <input type="text" v-model="name" class="form-control" id="inputName" placeholder="Name">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword1" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="inputPassword1" placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword1" class="form-label">Confirm Password</label>
                        <input type="password" v-model="password_confirm" class="form-control" id="confirmPassword1" placeholder="Confirm Password">
                    </div>
                    <div class="mb-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1">
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign Up</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: "RegisterPage",
    data(){
        return{
            name: '',
            email: '',
            password: '',
            password_confirm: ''
        }
    },
    methods: {
        async handleSubmit(){
            const data = {
                name: this.name,
                email: this.email,
                password: this.password,
                confirmpass: this.password_confirm
            }
            //console.warn(data);

            const saveData = await axios.post('auth/register', data);
            // .then(
            //     response => {
            //         console.log(response)
            //     }
            // ).catch(
            //     err => {
            //         console.log(err)
            //     }
            // )
            console.log(saveData);
            this.$router.push('/login')
        }
    }
}
</script>

<style>

</style>
