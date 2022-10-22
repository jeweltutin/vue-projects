import { createStore } from 'vuex'

export default createStore({
  state: {
    user: null,
    bookList: ["English", "Math", "Scirnce", "Generel Knowledge", "Bangla"]
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    totalBook(state){
      return state.bookList.length
    }
  },
  mutations: {
    userData(state, mdata){
      state.user = mdata;
    },
    ADD_BOOK(state, inputdata){
      //console.log(inputdata)
      state.bookList.push(inputdata)
    },
    REMOVE_BOOK(state, bid){
      //console.warn(bid)
      state.bookList.splice(bid,1)
    }
  },
  actions: {
    actionUser(context, udata){
      context.commit('userData', udata);
    },
    addBook(context, inputdata){
      context.commit('ADD_BOOK', inputdata)
    },
    deleteBook({commit}, bookId){
      commit('REMOVE_BOOK', bookId)
    },
    alertMe(){
      alert("Hello I am from Action")
    }
  },
  modules: {
  }
})
