<template>
  <h2>Child Component</h2>
  <p>
    {{myname}}
  </p>
  <p>
    {{userinfo.name}}<br />
    {{userinfo.email}}<br />
  </p>
  <section>
    <button v-on:click="funcData()">Call Function</button>
  </section>
</template>

<script>
export default {
    name: 'ChildComponent',
    props:{
        myname:String,
        userinfo:Object,
        funcData:Function
    }
}
</script>

<style>

</style>