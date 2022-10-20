<template>
  <p class="user">
    {{data.name}} <br/>
    {{data.email}}
  </p>
  <p>
    <button v-on:click="sMsg(data.name)">Alert Name</button>
  </p>
</template>

<script>
export default {
    name: "UserComponent",
    props:{
        data:Object,
        sMsg:Function
    }

}
</script>

<style>
    p.user{
        background-color: skyblue;
        padding: 10px;
        border-bottom: 1px solid;
        margin-bottom: 15px;
    }

</style>