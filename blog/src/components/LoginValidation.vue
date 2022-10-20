<template>
    <div>
        <p v-if="error.length">
            <b>Please correct the following errors</b>
            <ul>
                <li v-for="e in error" v-bind:key="e.id">
                    {{e}}
                </li>
            </ul>

        </p>
        <h2>Form Validation in vue js</h2>
        <form @submit="loginFrm">
            <input type="text" v-model="name" placeholder="Enter Name" /><br><br>
            <input type="password" v-model="passwd" placeholder="Password" /><br><br>
            <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name: "LoginValidation",
    data(){
        return{
            error:[],
            name:null,
            passwd:null
        }

    },
    methods:{
        loginFrm(e){
            this.error=[];
            if(this.name && this.pass){
                console.warn("No Error")
                // return true
            }
            if(!this.name){
                this.error.push("Username is required")
            }
            if(!this.passwd){
                this.error.push("Password is required")
            }
            console.warn("Hello", this.error)
            //console.warn("Hello!");
            e.preventDefault();
        }
    }
}
</script>