<template>
    <div>
        <h2>{{name | Ucase}}</h2>
        <h3>{{amount | currencyConverter}}</h3>
        <h1 class="fstheading">Home Component</h1>
        <h2 style="color: pink;">Class and Style Bindings</h2>
        <h3 v-bind:style="{color: 'lightgreen'}">Uning v-bind</h3>
        <h3 v-bind:class="{doactive:clsval,disPadAdd:show}">Class Bindings with object</h3>
        <h3 v-bind:class="{doactive:clsval,disPadAdd:show}">Class Bindings with Array </h3>
        <Users />
        <Products />
    </div>
</template>

<script> 
import Users from './Users'
import Products from './Products'

export default {
    name: 'Home',
    components:{
        Users,
        Products
    },
    data(){
        return{
            name:"Home",
            amount: 500,
            clsval: true,
            show: true
        }
    }
}
</script>

<style scoped>
div{
    background-color: #dde5ec;
    min-height: 400px;
}
.fstheading{
    color: brown;
}
.doactive{
    background-color: chartreuse;
    color: #fff;
}
.disPadAdd{
    padding: 30px;
    font-weight: bold;
}
    
.arrayClass{
    background-color: cyan ;
}
</style>