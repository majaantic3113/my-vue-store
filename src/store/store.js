import Vue from 'vue'
import Vuex from 'vuex'

import cartProducts from './modules/cart'
import loggedIn from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({ modules: { cartProducts, loggedIn } })
