<template>
  <h2>
    Profile
  </h2>
  <h3>Welcome, This is {{profile}}'s Profile.'</h3>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus non commodi facere
     dolore officia porro iusto saepe ut! Repellendus, cumque aliquam? Voluptates sunt cum iste neque possimus in. Quas, dignissimos?
  </p>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
    name: "ProfilePage",
    data(){
        return {
            profile:''
        }
    },
    mounted(){
        const route = useRoute();
        console.warn("route", route.params.name);
        this.profile=route.params.name;
    }

}
</script>

<style>

</style>