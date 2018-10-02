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
import '../../domainRequest'

// export state as a function
export const state = () => ({
    nameList: [  //NEED TP USE API
        "adm_admit_periods",
        "adm_applicant_types_all",
        "adm_applicant_types_byu",
        "adm_applicant_types_byuh",
        "adm_applicant_types_byui",
        "adm_applicant_types_ldsbc",
        "adm_application_actions",
        "adm_application_status",
        "adm_ces_schools",
        "adm_citizenship_status",
        "adm_decisions",
        "adm_ethnicities",
        "adm_extracurricular_participation",
        "adm_extracurricular_types",
        "adm_family_income_level",
        "adm_flags_byui",
        "adm_flags_ldsbc",
        "adm_hawaiian_islands",
        "adm_high_school_types",
        "adm_level_of_education",
        "adm_process_phase_states",
        "adm_relationship_types",
        "adm_residing_with_options",
        "adm_seminary_types",
        "adm_srs_certificates",
        "adm_visa_types"
    ],
    name: 'adm_admit_periods', //useAPI
    vocabContents: [
        // {
        //     value: "ITB",
        //     description: "IT Building",
        //     long_description: "Information Technology Building"
        // },
        // {
        //     value: "HFAC",
        //     description: "Arts Building",
        //     long_description: "Harrison Fine Arts Center"
        // },
        // {
        //     value: "TMCB",
        //     description: "Talmage",
        //     long_description: "Talmage Building"
        // },
        {
            "value": "?????",
            "description": "Unknown",
            "long_description": "Unknown"
        },
        {
            "value": "20181",
            "description": "2018 Winter",
            "long_description": "Winter 2018"
        },
        {
            "value": "20183",
            "description": "2018 Spring",
            "long_description": "Spring 2018"
        },
        {
            "value": "20184",
            "description": "2018 Summer",
            "long_description": "Summer 2018"
        },
        {
            "value": "20185",
            "description": "2018 Fall",
            "long_description": "Fall 2018"
        },
        {
            "value": "20191",
            "description": "2019 Winter",
            "long_description": "Winter 2019"
        },
        {
            "value": "20193",
            "description": "2019 Spring",
            "long_description": "Spring 2019"
        },
        {
            "value": "20194",
            "description": "2019 Summer",
            "long_description": "Summer 2019"
        },
        {
            "value": "20195",
            "description": "2019 Fall",
            "long_description": "Fall 2019"
        },
        {
            "value": "20201",
            "description": "2020 Winter",
            "long_description": "Winter 2020"
        },
        {
            "value": "20203",
            "description": "2020 Spring",
            "long_description": "Spring 2020"
        },
        {
            "value": "20204",
            "description": "2020 Summer",
            "long_description": "Summer 2020"
        },
        {
            "value": "20205",
            "description": "2020 Fall",
            "long_description": "Fall 2020"
        },
        {
            "value": "20211",
            "description": "2021 Winter",
            "long_description": "Winter 2021"
        },
        {
            "value": "20213",
            "description": "2021 Spring",
            "long_description": "Spring 2021"
        },
        {
            "value": "20214",
            "description": "2021 Summer",
            "long_description": "Summer 2021"
        },
        {
            "value": "20215",
            "description": "2021 Fall",
            "long_description": "Fall 2021"
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
    CHANGE_NAME: (state, num) => {
        state.name = state.nameList[num]
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
