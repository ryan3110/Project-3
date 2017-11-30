// index.js
// changed var rest data
// coded by Ryan and Danny
var REST_DATA = 'api/animals';
var KEY_ENTER = 13;
var defaultItems = [

];

function encodeUriAndQuotes(untrustedStr) {
    return encodeURI(String(untrustedStr)).replace(/'/g, '%27').replace(')', '%29');
}


function addclient() {
    console.log("adding client");
    var incrementationofclient = 1;
    var data = {
        clientnumber: "client" + incrementationofclient,
        value: document.getElementById('newclient').value  
    };
    incrementationofclient++;
    item++;
    xhrPost(REST_DATA, data, function(item) {
        
    }, function(err) {
        console.error(err);
    });
}