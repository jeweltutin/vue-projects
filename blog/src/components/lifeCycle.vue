<template>
    <div>
        <div v-if="display">
        <h2>{{name}}</h2>
        <h2 id="demo">{{name}}</h2>
        </div>

        <button v-on:click="toggle">Toggle</button>
    </div>
</template>
<script>
export default {
    name: "lifeCycle",
    /*data(){
        return{
            name: "M Ashraful Islam"
        }
    },*/
    data(){
        return {display:true}
    },
    methods:{
        toggle(){
            this.display=!this.display
        }
    },
    beforeCreate(){
        this.name = "Sam"
        console.warn("before",this.name)
    },
    created(){
        this.name="Jewel"
        console.warn("created",this.name)
    },
    beforeMount(){
        //console.warn("beforeMount")
        //console.warn(this.$el)
        console.warn("beforeMount",document.getElementById("demo"))
    },
    mounted(){
        //console.warn("mounted")
        //console.warn(this.$el)
        console.warn("mounted",document.getElementById("demo"))

    },
    beforeDestroy(){
        console.warn("before destroy")
        alert("Hello")
    },
    destroyed(){
        console.warn("destroyed")
    }
}
</script>