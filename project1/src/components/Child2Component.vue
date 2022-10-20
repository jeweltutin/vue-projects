<template>
<div>
  <h3>Child Component</h3>
  <h4>Peter</h4>
  <h4>Bruce</h4>
  <h4 v-bind="$attrs">Sunil</h4>
  <p>
    {{ msg }}
    {{xyz}}
  </p>
</div>
</template>

<script>
export default {
    name: 'Child2Component',
    inheritAttrs:false,
    props: {
        msg: String
    }

}
</script>

<style>

</style>