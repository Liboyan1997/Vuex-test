import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// state 可以认为是store的data
	state: {
		initValue: 0,
		arr: [1, 2, 3],
		obj: {
			a: 1,
			b: 2
		},
		str: "老王"
	},
	mutations: {
		init(state,payload){
			state.initValue=payload
		},
		add(state, payload) {
			console.log("add")
			// state.initValue+=payload
			//
			state.initValue+=payload.amount
		},
		pushArr(state,payload){
			state.arr.push(payload)
		},
		changeStr(state){
			state.str='隔壁老王'
		}
	},
	actions: {
		initValue(context, payload) {
			console.log('action')
			context.commit("init", payload)
		}
	},
	//可以认为是 store的computed
	getters: {
		returnInitValue(state) {
			return state.initValue
		},

		returnStr: (state) => {
			return state.str
		},
		returnArr(state) {
			return state.arr
		},
		returnObj(state) {
			return state.obj
		},
		// Getter可以接受其他的getter作为参数
		returnObject(state,getters) {
			return [state.arr,getters.returnObj]
		}
	}
})
