
const state = {
  stock : [
    {id : 1, name : "BWM", price : 100 },
    {id : 2, name : "Google", price : 200 },
    {id : 3, name : "Apple", price : 300 },
    {id : 4, name : "Twitter", price : 400 }
  ]
};
const getters = {
  stock : state =>{
    return state.stock;
  }
};
const mutations = {
  endDayTrade : state =>{
    state.stock.forEach(st=>{
      st.price = Math.floor(Math.random() * 1000 )+1;
    });
  },
  changeStock : (state,payload)=>{
    state.stock = payload;
  }
};
const actions = {
  endDayTradeAction : ({commit}) =>{
    commit('endDayTrade');
},
  changeStock : ({commit},payload)=>{
    commit('changeStock',payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}
