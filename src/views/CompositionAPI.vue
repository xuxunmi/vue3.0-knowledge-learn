<template>
  <div>
    <p>{{ counter }}</p>
    <p>{{ doubleCounter }}</p>
    <p ref="desc"></p>
  </div>
</template>
<script>
import { reactive, computed, onMounted, onUnmounted, ref, toRefs, watch } from 'vue';
export default {
    name: 'Composition',
    // 响应式数据源
    setup(){
        const { counter, doubleCounter } = useCounter();
        // 单值响应式
        const msg = ref('some message');
        // 使用元素引用ref
        const desc = ref(null);
        //监听器
        watch(counter, (newVal, oldVal) => {
            const p = desc.value;
            p.textContent = `counter change from ${oldVal} to ${newVal}`;                    
        });
        // 将数据源返回给组件实例
        return {
            counter,
            doubleCounter,
            msg,
            desc      
        };           
    }
}
function useCounter(){
    // 创建响应式对象
    const data = reactive({
       counter: 1,
       doubleCounter: computed(() => data.counter * 2 )       
    });
    let timer;
    onMounted(() => {
        timer = setInterval(() => {
           data.counter++;             
        }, 1000)        
    });
    onUnmounted(() => {
        clearInterval(timer);        
    });
    // 多值响应式
    return toRefs(data);       
}
</script>
<style lang="scss">
</style>