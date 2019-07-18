import Vue from 'vue'
import Vuex from 'vuex'
import Funds from './modules/funds'
import Stocks from './modules/stocks'
import Portfolio from './modules/portfolio'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  getters:{
    stockPortfolio :(state,getters) => {
      return getters.portfolio.map(stock =>{
        const record = getters.stock.find(el => el.id == stock.id);
        return {
          id : stock.id,
          name : record.name,
          quantity : stock.quantity,
          price : record.price
        }
      });
    }
  },
  mutations: {

  },
  actions: {

  },
  modules:{
    Funds,
    Stocks,
    Portfolio
  }
})
