<template>
  <!-- <HeaderPart :user="userInfo"/>
  <router-view :user="userInfo"/> -->
  <HeaderPart />
  <router-view />
  <FooterPart />
</template>

<script>
import HeaderPart from './components/Header.vue';
import FooterPart from './components/FooterPart.vue';
//import HeaderPart from '@/components/Header.vue';

import axios from 'axios';

export default {
  name: "App",
  components: {
    HeaderPart,
    FooterPart
  },
  /*data(){
      return {
        userInfo: null
      }
    },*/
    async created() {

      /*const response = await axios.post('auth/me', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('user-info')
        }
      });*/   // Not worked like this

        const response = await axios.post('auth/me');
        console.log(response);
        //this.userInfo = response.data;
        this.$store.dispatch('actionUser', response.data);
    }
}
</script>
<style>
div#app {
    position: relative;
}
</style>
