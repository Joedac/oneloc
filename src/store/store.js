import Vue from 'vue'
import Vuex from 'vuex'
import FunctionsService from '../services/FunctionsService'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        functions: [],
        categories: [],
        functionsBycat: []
    },

    actions: {
        /**
         * Get list of functions from Airtable
         * Get list of categories from Airtable
         * Get list of functions by category from Airtable
         * Commit to the store
         */

        /**
         * @param {*} param0 
         */
        async getFunctionsStore({ commit }) {
            try {
                const response = await FunctionsService.getFunctions()
                commit('SET_FUNCTIONS', response.data.records)
            }
            catch (error) {
                console.error(error)
            }
        },
        /**
         * @param {*} param0 
         */
        async getCategoriesStore({ commit }) {
            try {
                const response = await FunctionsService.getCategories()
                commit('SET_CATEGORIES', response.data.records)
            }
            catch (error) {
                console.error(error)
            }
        },
        /**
         * @param {*} param0 
         * @param {*} cat 
         */
        async getFunctionByCategoryStore({ commit }, cat) {
            try {
                const response = await FunctionsService.getFunctionByCategory(cat)
                commit('SET_FUNCTIONS_BY_CATEGORY', response.data.records)
            }
            catch (error) {
                console.error(error)
            }
        },
    },
    mutations: {

        /**
         * Update our states
         * @param {*} state 
         * @param {*} funcs 
         */
        SET_FUNCTIONS(state, funcs) {
            state.functions = funcs
        },
        /**
         * @param {*} state 
         * @param {*} cats 
         */
        SET_CATEGORIES(state, cats) {
            state.categories = cats
        },
        /**
         * @param {*} state 
         * @param {*} funcsByCat 
         */
        SET_FUNCTIONS_BY_CATEGORY(state, funcsByCat) {
            state.functionsBycat = funcsByCat
        }
    },
    getters: {
        /**
         * Get our states from the store
         * & build our objects from Axios response
         */
        
        FUNCTIONS: state => {
            if (state.functions)
                return state.functions.map(item => {
                    let functions = {};
                    functions.name = item.fields.Name;
                    functions.category = item.fields["Category (from Table 4)"][0];
                    functions.function = item.fields.function;
                    return functions;
                });
        },
        CATEGORIES: state => {
            if (state.categories)
                return state.categories.map(item => {
                    let categories = {};
                    categories.name = item.fields.Category;
                    return categories;
                });
        },
        FUNCTIONS_BY_CATEGORY: state => {
            if (state.functionsBycat)
                return state.functionsBycat.map(item => {
                    let functions = {};
                    functions.name = item.fields.Name;
                    functions.category = item.fields["Category (from Table 4)"][0];
                    functions.function = item.fields.function;
                    return functions;
                });
        },
    },

})