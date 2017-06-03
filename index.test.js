const urlQuery = require('./index');

test('remove param from URL test', function () {
    expect(urlQuery.removeParam("http://www.abc.com/offer?a=123&b=456&offer=123", 'offer')).toBe("http://www.abc.com/offer?a=123&b=456");
})

test('add param to URL test 1', function () {
    expect(urlQuery.addParam("http://www.abc.com/offer?a=123&b=456", 'offer=123')).toBe("http://www.abc.com/offer?a=123&b=456&offer=123");
})

test('add param to URL test 2', function () {
    expect(urlQuery.addParam("http://www.abc.com/offer", 'offer=123')).toBe("http://www.abc.com/offer?offer=123");
})

test('get param from URL test', function () {
    expect(urlQuery.getParamValue("http://www.abc.com/offer?a=123&b=456", 'a')).toBe("123");
})

test('add multiple params to URL test 1', function () {
    expect(urlQuery.addMultipleParams("http://www.abc.com/offer", { a: 123, b: 456 })).toBe("http://www.abc.com/offer?a=123&b=456");
})
