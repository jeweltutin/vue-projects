<template>
  <h2>Form Modifiers</h2>
  <!-- <input type="text" v-model.lazy="info"/> -->
  <!-- <input type="text" v-model.trim="info"/> -->
  <!-- <input type="number" v-model.number="info"/> -->
  <!-- <input type="number" v-model.number.lazy="info"/> -->
  <p>
    Type: {{ typeof(info)}} <br/>
    Value: {{ info }} <br/>
  </p>
</template>

<script>
export default {
    name: "ThirdComponent",
    data(){
        return {
            info: ''
        }
    }
}
</script>

<style>

</style>