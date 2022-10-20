<template>
    <HeaderPart />
  <h3>Hello, {{ user_name }} Welcome On Home page</h3>
  <table>
    <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Contact</th>
        <th>Address</th>
        <th>Actions</th>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
        <td>
            {{item.id}}
        </td>
        <td>
            {{item.name}}
        </td>
        <td>
            {{item.contact}}
        </td>
        <td>
            {{item.address}}
        </td>
        <td>
            <router-link :to="'/update-restaurant/'+item.id">Edit</router-link>
            <button style="margin-left:10px;" v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
    </tr>
  </table>
</template>

<script>
import axios from 'axios';
import HeaderPart from '../layouts/HeaderPart.vue';
export default {
    name: "HomePage",
    data(){
        return{
            user_name:'',
            restaurants:[]
        }
    },
    components: { HeaderPart },
    methods: {
        async deleteRestaurant(id){
            console.log(id);
            let result = await axios.delete("http://localhost:3000/restaurant/"+id);
            if(result.status==200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info");
            this.user_name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({ name: "SignUp" });
            }
            let result = await axios.get("http://localhost:3000/restaurant");
            //console.log(result); 
            this.restaurants=result.data;
            }
    },
    mounted() {
        //console.warn("Mounted");
        this.loadData();
    }   
}
</script>

<style>
    table{
        width: 80%;
        margin: 50px auto 5px;
    }
    th, td{
        width: 160px;
        height: 40px;
        border: 1px dashed peru;
    }

</style>