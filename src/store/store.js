import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const state = {
	num: 5,
}

const mutations = {
	add(state) {
		state.num++
	},
	minus(state) {
		state.num--
	}
}

const actions = {
	add({commit}) {
		commit('add')
	},
	minus({commit}) {
		commit('minus')
	}
}

const getters = { 
    num: function(state) {
        return state.num
	}
}


export default new vuex.Store({
	state,
	mutations,
	actions,
	getters
})