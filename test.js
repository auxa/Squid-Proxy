var squidProxy = require("./index.js");


var myProxy = new squidProxy({
	"port": 9393,
	"onBeforeRequest": function(requestOptions) {
		console.log("proxy request :" + requestOptions.host + (requestOptions.path || ''));
	}
});
myProxy.start();
console.log("proxy start at 9393");
