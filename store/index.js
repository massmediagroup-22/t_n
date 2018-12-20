import Vue from 'vue'
import Vuex from 'vuex'

import { loadFilterBrands } from './../resources/filer'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      filters: {
        brands: [],
        models: [],
        types: [],
        fuel: []
      },
      vehicles: []
    },
    mutations: {
      setFilterBrands: (state, brands) => (state.filters.brands = brands),
      setFilterModels: (state, models) => (state.filters.models = models),
      setFilterTypes: (state, types) => (state.filters.types = types),
      setFilterFuel: (state, fuel) => (state.filters.fuel = fuel)
    },
    getters: {},
    actions: {
      loadFilterBrands({ commit }) {
        this.$axios.$get('car/brands').then(response => {
          console.log(response)
        })
      },
      loadFilterModels({ commit }) {},
      loadFilterTypes({ commit }) {},
      loadFilterFuel({ commit }) {}
    }
  })

export default store
