/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';

// export state as a function
export const state = () => ({
    nameList: "",
    name: "",
    vocabContents: [{ "value": "", "description": "", "long_description": "" }]
});

export const getters = {
    getName: state => {
        return state.name
    },
    getNameList: state => {
        return state.nameList
    },
    getVocabContents: state => {
        return state.vocabContents
    }
};

// export mutations object
export const mutations = {
    CHANGE_NAME: (state, num) => {
        state.name = state.nameList[num]
    },
    CHANGE_LIST: (state, list) => {
        state.nameList = list
    },
    CHANGE_DESC: (state, array) => {
        state.vocabContents = array
    }
};

// export actions object
export const actions = {

    // server side only execution for pre-populating the Vuex store
    nuxtServerInit: ({ commit }, { req }) => {
        const wabs = req.wabs || {};

        // update user and auth data
        commit('wabs/authUpdate', wabs.auth);
        commit('wabs/userUpdate', wabs.user);


    },
    fetchVocabs: async (context) => {
        const request = {
            url: 'https://api.byu.edu:443/domains/admissions/resources/vocabularies/v1/'
        }
        return new Promise((resolve, reject) => {
            window.byu.auth.request(request, (body, status) => {
                const values = JSON.parse(body).values
                context.commit("CHANGE_LIST", values)
                context.commit("CHANGE_NAME", 0)
                resolve(true)
            })
        })
    },
    fetchDescs: async (context, vocab) => {
        const request = {
            url: 'https://api.byu.edu:443/domains/admissions/resources/vocabularies/v1/' + vocab
        }
        console.log("async reached " + request.url)
        return new Promise((resolve, reject) => {
            window.byu.auth.request(request, (body, status) => {
                const values = JSON.parse(body).values
                context.commit("CHANGE_DESC", values)
                resolve(true)
            })
        })
    }
};
