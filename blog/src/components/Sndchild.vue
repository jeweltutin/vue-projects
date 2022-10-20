<template>
    <div>
        <button v-on:click="updateTitle">Update parent Title</button>
    </div>
</template>
<script>
export default {
    name: 'Sndchild',
    methods: {
        updateTitle(){
            //console.warn('hello from title')
            this.$emit('changeTitle',"Title Updated")
        }
    }
}
</script>