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
      console.log(obj);
      obj["cupos"] = Number(obj["cupos"]);
      obj["inscritos"] = Number(obj["inscritos"]);
      obj["costo"] = Number(obj["costo"]);
      state.courses = [...state.courses, obj];
    },
    delete(state, id) {
      state.courses = state.courses.filter((item) => item.id !== id);
    },
    loaded(state) {
      state.load = true;
    },
    toSort(state) {
      state.courses = state.courses.sort((a, b) => {
        return a.id - b.id;
      });
    },
  },
  actions: {
    agregarFetch({ commit }, obj) {
      commit("add", obj);
      commit("toSort", obj);
    },
    agregar({ commit }, obj) {
      commit("addCourse", obj);
    },
    edit({ commit }, obj) {
      commit("delete", obj.id);
      commit("addCourse", obj);
      commit("toSort", obj);
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
