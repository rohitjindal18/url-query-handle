# url-query-handle
It allows you to append / remove query params from browser url

It can used by running following command inside your project folder

npm install --save-dev url-query-handle // To save it locally\n
npm install --g url-query-handle // To save it globally\n

Usage:\n

var urlHandle = require('url-query-handle');\n
To Add Param to URL\n

urlHandle.addParam('www.flipkart.com','a=123');\n
// www.flipkart.com?a=123\n
urlHandle.addParam('www.flipkart.com?b=456','a=123');\n
// www.flipkart.com?b=456&a=123\n

To Add Multiple Params to URL\n

urlHandle.addMultipleParams("www.flipkart.com", {a:123, b:456});
// www.flipkart.com?b=456&a=123\n
