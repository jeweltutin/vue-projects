<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>
    <tablepg data="Typos, incorrect software configuration, 
                and header misplacement are some of the most common causes 
                of this error." msg="Second data pass from data">
    </tablepg>-->
    <!--<home></home>-->
    <!--<h2>{{title}}</h2>
    <Databind></Databind>-->
    <!--<child psname="Ashraful Islam"></child>-->
    <!--<child v-bind:name="userName"></child>
    <child v-bind:users="users"></child>
    <sndchild v-on:changeTitle="updateTitle($event)"></sndchild>
    <SignUp></SignUp>
    <login></login>
    <loginValidation></loginValidation>
    <h3>{{name | Ucase}}</h3>

    <lifeCycle></lifeCycle>-->
    <EmployeeList></EmployeeList>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Tablepg from './components/tablepg.vue'
//import Home from './components/Home'
//import Databind from './components/Databind'
//import Child from './components/Child'
//import Sndchild from './components/Sndchild'
//import SignUp from './components/SignUp'
/*import Login from './components/Login'
import LoginValidation from './components/LoginValidation'
import lifeCycle from './components/lifeCycle'*/
import EmployeeList from './components/EmployeeList'


export default {
  name: 'App',
  components: {
    //HelloWorld,
    //Tablepg,
    //Home,
    //Databind,
    //Child,
    //Sndchild,
    //SignUp,
    //Login,
    //LoginValidation,
    //lifeCycle,
    EmployeeList
  },
  /*data(){
    Sndchild
    //return {userName:"Mr Josef"}
    return {
      users:[
        {name: "anil",email: "anil@gmail.com"},
        {name: "Sam",email: "sam@gmail.com"},
        {name: "bajlu",email: "bajlu@gmail.com"},
        {name: "tony",email: "tony@gmail.com"}
      ]}
  }*/
  /*data(){
    return {title:"Props Tutorial"}
  },
  methods:{
    updateTitle(title){
      this.title=title
    }
  }*/
  data(){
    return {name: "ashraful islam"}
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
