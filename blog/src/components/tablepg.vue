<template>
    <div>
        <h1>Hello! from home component</h1>
        <h3 v-if=showsec()>WOW!!!</h3>

        <h2 v-if="show">Welcome</h2>        
       <h2 v-else>Conditional rendaring vue js</h2>
        <p>{{data}}</p>
        <p>{{msg}}</p>
        <!--<button v-on:mouseover="myfunc">Click Me</button>-->
        <button v-on:click="myfunc('Are You sure?')">Click Me</button>
        <button v-on:click="display()">Toggle Element</button>
        <div class="mtable">
            <table border='2'>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>   
                <tr v-for="user in users" v-bind:key="user.id">
                    <td>{{user.id}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.email}}</td>
                </tr>              
            </table>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'Tablepg',
    props:{
        data:String,
        msg:String
    },
    methods:{
        myfunc(data){
            //console.log("Hello console called")
            alert(data)
        },
        display(){
            this.show=!this.show
        },
        showsec(){
            return {show: false}
        }

    },
    /*data(){
        return {show: false}
    }*/
    data(){
        return{
            users:[
                {id:1,name:'peter',email:'peter@test.com'},
                {id:2,name:'bruce',email:'bruce@test.com'},
                {id:3,name:'tomy',email:'tomy@test.com'},
                {id:4,name:'sam',email:'sam@test.com'},
                {id:5,name:'raimi',email:'raimi@test.com'}
            ]
        }
    }
}
</script>