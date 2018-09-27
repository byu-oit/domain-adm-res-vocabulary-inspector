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
    name: 'Countries',
    nameList: [
        "Countries",
        "Buildings",
        "Transfer Colleges"
    ],
    vocabContents: [
        {
            id: "ITB",
            shortDesc: "IT Building",
            longDesc: "Information Technology Building"
        },
        {
            id: "HFAC",
            shortDesc: "Arts Building",
            longDesc: "Harrison Fine Arts Center"
        },
        {
            id: "TMCB",
            shortDesc: "Talmage",
            longDesc: "Talmage Building"
        }
    ]
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
    CHANGE_NAME: (state, name) => {
        state.name = name
    },
    CHANGE_VOCAB: (state, name) => {
        //state.vocabContents = get(name) api call
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
    changeName: (context, name) => {
        context.commit("CHANGE_NAME", name)
    },
    changeVocab: (context, vocab) => {
        context.commit("CHANGE_VOCAB", vocab)
    }


};
