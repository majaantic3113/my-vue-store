const state = {
  cartProducts: []
};

const mutations = {
  ADD_PRODUCT_TO_CART(state, product) {
    const cart = state.cartProducts;
    let index = cart.findIndex(el => el._id === product._id);

    if (index === -1) {
      state.cartProducts.push({ ...product, quantity: 1 });
    } else {
      state.cartProducts[index].quantity++;
    }
  },
  REMOVE_PRODUCT_FROM_CART(state, product) {
    const cart = state.cartProducts;

    let index = cart.findIndex(el => el._id === product._id);

    if (index === -1) {
      return;
    } else {
      if (cart[index].quantity === 1) {
        cart.splice(index, 1);
      } else {
        cart[index].quantity--;
      }
    }
  }
};

const actions = {
  addProductToCart: ({ commit }, product) => {
    commit('ADD_PRODUCT_TO_CART', product);
  },
  removeProductFromCart: ({ commit }, product) => {
    commit('REMOVE_PRODUCT_FROM_CART', product);
  },
  removeProductFromCartCompletely: ({ commit }, product) => {
    commit('REMOVE_PRODUCT_FROM_CART_COMPLETELY', product);
  }
};

const getters = {
  cartProducts: state => state.cartProducts
};

export default {
  state,
  mutations,
  actions,
  getters
};
