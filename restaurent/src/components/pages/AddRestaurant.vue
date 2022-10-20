<template>
    <HeaderPart />
  <h3>Add Restaurant</h3>
  <form class="restuarant">
    <input type="text" name="name" v-model="restuarant.name" placeholder="Enter Name" />
    <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter Contact" />
    <input type="text" name="address" v-model="restuarant.address" placeholder="Enter Address" />
    <button type="button" v-on:click="AddRestaurantfunc">Add New Restaurant</button>
  </form>
</template>

<script>
import axios from 'axios';
import HeaderPart from '../layouts/HeaderPart.vue';
export default {
    name: "AddRestaurant",
    data(){
        return{
            restuarant:{
                name:'',
                contact:'',
                address:''
            }
        }
    },
    methods:{
        async AddRestaurantfunc(){
            //console.log(this.restuarant);
            
            let result = await axios.post("http://localhost:3000/restaurant", {
                name: this.restuarant.name,
                contact: this.restuarant.contact,
                address: this.restuarant.address
            });
            if (result.status == 201) {
                //alert("Resttaurant added");
               
                this.$router.push({ name: 'Home' });
            }
        }
    },
    components: { HeaderPart },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
    }   
}
</script>

<style>

</style>