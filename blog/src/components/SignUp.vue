<template>
    <div>
        <h2>Form with checkbox and radio button in Vue js</h2>
        <input type="text" placeholder="Enter your name" v-model="signup.username" /> <br> <br>
        <input type="password" placeholder="Enter your password" v-model="signup.password" /> <br> <br>
        <p>Choose Hobbies</p>
        <label for="cric">Cricket
        <input type="checkbox" id="cric" value="Cricket" v-model="signup.hobbies"/>
        </label>
        <label for="ftbl">Football
        <input type="checkbox" id="ftbl" value="Football" v-model="signup.hobbies"/>
        </label>

        <br> <br>
        <p>Choose Gender</p>
        <label for="m">Male
        <input type="radio" id="m" value="Male" v-model="signup.gender"/>
        </label>
        <label for="f">Female
        <input type="radio" id="f" value="Female" v-model="signup.gender"/>
        </label><br> <br>
        <button v-on:click="signupUser">Sign Up</button>
    </div>
</template>
<script>
export default {
    name: 'SignUp',
    data(){
        return{
            signup:{
                username:null,
                password:null,
                hobbies:[],
                gender:null
            }
         }
    },
    methods:{
        signupUser(){
            console.warn(this.signup)
        }
    }

}
</script>