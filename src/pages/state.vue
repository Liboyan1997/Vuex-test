<template>
  <div>
    <p>计算属性中获取state:{{getStateInitValue}}</p>
    <!-- 计算属性中的 initState 依赖store中的 initVlalue -->
    <P>store initValue:{{initState}}</P>
    <p>mapState str：{{str}}</p>
    <p>mapState arr：{{arr}}</p>
    <p>mapState obj：{{obj}}</p>
    <p>{{a}}</p>
    <p>{{b}}</p>
    <p>{{c}}</p>
    <!-- 而state只是中init函数中 store中的initValue赋予sate 所以不会随着store中的数据更新  -->
    <p>state：{{state}}</p>
    <button @click="init">点击我初始化state</button>
    <button @click="add">点击我state+1</button>
    <button @click="changeStr">changeStr</button>
     <button @click.once="push(0)">pushArr</button>
     <button @click="fun(0)">初始化 state.inivalue</button>
    <button class="btn" @click="()=>{this.$router.push('getter')}">go to getter</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  data() {
    return {
      initState: this.$store.state.initValue, //也可以在data里直接接收state
      state: null,
    };
  },
  methods: {
    init() {
      this.state = this.$store.state.initValue;

      console.log("init");
    },
    add() {
      if (this.state == null) {
        console.log("还没有初始化");
        return false;
      } else {
        // this.$store.commit("add", 1);
        //对象风格提交
          this.$store.commit('add',{
          amount: 1,
        });
        // this.$store.commit({
        //   type: "add",
        //   amount: 1,
        // });
      }
    },
    ...mapMutations([
      //将this.changeStr() 映射为 ‘this.$store.commit('changeStr')’
      'changeStr',
      //将this.pushArr(payload) 映射为this.$store.commit('psuhArr',payload)
      'pushArr'
    ]),
    //也可以采用对象的写法
    ...mapMutations({
      push:'pushArr'
    }),


    //提交 action
    fun(a){
      this.$store.dispatch('initValue',0)
    }
    
    // ...mapActions({
    //   fun:'initValue'
    // })


  },
  //一般在computed获取state
  computed: {
    //不能使用箭头函数 不然取不到state
    getStateInitValue() {
      return this.$store.state.initValue;
      // return 0
    },
    // computed使用 mapState的形式
    ...mapState([
      // this.str=store.sate.str 对于同名的data可以采用这种写法
      //'str'相当于 str(){ return this.$store.state.str }
      "str",
      "arr",
      "obj",
    ]),
    //也可以这样写
    ...mapState({
      a: "obj",
      b: (state) => {
        return state.str;
      },
      c: function (state) {
        return this.str + "嘻嘻";
      },
    }),
  },

  mounted() {
    console.log(this.$store.state.initValue);
  },
};
</script>

<style scoped>
.btn {
  display: block;
  height: 100px;
  width: 150px;
  background-color: pink;
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>