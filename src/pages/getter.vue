<template>
  <div>
    <p>getters initValue：{{initValue}}</p>
    <p>getters str :{{returnStr}}</p>
    <p>getters arr:{{returnArr}}</p>
    <p>getters obj:{{obj}}</p>
    <p>getters object:{{object}}</p>
    <button class="btn" @click="()=>{this.$router.push('state')}">go to state</button>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      //可以直接访问 getter 通过this.$store.getter.
      initValue:this.$store.getters.returnInitValue, 
    };
  },
  methods: {
    
  },
  //一般在computed获取getter
  computed: {
  ...mapGetters([
    'returnStr',
    'returnArr'
  ]),
  ...mapGetters({
    obj:'returnStr',
    object:'returnObject'
  }
  )
  },

  mounted() {
    console.log(this.$store.getters.returnInitValue);
  },
};
</script>

<style scoped>
.btn{
  display: block;
  height: 100px;
  width: 150px;
  background-color: pink;
  position: absolute;
  top: 100px;
  left: 100px;
}
</style>