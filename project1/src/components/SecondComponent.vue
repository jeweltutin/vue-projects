<template>
<h2>Second Component</h2>
<!-- <h2 :class="{green:false}">Class Binding</h2> -->
<!-- <h2 :class="{green:colorfull,err:true}">Class Binding</h2><br /> -->
<h2 :class="applyStyle">Class Binding</h2><br />
<button v-on:click="colorfull=!colorfull">Apply Style</button>

<h3>Ref in vue js 3</h3>
<input type="rext" ref="myname" />
<button v-on:click="getMyname">Click me</button>

<h3>Simple Form</h3>
<p class="err">
    <ul>
        <li v-for="item in error" v-bind:key="item">
            {{item}} not valid
        </li>
    </ul>
</p>
<form>
    <label>Email</label>
    <input type="text" placeholder="Enter Email" v-model="formData.email" /><br /><br />

    <label>Password</label>
    <input type="text" placeholder="Enter Password" v-model="formData.password"/>
    <br /><br />
    <label>Country</label>
    <select v-model="formData.country">
        <option>Bangladesh</option>
        <option>India</option>
        <option>China</option>
        <option>USA</option>
    </select>
    <br />
    <h3>Technology</h3>
    <label>Java</label>
    <input type="checkbox" value="java" v-model="formData.technology"/> 
    <label>PHP</label>
    <input type="checkbox" value="php" v-model="formData.technology"/> 
    <label>.NET</label>
    <input type="checkbox" value=".net" v-model="formData.technology"/>
    <br/><br/>
    <h3>Gender</h3>
    <label>Male</label>
    <input type="radio" value="male" name="gender" v-model="formData.gender"/> 
    <label>Female</label>
    <input type="radio" value="female" name="gender" v-model="formData.gender"/> 

    <button type="button" v-on:click="login">Login</button>
</form>
<p>
    {{formData}}<br/>
    {{formData.email}}
</p>
</template>

<script>
export default {
    name: "SecondComponent",
    data() {
        return {
            colorfull: true,
            formData: {
                email: "",
                password: "",
                country: "",
                technology: [],
                gender: ""
            },
            error:[],
        }

    },
    computed: {
        applyStyle() {
            return {
                green: this.colorfull,
                err: false,
                other: true
            }
        }
    }, 
    methods: {
        getMyname() {
            //console.log("--------Hello!")
            this.$refs.myname.focus();
            let val = this.$refs.myname.value;
            console.log(val);
            this.$refs.myname.style.color = "red";
        },
        login(){
            this.error = [];
            for(const item in this.formData){
                if(this.formData[item] === "" || this.formData[item].length === 0){
                    this.error.push(item)
                }
            }
            if(this.error.length===0){
                alert("data submitted");
            }
            console.log("Login data", this.formData, this.error)
        }
    }
}
</script>

<style>
.green {
    background-color: green;
    padding: 20px;
    color: white;
    width: 300px;
    margin: 0 auto;
}

.err {
    color: red;
}

.other {
    font-size: 20px;
}
</style>
