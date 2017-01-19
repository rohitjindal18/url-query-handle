'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeParam = removeParam;
exports.addParam = addParam;
/**
 * Removes given params from URL
 */
function removeParam(url) {
    if (url) {
        return url.indexOf('&') > -1 ? url.slice(0, url.lastIndexOf('&')) : url.slice(0, url.lastIndexOf('?'));
    }
    return '';
}

/**
 * Add given params from URL
 */
function addParam(url, paramToAdd) {
    return url.indexOf('?') > -1 ? url + '&' + paramToAdd : url + '?' + paramToAdd;
}