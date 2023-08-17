<template>
  <div class="row justify-content-center mt-5">
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <div class="card-header">
                    <h4>Forgot Password</h4>
                </div>
                <form @submit.prevent="handleForgot">
                    <div class="mb-3 mt-3">
                        <label for="inputEmail1" class="form-label">Email address</label>
                        <input type="email" v-model="email" class="form-control" id="inputEmail1">
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "ForgotPassword",
    data(){
        return {
            email: ''
        }
    },
    methods: {
        async handleForgot(){
            const response = await axios.post('/auth/password/email', {
                email: this.email
            })
            console.log(response);
        }
    }
}
</script>

<style>

</style>