<template>
  <div class="container">
    <div class="about">
    <h1>This is an about page</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, eum cum aperiam modi temporibus optio numquam eaque placeat nemo quo molestias libero! Sequi adipisci, cum nemo vel quibusdam quos consequatur.</p>
    <h2>Add Book in the list</h2>
    <input type="text" v-model="bookName" />&nbsp;&nbsp;
    <button @click="addBookInList"> Add</button> <br /><br />
    <h2>Book List -(Vuex)</h2>
    <p>     
      <!-- {{ bookListShow }} -->
      <ul>
        <li v-for="( book, index ) in bookListShow" :key="index">
          {{ index  }} &nbsp; {{ book }} 
          <button @click="deleteBookFromList(index)">Delete</button>
        </li>
      </ul>
    </p>
    <P>
      <!-- Total Book: {{ $store.getters.totalBook }} -->
      Total Book: {{ totalBookInList }}
    </P>
    <p>
      <button @click.prevent="alertMe">Hii</button>
    </p>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: "AboutView",
  data(){
    return {
      bookName: ""
    }
  },
  computed: {
    /*bookListShow(){
      return this.$store.state.bookList
    },*/
    ...mapState({
      bookListShow: "bookList"
    }),
    ...mapGetters({
      totalBookInList: "totalBook"
    })

  },
  methods:{
    addBookInList(){
      //console.log(this.bookName)
      this.$store.dispatch('addBook', this.bookName);
    },
    /*deleteBookFromList(index){
      //console.log(index);
      //this.$store.commit("REMOVE_BOOK", index)   //For direct mutation calling
      this.$store.dispatch('deleteBook', index)
    },*/
    ...mapActions({
      deleteBookFromList: "deleteBook",
      alertMe: "alertMe"
    })
  }
}
</script>

<style>
button {
    border: none;
    background-color: #aaa;
    border: 1.5px solid #aaa;
    border-radius: 7px ;
}
li {
    margin: 15px;
}
</style>
