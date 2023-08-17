<template>
    <div class="row justify-content-center mt-5">
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <div class="card-header">
                    <h4>Reset Password</h4>
                    <!-- <h2>{{ this.$route.query.email }}<br />
                        {{ this.$route.params.token }}
                    </h2> -->
                </div>
                <form @submit.prevent="handleResetPass">
                    <div class="mb-3 mt-3">
                        <label for="inputEmail1" class="form-label">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="inputEmail1">
                    </div>
                    <div class="mb-3">
                        <label for="inputPassword1" class="form-label">Password</label>
                        <input type="password" v-model="password" class="form-control" id="inputPassword1" placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <label for="confirmPassword1" class="form-label">Confirm Password</label>
                        <input type="password" v-model="password_confirm" class="form-control" id="confirmPassword1" placeholder="Confirm Password">
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
    name: "ResetPassword",
    data(){
        return{
            email: this.$route.query.email,
            password: '',
            password_confirm: ''
        }
    },
    methods: {
        async handleResetPass(){
            const info = {
                email: this.email,
                password: this.password,
                password_confirmation: this.password_confirm,
                token: this.$route.params.token
            }
            const response = await axios.post('/auth/password/reset', info);
            console.log(response);
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>