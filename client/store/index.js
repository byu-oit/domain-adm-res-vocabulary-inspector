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
    name: "Select a Vocabulary Name",
    vocabContents: [{ "value": "", "description": "", "long_description": "" }],
    showDesc: false,
    navigationLinks: [
        "Admissions",
        "Common"
    ],
    tab: "Admissions",
    loggedIn: false,
    message: ""
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
    },
    getShowDesc: state => {
        return state.showDesc
    },
    getNavigationLinks: state => {
        return state.navigationLinks
    },
    getTab: state => {
        return state.tab
    },
    getLoggedIn: state => {
        return state.loggedIn
    },
    getMessage: state => {
        return state.message
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
    },
    CHANGE_SHOWDESC: (state, boolean) => {
        state.showDesc = boolean
    },
    CHANGE_TAB: (state, string) => {
        state.tab = string
    },
    RESET_PAGE: (state) => {
        state.name = "Select a Vocabulary Name",
        state.vocabContents = [{ "value": "", "description": "", "long_description": "" }],
        state.showDesc = false
    },
    CHANGE_LOGGED: (state, boolean) => {
        state.loggedIn = boolean
    },
    CHANGE_MESSAGE: (state, string) => {
        state.message = string
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
    fetchAdmVocabs: async (context) => {
        if (!(window.byu && window.byu.user && window.byu.user.byuId)) {
            context.commit("CHANGE_LOGGED", false)
            context.commit("CHANGE_MESSAGE", "Error! Access not granted.  Please make sure you are logged in.")
        }
        else {
            const request = {
                url: 'https://api.byu.edu:443/domains/admissions/resources/vocabularies/v1/'
            }
            return new Promise((resolve, reject) => {
                window.byu.auth.request(request, (body, status) => {
                    if (status > 400) {
                        console.error(`${status} - ${body}`)
                        context.commit("CHANGE_LOGGED", false)
                        context.commit("CHANGE_MESSAGE", body)
                        resolve(false)
                    }
                    else {
                        const values = JSON.parse(body).values
                        context.commit("CHANGE_LIST", values)
                        context.commit("CHANGE_TAB", "Admissions")
                        context.commit("CHANGE_LOGGED", true)
                        resolve(true)
                    }
                })
            })
        }
    },
    fetchAdmDescs: async (context, vocab) => {
        if (!(window.byu && window.byu.user && window.byu.user.byuId)) {
            context.commit("CHANGE_LOGGED", false)
            context.commit("CHANGE_MESSAGE", "Error! Access not granted.  Please make sure you are logged in.")
        }
        else {
            const request = {
                url: 'https://api.byu.edu:443/domains/admissions/resources/vocabularies/v1/' + vocab
            }
            console.log("async reached " + request.url)
            return new Promise((resolve, reject) => {
                window.byu.auth.request(request, (body, status) => {
                    if (status > 400) {
                        console.error(`${status} - ${body}`)
                        context.commit("CHANGE_LOGGED", false)
                        context.commit("CHANGE_MESSAGE", body)
                        resolve(false)
                    }
                    else {
                        const values = JSON.parse(body).values
                        context.commit("CHANGE_DESC", values)
                        context.commit("CHANGE_LOGGED", true)
                        resolve(true)
                    }
                })
            })
        }
    },
    fetchComVocabs: async (context) => {
        if (!(window.byu && window.byu.user && window.byu.user.byuId)) {
            context.commit("CHANGE_LOGGED", false)
            context.commit("CHANGE_MESSAGE", "Error! Access not granted.  Please make sure you are logged in.")
        }
        else {
            const request = {
                url: 'https://api.byu.edu:443/domains/common/resources/vocabularies/v1/'
            }
            return new Promise((resolve, reject) => {
                window.byu.auth.request(request, (body, status) => {
                    if (status > 400) {
                        console.error(`${status} - ${body}`)
                        context.commit("CHANGE_LOGGED", false)
                        context.commit("CHANGE_MESSAGE", body)
                        resolve(false)
                    }
                    else {
                        const values = JSON.parse(body).values
                        context.commit("CHANGE_LIST", values)
                        context.commit("CHANGE_TAB", "Common")
                        context.commit("CHANGE_LOGGED", true)
                        resolve(true)
                    }
                })
            })
        }
    },
    fetchComDescs: async (context, vocab) => {
        if (!(window.byu && window.byu.user && window.byu.user.byuId)) {
            context.commit("CHANGE_LOGGED", false)
            context.commit("CHANGE_MESSAGE", "Error! Access not granted.  Please make sure you are logged in.")
        }
        else {
            const request = {
                url: 'https://api.byu.edu:443/domains/common/resources/vocabularies/v1/' + vocab
            }
            console.log("async reached " + request.url)
            return new Promise((resolve, reject) => {
                window.byu.auth.request(request, (body, status) => {
                    if (status > 400) {
                        console.error(`${status} - ${body}`)
                        context.commit("CHANGE_LOGGED", false)
                        context.commit("CHANGE_MESSAGE", body)
                        resolve(false)
                    }
                    else {
                        const values = JSON.parse(body).values
                        context.commit("CHANGE_DESC", values)
                        context.commit("CHANGE_LOGGED", true)
                        resolve(true)
                    }
                })
            })
        }
    }
};
