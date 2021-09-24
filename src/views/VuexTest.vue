<template>
  <div>
      <h1>Vuex4.0学习</h1>
      <br>
      <h2>使用全局state状态</h2>
      <div>第一种方式：{{ stateCount }}</div>
      <div>第二种方式：{{ count }}</div>
      <button @click="sub1">-</button>
      <button @click="add1">+</button>
      <br>

      <h2>使用mutations来修改状态</h2>
      <div>第一种方式：{{ muCount }}</div>
      <div>第二种方式：{{ mutationsCount }}</div>
      <button @click="sub2">-</button>
      <button @click="add2">+</button>
      <button @click="add3">add3</button>
      <br>

      <h2>使用getters中的计算属性</h2>
      <div>第一种方式：{{ gtsCount }}</div>
      <div>第二种方式：{{ gettersCount }}</div>
      <div>购物车总价第一种写法：{{ gtsTotalPrice }}</div>
      <div>购物车总价第二种写法：{{ totalPrice }}</div>

      <div>购物车数据过滤第一种写法：{{ gtsGoodsFilter }}</div>
      <div>购物车数据过滤第二种写法：{{ goodsFilter }}</div>

      <div>传入自定义参数第一种写法：{{ gtsGoodsSelf }}</div>
      <div>传入自定义参数第二种写法：{{ goodsSelf(20) }}</div>
      <br>

      <h2>使用actions中的状态</h2>
      <button @click="btnActions">Action按钮</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions  } from 'vuex';
export default {
    computed: {
        stateCount(){
            return this.$store.state.count;
        },
        muCount(){
            return this.$store.state.mutationsCount
        },
        // 映射 this.count 为 $store.state.count
        ...mapState(['count', 'mutationsCount']),
        
        ...mapGetters(['gettersCount', 'totalPrice', 'goodsFilter', 'goodsSelf']),
        gtsCount(){
            return this.$store.getters.gettersCount;
        },
        gtsTotalPrice(){
            return this.$store.getters.totalPrice;
        },
        gtsGoodsFilter(){
            return this.$store.getters.goodsFilter;
        },
        gtsGoodsSelf(){
            return this.$store.getters.goodsSelf(10);
        }
    },
    methods: {
        sub1(){
            this.$store.state.count--;
        },
        add1(){
            this.$store.state.count++;
        },

        // 注意，mapMutations是解构到methods里面的，而不是计算属性了
        ...mapMutations(['sub', 'add']),
        sub2(){
            const payload = {
                number: 3
            };
            this.$store.commit('sub', payload);
        },
        add2(){
            const payload = {
                number: 5
            };
            this.add(payload);
        },
        // mutations传参另外一种写法：
        add3(){
            const payload = {
                number: 5,
                count: 10
            };
            this.$store.commit({
                type: 'add3',
                payload
            });
        },

        btnActions(){
            this.$store.dispatch('funcActions', {number: 999, name: 'vuex'});
        }
    }
};
</script>

<style lang="scss" scoped>
</style>