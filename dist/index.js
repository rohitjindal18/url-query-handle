'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.removeParam = removeParam;
exports.addParam = addParam;
exports.addMultipleParams = addMultipleParams;
exports.getParamValue = getParamValue;
/**
 * Removes given params from URL
 */
function removeParam(url, paramToRemove) {
    if (url && url.indexOf('?') > -1) {
        var query = url.trim().split('?');
        var queryParams = query[1].split('&');
        var newQueryParams = queryParams.filter(function (item) {
            return item.split('=')[0] !== paramToRemove;
        });
        if (newQueryParams.length > 0) {
            return query[0] + '?' + newQueryParams.join('&');
        } else {
            return query[0];
        }
    }
    return '';
}

/**
 * Add given params to URL
 */
function addParam(url, paramToAdd) {
    return url.trim().indexOf('?') > -1 ? url.trim() + '&' + paramToAdd : url.trim() + '?' + paramToAdd;
}

/**
 * Add Multiple params to URL
 * @paramsToAdd: Object containing all the query Params to add
 */
function addMultipleParams(url, paramsToAdd) {
    if (paramsToAdd) {
        var _ret = function () {
            var queryParam = [];
            Object.keys(paramsToAdd).forEach(function (key) {
                queryParam.push(key + '=' + paramsToAdd[key]);
            });
            return {
                v: url.trim().indexOf('?') > -1 ? url.trim() + '&' + queryParam.join('&') : url.trim() + '?' + queryParam.join('&')
            };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    }
}

/**
 * Get Param value
 */
function getParamValue(url, paramName) {
    if (url && url.indexOf(paramName) > -1) {
        var query = url.split('?')[1];
        if (query.indexOf('&') > -1) {
            var value = query.split('&').filter(function (item) {
                console.log(item);
                return item.split('=')[0] === paramName;
            });
            return value[0].split('=')[1];
        } else {
            return query.split('=')[1];
        }
    }
}