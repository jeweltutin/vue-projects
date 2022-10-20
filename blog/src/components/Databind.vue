<template>
    <div>
        <h1 style="color:red">DataBind</h1>
        <p>
            {{message}}
        </p>
        <h2 style="white-space: pre-line;">
            {{msg02}}
        </h2>
        <p>
            <input type="text" v-model="message">
        </p> 
        <p>
            <textarea v-model="msg02"></textarea>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Databind',
    data(){
        return{
            message: 'Hello!!',
            msg02: 'type Here'
        }
    }
}
</script>