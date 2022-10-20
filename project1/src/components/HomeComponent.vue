<template>
<h1>Pass Data to child Component</h1>
<ChildComponent myname="M Ashraful Islam" :userinfo="user" :funcData="getData" />

<ul>
    <li v-for="item in users" :key="item.name">
        <UserComponent :data="item" :sMsg="showMsg"/>
    </li>
</ul>

<section>
    <h3>{{myname}}</h3>
    <p v-html="tag"></p>
</section>

</template>

<script>
import ChildComponent from './ChildComponent.vue'
import UserComponent from './UserComponent.vue';
export default {
    name: "HomeComponent",
    components: {
    ChildComponent,
    UserComponent
},
    data() {
        return {
            user: {
                name: 'Peter',
                email: 'peter@test.com'
            },
            users:[
                {
                    name: 'Jewel',
                    email: 'jewel@test.com'
                },
                {
                    name: 'Sam',
                    email: 'sam@test.com'
                },
                {
                    name: 'Jodu',
                    email: 'jodu@test.com'
                },
                {
                    name: 'Modhu',
                    email: 'modhu@test.com'
                },
                {
                    name: 'Bruce',
                    email: 'bruce@test.com'
                },
            ],
            myname: 'Jewel',
            tag: "<h2>Html Binding</h2>"
        }
    },
    methods: {
        getData(){
            console.warn("Parent function Called");
            alert("Hello Man");
        },
        showMsg(name){
            //alert("Hello!!")
            alert(name)
        }
    }

}
</script>

<style>
h1 {
    color: orange;
}
ul{
    text-align: left;
}
</style>
