import { createStore } from "vuex";

const store = createStore({
  state: {
    courses: [],
    load: false,
  },
  getters: {
    findCourse(state) {
      return (id) => state.courses.find((item) => item.id === id);
    },
  },
  mutations: {
    add(state, obj) {
      if (!state.load) {
        state.courses = [...state.courses, obj];
      }
    },
    reset(state) {
      state.courses = [];
    },
    loaded(state) {
      state.load = true;
    },
  },
  actions: {
    agregarFetch({ commit }, obj) {
      commit("add", obj);
    },
    changeStatus({ commit }) {
      commit("loaded");
    },
  },
});

export default store;
