<template>
<h2>
    Watcher
</h2>
<p class="text">

</p>
{{ count }}
<p>
    <button v-on:click=" count=count-1 ">-</button>
    <button v-on:click=" count=count+1 ">+</button>
</p>

<p>
    Ask a yes/no question:
    <input v-model="question" />
</p>
<p>{{ answer }}</p>
<br /><br />
<div id="computed_props">
    Kilometers : <input type="text" v-model="kilometers">
    Meters : <input type="text" v-model="meters">
</div>
</template>

<script>
export default {
    name: "WatcherComponent",
    data() {
        return {
            count: 0,

            kilometers: 0,
            meters: 0,

            question: '',
            answer: 'Questions usually contain a question mark. ;-)',
        }
    },
    watch: {
        count(num, prev) {
            if (num > 5 && num > prev) {
                //alert("Grater than 5");
                this.count = 0;
            }
        },
        // whenever question changes, this function will run
        question(newQuestion, oldQuestion) {
            if (newQuestion.indexOf('?') > -1) {
                this.getAnswer()
            } else if (oldQuestion) {
                this.answer = "Ask your question .."
            }
        },
        kilometers: function (val) {
            this.kilometers = val;
            this.meters = val * 1000;
        },
        meters: function (val) {
            this.kilometers = val / 1000;
            this.meters = val;
        }
    },
    methods: {
        async getAnswer() {
            this.answer = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                this.answer = (await res.json()).answer
            } catch (error) {
                this.answer = 'Error! Could not reach the API. ' + error
            }
        }
    },
    mounted() {
        document.title = "Watcher";
    }
}
</script>

<style>

</style>
