<template>
    <div>
        <h2>Child Component</h2>
        <h3>{{psname}}</h3>
        <h4>{{name}}</h4>
        <ul>
            <li v-for="user in users" :key="user.name">
                {{user.name}} --- 
                {{user.email}}
            </li>
            
        </ul>
    </div>
</template>
<script>
export default {
    name: 'Child',
    props: [
        "psname",
        "name",
        "users"
    ]
}
</script>