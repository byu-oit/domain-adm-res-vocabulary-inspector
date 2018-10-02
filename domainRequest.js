//'use strict'

let wso2Request

(function () {
    wso2Request = require('byu-wso2-request')
    console.log(wso2Request)
})

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
    return wso2Request.request(requestObject)
}

exports.GET = function (requestURL) {
    return domRequest('GET', requestURL)
}



