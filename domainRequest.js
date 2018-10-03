//'use strict'

let wso2Request

(function () {
    wso2Request = require('byu-wso2-request')
})()

function setupRequestObject(url, method) {
    return {
        url: url,
        method: method,
        json: true,
        resolveWithFullResponse: true,
        simple: false,
        encoding: 'utf8',
        headers: {
            Accept: 'application/json'
        }
    }
}

function domRequest (verb, requestURL) {
    let requestObject = setupRequestObject(requestURL, verb)
    return wso2Request.request(requestObject, null)
}

exports.GET = function (requestURL) {
    return domRequest('GET', requestURL)
}

//let req = domRequest('GET', 'https://api.byu.edu:443/domains/admissions/resources/vocabularies/v1')

//const domreq = require('domainRequest.js')
//let response = domreq.
//GET('https://api.byu.edu:443/domains/admissions/resources/vocabularies/v1')
//console.log(response.body)

