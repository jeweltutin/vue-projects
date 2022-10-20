<template>
<h2>Home Page</h2>
<h3>Showing User data, Call API</h3>
<table>
    <tr v-for="item in list" :key="item">
        <td>
            {{ item.id }}
        </td>
        <td>
            {{ item.first_name }}
        </td>
        <td>
            {{ item.last_name }}
        </td>
        <td>
            {{ item.email }}
        </td>
        <td>
            <img :src="item.avatar" alt="avatar" />
        </td>
    </tr>
</table>
<p>

</p>
</template>

<script>
import axios from 'axios';

export default {
    name: "MyHome",
    data() {
        return {
            list: []
        }
    },
    async mounted() {
        let result = await axios.get("https://reqres.in/api/users?page=1");
        console.log("API Data:", result.data.data);
        this.list = result.data.data;
    }
}
</script>

<style scoped>
table {
    margin: 0 auto;
    text-align: center;
}
table td {
    width: 200px;
    border: 1px dashed skyblue;
}
</style>
