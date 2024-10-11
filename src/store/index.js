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
    totalCupos(state) {
      return state.courses.reduce((acc, item) => acc + item.cupos, 0);
    },
    totalInscrito(state) {
      return state.courses.reduce((acc, item) => acc + item.inscritos, 0);
    },
    totalCourses(state) {
      return state.courses.length();
    },
    totalCursosActivos(state) {
      return state.courses.reduce((acc, item) => {
        if (!item.completado) {
          return acc + 1;
        }
        return acc;
      }, 0);
    },
  },
  mutations: {
    add(state, obj) {
      if (!state.load) {
        state.courses = [...state.courses, obj];
      }
    },
    addCourse(state, obj) {
      state.courses = [...state.courses, obj];
    },
    delete(state, id) {
      state.courses = state.courses.filter((item) => item.id !== id);
    },
    loaded(state) {
      state.load = true;
    },
  },
  actions: {
    agregarFetch({ commit }, obj) {
      commit("add", obj);
    },
    agregar({ commit }, obj) {
      commit("addCourse", obj);
    },
    deleteCourse({ commit }, obj) {
      commit("delete", obj.id);
    },
    changeStatus({ commit }) {
      commit("loaded");
    },
  },
});

export default store;
