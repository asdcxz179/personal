import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	language:'en'
  },
  mutations: {
	setLanguage (statue,lang){
		statue.language = lang;
	}
  },
  actions: {
	setLanguage (context,lang){
		context.commit('setLanguage',lang);
	}
  },
  modules: {
  }
})
