<template>
  <h1>Interpolation and Data</h1>
  <p>
    10+30 = {{ 10 + 30 }} <br />
    String Length {{ "Jewel".length }}
  </p>
  <h4>My Information</h4>
  <p>
    Name : {{ fullname }} <br />
    Email : {{ email }} <br />
    Mobile : {{ mobile }} <br />
    Wname : {{ getmyName() }} <br />
    Result: {{ addition() }}<br />
    Function with Params : {{ addition2(20,15) }}<br /><br />

    Name01 : {{ getName("Peter") }} <br />
    Name02 : {{ getName("Bruce") }} <br /><br /><br />

    University: {{ getData().versity }}<br/>
    Year: {{ getData().year }}<br/>
    Email from Data method: {{ getData().email }}<br/>

  </p>
  <section>
    <!-- <h3 v-on:mousemove="getConsole()">Event</h3> -->
    <h3>Event</h3>
    <button v-on:click="showmsg()">Show Message</button>
    <button v-on:click="showmsg2('I am from here :)')">Show Message2</button>
    <button v-on:dblclick="showmsg2('button Double clicked)')">Show Message2</button>
    <button v-on:click="counternum()">Counter</button>
  </section>
  <h5>{{ count }}</h5>
  <section>
    <h4>Two way binding</h4>
    <input type="text" v-model="num3"/><br/>
    <h2>{{ num3 }}</h2>
  </section>
  <section>
    <h4><u>Get input value</u></h4>
    <input type="text" placeholder="First Name" v-model="firstname" /> <br/><br/>
    <input type="text" placeholder="Last Name" v-model="lastname" /><br/><br/><br/>
    <button v-on:click="gatherData()" type="button">Get Values</button><br/>
  </section>
  <section>
    <h4><u>Get checkbox and radio button valoue</u></h4>
    <h5>Technology</h5>

    <label for="tec1">Java</label>
    <input type="checkbox" value="java" id="tec1" v-model="technology"/>

    <label for="tec2">Php</label>
    <input type="checkbox" value="php" id="tec2" v-model="technology"/>

    <label for="tec3">Node</label>
    <input type="checkbox" value="node" id="tec3" v-model="technology"/>

    <p>
      Selected Technology: {{ technology }}
    </p>
    <br/>
    <h5>What you do?</h5>

    <label for="prf1">Student</label>
    <input type="radio" value="student" id="prf1" name="who" v-model="who" />

    <label for="prf2">Developer</label>
    <input type="radio" value="Developer" id="prf2" name="who" v-model="who" />
    <p>
      I am a {{ who }}
    </p>
  </section>
  <section>
    <h4 v-if="show">If Condition</h4>
    <h4 v-else>Else Condition</h4>

    <h4>Show hide with if Condition</h4>
    <p v-if="showhide">Welcome! Be honest</p>
    <!-- <button v-on:click="showhide=false" >Show/Hide</button> -->
    <button v-on:click="showhide=!showhide" >Show/Hide</button>
    <button v-on:click="show=!show" >Show/Hide</button>

    <h4>For loop</h4>
    <ul>
      <li v-for="item in programminglanguages" :key="item">
        {{item}}
      </li>
    </ul>
    <h4>Users</h4>
    <ul>
      <li v-for="item in users" :key="item.email">
        <hr/>
        Name is: {{item.name}} <br/>
        Email: {{item.email}}<br/>
        Phone: {{item.phone}}<br/>
        <hr/>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "FirstComponent",
    data() {
      return {
        fullname: 'M Ashraful Islam',
        email: 'jeweltutin@gmail.com',
        mobile: '0174445789',

        getmyName: function () {
          return "Tania Sultana";
        },
        addition: function () {
          return 15 + 20;
        },
        addition2: function (num1, num2) {
          return num1 + num2;
        },
        count:0,
        num3: 10,

        firstname:null,
        lastname:null,

        technology:[],
        who:null,

        show:false,
        showhide:true,

        programminglanguages: ['java','php','node','html'],

        users: [
          {
            name: "Anil",
            email: "anil@test.com",
            phone: "07111111113"
          },
          {
            name: "Sunil",
            email: "sunil@test.com",
            phone: "07111114444"
          },
          {
            name: "Sam",
            email: "sam@test.com",
            phone: "07111777113"
          },
        ]
      }
    },
    methods: {
      getName(yname) {
        return yname;
      },
      getData(){
        return{
          versity: 'Stamford University',
          year: '2014',
          email: this.email
        }
      },
      showmsg(){
        alert("Hello! How are you?");
      },
      showmsg2(msg){
        alert(msg);
      },
      getConsole(){
        console.warn("Function called");
      },
      counternum(){
        this.count=this.count+1;
      },
      gatherData(){
        console.warn("Values: ", this.firstname, this.lastname);
      }
    }

  }
</script>

<style>

</style>