import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initial = {
  isMobile: window.matchMedia("(max-width: 959px)").matches,
  activeImage: "",
  viewMode: "settings",
  selected: {
    models: null,
    design: null,
    mainColor: null,
    strapColor: null,
  },
};

export default new Vuex.Store({
  namespaced: true,

  state: initial,
  mutations: {
    setImage(state, imgUrl) {
      state.activeImage = imgUrl;
    },
    setSelected(state, data) {
      state.selected[data.name] = data.value;
    },
    setView(state, data) {
      state.viewMode = data;
    },
  },
  actions: {},
  modules: {},
});
