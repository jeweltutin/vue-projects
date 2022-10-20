<template>
    <HeaderPart />
  <h3>Update Restaurant</h3>
  <form class="restuarant">
    <input type="text" name="name" v-model="restuarant.name" placeholder="Enter Name" />
    <input type="text" name="contact" v-model="restuarant.contact" placeholder="Enter Contact" />
    <input type="text" name="address" v-model="restuarant.address" placeholder="Enter Address" />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
  </form>
</template>

<script>
import axios from 'axios';
import HeaderPart from '../layouts/HeaderPart.vue';
export default {
    name: "UpdateRestaurant",
    components: { HeaderPart },
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
        async updateRestaurant(){
            //console.log("Function Called",this.restuarant);
            let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id, {
                name: this.restuarant.name,
                contact: this.restuarant.contact,
                address: this.restuarant.address
            });
            if (result.status == 200) {
                //alert("Resttaurant added");
               
                this.$router.push({ name: 'Home' });
            }
        }
    },
    async mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "SignUp" });
        }
        
        //console.warn(this.$route.params.id);
        const result = await axios.get("http://localhost:3000/restaurant/"+this.$route.params.id);
        //console.warn(result.data);
        this.restuarant=result.data;
    }   
}
</script>

<style>

</style>