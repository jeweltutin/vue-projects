<template>
  <h2>Mother Component</h2>
  <Child2Component msg="Subhan Allah." xyz="From mother msg"/>

  <h3>Using Data Property</h3>
  <p>
    Doller: {{ dollers }}<br />
    Amount : {{ (dollers*rupeeVal)-discount }}
  </p>

  <h3>Computed Property</h3>
  <p>
    Doller: {{ dollers }}<br />
    Amount : {{ getResult }}
  </p>

  <h3>Using Method</h3>
  <p>
    Doller: {{ dollers }}<br />
    Amount : {{ getResultMethod() }}
  </p>
</template>

<script>
import Child2Component from './Child2Component.vue';
export default {
    name: "MotherComponent",

    data(){
        return{
            dollers: 100,
            rupeeVal:70,
            discount:10
        }
    },
    methods:{
        getResultMethod(){
            return (this.dollers*this.rupeeVal)-this.discount;
        }
    },
    computed:{
        getResult(){
            return (this.dollers*this.rupeeVal)-this.discount;
        }
    },
    components: { 
        Child2Component 
    }
}
</script>

<style>

</style>