var $ = require('jquery');
var axios = require('axios');
// var store = require('configureStore').configure();

var instance = axios.create({
    baseURL: window.location.origin,
    // timeout: 5000,
    headers: {
      "Content-Type":"application/json",
      "SESSIONID":"57243622-20fe-4e2e-b8bc-4c5770e12867",
      "JSESSIONID":"z_qgmjRKDY29LV7RZsAJcFfNd2G3bEh8-m0KgZe0.ip-10-0-0-100",
      "Authorization":"Basic Og=="
    }
});

//request info from cookies
var requestInfo = {
    "apiId": "org.egov.pt",
    "ver": "1.0",
    "ts": "01-04-2017 01:01:01",
    "action": "asd",
    "did": "4354648646",
    "key": "xyz",
    "msgId": "654654",
    "requesterId": "61",
    "authToken": authToken
};

var tenantId = "ap." + window.location.origin.split("-")[0].split("//")[1];


module.exports = {
  commonApiPost: (context, resource = "", action = "", queryObject = {},body={})=> {
        var url = "/" + context + (resource ? "/" + resource : "") + (action ? "/" + action : "") + (queryObject ? "?" : "");
        var i=0;
        for (var variable in queryObject) {
            if (queryObject[variable] && i==1) {
                url += "&" + variable + "=" + queryObject[variable];
            }
            else {
              url +=variable + "=" + queryObject[variable];
            }
            i++;
        }
        body["RequestInfo"]=requestInfo;
        return instance.post(url, body).then(function(response) {
            return response.data;
        }).catch(function(response) {
            throw new Error(response.data.message);
        });
    }
};
