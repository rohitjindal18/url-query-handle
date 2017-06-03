# url-query-handle
It allows you to append / remove query params from browser url

It can used by running following command inside your project folder

npm install --save-dev url-query-handle // To save it locally
npm install --g url-query-handle // To save it globally

Usage:

```javascript
var urlHandle = require('url-query-handle');
```
To Add Param to URL

```javascript
urlHandle.addParam('www.abc.com','a=123');
```
// www.abc.com?a=123
```javascript
urlHandle.addParam('www.abc.com?b=456','a=123');
```
// www.abc.com?b=456&a=123

To Add Multiple Params to URL
```javascript
urlHandle.addMultipleParams("www.abc.com", {a:123, b:456});
```
// www.abc.com?b=456&a=123

To Remove Param from URL
```javascript
urlHandle.removeParam("www.abc.com?a=123",'a');
```
// www.abc.com

```javascript
urlHandle.removeParam("www.abc.com?b=456&a=123",'a');
```
// www.abc.com?b=456

To Fetch Param value
```javascript
urlHandle.getParamValue("www.abc.com?a=123&b=456", 'a');
```
//123
