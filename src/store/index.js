import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    generateStars({ commit }) {
      const stars = [];

      for (let i = 0; i < 115; i++) {
        stars.push({
          x: (Math.random() - 0.5) * 2, // Adjusted to match React example
          y: (Math.random() - 0.5) * 2, // Adjusted to match React example
          z: Math.random() * 2, // Adjusted to match React example
        });
      }

      commit('setStars', stars);
    },
    updateCameraPosition({ commit }) {
      const speed = 0.25;
      const x = Math.sin(Date.now() * 0.0001 * speed) * 100;
      const y = Math.cos(Date.now() * 0.0001 * speed) * 100;
      const z = 1; // Adjusted to match React example

      commit('setCameraPosition', { x, y, z });
    },
  },
  modules: {
  }
})
