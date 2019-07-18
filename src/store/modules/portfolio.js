const state = {
  portfolio :[]
};
const getters = {
  portfolio : state =>{
    return state.portfolio;
  }
};
const mutations = {
  addPortfolio : (getters,payload)=>{
    let record = getters.portfolio.find(el => el.id == payload.id);
    if(record){
      record.quantity += payload.quantity;
      console.log('already exist');
    }
    else{
      console.log('new item');
      state.portfolio.push(payload);
    }
  },
  sellStock : (state,payload) =>{
    const record = state.portfolio.find(el => el.id = payload.id);
    if(record.quantity > payload.quantity){
      record.quantity -= payload.quantity;
    }
    else{
      state.portfolio.splice(state.portfolio.indexOf(record),1);
    }
  },
  changePortfolio: (state,payload)=>{
    state.portfolio = payload;
  }
};
const actions = {
  addPortfolioAction : ({commit},payload)=>{
    commit('addPortfolio',payload);
  },
  sellStock : ({commit},payload) =>{
    commit('sellStock',payload);
  },
  changePortfolio : ({commit},payload)=>{
    commit('changePortfolio',payload);
  }
};
export default {
  state,
  getters,
  mutations,
  actions
}
