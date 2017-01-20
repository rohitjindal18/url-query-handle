/**
 * Removes given params from URL
 */
export function removeParam(url, paramToRemove) {
    if (url && url.indexOf('?') > -1) {
        const query = url.trim().split('?');
        const queryParams = query[1].split('&');
        const newQueryParams = queryParams.filter((item) => {
            return item.split('=')[0] !== paramToRemove
        })
        if (newQueryParams.length > 0) {
            return `${query[0]}?${newQueryParams.join('&')}`;
        } else {
            return query[0];
        }
    }
    return '';
}

/**
 * Add given params to URL
 */
export function addParam(url, paramToAdd) {
    return url.trim().indexOf('?') > -1 ? `${url.trim()}&${paramToAdd}` :
    `${url.trim()}?${paramToAdd}`;
}

/**
 * Add Multiple params to URL
 * @paramsToAdd: Object containing all the query Params to add
 */
export function addMultipleParams(url, paramsToAdd) {
    if (paramsToAdd) {
        let queryParam = [];
        Object.keys(paramsToAdd).forEach((key) => {
              queryParam.push(`${key}=${paramsToAdd[key]}`)
        })
        return url.trim().indexOf('?') > -1 ? `${url.trim()}&${queryParam.join('&')}`
        : `${url.trim()}?${queryParam.join('&')}`
    }
}

/**
 * Get Param value
 */
export function getParamValue(url, paramName) {
    if (url && url.indexOf(paramName) > -1) {
        const query = url.split('?')[1];
        if (query.indexOf('&') > -1) {
            const value = query.split('&').filter((item) => {
                console.log(item);
                return item.split('=')[0] === paramName;
            });
            return value[0].split('=')[1];
        } else {
            return query.split('=')[1];
        }
    }
}
