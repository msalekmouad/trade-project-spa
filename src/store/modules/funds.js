const state = {
  funds : 10000
};
const getters = {
  funds : state =>{
    return state.funds;
  }
};
const mutations = {
  updateFunds : (state,payload)=>{
    state.funds += payload;
  },
  minusFunds : (state,payload)=>{
    state.funds -= payload;
  },
  changeFunds : (state,payload)=>{
    state.funds = payload;
  }
};
const actions = {
  updateFunds : ({commit},payload)=>{
    commit('updateFunds',payload);
  },
  minusFunds : ({commit},payload)=>{
   commit('minusFunds',payload);
  },
  changeFunds : ({commit},payload)=>{
    commit('changeFunds',payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}
