import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    mutationsCount: 0,
    cardList: [
      {name: '《vuex之初学习》', price: 10},
      {name: '《vuex之初学习》', price: 20},
      {name: '《vuex之初学习》', price: 30},
      {name: '《vuex之初学习》', price: 40},
      {name: '《vuex之初学习》', price: 50}
    ]
  },
  getters: {
    // 类似计算属性
    gettersCount(state) {
      return state.count * state.mutationsCount;
    },
    // totalPrice(state) {
    //   return state.cardList.reduce((sum, item) => sum + item.price, 0)
    // },
    goodsFilter(state) {
      return state.cardList.filter(item => item.price > 20);
    },
    goodsSelf(state) {
      // 接受自定义参数, 可使用箭头函数
      return function (prcie) {
        return state.cardList.filter(item => item.price > prcie);
      }
    },
    // getters为 getters中的计算属性
    totalPrice(state, getters) {
      return getters.goodsFilter.reduce((sum, item) => sum + item.price, 0)
    },
  },
  mutations: {
    // payload参数可传任意类型的值
    sub(state, payload) {
      console.log('state: ', state);
      state.mutationsCount -= payload.number;
    },
    add(state, payload) {
      console.log('payload: ', payload);
      state.mutationsCount += payload.number;
    },
    add3(state, payload) {
      console.log('add3payload: ', payload);
      state.mutationsCount += payload.payload.number * payload.payload.count;
    },
    add4(state, payload) {
      console.log('payload: ', payload);
      state.mutationsCount += payload.number;
    },
  },
  actions: {
    // actions 可以返回一个promise对象
    // {state, getters, commit, rootState, rootGetters} = context;
    funcActions(context, payload) {
      console.log('context对象：',context);
      setTimeout(() => {
        // context.state.count = 999; // 不建议使用
        context.commit('add4', payload);
      }, 3000)
    }
  },
  modules: {
  }
})
